/**
 * Toàn bộ nội dung chữ của trang, theo 2 ngôn ngữ.
 * Muốn sửa nội dung thì sửa ở đây — không cần đụng vào component.
 */

export const profile = {
  name: "Trần Huỳnh Gia Khang",
  email: "tranhuynhgiakhangaie@gmail.com",
  github: "https://github.com/GiaKhangCode", // TODO: kiểm tra lại username
  linkedin: "https://www.linkedin.com/in/khang-tran-huynh-gia-ai-engineer/",
};

/** Thứ tự các section có tiêu đề — số 01, 02… và menu được sinh từ đây */
export const sectionOrder = ["about", "skills", "certs", "projects", "contact"] as const;
export type SectionId = (typeof sectionOrder)[number];

const vi = {
  nav: {
    about: "Giới thiệu",
    skills: "Kỹ năng",
    certs: "Chứng chỉ",
    projects: "Dự án",
    cta: "Liên hệ",
    menu: "Mở menu",
    close: "Đóng menu",
  },
  hero: {
    hello: "Xin chào, tôi là",
    first: "Gia Khang",
    roleAccent: "AI",
    roleRest: "Engineer",
    rolePrefix: "Định hướng",
    intro:
      "Sinh viên năm 3 ngành Hệ thống thông tin tại UIT, ĐHQG‑HCM. Tôi đang học cách biến mô hình ngôn ngữ lớn thành sản phẩm thực tế.",
    ctaPrimary: "Liên hệ với tôi",
    ctaSecondary: "GitHub",
    themeToLight: "Chuyển sang giao diện sáng",
    themeToDark: "Chuyển sang giao diện tối",
    chatQ: "Học phí khóa Python cơ bản là bao nhiêu?",
    chatA: "Đã tìm thấy 3 tài liệu liên quan…",
    photoAlt: "Ảnh chân dung Trần Huỳnh Gia Khang",
  },
  stats: [
    { value: "04", suffix: "", label: "học kỳ đạt loại Xuất sắc" },
    { value: "03", suffix: "", label: "lần liên tiếp nhận học bổng Khuyến khích học tập" },
    { value: "9.3", suffix: "/10", label: "GPA ngành Hệ thống thông tin · ĐHQG‑HCM" },
  ],
  about: {
    kicker: "Giới thiệu",
    title: "Tôi quan tâm đến phần việc nằm quanh mô hình AI.",
    // **...** = từ khóa được tô nổi bật
    p1: "Mô hình chỉ là một phần của bài toán. Phần còn lại — dữ liệu được tổ chức ra sao, **truy xuất thế nào cho đúng**, và đóng gói thành dịch vụ như thế nào — mới quyết định một ứng dụng AI có thật sự hữu ích hay không.",
    p2: "Nền tảng **cơ sở dữ liệu** từ ngành học khiến tôi thường tiếp cận bài toán AI từ phía dữ liệu trước, rồi mới đến mô hình.",
    hobbyLabel: "Ngoài giờ học",
    hobbyTitle: "Cầu lông",
    hobby: "Cách tốt nhất tôi biết để rời màn hình và gặp bạn bè.",
    profile: {
      location: "TP. Hồ Chí Minh",
      school: "UIT — ĐHQG-HCM",
      major: "Hệ thống thông tin",
      status: "Đang tìm thực tập",
    },
  },
  skills: {
    kicker: "Kỹ năng",
    title: "Bộ công cụ tôi đang dùng.",
    groups: {
      llm: "LLM & AI",
      ml: "Machine Learning",
      backend: "Backend & Công cụ",
      db: "Cơ sở dữ liệu",
      lang: "Ngôn ngữ",
    },
    hint: "Nhấn thử một phím",
    idle: "nhấn một phím bất kỳ…",
    space: "ngôn ngữ chính",
  },
  certs: {
    kicker: "Chứng chỉ",
    title: "Những gì tôi học thêm ngoài giảng đường.",
    issued: "Ngày cấp",
    id: "Mã chứng chỉ",
    skills: "Kỹ năng",
    view: "Xem chứng chỉ",
  },
  projects: {
    kicker: "Dự án",
    title: "Đang được xây dựng.",
    empty: "Các dự án đang được hoàn thiện và sẽ sớm xuất hiện ở đây.",
    cta: "Theo dõi trên GitHub",
  },
  contact: {
    kicker: "Liên hệ",
    title: "Cùng trao đổi nhé.",
    lead: "Có cơ hội thực tập hay dự án AI muốn trao đổi? Viết cho tôi ngay tại đây, hoặc tìm tôi qua các kênh bên dưới.",
    copy: "Sao chép",
    copied: "Đã chép!",
    linksLabel: "Hoặc tìm tôi ở",
    newMsg: "Thư mới",
    to: "Đến",
    subject: "Tiêu đề",
    subjectPh: "Bạn muốn trao đổi về điều gì?",
    bodyPh: "Xin chào Khang,\n\n",
    presets: ["Cơ hội thực tập", "Hợp tác dự án", "Chỉ muốn chào"],
    send: "Gửi",
    sendHint: "Mở bằng ứng dụng email của bạn",
  },
  footer: {
    place: "TP. Hồ Chí Minh",
    top: "Lên đầu trang",
  },
  langSwitch: "Switch to English",
};

export type Dict = typeof vi;

const en: Dict = {
  nav: {
    about: "About",
    skills: "Skills",
    certs: "Certificates",
    projects: "Projects",
    cta: "Get in touch",
    menu: "Open menu",
    close: "Close menu",
  },
  hero: {
    hello: "Hi there, I’m",
    first: "Gia Khang",
    roleAccent: "AI",
    roleRest: "Engineer",
    rolePrefix: "Aspiring",
    intro:
      "Third-year Information Systems student at UIT, VNU‑HCM. I’m learning how to turn large language models into real products.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "GitHub",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    chatQ: "How much is the intro Python course?",
    chatA: "Found 3 relevant documents…",
    photoAlt: "Portrait of Trần Huỳnh Gia Khang",
  },
  stats: [
    { value: "04", suffix: "", label: "semesters with Excellent academic standing" },
    { value: "03", suffix: "", label: "consecutive Academic Encouragement scholarships" },
    { value: "9.3", suffix: "/10", label: "GPA in Information Systems · VNU‑HCM" },
  ],
  about: {
    kicker: "About",
    title: "I care about the work that surrounds the model.",
    p1: "The model is only part of the problem. The rest — how data is organised, **how to retrieve the right piece of it**, and how it’s packaged into a service — decides whether an AI application is actually useful.",
    p2: "My **database** background from university means I usually approach an AI problem from the data side first, and only then the model.",
    hobbyLabel: "Outside of class",
    hobbyTitle: "Badminton",
    hobby: "The best way I know to step away from the screen and catch up with friends.",
    profile: {
      location: "Ho Chi Minh City",
      school: "UIT — VNU-HCM",
      major: "Information Systems",
      status: "Open to internships",
    },
  },
  skills: {
    kicker: "Skills",
    title: "The toolkit I work with.",
    groups: {
      llm: "LLM & AI",
      ml: "Machine Learning",
      backend: "Backend & Tools",
      db: "Databases",
      lang: "Languages",
    },
    hint: "Go on, press a key",
    idle: "press any key…",
    space: "main language",
  },
  certs: {
    kicker: "Certificates",
    title: "What I’ve learned beyond the classroom.",
    issued: "Issued",
    id: "Credential ID",
    skills: "Skills",
    view: "Show credential",
  },
  projects: {
    kicker: "Projects",
    title: "Under construction.",
    empty: "Projects are being polished and will show up here soon.",
    cta: "Follow along on GitHub",
  },
  contact: {
    kicker: "Contact",
    title: "Let’s talk.",
    lead: "Have an internship or an AI project in mind? Write to me right here, or reach me through the channels below.",
    copy: "Copy",
    copied: "Copied!",
    linksLabel: "Or find me on",
    newMsg: "New message",
    to: "To",
    subject: "Subject",
    subjectPh: "What would you like to talk about?",
    bodyPh: "Hi Khang,\n\n",
    presets: ["Internship opportunity", "Project collaboration", "Just saying hi"],
    send: "Send",
    sendHint: "Opens in your email app",
  },
  footer: {
    place: "Ho Chi Minh City",
    top: "Back to top",
  },
  langSwitch: "Chuyển sang tiếng Việt",
};

export const dictionaries = { vi, en };
export type Lang = keyof typeof dictionaries;

export const skills = {
  llm: ["Prompt Engineering", "RAG", "Multi-Agent"],
  ml: ["TensorFlow", "scikit-learn", "NumPy", "Pandas"],
  backend: ["FastAPI", "Git", "Docker"],
  db: ["SQL Server", "Oracle"],
  lang: ["Python", "SQL"],
};

/** Chứng chỉ — mới nhất đặt trước. date dạng "YYYY-MM". */
export const certificates = [
  {
    name: "Google AI Professional Certificate",
    issuer: "Google",
    platform: "Coursera",
    date: "2026-11",
    id: "9F54FR6XWC05",
    url: "https://www.coursera.org/account/accomplishments/specialization/9F54FR6XWC05",
    skills: ["Generative AI Day-to-Day Practice", "Artificial Intelligence (AI)", "Vibe Coding"],
  },
  {
    name: "Google Prompting Essentials Specialization",
    issuer: "Google",
    platform: "Coursera",
    date: "2026-10",
    id: "1GUJM91PDD78",
    url: "https://www.coursera.org/account/accomplishments/specialization/1GUJM91PDD78",
    skills: ["Prompt Engineering", "Artificial Intelligence (AI)"],
  },
];
