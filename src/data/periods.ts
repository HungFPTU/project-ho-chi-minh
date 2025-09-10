export type Period = {
    id: string;
    title: string;
    years: string;
    image: string;
    bullets: string[];
    highlight?: string[];
    gallery?: string[];
  };
  
  export const periods: Period[] = [
    {
      id: "truoc-1911",
      title: "Thời kỳ hình thành tư tưởng yêu nước, thương nòi",
      years: "Trước 1911",
      image: "/images/truoc-1911.png",
      bullets: [
        "Sống ở Huế cùng gia đình; bắt đầu đi học.",
        "Học Quốc học, Hán học; bước đầu tiếp cận văn hoá phương Tây.",
        "Những năm tháng này có ý nghĩa rất quan trọng đối với sự hình thành con người Nguyễn Ái Quốc – Hồ Chí Minh."
      ],
      gallery: [
        "/images/truoc-1911-2.png" ,
        "/images/truoc-1911-3.png",
        "/images/truoc-1911-4.png",
      ],
    },
    {
      id: "1911-1920",
      title: "Tìm tòi con đường cứu nước, giải phóng dân tộc",
      years: "1911 – 1920",
      image: "/images/1911-1920.png",
      bullets: [
        "Bôn ba nhiều châu lục để tìm hiểu các cuộc cách mạng lớn trên thế giới.",
        "Khảo sát đời sống nhân dân các dân tộc bị áp bức.",
        "Năm 1920 tiếp xúc Luận cương của Lênin về vấn đề dân tộc và thuộc địa → tìm thấy con đường cứu nước."
      ],
      gallery: [
        "/images/ra-di-tim-duong-cuu-nuoc.png" ,
        "/images/maxresdefault.png",
        "/images/cuu-nuoc3.png",
      ],
      highlight: [
        "Chuyển biến về chất trong tư tưởng:",
        "Từ chủ nghĩa yêu nước → chủ nghĩa Lênin.",
        "Từ giác ngộ dân tộc → giác ngộ giai cấp.",
        "Từ người yêu nước → người cộng sản."
      ]
    },
    {
      id: "1921-1930",
      title: "Hình thành cơ bản tư tưởng về con đường cách mạng Việt Nam",
      years: "1921 – 1930",
      image: "/images/tu-tuong-hcm.png",
      bullets: [
        "Tham gia Ban nghiên cứu thuộc địa (Đảng Cộng sản Pháp), tham gia sáng lập các tổ chức liên hiệp thuộc địa.",
        "Xuất bản báo *Le Paria* truyền bá chủ nghĩa Mác – Lênin vào các nước thuộc địa.",
        "Năm 1923 sang Mátxcơva dự các đại hội Quốc tế.",
        "Cuối 1924 về Quảng Châu: sáng lập Hội Việt Nam Cách mạng Thanh niên, mở lớp huấn luyện, đào tạo cán bộ.",
        "Tháng 2/1930: chủ trì hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam.",
        "Trực tiếp thảo *Chánh cương vắn tắt, Sách lược vắn tắt, Chương trình và Điều lệ vắn tắt*; cùng với *Bản án chế độ thực dân Pháp* (1925), *Đường Kách mệnh* (1927)."
      ],
      gallery: [
        "/images/1921-1930-2.png" ,
        "/images/1921-1930-3.png",
        "/images/1921-1930-4.png",
      ],
    },
    {
      id: "1930-1945",
      title: "Thử thách, kiên trì giữ vững quan điểm độc lập dân tộc",
      years: "1930 – 1945",
      image: "/images/1930-1945.webp",
      bullets: [
        "Quốc tế Cộng sản thời kỳ đầu chưa nắm thực tế thuộc địa ở phương Đông; ảnh hưởng khuynh hướng 'tả'.",
        "Hội nghị TW 10/1930 đổi tên ĐCSVN thành ĐCS Đông Dương; có lúc thủ tiêu một số văn kiện vắn tắt.",
        "Từ 1936, Đảng đề ra sách lược mới, phê phán khuynh hướng 'tả' cực đoan; thực chất là trở lại *Chánh cương vắn tắt, Sách lược vắn tắt*.",
        "11/1939, Nghị quyết TW khẳng định: đặt vấn đề giải phóng dân tộc, quyền lợi dân tộc lên tối cao.",
        "Kết quả được kiểm chứng bằng thắng lợi Cách mạng Tháng Tám 1945."
      ]
    },
    {
      id: "1945-1969",
      title: "Kháng chiến và kiến quốc; tư tưởng tiếp tục phát triển",
      years: "1945 – 1969",
      image: "/images/1945-1969.png",
      bullets: [
        "Lãnh đạo kháng chiến chống xâm lược, xây dựng Nhà nước dân chủ nhân dân.",
        "Kết hợp nhiệm vụ chiến đấu, đối ngoại, xây dựng kinh tế – xã hội.",
        "Di chúc (1969) kết tinh tư tưởng Hồ Chí Minh, định hướng cho tương lai dân tộc."
      ]
    }
  ];
  