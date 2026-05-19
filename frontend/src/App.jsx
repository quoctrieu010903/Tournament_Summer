import React, { useState, useEffect } from "react";
import {
  MapPin,
  Utensils,
  Info,
  Bus,
  Map,
  X,
  ExternalLink,
  ArrowRightCircle,
  BookOpen,
  Camera,
  Star,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/itinerary";

const AttractionModal = ({ attraction, onClose }) => {
  if (!attraction) return null;

  const description =
    attraction.description ||
    attraction.desc ||
    attraction.suitableFor ||
    attraction.note ||
    "Chưa có mô tả chi tiết.";

  const boxTitle = attraction.nextTip
    ? "Gợi ý tiếp theo"
    : attraction.type
    ? "Phân loại"
    : attraction.level
    ? "Khách sạn"
    : null;

  const boxContent =
    attraction.nextTip || attraction.type || attraction.level || null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="modal-content glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-hero">
          <img src={attraction.image} alt={attraction.name} />
          <div className="modal-hero-overlay"></div>
        </div>

        <div className="modal-body">
          <h2 className="gradient-text">{attraction.name}</h2>

          <p className="attraction-desc">{description}</p>

          {attraction.area && (
            <p className="hotel-meta">
              <strong>Khu vực:</strong> {attraction.area}
            </p>
          )}

          {attraction.level && (
            <p className="hotel-meta">
              <strong>Phân khúc:</strong> {attraction.level}
            </p>
          )}

          {attraction.address && (
            <p className="hotel-meta">
              <strong>Địa chỉ:</strong> <b>{attraction.address}</b>
            </p>
          )}

          {attraction.averagePrice && (
            <p className="hotel-meta">
              <strong>Giá thành:</strong> <b>{attraction.averagePrice}</b>
            </p>
          )}

          {attraction.note && (
            <p className="hotel-meta">
              <strong>Ghi chú:</strong> {attraction.note}
            </p>
          )}

          {boxTitle && boxContent && (
            <div className="suggestion-box">
              <h3>
                <ArrowRightCircle size={20} /> {boxTitle}
              </h3>
              <p>{boxContent}</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  const [itinerary, setItinerary] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [activeAttraction, setActiveAttraction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch itinerary");
        }

        return res.json();
      })
      .then((data) => {
        setItinerary(Array.isArray(data) ? data : []);
        setLoading(false);

        console.log("API DATA:", data);
        console.log("DAY 1 IMAGE:", data[0]?.image);
        console.log("DAY 1 HOTELS:", data[0]?.hotelSuggestions);
      })
      .catch((err) => {
        console.error("Error fetching itinerary:", err);
        setItinerary([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Đang tải lịch trình...</div>;
  }

  return (
    <div className="app">
      <header className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <h1 className="gradient-text">Hành Trình Xuyên Việt</h1>
            <p>7 Ngày Tận Hưởng Vẻ Đẹp Từ Đồng Nai Đến Hà Giang</p>
          </motion.div>
        </div>
      </header>

      <main className="container">
        {!selectedDay ? (
          <div className="dashboard">
            <h2 className="section-title">Tổng quan 7 ngày</h2>

            <div className="day-grid">
              {itinerary.map((day) => (
                <motion.div
                  key={day.day}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedDay(day)}
                  className="glass-card day-card"
                >
                  <div className="day-image">
                    <img src={day.image} alt={day.title} />
                  </div>

                  <div className="day-content">
                    <div className="day-number">Ngày {day.day}</div>
                    <h3>{day.title}</h3>
                    <p>{day.goal}</p>
                  </div>

                  <div className="day-footer">
                    <span>
                      <MapPin size={16} /> {day.stay}
                    </span>

                    <button className="btn btn-primary">Xem chi tiết</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              key={selectedDay.day}
              className="day-detail-view"
            >
              <button
                className="btn back-btn"
                onClick={() => setSelectedDay(null)}
              >
                ← Quay lại tổng quan
              </button>

              <div className="detail-header">
                <div className="detail-hero-image">
                  <img src={selectedDay.image} alt={selectedDay.title} />
                  <div className="hero-overlay"></div>
                </div>

                <div className="header-info">
                  <span className="badge badge-visit">
                    Ngày {selectedDay.day}
                  </span>

                  <h2 className="gradient-text">{selectedDay.title}</h2>
                  <p className="goal-text">{selectedDay.goal}</p>
                </div>
              </div>

              {selectedDay.knowledge && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="knowledge-card glass-card"
                >
                  <div className="knowledge-header">
                    <BookOpen size={24} className="icon-blue" />
                    <h3>Tiêu điểm Văn hóa & Lịch sử</h3>
                  </div>

                  <h4>{selectedDay.knowledge.title}</h4>
                  <p>{selectedDay.knowledge.content}</p>
                </motion.div>
              )}

              <div className="detail-content">
                <div className="timeline-section">
                  <h3>Lịch trình chi tiết</h3>

                  <div className="timeline">
                    {selectedDay.events?.map((event, idx) => (
                      <div key={idx} className="timeline-item">
                        <div className="timeline-marker"></div>

                        <motion.div
                          whileHover={
                            event.details ? { x: 10, cursor: "pointer" } : {}
                          }
                          onClick={() =>
                            event.details && setActiveAttraction(event.details)
                          }
                          className={`event-card glass-card ${
                            event.details ? "interactive-event" : ""
                          }`}
                        >
                          <div className="event-meta">
                            <span className="event-time">{event.time}</span>

                            {event.details && (
                              <span className="click-hint">
                                <ExternalLink size={12} /> Click xem ảnh
                              </span>
                            )}
                          </div>

                          <p className="event-activity">
                            {event.type === "food" && (
                              <Utensils size={18} className="icon-orange" />
                            )}

                            {event.type === "visit" && (
                              <Map size={18} className="icon-blue" />
                            )}

                            {event.type === "transport" && (
                              <Bus size={18} className="icon-blue" />
                            )}

                            {event.activity}
                          </p>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sidebar-section">
                  <div className="glass-card stay-card">
                    <h3>
                      <Bus size={20} /> Lưu trú & Lưu ý
                    </h3>

                    <p>
                      <strong>Nghỉ tại:</strong> {selectedDay.stay}
                    </p>

                    <div className="recommendation">
                      <Info size={18} />
                      <span>{selectedDay.recommendation}</span>
                    </div>
                  </div>

                  {selectedDay.hotelSuggestions &&
                    selectedDay.hotelSuggestions.length > 0 && (
                      <div className="extra-suggestions-section hotel-suggestions-section">
                        <h3>
                          <Building2 size={20} className="icon-blue" /> Khách
                          sạn gợi ý
                        </h3>

                        <div className="suggestion-list">
                          {selectedDay.hotelSuggestions.map((hotel, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => setActiveAttraction(hotel)}
                              className="suggestion-item glass-card hotel-card clickable-suggestion"
                            >
                              {hotel.image && (
                                <div className="sug-image">
                                  <img src={hotel.image} alt={hotel.name} />
                                </div>
                              )}

                              <div className="sug-content">
                                <div className="sug-header">
                                  <span className="sug-type hotel-tag">
                                    {hotel.level || "Khách sạn"}
                                  </span>

                                  <Building2 size={16} className="icon-blue" />
                                </div>

                                <h5>{hotel.name}</h5>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                  {selectedDay.extraSuggestions &&
                    selectedDay.extraSuggestions.length > 0 && (
                      <div className="extra-suggestions-section">
                        <h3>
                          <Star size={20} className="icon-yellow" /> Gợi ý
                          check-in thêm
                        </h3>

                        <div className="suggestion-list">
                          {selectedDay.extraSuggestions.map((sug, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => setActiveAttraction(sug)}
                              className="suggestion-item glass-card clickable-suggestion"
                            >
                              {sug.image && (
                                <div className="sug-image">
                                  <img src={sug.image} alt={sug.name} />
                                </div>
                              )}

                              <div className="sug-content">
                                <div className="sug-header">
                                  <span className="sug-type">{sug.type}</span>
                                  <Camera size={16} className="icon-main" />
                                </div>

                                <h5>{sug.name}</h5>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                  {selectedDay.foodSuggestions &&
                    selectedDay.foodSuggestions.length > 0 && (
                      <div className="extra-suggestions-section food-suggestions-section">
                        <h3>
                          <Utensils size={20} className="icon-orange" /> Địa
                          điểm ăn uống gợi ý
                        </h3>

                        <div className="suggestion-list">
                          {selectedDay.foodSuggestions.map((food, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => setActiveAttraction(food)}
                              className="suggestion-item glass-card food-card clickable-suggestion"
                            >
                              {food.image && (
                                <div className="sug-image">
                                  <img src={food.image} alt={food.name} />
                                </div>
                              )}

                              <div className="sug-content">
                                <div className="sug-header">
                                  <span className="sug-type food-tag">
                                    {food.type}
                                  </span>

                                  <Star size={16} className="icon-orange" />
                                </div>

                                <h5>{food.name}</h5>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      <AnimatePresence>
        {activeAttraction && (
          <AttractionModal
            attraction={activeAttraction}
            onClose={() => setActiveAttraction(null)}
          />
        )}
      </AnimatePresence>

      <style>{`
        .hero {
          padding: 6rem 0;
          text-align: center;
          background: radial-gradient(circle at top right, hsl(210, 100%, 95%), transparent);
        }

        .hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: 1.25rem;
          color: var(--text-muted);
        }

        .section-title {
          margin: 2rem 0;
          font-size: 2rem;
        }
        
        .day-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .day-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 0;
          overflow: hidden;
        }

        .day-image {
          height: 200px;
          overflow: hidden;
        }

        .day-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .day-card:hover .day-image img {
          transform: scale(1.1);
        }

        .day-content {
          padding: 1.5rem;
          flex-grow: 1;
        }

        .day-number {
          font-weight: 700;
          color: var(--primary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .day-footer {
          padding: 1.5rem;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .day-footer span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .day-detail-view {
          padding: 2rem 0;
        }

        .back-btn {
          margin-bottom: 2rem;
          background: var(--card);
          border: 1px solid var(--border);
        }

        .detail-header { 
          margin-bottom: 2rem; 
          position: relative;
        }

        .detail-hero-image {
          width: 100%;
          height: 400px;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          margin-bottom: 2rem;
        }

        .detail-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.4));
        }

        .goal-text {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 800px;
          margin-top: 1rem;
        }

        .knowledge-card {
          margin-bottom: 3rem;
          border-left: 6px solid var(--primary);
          background: linear-gradient(to right, hsl(210, 100%, 98%), white);
        }

        .knowledge-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .knowledge-card h4 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-main);
        }

        .knowledge-card p {
          color: var(--text-muted);
          font-style: italic;
        }

        .detail-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
        }

        .event-card {
          padding: 1rem 1.5rem;
          border-radius: 16px;
          margin-left: 10px;
          transition: background 0.3s ease;
        }

        .interactive-event {
          border: 1.5px solid var(--primary);
          background: hsl(210, 100%, 98%);
        }

        .interactive-event:hover {
          background: hsl(210, 100%, 95%);
        }
        
        .event-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.3rem;
        }

        .event-time {
          font-weight: 600;
          color: var(--primary);
          font-size: 0.85rem;
        }

        .click-hint {
          font-size: 0.7rem;
          color: var(--primary);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .event-activity {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
        }
        
        .icon-orange {
          color: #f59e0b;
        }

        .icon-blue {
          color: #3b82f6;
        }

        .icon-yellow {
          color: #eab308;
        }

        .icon-main {
          color: var(--primary);
        }

        .stay-card h3 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1rem;
        }

        .recommendation {
          display: flex;
          gap: 10px;
          margin-top: 1rem;
          padding: 1rem;
          background: hsl(210, 100%, 97%);
          border-radius: 12px;
          color: var(--primary);
          font-size: 0.9rem;
        }

        .extra-suggestions-section {
          margin-top: 2rem;
        }

        .extra-suggestions-section h3 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }
        
        .suggestion-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 400px;
          overflow-y: auto;
          padding-right: 8px;
        }

        .suggestion-list::-webkit-scrollbar {
          width: 6px;
        }

        .suggestion-list::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 4px;
        }

        .suggestion-list::-webkit-scrollbar-thumb:hover {
          background: var(--text-muted);
        }

        .suggestion-item {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .clickable-suggestion {
          cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .clickable-suggestion:hover {
          border-color: var(--primary);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .sug-image {
          height: 120px;
          width: 100%;
        }

        .sug-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .sug-content {
          padding: 1.25rem;
        }

        .sug-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .sug-type {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          background: hsl(210, 100%, 95%);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .suggestion-item h5 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }

        .suggestion-item p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .hotel-suggestions-section {
          margin-top: 3rem;
          border-top: 1px dashed var(--border);
          padding-top: 2rem;
        }

        .hotel-tag {
          background: hsl(210, 100%, 95%) !important;
          color: #2563eb !important;
        }

        .hotel-card:hover {
          border-color: #3b82f6 !important;
        }

        .hotel-note {
          margin-top: 0.5rem;
          font-style: italic;
          color: var(--text-muted);
        }

        .hotel-meta {
          margin: 0.75rem 0;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        
        .food-suggestions-section {
          margin-top: 3rem;
          border-top: 1px dashed var(--border);
          padding-top: 2rem;
        }

        .food-tag {
          background: hsl(30, 100%, 95%) !important;
          color: #d97706 !important;
        }

        .food-card:hover {
          border-color: #f59e0b !important;
        }

        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-family: 'Outfit';
          font-size: 1.5rem;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-content {
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          width: 100%;
          padding: 0;
          position: relative;
          background: white;
        }

        .modal-content::-webkit-scrollbar {
          width: 6px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 4px;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 10;
          background: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .modal-hero {
          height: 300px;
          width: 100%;
          position: relative;
        }

        .modal-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-body {
          padding: 2rem;
        }

        .attraction-desc {
          margin: 1.5rem 0;
          color: var(--text-muted);
          font-size: 1.1rem;
        }

        .suggestion-box {
          background: hsl(210, 100%, 98%);
          border-left: 4px solid var(--primary);
          padding: 1.5rem;
          border-radius: 0 12px 12px 0;
          margin-top: 1.5rem;
        }

        .suggestion-box h3 {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--primary);
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 1024px) {
          .detail-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
