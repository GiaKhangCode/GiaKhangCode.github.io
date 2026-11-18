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

const vi = {
  nav: {
    about: "Giới thiệu",
    skills: "Kỹ năng",
    certs: "Chứng chỉ",
    projects: "Dự án",
    contact: "Liên hệ",
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
      "Sinh viên năm 3 ngành Hệ thống thông tin tại UIT. Tôi đang học cách đưa mô hình ngôn ngữ lớn vào những sản phẩm dùng được — từ truy xuất dữ liệu đến API phía sau.",
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
    p1: "Tôi là sinh viên năm ba ngành **Hệ thống thông tin** tại Trường Đại học Công nghệ Thông tin, ĐHQG-HCM. Điều tôi thấy thú vị nhất ở AI không chỉ là mô hình, mà là mọi thứ xung quanh nó: dữ liệu được tổ chức ra sao, **truy xuất thế nào cho đúng**, và đóng gói thành dịch vụ để người khác thực sự dùng được.",
    p2: "Hiện tại tôi tập trung vào **Python**, các kỹ thuật **RAG** và hệ thống **multi-agent**, cùng với **FastAPI** để xây phần backend. Nền tảng cơ sở dữ liệu từ ngành học giúp tôi nhìn bài toán AI từ góc độ dữ liệu trước.",
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
    llmNote: "Trọng tâm hiện tại",
    hint: "Nhấn thử một phím",
    idle: "nhấn một phím bất kỳ…",
    space: "ngôn ngữ chính",
    focusTag: "trọng tâm",
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
    lead: "Tôi đang tìm cơ hội thực tập và các dự án liên quan đến AI. Cách nhanh nhất để liên lạc với tôi là qua email — bạn có thể viết ngay ở khung bên cạnh.",
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
    contact: "Contact",
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
      "Third-year Information Systems student at UIT. I’m learning how to turn large language models into products people can actually use — from retrieval to the API behind it.",
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
    p1: "I’m a third-year **Information Systems** student at the University of Information Technology, VNU-HCM. What draws me to AI isn’t only the models, but everything around them: how data is organised, **how to retrieve the right piece of it**, and how to package it into a service other people can really use.",
    p2: "Right now I’m focused on **Python**, **RAG** techniques and **multi-agent** systems, with **FastAPI** on the backend. My database background from university makes me look at AI problems from the data side first.",
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
    llmNote: "Current focus",
    hint: "Go on, press a key",
    idle: "press any key…",
    space: "main language",
    focusTag: "focus",
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
    lead: "I’m looking for internships and AI-related projects. Email is the fastest way to reach me — you can start writing right here.",
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
