const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
const itinerary = [
  {
    day: 1,
    title: "Đồng Nai → Nha Trang",
    goal: "Khởi hành từ Đồng Nai, di chuyển đến Nha Trang, nghỉ biển nhẹ và check-in các điểm phù hợp với gia đình.",
    stay: "Nha Trang",
    recommendation:
      "Nên ở khu Trần Phú hoặc Lộc Thọ để gần biển, dễ đi bộ và tiện ăn uống.",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Nha%20Trang%20Beach%2C%20Vietnam.jpg?width=1200",
    knowledge: {
      title: "Vùng đất của Sông Lau",
      content:
        "Tên gọi Nha Trang có nguồn gốc từ tiếng Chăm 'Ea Trang' nghĩa là Sông Lau, tên gọi sông Cái chảy qua vùng này. Trước đây Nha Trang thuộc vương quốc Chiêm Thành, sau đó trở thành làng chài hoang sơ trước khi vươn mình thành thành phố biển quốc tế như ngày nay.",
    },
    extraSuggestions: [
      {
        name: "Hòn Chồng",
        type: "Cảnh đẹp",
        desc: "Bãi đá xếp chồng độc đáo, ngắm vịnh biển cực đẹp.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/H%C3%B2n%20ch%E1%BB%93ng%20Nha%20Trang%20n%C4%83m%202016%20%2815%29.jpg?width=800",
      },
      {
        name: "Tháp Trầm Hương",
        type: "Biểu tượng",
        desc: "Bông sen cách điệu tại Quảng trường 2/4, biểu tượng trung tâm Nha Trang.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Th%C3%A1p%20Tr%E1%BA%A7m%20H%C6%B0%C6%A1ng%2C%20Nha%20Trang%2C%20Vietnam.jpg?width=800",
      },
      {
        name: "Cầu sắt Sông Cái",
        type: "Vintage",
        desc: "Góc check-in phong cách cổ điển, phù hợp chụp ảnh nhẹ trên đường tham quan thành phố.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/C%E1%BA%A7u%20s%E1%BA%AFt%20S%C3%B4ng%20C%C3%A1i%2C%20Nha%20Trang.jpg?width=800",
      },
    ],
    foodSuggestions: [
      {
        name: "Bún cá Nha Trang",
        restaurantName: "Bún cá Năm Beo",
        address: "B2 Chung cư Phan Bội Châu, gần Chợ Đầm, Nha Trang",
        type: "Đặc sản",
        averagePrice: "Khoảng 25.000 - 45.000 VNĐ/tô",
        averagePriceValue: 35000,
        popularNote:
          "Quán bún cá nổi tiếng gần Chợ Đầm, phù hợp ăn trưa nhẹ sau khi đến Nha Trang.",
        desc: "Món bún cá, chả cá, nước dùng thanh, hợp ăn sáng hoặc ăn trưa nhẹ.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/B%C3%BAn%20ch%E1%BA%A3%20c%C3%A1%2C%20th%C3%A1ng%208%20n%C4%83m%202018.JPG?width=800",
      },
      {
        name: "Nem nướng Nha Trang",
        restaurantName: "Nem nướng Đặng Văn Quyên",
        address: "16A Lãn Ông, Nha Trang, Khánh Hòa",
        type: "Truyền thống",
        averagePrice: "Khoảng 50.000 - 80.000 VNĐ/phần",
        averagePriceValue: 65000,
        popularNote:
          "Một trong những quán nem nướng nổi tiếng, đông khách du lịch và người địa phương.",
        desc: "Nem nướng ăn cùng bánh tráng, rau sống, đồ chua và nước chấm đặc trưng.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/L%E1%BB%85%20h%E1%BB%99i%20%E1%BA%A9m%20th%E1%BB%B1c%20C%E1%BB%ADa%20Vi%E1%BB%87t%20th4n2023%20%C4%91%E1%BA%B7c%20s%E1%BA%A3n%20nem%20l%E1%BB%A5i%20n%C6%B0%E1%BB%9Bng%20Nha%20Trang%20%281%29.jpg?width=800",
      },
      {
        name: "Hải sản Nha Trang",
        restaurantName: "Hải sản Thanh Sương",
        address: "15 Trần Phú hoặc 9A Trần Phú, Vĩnh Nguyên, Nha Trang",
        type: "Hải sản",
        averagePrice: "Khoảng 150.000 - 300.000 VNĐ/người",
        averagePriceValue: 220000,
        popularNote:
          "Quán hải sản có nhiều chi nhánh, phù hợp ăn tối gia đình gần trục Trần Phú.",
        desc: "Phù hợp ăn tối gia đình, nên hỏi giá hải sản trước khi gọi món.",
        image:
          "https://stcd02265632633.cloud.edgevnpay.vn/website-vnpay-public/fill/2023/9/0z4ws0ez4vw1694161390986.jpg",
      },
    ],
    hotelSuggestions: [
      {
        name: "Azura Gold Hotel & Apartment",
        address: "64/2 Trần Phú, Lộc Thọ, Nha Trang, Khánh Hòa",
        area: "Lộc Thọ / gần biển Trần Phú",
        level: "Tầm trung",
        averagePrice: "Khoảng 550.000 - 850.000 VNĐ/đêm",
        averagePriceValue: 700000,
        suitableFor:
          "Gia đình muốn ở gần biển, tiện đi bộ và dễ tìm chỗ ăn uống.",
        note: "Phù hợp nếu muốn tiết kiệm chi phí nhưng vẫn ở khu trung tâm.",
        image:
          "https://q-xx.bstatic.com/xdata/images/hotel/max500/405269062.jpg?k=8bc9eefdf97bc1f002b5eb9e1c19ba237f3e43f02335e23ecb8b64c1e16d333a&o=",
      },
      {
        name: "Liberty Central Nha Trang Hotel",
        address: "09 Biệt Thự, Lộc Thọ, Nha Trang, Khánh Hòa",
        area: "Trung tâm Nha Trang / gần biển Trần Phú",
        level: "Tầm trung khá",
        averagePrice: "Khoảng 1.100.000 - 1.800.000 VNĐ/đêm",
        averagePriceValue: 1450000,
        suitableFor:
          "Gia đình muốn khách sạn trung tâm, gần biển và tiện di chuyển.",
        note: "Phù hợp với lịch nghỉ ngắn tại Nha Trang, vị trí thuận tiện hơn nếu muốn đi bộ ra biển nhanh.",
        image:
          "https://owa.bestprice.vn/images/hotels/uploads/liberty-central-nha-trang-6492a0d0a469b.jpg",
      },
    ],
    events: [
      {
        time: "05:30 - 06:00",
        type: "transport",
        activity: "Có mặt tại ga Biên Hòa hoặc điểm đón xe.",
      },
      {
        time: "06:00 - 12:30",
        type: "transport",
        activity:
          "Di chuyển Đồng Nai đến Nha Trang bằng tàu hoặc xe giường nằm.",
      },
      {
        time: "12:30 - 13:30",
        type: "food",
        activity: "Ăn trưa: nem nướng Nha Trang hoặc bún cá.",
      },
      {
        time: "13:30 - 15:30",
        type: "break",
        activity: "Check-in khách sạn, nghỉ trưa.",
      },
      {
        time: "16:00 - 17:30",
        type: "visit",
        activity: "Biển Trần Phú, Quảng trường 2/4.",
      },
      {
        time: "17:45 - 18:30",
        type: "visit",
        activity: "Check-in Nhà thờ Núi Nha Trang.",
        details: {
          name: "Nhà thờ Núi Nha Trang",
          image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Christ%20the%20King%20Cathedral%20Nha%20Trang.JPG?width=800",
          description:
            "Ngôi nhà thờ cổ kính mang kiến trúc Gothic Pháp, là một điểm Công giáo nổi bật tại Nha Trang.",
          nextTip:
            "Sau điểm này có thể đi ăn bánh xèo mực, bún cá hoặc hải sản gần trung tâm.",
        },
      },
      {
        time: "18:30 - 20:00",
        type: "food",
        activity: "Ăn tối: bánh xèo mực, bún sứa hoặc hải sản.",
      },
      {
        time: "20:30",
        type: "break",
        activity: "Về khách sạn nghỉ sớm.",
      },
    ],
  },
  {
    day: 2,
    title: "Nha Trang city tour → Đà Nẵng",
    goal: "Tham quan nhẹ Nha Trang, mua đặc sản, sau đó đi tàu đêm ra Đà Nẵng.",
    stay: "Tàu đêm Nha Trang → Đà Nẵng",
    recommendation:
      "Nên đặt giường nằm mềm khoang 4 để mẹ nghỉ tốt hơn trong chặng dài.",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dragon%20Bridge%20at%20night%20%28Danang%29%20-%20DSC02094.JPG?width=1200",
    knowledge: {
      title: "Ga tàu trăm tuổi",
      content:
        "Ga Nha Trang được khánh thành vào năm 1936 và là một trong những nhà ga đẹp của tuyến đường sắt Thống Nhất. Chặng Nha Trang đi Đà Nẵng bằng tàu đêm phù hợp để tiết kiệm thời gian và giữ sức cho lịch trình miền Trung.",
    },
    extraSuggestions: [
      {
        name: "Viện Hải dương học Nha Trang",
        type: "Bảo tàng",
        desc: "Điểm tham quan phù hợp gia đình, có không gian trưng bày sinh vật biển.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vi%E1%BB%87n%20H%E1%BA%A3i%20D%C6%B0%C6%A1ng%20h%E1%BB%8Dc%20Nha%20Trang%20%28B%E1%BA%A3o%20t%C3%A0ng%20H%E1%BA%A3i%20d%C6%B0%C6%A1ng%20h%E1%BB%8Dc%29.jpg?width=800",
      },
      {
        name: "Chợ Đầm Nha Trang",
        type: "Mua đặc sản",
        desc: "Khu chợ nổi tiếng để mua quà, hải sản khô và đặc sản Nha Trang.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cho%20Dam%20Market%20Nha%20Trang.jpg?width=800",
      },
      {
        name: "Cầu Rồng Đà Nẵng",
        type: "Biểu tượng",
        desc: "Cây cầu nổi bật bắc qua sông Hàn, đẹp nhất khi thành phố lên đèn.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dragon%20Bridge%20at%20night%20%28Danang%29%20-%20DSC02094.JPG?width=800",
      },
    ],
    foodSuggestions: [
      {
        name: "Bánh căn Nha Trang",
        restaurantName: "Bánh căn Cô Trang",
        address: "3A Tháp Bà, Nha Trang, Khánh Hòa",
        type: "Ăn sáng",
        averagePrice: "Khoảng 10.000 - 25.000 VNĐ/phần",
        averagePriceValue: 20000,
        popularNote:
          "Quán bánh căn nổi tiếng, phù hợp ăn sáng nhẹ trước khi tham quan.",
        desc: "Bánh căn nhỏ, thường ăn với trứng, mực, tôm và nước mắm pha.",
        image:
          "https://static.vinwonders.com/production/2025/08/banh-can-nha-trang-ngon.jpg",
      },
      {
        name: "Bún sứa Nha Trang",
        restaurantName: "Bún cá sứa Hàn Thuyên",
        address: "24 Hàn Thuyên, Nha Trang, Khánh Hòa",
        type: "Đặc sản",
        averagePrice: "Khoảng 15.000 - 35.000 VNĐ/tô",
        averagePriceValue: 30000,
        popularNote:
          "Quán nhỏ nhưng nổi tiếng với bún sứa, chả cá tươi và nước dùng thanh.",
        desc: "Món nước thanh nhẹ, có sứa giòn, chả cá và rau sống ăn kèm.",
        image:
          "https://cdn.tgdd.vn/2020/10/CookProduct/MonbuncasuaNhaTrang-1200x675.jpg",
      },
      {
        name: "Bánh tráng cuốn thịt heo Đà Nẵng",
        restaurantName: "Ẩm thực Trần",
        address: "4 Lê Duẩn, Hải Châu, Đà Nẵng",
        type: "Đặc sản Đà Nẵng",
        averagePrice: "Khoảng 70.000 - 165.000 VNĐ/phần",
        averagePriceValue: 120000,
        popularNote:
          "Thương hiệu đặc sản Đà Nẵng nổi tiếng, phù hợp cho gia đình ăn tối hoặc ăn trưa.",
        desc: "Thịt heo luộc cuốn bánh tráng, rau sống và chấm mắm nêm.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/B%C3%A1nh%20tr%C3%A1ng%20cu%E1%BB%91n%20th%E1%BB%8Bt%20heo.jpg?width=800",
      },
    ],
    hotelSuggestions: [],
    events: [
      {
        time: "07:00 - 08:00",
        type: "food",
        activity: "Ăn sáng: bánh căn hoặc bún cá Nha Trang.",
      },
      {
        time: "08:30 - 10:00",
        type: "visit",
        activity: "Tham quan Viện Hải dương học.",
        details: {
          name: "Viện Hải dương học Nha Trang",
          image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vi%E1%BB%87n%20H%E1%BA%A3i%20D%C6%B0%C6%A1ng%20h%E1%BB%8Dc%20Nha%20Trang%20%28B%E1%BA%A3o%20t%C3%A0ng%20H%E1%BA%A3i%20d%C6%B0%C6%A1ng%20h%E1%BB%8Dc%29.jpg?width=800",
          description:
            "Điểm tham quan phù hợp gia đình, có không gian trưng bày sinh vật biển và bảo tàng hải dương học.",
          nextTip: "Tiếp theo có thể ghé Hòn Chồng để ngắm vịnh Nha Trang.",
        },
      },
      {
        time: "10:30 - 11:30",
        type: "visit",
        activity: "Check-in Hòn Chồng.",
      },
      {
        time: "11:30 - 12:30",
        type: "food",
        activity: "Ăn trưa: nem nướng hoặc bún sứa.",
      },
      {
        time: "13:00 - 15:00",
        type: "break",
        activity: "Nghỉ trưa, chuẩn bị hành lý.",
      },
      {
        time: "15:30 - 17:00",
        type: "visit",
        activity: "Chợ Đầm, mua đặc sản Nha Trang.",
      },
      {
        time: "18:00 - 19:00",
        type: "food",
        activity: "Ăn tối sớm trước khi lên tàu.",
      },
      {
        time: "20:00 - 21:30",
        type: "transport",
        activity: "Ra ga Nha Trang.",
      },
      {
        time: "21:30 - 22:00",
        type: "transport",
        activity: "Lên tàu đêm đi Đà Nẵng.",
      },
    ],
  },
  {
    day: 3,
    title: "Đà Nẵng → Huế",
    goal: "Đến Đà Nẵng, di chuyển ra Huế và bắt đầu phần di sản miền Trung.",
    stay: "Huế",
    recommendation:
      "Nên ở gần cầu Trường Tiền hoặc trung tâm Huế để tiện ăn uống và đi bộ buổi tối.",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vietnam%2C%20Hue%2C%20Imperial%20City%20of%20Hue%2C%20The%20Meridian%20Gate.jpg?width=1200",
    knowledge: {
      title: "Kinh thành triều Nguyễn",
      content:
        "Huế là kinh đô của nước Việt Nam thống nhất dưới triều đại nhà Nguyễn từ năm 1802 đến 1945. Đây là vương triều phong kiến cuối cùng, để lại hệ thống cung điện, lăng tẩm đồ sộ đã được UNESCO công nhận là Di sản Văn hóa Thế giới.",
    },
    extraSuggestions: [
      {
        name: "Đại Nội Huế",
        type: "Di sản",
        desc: "Quần thể cung đình quan trọng nhất của cố đô Huế.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vietnam%2C%20Hue%2C%20Imperial%20City%20of%20Hue%2C%20Gate.jpg?width=800",
      },
      {
        name: "Cầu Trường Tiền",
        type: "Biểu tượng",
        desc: "Cây cầu nổi tiếng bắc qua sông Hương, đẹp khi lên đèn buổi tối.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Truong%20Tien%20bridge%20in%20Hu%E1%BA%BF.jpg?width=800",
      },
      {
        name: "Sông Hương",
        type: "Cảnh đẹp",
        desc: "Không gian dạo bộ nhẹ nhàng, phù hợp sau bữa tối ở Huế.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Perfume-River-Hue.jpg?width=800",
      },
    ],
    foodSuggestions: [
      {
        name: "Bún bò Huế",
        restaurantName: "Bún bò Mệ Kéo",
        address: "Khu vực đường Bạch Đằng, dưới chân cầu Gia Hội, Huế",
        type: "Cố đô",
        averagePrice: "Khoảng 35.000 - 60.000 VNĐ/tô",
        averagePriceValue: 45000,
        popularNote:
          "Quán bún bò lâu đời, rất nổi tiếng ở Huế, thường đông khách vào buổi sáng.",
        desc: "Món nước nổi tiếng của Huế, nước dùng đậm, thơm sả và có vị cay nhẹ.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/B%C3%BAn%20b%C3%B2%20Hu%E1%BA%BF%20-%20Ch%E1%BB%A3%20%C4%90%C3%B4ng%20Ba%20%282024%29%20-%20img%2002.jpg?width=800",
      },
      {
        name: "Cơm hến",
        restaurantName: "Cơm hến Hoa Đông",
        address: "64/7 Ưng Bình, Vỹ Dạ, Huế",
        type: "Dân dã",
        averagePrice: "Khoảng 20.000 - 45.000 VNĐ/phần",
        averagePriceValue: 35000,
        popularNote:
          "Một trong những quán cơm hến nổi tiếng nhất ở Huế, phù hợp ăn trưa nhẹ.",
        desc: "Cơm trộn hến, rau thơm, tóp mỡ, đậu phộng và mắm ruốc.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/H%E1%BA%BFn%20tr%E1%BB%99n.jpg?width=800",
      },
      {
        name: "Bánh bèo Huế",
        restaurantName: "Quán Sương",
        address: "Khu trung tâm Huế",
        type: "Món Huế",
        averagePrice: "Khoảng 30.000 - 70.000 VNĐ/người",
        averagePriceValue: 50000,
        popularNote:
          "Phù hợp nếu muốn thử nhóm bánh Huế như bánh bèo, bánh nậm, bánh lọc.",
        desc: "Bánh nhỏ mềm, ăn cùng tôm chấy, mỡ hành và nước mắm ngọt.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/B%C3%A1nh%20b%C3%A8o%20Hu%E1%BA%BF.jpg?width=800",
      },
    ],
    hotelSuggestions: [
      {
        name: "White Lotus Hue Hotel",
        address: "05-07 Hoàng Hoa Thám, Huế",
        area: "Trung tâm Huế",
        level: "Tầm trung khá",
        averagePrice: "Khoảng 850.000 - 1.400.000 VNĐ/đêm",
        averagePriceValue: 1100000,
        suitableFor:
          "Gia đình muốn ở gần trung tâm, tiện dạo cầu Trường Tiền và sông Hương.",
        note: "Phù hợp cho lịch nghỉ 1 đêm tại Huế, vị trí thuận tiện để ăn uống và đi bộ buổi tối.",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295610868.jpg?k=944246a94a4d34518b6a3cab36d70a6441ee32574702a9bd9c4c49ff79855c0e&o=",
      },
      {
        name: "Senna Hue Hotel",
        address: "07 Nguyễn Tri Phương, phường Phú Hội, Huế",
        area: "Trung tâm Huế",
        level: "Tầm trung khá",
        averagePrice: "Khoảng 1.000.000 - 1.700.000 VNĐ/đêm",
        averagePriceValue: 1350000,
        suitableFor:
          "Gia đình cần khách sạn ổn, dễ di chuyển đến Đại Nội, cầu Trường Tiền và các quán ăn.",
        note: "Vị trí thuận tiện, hợp với lịch trình nhẹ nhàng cho người lớn tuổi.",
        image:
          "https://pix10.agoda.net/hotelImages/9763123/-1/c739b59559d5bf8ed1b48e2d86214a57.jpg?ca=9&ce=1&s=414x232",
      },
    ],
    events: [
      {
        time: "06:30 - 07:30",
        type: "food",
        activity: "Đến Đà Nẵng, ăn sáng nhẹ.",
      },
      {
        time: "08:00 - 10:30",
        type: "transport",
        activity: "Di chuyển Đà Nẵng đến Huế bằng xe riêng hoặc xe dịch vụ.",
      },
      {
        time: "10:30 - 11:30",
        type: "break",
        activity: "Gửi hành lý hoặc check-in khách sạn nếu có phòng.",
      },
      {
        time: "11:30 - 12:30",
        type: "food",
        activity: "Ăn trưa: cơm hến hoặc bún hến.",
      },
      {
        time: "13:00 - 15:00",
        type: "break",
        activity: "Nghỉ trưa.",
      },
      {
        time: "15:30 - 17:30",
        type: "visit",
        activity: "Tham quan Đại Nội Huế.",
        details: {
          name: "Đại Nội Huế",
          image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vietnam%2C%20Hue%2C%20Imperial%20City%20of%20Hue%2C%20Gate.jpg?width=800",
          description:
            "Kinh thành cổ của triều đình nhà Nguyễn với kiến trúc cung đình tinh xảo.",
          nextTip:
            "Buổi tối nên dạo cầu Trường Tiền và ăn các món Huế nhẹ nhàng.",
        },
      },
      {
        time: "18:30 - 20:00",
        type: "food",
        activity: "Ăn tối: bún bò Huế, bánh bèo, bánh nậm, bánh lọc.",
      },
      {
        time: "20:00 - 21:30",
        type: "visit",
        activity: "Dạo cầu Trường Tiền và sông Hương.",
      },
    ],
  },
  {
    day: 4,
    title: "Huế → Đà Nẵng → Hội An",
    goal: "Ngày trọng tâm của cụm Huế - Đà Nẵng - Hội An, ưu tiên điểm văn hóa, Công giáo và phố cổ.",
    stay: "Hội An",
    recommendation:
      "Nên ngủ lại Hội An để tận hưởng phố cổ buổi tối, không cần quay về Đà Nẵng.",
    image:
      "https://statics.vinpearl.com/Kinh-nghiem-du-lich-da-nang-hue-hoi-an-2_1624951707.jpg",
    knowledge: {
      title: "Thương cảng quốc tế sầm uất",
      content:
        "Từ thế kỷ XV đến XVIII, Hội An là thương cảng quốc tế sôi động bậc nhất Đông Nam Á, nơi giao thoa của các nền văn hóa Nhật Bản, Trung Quốc và phương Tây. Những mái ngói rêu phong và đèn lồng lung linh là minh chứng cho sự thịnh vượng bền bỉ qua thời gian.",
    },
    extraSuggestions: [
      {
        name: "Nhà thờ Phủ Cam",
        type: "Công giáo",
        desc: "Nhà thờ nổi bật ở Huế với kiến trúc hiện đại và không gian trang nghiêm.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/2024%20Hu%E1%BA%BF%20-%20Ph%E1%BB%A7%20Cam%20Cathedral%20%28Nh%C3%A0%20th%E1%BB%9D%20ch%C3%ADnh%20t%C3%B2a%20Ph%E1%BB%A7%20Cam%29%20-%20img%2005.jpg?width=800",
      },
      {
        name: "Lăng Khải Định",
        type: "Di sản",
        desc: "Lăng tẩm nổi bật với kiến trúc Đông Tây kết hợp và nghệ thuật khảm sành sứ.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khai%20Dinh%20Mausoleum%20Hue%20%2827767160179%29.jpg?width=800",
      },
      {
        name: "Nhà thờ Con Gà Đà Nẵng",
        type: "Công giáo",
        desc: "Nhà thờ Chính Tòa Đà Nẵng màu hồng, nổi bật ở trung tâm thành phố.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Da%20Nang%20Cathedral%20-%20Da%20Nang%2C%20Vietnam%20-%20DSC02464.JPG?width=800",
      },
      {
        name: "Biển Mỹ Khê",
        type: "Biển",
        desc: "Bãi biển nổi tiếng của Đà Nẵng, phù hợp nghỉ chân và chụp ảnh chiều.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/My%20Khe%20Beach%2C%20Da%20Nang%2C%20Vietnam.jpg?width=800",
      },
      {
        name: "Cầu Rồng",
        type: "Biểu tượng",
        desc: "Cây cầu nổi bật của Đà Nẵng, đẹp nhất vào buổi tối.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dragon%20Bridge%20at%20night%20%28Danang%29%20-%20DSC02094.JPG?width=800",
      },
      {
        name: "Phố cổ Hội An",
        type: "Di sản",
        desc: "Khu phố cổ nổi tiếng với đèn lồng, nhà cổ, sông Hoài và không khí hoài niệm về đêm.",
        image:
          "Phố cổ Hội Anhttps://mia.vn/media/uploads/blog-du-lich/pho-co-hoi-an-4-1722851828.jpg",
      },
      {
        name: "Bãi biển An Bàng",
        type: "Nghỉ dưỡng",
        desc: "Bãi biển gần Hội An, phù hợp nếu muốn nghỉ ngơi sau khi dạo phố cổ.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWJnTWqYv60cKplUqy79FDP21JzrX5b4B2g&s",
      },
    ],
    foodSuggestions: [
      {
        name: "Mì Quảng Đà Nẵng",
        restaurantName: "Mì Quảng Bà Mua",
        address: "95A Nguyễn Tri Phương hoặc 40 Ngũ Hành Sơn, Đà Nẵng",
        type: "Miền Trung",
        averagePrice: "Khoảng 30.000 - 70.000 VNĐ/tô",
        averagePriceValue: 50000,
        popularNote:
          "Thương hiệu mì Quảng nổi tiếng ở Đà Nẵng, nhiều cơ sở, dễ ghé trên đường đi Hội An.",
        desc: "Mì nghệ ăn cùng tôm, thịt, rau sống, đậu phộng và bánh tráng nướng.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/M%C3%AC%20Qu%E1%BA%A3ng.jpg?width=800",
      },
      {
        name: "Cơm gà Hội An",
        restaurantName: "Cơm gà Bà Buội",
        address: "22 Phan Châu Trinh, Minh An, Hội An",
        type: "Đặc sản Hội An",
        averagePrice: "Khoảng 35.000 - 70.000 VNĐ/phần",
        averagePriceValue: 50000,
        popularNote:
          "Một trong những quán cơm gà nổi tiếng nhất Hội An, hợp ăn tối khi vừa đến phố cổ.",
        desc: "Cơm vàng thơm, gà xé, rau răm, hành tây và nước mạ đậm vị.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Com%20ga%20Viet%20Nam%20voi%20ga%20luoc%20com%20vang%20va%20nuoc%20cham.jpg?width=800",
      },
      {
        name: "Bánh mì Hội An",
        restaurantName: "Bánh mì Phượng",
        address: "2B Phan Châu Trinh, Minh An, Hội An",
        type: "Nổi tiếng",
        averagePrice: "Khoảng 20.000 - 30.000 VNĐ/ổ",
        averagePriceValue: 25000,
        popularNote:
          "Tiệm bánh mì rất nổi tiếng với khách du lịch, phù hợp ăn sáng hoặc ăn nhẹ.",
        desc: "Bánh mì Hội An nhân nhiều loại, nước sốt đậm vị, tiện ăn khi đi dạo phố cổ.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/B%C3%A1nh%20M%C3%AC%20Ph%C6%B0%E1%BB%A3ng%20%282024%29%20-%20img%2004.jpg?width=800",
      },
      {
        name: "Cao lầu Hội An",
        restaurantName: "Cao lầu Thanh",
        address: "26 Thái Phiên, Hội An",
        type: "Đặc sản Hội An",
        averagePrice: "Khoảng 35.000 - 60.000 VNĐ/tô",
        averagePriceValue: 45000,
        popularNote:
          "Phù hợp nếu muốn thử món đặc trưng Hội An ngoài cơm gà và bánh mì.",
        desc: "Mì đặc trưng Hội An, ăn cùng thịt xá xíu, rau sống và tóp giòn.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cao%20Lau%20Hoi%20An.JPG?width=800",
      },
    ],
    hotelSuggestions: [
      {
        name: "Hoi An Central Boutique Hotel & Spa",
        address: "91 Hùng Vương, Cẩm Phô, Hội An, Quảng Nam",
        area: "Gần phố cổ Hội An",
        level: "Tầm trung khá",
        averagePrice: "Khoảng 950.000 - 1.500.000 VNĐ/đêm",
        averagePriceValue: 1200000,
        suitableFor:
          "Gia đình muốn ở gần phố cổ, dễ đi bộ buổi tối và tiện ăn uống.",
        note: "Lựa chọn cân bằng giữa vị trí, giá và tiện nghi. Hợp với lịch chỉ ngủ lại Hội An 1 đêm.",
        image:
          "https://hoiancentral.com/UploadFile/Gallery/Afternoon-tea/1.jpg",
      },
      {
        name: "Little Riverside Hoi An",
        address: "09 Phan Bội Châu, Hội An, Quảng Nam",
        area: "Ven sông Thu Bồn / gần phố cổ",
        level: "Tầm trung khá đến cao cấp",
        averagePrice: "Khoảng 1.800.000 - 3.000.000 VNĐ/đêm",
        averagePriceValue: 2400000,
        suitableFor:
          "Gia đình thích không gian yên tĩnh, gần sông và vẫn dễ vào phố cổ.",
        note: "Hợp nếu đi với mẹ vì không gian nhẹ nhàng, nghỉ ngơi tốt sau ngày Huế - Đà Nẵng - Hội An.",
        image:
          "https://www.littleriversidehoian.com/uploads/littlehoiangroup/brands/Little_Riverside/Gallery/01-Little-Riverside-Hoian-Hotel-1-s.jpg",
      },
      {
        name: "Almanity Hoi An Resort & Spa",
        address: "326 Lý Thường Kiệt, Hội An",
        area: "Trung tâm Hội An",
        level: "Cao cấp",
        averagePrice: "Khoảng 2.000.000 - 3.500.000 VNĐ/đêm",
        averagePriceValue: 2750000,
        suitableFor:
          "Gia đình muốn nghỉ dưỡng tốt hơn, có spa, hồ bơi và không gian thư giãn.",
        note: "Nên chọn nếu ngân sách thoải mái hơn và muốn mẹ nghỉ ngơi tốt sau lịch trình dày.",
        image:
          "https://d24rsy7fvs79n4.cloudfront.net/almanityhoian.eraweb.net/600x400/20250510183123_3692_1746876683.0753.webp",
      },
    ],
    events: [
      {
        time: "06:30 - 07:30",
        type: "food",
        activity: "Ăn sáng: bún bò Huế.",
      },
      {
        time: "08:00 - 09:00",
        type: "visit",
        activity: "Check-in Nhà thờ Phủ Cam.",
      },
      {
        time: "09:30 - 10:45",
        type: "visit",
        activity: "Tham quan Lăng Khải Định.",
        details: {
          name: "Lăng Khải Định",
          image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khai%20Dinh%20Mausoleum%20Hue%20%2827767160179%29.jpg?width=800",
          description:
            "Sự kết hợp độc đáo giữa kiến trúc Đông Tây với những tác phẩm khảm sành sứ đỉnh cao.",
          nextTip: "Ghé Chợ Đông Ba để mua ít quà Huế trước khi về Đà Nẵng.",
        },
      },
      {
        time: "11:00 - 12:00",
        type: "visit",
        activity: "Chợ Đông Ba.",
      },
      {
        time: "12:00 - 13:00",
        type: "food",
        activity: "Ăn trưa món Huế.",
      },
      {
        time: "13:00 - 15:30",
        type: "transport",
        activity: "Di chuyển Huế về Đà Nẵng.",
      },
      {
        time: "15:30 - 16:30",
        type: "visit",
        activity: "Check-in Nhà thờ Con Gà Đà Nẵng hoặc Bảo tàng Chăm.",
      },
      {
        time: "16:30 - 17:30",
        type: "visit",
        activity: "Biển Mỹ Khê hoặc cầu Rồng.",
      },
      {
        time: "17:30 - 18:30",
        type: "transport",
        activity: "Di chuyển Đà Nẵng đến Hội An.",
      },
      {
        time: "18:30 - 20:00",
        type: "food",
        activity: "Ăn tối: cao lầu hoặc cơm gà Hội An.",
      },
      {
        time: "20:00 - 21:30",
        type: "visit",
        activity: "Dạo phố cổ Hội An, sông Hoài, phố đèn lồng.",
        details: {
          name: "Phố cổ Hội An",
          image:
            "hhttps://mia.vn/media/uploads/blog-du-lich/pho-co-hoi-an-4-1722851828.jpg",
          description:
            "Di sản văn hóa thế giới với vẻ đẹp hoài cổ và ánh đèn lồng lung linh.",
          nextTip:
            "Sáng mai nên dậy sớm dạo phố lúc vắng người, Hội An sẽ yên bình và dễ chụp ảnh hơn.",
        },
      },
    ],
  },
  {
    day: 5,
    title: "Hội An → Đà Nẵng → Hà Nội → Ninh Bình",
    goal: "Sáng tham quan Hội An, sau đó bay ra Hà Nội và đi tiếp Ninh Bình.",
    stay: "Ninh Bình",
    recommendation:
      "Nên ở khu Tam Cốc hoặc Tràng An để sáng hôm sau đi tham quan thuận tiện.",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vietnam%2C%20Ninh%20Binh%2C%20Trang%20An%20River.jpg?width=1200",
    knowledge: {
      title: "Cố đô Hoa Lư lịch sử",
      content:
        "Ninh Bình từng là kinh đô của ba triều đại: Đinh, Tiền Lê và đầu nhà Lý. Với địa thế núi non hiểm trở như những bức tường thành tự nhiên, Hoa Lư đã trở thành căn cứ quân sự quan trọng bảo vệ nền độc lập của nước Đại Cồ Việt.",
    },
    extraSuggestions: [
      {
        name: "Tràng An",
        type: "Di sản",
        desc: "Ngồi thuyền giữa núi đá vôi, hang động và dòng nước xanh đặc trưng Ninh Bình.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vietnam%2C%20Ninh%20Binh%2C%20Trang%20An%20River.jpg?width=1200",
      },
      {
        name: "Cố đô Hoa Lư",
        type: "Lịch sử",
        desc: "Khu di tích gắn với triều Đinh - Tiền Lê, phù hợp tham quan văn hóa.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Temple%20comm%C3%A9moratif%20au%20roi%20Dinh%20Tien%20Hoang%20%28Hoa%20Lu%29.jpg?width=800",
      },
      {
        name: "Tam Cốc",
        type: "Thiên nhiên",
        desc: "Một trong những cảnh quan sông núi nổi bật của Ninh Bình.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/%C4%90%C6%B0%E1%BB%9Dng%20v%C3%A0o%20Tam%20C%E1%BB%91c%20-%20Ninh%20B%C3%ACnh.JPG?width=800",
      },
    ],
    foodSuggestions: [
      {
        name: "Dê núi Ninh Bình",
        restaurantName: "Nhà hàng Dê Núi Thành Long",
        address: "04 Ngô Quyền, Đông Thành, TP. Ninh Bình",
        type: "Đặc sản",
        averagePrice: "Khoảng 150.000 - 250.000 VNĐ/người",
        averagePriceValue: 200000,
        popularNote:
          "Nhà hàng dê núi nổi tiếng, phù hợp ăn tối gia đình sau khi đến Ninh Bình.",
        desc: "Thịt dê núi là món nổi tiếng nhất Ninh Bình, thường ăn cùng rau thơm và tương gừng.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Th%E1%BB%8Bt%20d%C3%AA%20Ninh%20B%C3%ACnh.JPG?width=800",
      },
      {
        name: "Dê núi và cơm cháy",
        restaurantName: "Nhà hàng Trường An",
        address: "Khu Đền Đinh Lê, Trường Yên, Hoa Lư, Ninh Bình",
        type: "Đặc sản địa phương",
        averagePrice: "Khoảng 150.000 - 250.000 VNĐ/người",
        averagePriceValue: 200000,
        popularNote:
          "Phù hợp nếu đi khu Hoa Lư, Tràng An và muốn ăn đặc sản gần điểm tham quan.",
        desc: "Kết hợp dê núi, cơm cháy và các món đặc sản Ninh Bình.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Th%E1%BB%8Bt%20d%C3%AA%20Ninh%20B%C3%ACnh.JPG?width=800",
      },
      {
        name: "Cơm cháy Ninh Bình",
        restaurantName: "Cơm cháy Cố Đô / Hoàng Trang",
        address:
          "Các cửa hàng đặc sản tại trung tâm Ninh Bình và khu Tràng An - Hoa Lư",
        type: "Mua làm quà",
        averagePrice: "Khoảng 45.000 - 100.000 VNĐ/gói",
        averagePriceValue: 60000,
        popularNote:
          "Nên mua loại đóng gói làm quà, dễ mang theo trong lịch trình di chuyển dài.",
        desc: "Cơm cháy giòn, thường ăn cùng ruốc hoặc nước sốt dê.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Comchay.JPG?width=800",
      },
    ],
    hotelSuggestions: [
      {
        name: "Tam Coc Serenity Hotel & Bungalow",
        address: "Thôn Đam Khê, xã Ninh Hải, Hoa Lư, Ninh Bình",
        area: "Tam Cốc",
        level: "Tầm trung",
        averagePrice: "Khoảng 650.000 - 1.100.000 VNĐ/đêm",
        averagePriceValue: 850000,
        suitableFor:
          "Gia đình muốn gần khu Tam Cốc, dễ đi tham quan sáng hôm sau.",
        note: "Phù hợp với lịch đến Ninh Bình vào chiều tối, ưu tiên nghỉ gần điểm tham quan.",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/232410598.jpg?k=847b602b4ec171d4f764ce40f78fbd3e38201fb2360c97f2df8ecde8a11b04b8&o=&hp=1",
      },
      {
        name: "Emeralda Resort Ninh Binh",
        address: "Khu bảo tồn Vân Long, thôn Tập Ninh, xã Gia Vân, Ninh Bình",
        area: "Vân Long",
        level: "Cao cấp",
        averagePrice: "Khoảng 2.000.000 - 3.500.000 VNĐ/đêm",
        averagePriceValue: 2750000,
        suitableFor:
          "Gia đình muốn nghỉ dưỡng yên tĩnh, không gian rộng và thoải mái.",
        note: "Nên chọn nếu ưu tiên nghỉ ngơi hơn là đi nhiều điểm.",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/49882444.jpg?k=4ea74b753d9184f821744c73234e44d8143c765e6533929984da37b3a1ac66f9&o=&hp=1",
      },
    ],
    events: [
      {
        time: "06:30 - 07:30",
        type: "visit",
        activity: "Dạo phố cổ Hội An lúc vắng người.",
      },
      {
        time: "07:30 - 08:30",
        type: "food",
        activity: "Ăn sáng: bánh mì Hội An, cao lầu hoặc cơm gà.",
      },
      {
        time: "08:45 - 10:00",
        type: "visit",
        activity: "Làng gốm Thanh Hà hoặc làng rau Trà Quế.",
      },
      {
        time: "10:00 - 11:00",
        type: "transport",
        activity: "Di chuyển Hội An ra sân bay Đà Nẵng.",
      },
      {
        time: "12:00 - 13:30",
        type: "transport",
        activity: "Bay Đà Nẵng ra Hà Nội.",
      },
      {
        time: "14:00 - 16:30",
        type: "transport",
        activity: "Di chuyển Hà Nội đến Ninh Bình.",
      },
      {
        time: "17:00 - 18:00",
        type: "break",
        activity: "Check-in khách sạn hoặc homestay.",
      },
      {
        time: "18:30 - 20:00",
        type: "food",
        activity: "Ăn tối: dê núi và cơm cháy Ninh Bình.",
      },
    ],
  },
  {
    day: 6,
    title: "Ninh Bình → Hạ Long → Hà Nội",
    goal: "Tham quan Ninh Bình buổi sáng, chiều check-in Hạ Long, tối về Hà Nội.",
    stay: "Hà Nội",
    recommendation:
      "Ngày này khá dài, nên thuê xe riêng để chủ động thời gian và giúp mẹ đỡ mệt.",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Halong%20Bay%20in%20Vietnam.jpg?width=1200",
    knowledge: {
      title: "Báu vật thiên nhiên",
      content:
        "Vịnh Hạ Long với hàng ngàn đảo đá vôi kỳ vĩ là kết quả của quá trình vận động địa chất hàng triệu năm. Cái tên Hạ Long gắn liền với truyền thuyết rồng đáp xuống để bảo vệ vùng biển đảo của tổ tiên người Việt.",
    },
    extraSuggestions: [
      {
        name: "Vịnh Hạ Long",
        type: "Di sản",
        desc: "Biểu tượng du lịch Quảng Ninh với hệ thống đảo đá vôi và mặt nước xanh.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Halong%20Bay%20in%20Vietnam.jpg?width=1200",
      },
      {
        name: "Bãi Cháy",
        type: "Biển",
        desc: "Khu vực trung tâm du lịch Hạ Long, phù hợp check-in nhanh buổi chiều.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bai%20Chay%20beach%2C%20Ha%20Long%2C%20Vietnam%2C%2020240129%200915%203958.jpg?width=800",
      },
      {
        name: "Cầu Bãi Cháy",
        type: "Biểu tượng",
        desc: "Cầu dây văng nổi bật nối khu Bãi Cháy và Hòn Gai.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bai%20Chay%20Bridge-Halong%20Vietnam-Andres%20Larin.jpg?width=800",
      },
    ],
    foodSuggestions: [
      {
        name: "Bánh cuốn chả mực Hạ Long",
        restaurantName: "Bánh cuốn chả mực Bà Ngân",
        address: "34 Đoàn Thị Điểm, Bạch Đằng, TP. Hạ Long, Quảng Ninh",
        type: "Đặc sản Hạ Long",
        averagePrice: "Từ khoảng 35.000 VNĐ/suất",
        averagePriceValue: 35000,
        popularNote:
          "Món nên thử ở Hạ Long nếu muốn ăn nhanh, đúng đặc sản địa phương.",
        desc: "Bánh cuốn nóng ăn cùng chả mực giã tay, phù hợp ăn chiều hoặc ăn nhẹ.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ch%E1%BA%A3%20m%E1%BB%B1c.jpg?width=800",
      },
      {
        name: "Chả mực Hạ Long",
        restaurantName: "Chả mực Thoan / Dasavina / Quang Phong",
        address: "Khu vực chợ Hạ Long và các cửa hàng đặc sản Hạ Long",
        type: "Đặc sản mua quà",
        averagePrice: "Khoảng 450.000 - 550.000 VNĐ/kg",
        averagePriceValue: 500000,
        popularNote:
          "Phù hợp mua làm quà, nên chọn loại giã tay và hỏi rõ giá theo kg.",
        desc: "Chả mực giã tay là đặc sản nổi tiếng Quảng Ninh.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ch%E1%BA%A3%20m%E1%BB%B1c.jpg?width=800",
      },
      {
        name: "Bún chả Hà Nội",
        restaurantName: "Bún chả Hương Liên",
        address: "24 Lê Văn Hưu, Hai Bà Trưng, Hà Nội",
        type: "Đặc sản Hà Nội",
        averagePrice: "Khoảng 50.000 - 120.000 VNĐ/phần",
        averagePriceValue: 70000,
        popularNote:
          "Quán bún chả nổi tiếng với khách du lịch, hợp ăn tối khi quay về Hà Nội.",
        desc: "Thịt nướng ăn với bún, rau sống và nước mắm chua ngọt.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/B%C3%BAn%20ch%E1%BA%A3%20gia%20truy%E1%BB%81n%2C%202%20Kim%20M%C3%A3%20Th%C6%B0%E1%BB%A3ng%2C%20H%C3%A0%20N%E1%BB%99i%20001.JPG?width=800",
      },
    ],
    hotelSuggestions: [
      {
        name: "La Siesta Classic Ma May Hanoi Hotel",
        address: "94 Mã Mây, Hoàn Kiếm, Hà Nội",
        area: "Phố cổ Hà Nội",
        level: "Tầm trung khá đến cao cấp",
        averagePrice: "Khoảng 1.800.000 - 3.000.000 VNĐ/đêm",
        averagePriceValue: 2400000,
        suitableFor:
          "Gia đình muốn ở khu trung tâm, tiện ăn uống và đi bộ quanh phố cổ.",
        note: "Phù hợp nếu về Hà Nội muộn sau ngày đi Hạ Long, không cần di chuyển xa để ăn tối.",
        image:
          "https://owa.bestprice.vn/images/hotels/uploads/la-siesta-classic-ma-may-602f705fbd203.jpg",
      },
      {
        name: "Hanoi Tirant Hotel",
        address: "36-38-40 Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội",
        area: "Phố cổ Hà Nội",
        level: "Tầm trung khá",
        averagePrice: "Khoảng 1.500.000 - 2.500.000 VNĐ/đêm",
        averagePriceValue: 2000000,
        suitableFor: "Gia đình cần khách sạn trung tâm, dễ gọi xe và ăn uống.",
        note: "Vị trí phù hợp để nghỉ lại sau lịch trình di chuyển dài.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAFno6aYMt0WFqIPvwJ60RpYjOD94j3sf4w&s",
      },
    ],
    events: [
      {
        time: "06:30 - 07:30",
        type: "food",
        activity: "Ăn sáng.",
      },
      {
        time: "07:30 - 10:30",
        type: "visit",
        activity: "Đi Tràng An hoặc Tam Cốc.",
        details: {
          name: "Danh thắng Tràng An",
          image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vietnam%2C%20Ninh%20Binh%2C%20Trang%20An%20River.jpg?width=1200",
          description:
            "Ngồi thuyền nan xuôi dòng nước, xuyên qua các hang động kỳ ảo trong vùng lõi di sản.",
          nextTip:
            "Nếu còn sức, có thể ghé Tam Cốc hoặc cố đô Hoa Lư trước khi đi Hạ Long.",
        },
      },
      {
        time: "10:30 - 11:30",
        type: "visit",
        activity: "Check-in Hang Múa nếu còn sức.",
      },
      {
        time: "11:30 - 12:30",
        type: "food",
        activity: "Ăn trưa: dê núi, cơm cháy.",
      },
      {
        time: "12:30 - 16:00",
        type: "transport",
        activity: "Di chuyển Ninh Bình đến Hạ Long.",
      },
      {
        time: "16:00 - 18:00",
        type: "visit",
        activity: "Check-in Bãi Cháy, cảng tàu, ngắm vịnh Hạ Long.",
      },
      {
        time: "18:00 - 19:00",
        type: "food",
        activity: "Ăn tối: hải sản và chả mực Hạ Long.",
      },
      {
        time: "19:00 - 21:30",
        type: "transport",
        activity: "Di chuyển Hạ Long về Hà Nội.",
      },
    ],
  },
  {
    day: 7,
    title: "Hà Nội → Hà Giang → Hà Nội",
    goal: "Check-in Hà Giang trong ngày, phù hợp khi bắt buộc phải đủ điểm trong tour 7 ngày.",
    stay: "Kết thúc tour hoặc ngủ Hà Nội thêm 1 đêm",
    recommendation:
      "Hà Giang đi trong ngày rất mệt. Nếu đi với mẹ, nên xem đây là điểm check-in nhanh, không nên đi sâu Đồng Văn - Mã Pì Lèng.",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/MaPiLeng%2CHaGiang%2CVietnam.jpg?width=1200",
    knowledge: {
      title: "Con đường Hạnh Phúc",
      content:
        "Hà Giang là vùng đất địa đầu Tổ quốc, nổi tiếng với con đường Hạnh Phúc trên Quốc lộ 4C. Đây là cung đường gắn với núi đá, đèo cao và văn hóa vùng cao phía Bắc.",
    },
    extraSuggestions: [
      {
        name: "Cột mốc Km0 Hà Giang",
        type: "Check-in",
        desc: "Điểm khởi đầu quen thuộc của hành trình khám phá Hà Giang.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ha%20Giang%20Km0%20in%202014%2001.jpg?width=800",
      },
      {
        name: "Đèo Mã Pì Lèng",
        type: "Cung đường",
        desc: "Cung đèo nổi tiếng với cảnh núi đá và thung lũng hùng vĩ.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/MaPiLeng%2CHaGiang%2CVietnam.jpg?width=800",
      },
      {
        name: "Lũng Vài",
        type: "Núi rừng",
        desc: "Cảnh quan núi rừng xanh và không khí vùng cao Hà Giang.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/L%C3%B9ng%20V%C3%A0i%2C%20H%C3%A0%20Giang%2C%20Vietnam%20-%203.jpg?width=800",
      },
    ],
    foodSuggestions: [
      {
        name: "Bánh cuốn trứng Hà Giang",
        restaurantName: "Bánh cuốn Bà Hà",
        address: "Khu phố cổ Đồng Văn, Hà Giang",
        type: "Cao nguyên",
        averagePrice: "Khoảng 25.000 - 45.000 VNĐ/phần",
        averagePriceValue: 35000,
        popularNote:
          "Phù hợp ăn trưa nhẹ khi check-in nhanh ở Hà Giang hoặc Đồng Văn.",
        desc: "Bánh cuốn nóng ăn cùng nước dùng, khác với kiểu bánh cuốn miền xuôi.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Banh_cuon.jpg?width=800",
      },
      {
        name: "Cháo ấu tẩu",
        restaurantName: "Quán Hương / Quán Thùy Linh",
        address: "Khu trung tâm TP. Hà Giang",
        type: "Đặc sản Hà Giang",
        averagePrice: "Khoảng 25.000 - 60.000 VNĐ/tô",
        averagePriceValue: 45000,
        popularNote:
          "Đặc sản nổi tiếng Hà Giang, hợp ăn tối nếu quyết định ngủ lại.",
        desc: "Món cháo đặc trưng vùng cao, vị hơi đắng nhẹ, thường ăn khi trời lạnh.",
        image:
          "https://peacetour.com.vn/Upload/Article/77d649ed-b187-4316-8227-f8f7f657daab/am-thuc-ha-giang-chao-au-tau-2.jpeg",
      },
      {
        name: "Phở Hà Nội",
        restaurantName: "Phở Thìn Bờ Hồ",
        address: "61 Đinh Tiên Hoàng, Hoàn Kiếm, Hà Nội",
        type: "Món sáng Hà Nội",
        averagePrice: "Khoảng 50.000 - 80.000 VNĐ/tô",
        averagePriceValue: 65000,
        popularNote:
          "Phù hợp ăn sáng trước khi đi Hà Giang hoặc ăn nhẹ sau khi quay về Hà Nội.",
        desc: "Phở bò Hà Nội nước dùng thanh, dễ ăn cho lịch trình di chuyển dài.",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ph%E1%BB%9F%20b%C3%B2%2C%20C%E1%BA%A7u%20Gi%E1%BA%A5y%2C%20H%C3%A0%20N%E1%BB%99i.jpg?width=800",
      },
    ],
    hotelSuggestions: [
      {
        name: "Phoenix Hotel Hà Giang",
        address: "92T Nguyễn Trãi, TP. Hà Giang",
        area: "Thành phố Hà Giang",
        level: "Tầm trung khá",
        averagePrice: "Khoảng 900.000 - 1.600.000 VNĐ/đêm",
        averagePriceValue: 1250000,
        suitableFor:
          "Gia đình cần điểm nghỉ lại nếu không muốn quay về Hà Nội trong ngày.",
        note: "Chỉ nên thêm nếu quyết định ngủ lại Hà Giang, vì đi Hà Nội - Hà Giang - Hà Nội trong ngày khá mệt.",
        image:
          "https://mia.vn/media/uploads/blog-du-lich/phoenix-hotel-ha-giang-nghi-duong-tai-lau-dai-ben-song-1-1664336995.jpg",
      },
    ],
    events: [
      {
        time: "04:30 - 05:00",
        type: "transport",
        activity: "Xuất phát từ Hà Nội đi Hà Giang.",
      },
      {
        time: "11:00 - 12:00",
        type: "visit",
        activity: "Đến thành phố Hà Giang.",
      },
      {
        time: "12:00 - 13:00",
        type: "food",
        activity: "Ăn trưa tại Hà Giang.",
      },
      {
        time: "13:00 - 15:00",
        type: "visit",
        activity:
          "Check-in cột mốc Km0 Hà Giang và quảng trường thành phố Hà Giang.",
        details: {
          name: "Cột mốc Km0 Hà Giang",
          image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ha%20Giang%20Km0%20in%202014%2001.jpg?width=800",
          description:
            "Điểm khởi đầu quen thuộc của hành trình khám phá cao nguyên đá Hà Giang.",
          nextTip:
            "Đây là điểm kết thúc hợp lý cho lịch trình 7 ngày nếu đi cùng mẹ, tránh đi quá sâu gây mệt.",
        },
      },
      {
        time: "15:00 - 21:00",
        type: "transport",
        activity: "Di chuyển Hà Giang về Hà Nội.",
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.send("Backend API is running");
});

app.get("/api/itinerary", (req, res) => {
  console.log("Request /api/itinerary");
  console.log("Day 1 image:", itinerary[0]?.image);

  res.json(itinerary);
});

app.listen(PORT, () => {
  console.log(`Backend server is running at http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`GET http://localhost:${PORT}/`);
  console.log(`GET http://localhost:${PORT}/api/itinerary`);
});

module.exports = app; // Hỗ trợ chạy trên Vercel Serverless Function
