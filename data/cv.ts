// All CV content lives here. Edit this file to update the site.
// Fields marked TODO are placeholders: replace them with your real details.

export type Lang = 'en' | 'vi';

type Localized = Record<Lang, string>;
type LocalizedList = Record<Lang, string[]>;

export type Job = {
  company: string;
  role: Localized;
  start: string;
  end: string | null;
  summary: Localized;
  highlights: LocalizedList;
  stack: string[];
};

export type SkillGroup = {
  title: Localized;
  items: string[];
};

export const profile = {
  name: 'Your Name', // TODO
  title: {
    en: 'Frontend Web Developer',
    vi: 'Lập trình viên Frontend Web',
  },
  location: { en: 'Hanoi, Vietnam', vi: 'Hà Nội, Việt Nam' }, // TODO: check city
  email: 'your.email@example.com', // TODO
  phone: '+84 000 000 000', // TODO
  github: 'https://github.com/yentacute',
  linkedin: 'https://www.linkedin.com/in/your-profile', // TODO
  summary: {
    en: 'Frontend developer with 6 years of experience building web products with Vue.js, React and vanilla JavaScript. Spent the first years crafting custom, pixel-perfect Shopify and BigCommerce themes for international clients, and the last years building internal business applications with Vue.js and React. Comfortable turning designs into fast, maintainable interfaces and working directly with clients abroad.',
    vi: 'Lập trình viên Frontend với 6 năm kinh nghiệm phát triển web bằng Vue.js, React và JavaScript thuần. Những năm đầu chuyên xây dựng và tuỳ biến theme Shopify, BigCommerce chuẩn pixel-perfect cho khách hàng nước ngoài; những năm gần đây phát triển các hệ thống web nội bộ bằng Vue.js và React. Thành thạo chuyển thiết kế thành giao diện nhanh, dễ bảo trì và quen làm việc trực tiếp với khách hàng quốc tế.',
  } satisfies Localized,
};

export const experience: Job[] = [
  {
    company: 'F88',
    role: { en: 'Frontend Developer', vi: 'Lập trình viên Frontend' },
    start: '2024-10',
    end: null,
    summary: {
      en: 'Building internal web applications for one of Vietnam’s largest consumer finance chains.',
      vi: 'Xây dựng các ứng dụng web nội bộ cho một trong những chuỗi tài chính tiêu dùng lớn nhất Việt Nam.',
    },
    highlights: {
      en: [
        'Develop and maintain internal business tools with Vue.js and React.',
        'Build reusable UI components and forms shared across modules.',
        'Integrate REST APIs and collaborate with backend, QA and business teams.',
      ],
      vi: [
        'Phát triển và bảo trì các công cụ nghiệp vụ nội bộ bằng Vue.js và React.',
        'Xây dựng component và form dùng chung giữa các module.',
        'Tích hợp REST API, phối hợp với đội backend, QA và nghiệp vụ.',
      ],
    },
    stack: ['Vue.js', 'React', 'TypeScript', 'REST API'],
  },
  {
    company: 'Insight Customer',
    role: { en: 'Shopify Theme Developer', vi: 'Lập trình viên Shopify Theme' },
    start: '2023-12',
    end: '2024-09',
    summary: {
      en: 'Developed Shopify themes and provided technical support for merchants.',
      vi: 'Phát triển theme Shopify và hỗ trợ kỹ thuật cho khách hàng.',
    },
    highlights: {
      en: [
        'Customized Shopify themes (Liquid, sections, metafields) to merchant requirements.',
        'Supported clients directly: troubleshooting store issues and delivering fixes quickly.',
      ],
      vi: [
        'Tuỳ biến theme Shopify (Liquid, sections, metafields) theo yêu cầu của merchant.',
        'Hỗ trợ khách hàng trực tiếp: xử lý sự cố cửa hàng và sửa lỗi nhanh chóng.',
      ],
    },
    stack: ['Shopify', 'Liquid', 'JavaScript', 'SCSS'],
  },
  {
    company: 'IOTLink',
    role: { en: 'Frontend Developer (Vue.js)', vi: 'Lập trình viên Frontend (Vue.js)' },
    start: '2022-10',
    end: '2023-11',
    summary: {
      en: 'Built internal projects with Vue.js.',
      vi: 'Xây dựng các dự án nội bộ bằng Vue.js.',
    },
    highlights: {
      en: [
        'Developed internal web applications from scratch with Vue.js.',
        'Structured state management, routing and reusable components.',
      ],
      vi: [
        'Phát triển các ứng dụng web nội bộ từ đầu bằng Vue.js.',
        'Tổ chức quản lý state, routing và component tái sử dụng.',
      ],
    },
    stack: ['Vue.js', 'Vuex/Pinia', 'Vue Router', 'JavaScript'],
  },
  {
    company: 'AHT Tech JSC',
    role: { en: 'Frontend Developer (Shopify / BigCommerce)', vi: 'Lập trình viên Frontend (Shopify / BigCommerce)' },
    start: '2020-01',
    end: '2022-09',
    summary: {
      en: 'Built and customized e-commerce themes for international clients.',
      vi: 'Xây dựng và tuỳ biến theme thương mại điện tử cho khách hàng nước ngoài.',
    },
    highlights: {
      en: [
        'Customized Shopify themes to each client’s business needs.',
        'Developed BigCommerce storefronts (Stencil).',
        'Converted designs into pixel-perfect, responsive pages.',
        'Communicated directly with foreign clients on requirements and feedback.',
      ],
      vi: [
        'Tuỳ biến theme Shopify theo nhu cầu kinh doanh của từng khách hàng.',
        'Phát triển storefront BigCommerce (Stencil).',
        'Cắt giao diện từ thiết kế chuẩn pixel-perfect, responsive.',
        'Trao đổi trực tiếp với khách hàng nước ngoài về yêu cầu và phản hồi.',
      ],
    },
    stack: ['Shopify', 'Liquid', 'BigCommerce', 'HTML/CSS', 'JavaScript', 'jQuery'],
  },
];

export const skills: SkillGroup[] = [
  {
    title: { en: 'Frameworks', vi: 'Framework' },
    items: ['Vue.js', 'React', 'Next.js', 'Vanilla JavaScript'],
  },
  {
    title: { en: 'Languages', vi: 'Ngôn ngữ' },
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 / SCSS'],
  },
  {
    title: { en: 'E-commerce', vi: 'Thương mại điện tử' },
    items: ['Shopify Theme (Liquid)', 'BigCommerce (Stencil)'],
  },
  {
    title: { en: 'Practices & tools', vi: 'Kỹ năng & công cụ' },
    items: ['Pixel-perfect UI', 'Responsive design', 'REST API', 'Git', 'Figma'],
  },
];

export const languages: { name: Localized; level: Localized }[] = [
  { name: { en: 'Vietnamese', vi: 'Tiếng Việt' }, level: { en: 'Native', vi: 'Bản ngữ' } },
  { name: { en: 'English', vi: 'Tiếng Anh' }, level: { en: 'Basic working proficiency', vi: 'Giao tiếp cơ bản' } },
];

export const strengths: LocalizedList = {
  en: [
    '6 years of hands-on frontend experience',
    'Experience working with international clients',
    'Strong eye for detail: pixel-perfect delivery',
  ],
  vi: [
    '6 năm kinh nghiệm thực tế về frontend',
    'Có kinh nghiệm làm việc với khách hàng nước ngoài',
    'Tỉ mỉ, giao diện chuẩn pixel-perfect',
  ],
};

export const labels = {
  summary: { en: 'Profile', vi: 'Giới thiệu' },
  experience: { en: 'Experience', vi: 'Kinh nghiệm làm việc' },
  skills: { en: 'Skills', vi: 'Kỹ năng' },
  languages: { en: 'Languages', vi: 'Ngoại ngữ' },
  strengths: { en: 'Highlights', vi: 'Điểm nổi bật' },
  contact: { en: 'Contact', vi: 'Liên hệ' },
  present: { en: 'Present', vi: 'Hiện tại' },
  print: { en: 'Download PDF', vi: 'Tải PDF' },
  yearsExp: { en: 'years of experience', vi: 'năm kinh nghiệm' },
} satisfies Record<string, Localized>;
