export type RubricItem = {
    id: string;
    title: string;
    details?: string;
    maxPoints: number;
  };
  
  export const rubricItems: RubricItem[] = [
    {
      id: "reason",
      title: "Trình bày lý do chọn sản phẩm",
      details:
        "Đi từ ý nghĩa thực tiễn xã hội, ý nghĩa lý luận.",
      maxPoints: 1,
    },
    {
      id: "content-link",
      title: "Trình bày sản phẩm gắn với lý thuyết",
      details:
        "Thể hiện rõ sự liên kết giữa sản phẩm và nội dung bài học; phải là sản phẩm cụ thể, rõ ràng.",
      maxPoints: 5,
    },
  

    {
      id: "creativity",
      title: "Tính sáng tạo & giá trị ứng dụng",
      details: "Ý tưởng mới, khác biệt; khả năng áp dụng thực tế.",
      maxPoints: 2,
    },
    {
      id: "visual",
      title: "Hình ảnh minh họa & trình bày",
      details: "Bố cục rõ ràng, hình ảnh phù hợp, có chú thích/nguồn.",
      maxPoints: 1,
    },
    {
      id: "delivery",
      title: "Thuyết trình & thời lượng",
      details: "Diễn đạt mạch lạc, đúng **20 phút** tổng; phân vai hợp lý.",
      maxPoints: 1,
    },
  ];
  