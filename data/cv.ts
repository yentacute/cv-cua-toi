// All CV content lives here. Edit this file to update the site.

export type Lang = 'en' | 'vi';

type Localized = Record<Lang, string>;
type LocalizedList = Record<Lang, string[]>;

export type LinkItem = { label: string; url: string };

export type Job = {
  company: string;
  role: Localized;
  start: string;
  end: string | null;
  summary: Localized;
  highlights: LocalizedList;
  stack: string[];
  links?: { title: Localized; items: LinkItem[] };
};

export type Project = {
  name: string;
  url?: string;
  period: string;
  client: Localized;
  teamSize: number;
  description: Localized;
  responsibilities: LocalizedList;
  stack: string[];
};

export type SkillGroup = {
  title: Localized;
  items: string[];
};

export const profile = {
  name: 'Trần Thị Yên',
  title: {
    en: 'Frontend Web Developer',
    vi: 'Lập trình viên Frontend Web',
  },
  location: { en: 'Hanoi, Vietnam', vi: 'Hà Nội, Việt Nam' },
  email: 'lanyentran@gmail.com',
  phone: '0899 264 583',
  github: 'https://github.com/yentacute',
  // Optional: add your LinkedIn URL here to show it in the header.
  linkedin: '',
  summary: {
    en: 'Frontend developer with 5+ years of experience building web products with Vue.js, React and vanilla JavaScript. Started by crafting pixel-perfect Shopify, BigCommerce and Magento storefronts for clients in Australia and Europe, then moved on to building internal business systems (dashboards, ERP/MES tools) with Vue.js and React. Detail-oriented, quick to pick up new technologies, and used to working directly with international clients to clarify requirements and ship on time.',
    vi: 'Lập trình viên Frontend với hơn 5 năm kinh nghiệm phát triển web bằng Vue.js, React và JavaScript thuần. Bắt đầu với việc xây dựng giao diện Shopify, BigCommerce, Magento chuẩn pixel-perfect cho khách hàng Úc và châu Âu, sau đó phát triển các hệ thống nội bộ (dashboard, công cụ ERP/MES) bằng Vue.js và React. Tỉ mỉ, học công nghệ mới nhanh, quen làm việc trực tiếp với khách hàng nước ngoài để làm rõ yêu cầu và bàn giao đúng hạn.',
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
    company: 'Insights',
    role: { en: 'Front End Developer', vi: 'Lập trình viên Front End' },
    start: '2023-12',
    end: '2024-09',
    summary: {
      en: 'Developed the company’s own Shopify themes sold to merchants worldwide, and supported theme customers.',
      vi: 'Phát triển các Shopify theme của công ty bán cho merchant trên toàn thế giới và hỗ trợ khách hàng sử dụng theme.',
    },
    highlights: {
      en: [
        'Built theme features with HTML/CSS, Liquid, JavaScript and SCSS, following Figma designs.',
        'Created new features and optimized existing ones across several commercial themes.',
        'Supported customers with the issues they faced and worked with the team to find solutions.',
      ],
      vi: [
        'Phát triển tính năng theme bằng HTML/CSS, Liquid, JavaScript, SCSS theo thiết kế Figma.',
        'Làm tính năng mới và tối ưu tính năng có sẵn trên nhiều theme thương mại.',
        'Hỗ trợ khách hàng xử lý sự cố, phối hợp với team để tìm giải pháp.',
      ],
    },
    stack: ['HTML/CSS', 'Liquid', 'JavaScript', 'SCSS', 'Figma'],
    links: { title: { en: 'Products', vi: 'Sản phẩm' }, items: [
      { label: 'Minimog', url: 'https://themeforest.net/item/minimog-the-high-converting-shopify-theme/33380968' },
      { label: 'Zest', url: 'https://themes.shopify.com/themes/zest/styles/flairy/preview' },
      { label: 'Megamog', url: 'https://demo.megamog.co/' },
    ] },
  },
  {
    company: 'IOTLink',
    role: { en: 'Front End Developer', vi: 'Lập trình viên Front End' },
    start: '2023-01',
    end: '2023-11',
    summary: {
      en: 'Developed projects with Vue 2/3, including ERP and MES systems.',
      vi: 'Phát triển các dự án bằng Vue 2/3, bao gồm hệ thống ERP và MES.',
    },
    highlights: {
      en: [
        'Developed projects with HTML/CSS, Vue 2/3, JavaScript and SCSS.',
        'Created new features and optimized existing ones following Figma designs.',
        'Supported customers with their issues and worked with the team to implement tasks and find solutions.',
        'Worked with ERP and MES systems.',
      ],
      vi: [
        'Phát triển dự án bằng HTML/CSS, Vue 2/3, JavaScript, SCSS.',
        'Làm tính năng mới và tối ưu tính năng có sẵn theo thiết kế Figma.',
        'Hỗ trợ khách hàng xử lý vấn đề, phối hợp với team triển khai task và tìm giải pháp.',
        'Làm việc với hệ thống ERP, MES.',
      ],
    },
    stack: ['HTML/CSS', 'Vue 2/3', 'JavaScript', 'SCSS', 'Figma'],
  },
  {
    company: 'AHT Tech JSC',
    role: { en: 'Front End Developer', vi: 'Lập trình viên Front End' },
    start: '2021-03',
    end: '2022-12',
    summary: {
      en: 'Developed UI on Shopify and BigCommerce platforms based on designs.',
      vi: 'Phát triển giao diện trên nền tảng Shopify và BigCommerce theo thiết kế.',
    },
    highlights: {
      en: [
        'Developed Shopify and BigCommerce UIs from designs with HTML/CSS, Liquid, JavaScript/jQuery and SCSS.',
        'Created BigCommerce features with its API, pixel-perfect to the design; fetched APIs to update forms.',
        'Created theme-settings options so clients could change content themselves; styled several Magento projects.',
        'Maintained code daily, debugged issues and solved client problems on schedule.',
      ],
      vi: [
        'Cắt giao diện Shopify, BigCommerce từ thiết kế bằng HTML/CSS, Liquid, JavaScript/jQuery, SCSS.',
        'Làm tính năng BigCommerce bằng API, chuẩn pixel-perfect; gọi API để cập nhật form.',
        'Tạo các tuỳ chọn theme settings để khách hàng tự thay đổi nội dung; style cho một số dự án Magento.',
        'Bảo trì code hằng ngày, debug và xử lý vấn đề của khách hàng đúng hạn.',
      ],
    },
    stack: ['HTML/CSS', 'Liquid', 'JavaScript/jQuery', 'SCSS', 'Shopify', 'BigCommerce'],
    links: { title: { en: 'Projects', vi: 'Dự án' }, items: [
      { label: 'bamboozld.com.au', url: 'https://www.bamboozld.com.au/' },
      { label: 'restorationonline.com.au', url: 'https://www.restorationonline.com.au' },
      { label: 'ecostork.com.au', url: 'https://ecostork.com.au/' },
      { label: 'morfars.dk', url: 'https://morfars.dk/' },
      { label: 'kiannamagelaki.com', url: 'https://kiannamagelaki.com/' },
      { label: 'piksters.com', url: 'https://piksters.com/' },
    ] },
  },
];

export const projects: Project[] = [
  {
    name: 'Industrial Zone Management',
    period: '01/2023 – 05/2023',
    client: { en: 'Vietnam', vi: 'Việt Nam' },
    teamSize: 6,
    description: {
      en: 'Management system for an industrial zone.',
      vi: 'Hệ thống quản lý khu công nghiệp.',
    },
    responsibilities: {
      en: [
        'Built the layout and dashboard features: data management, map, users and roles; built the homepage.',
        'Worked with Django APIs to build frontend features; clarified requirements with customers and teammates.',
        'Researched project technologies; maintained, optimized code and fixed bugs.',
      ],
      vi: [
        'Làm layout và tính năng dashboard: quản lý dữ liệu, bản đồ, người dùng, phân quyền; làm trang chủ.',
        'Làm việc với API Django để xây dựng tính năng frontend; làm rõ yêu cầu với khách hàng và team.',
        'Tìm hiểu công nghệ dự án; bảo trì, tối ưu code, sửa lỗi.',
      ],
    },
    stack: ['HTML', 'JavaScript', 'jQuery', 'Bootstrap', 'Axios', 'Vue 2/3', 'Fetch API'],
  },
  {
    name: 'Piksters',
    url: 'https://piksters.com/',
    period: '05/2022 – 10/2022',
    client: { en: 'Australia', vi: 'Úc' },
    teamSize: 4,
    description: {
      en: 'Online store selling medicine products; customers buy online, register and view order details (B2B and B2C accounts).',
      vi: 'Website bán thuốc; khách hàng mua online, đăng ký tài khoản, xem chi tiết đơn hàng (tài khoản B2B và B2C).',
    },
    responsibilities: {
      en: [
        'Pixel-perfect layouts from PSD on desktop, tablet and mobile.',
        'Built the category page, a custom jQuery search and a product quick-view popup.',
      ],
      vi: [
        'Cắt layout pixel-perfect từ PSD trên desktop, tablet, mobile.',
        'Làm trang danh mục, chức năng tìm kiếm tuỳ biến bằng jQuery và popup xem nhanh sản phẩm.',
      ],
    },
    stack: ['HTML', 'JavaScript', 'jQuery', 'Bootstrap', 'GraphQL', 'Liquid'],
  },
  {
    name: 'Karolina York',
    period: '03/2022 – 08/2022',
    client: { en: 'Australia', vi: 'Úc' },
    teamSize: 4,
    description: {
      en: 'Online store; customers buy online, register and view order details (B2B and B2C accounts).',
      vi: 'Website bán hàng; khách hàng mua online, đăng ký tài khoản, xem chi tiết đơn hàng (tài khoản B2B và B2C).',
    },
    responsibilities: {
      en: [
        'Owned the homepage layouts, pixel-perfect from PSD across breakpoints.',
        'Fixed bugs on category, product and account settings pages.',
      ],
      vi: [
        'Phụ trách layout trang chủ, chuẩn pixel-perfect theo PSD trên mọi kích thước màn hình.',
        'Sửa lỗi các trang danh mục, sản phẩm, cài đặt tài khoản.',
      ],
    },
    stack: ['HTML', 'CSS', 'jQuery'],
  },
  {
    name: 'Restoration Online',
    url: 'https://www.restorationonline.com.au',
    period: '2021 – 2022',
    client: { en: 'Australia', vi: 'Úc' },
    teamSize: 4,
    description: {
      en: 'Online store; customers buy online, register and view order details.',
      vi: 'Website bán hàng; khách hàng mua online, đăng ký tài khoản, xem chi tiết đơn hàng.',
    },
    responsibilities: {
      en: [
        'Built the homepage with a custom widget API, pixel-perfect to the design.',
        'Styled sign-up/sign-in, shipping, FAQ and product pages; rendered content from custom fields.',
        'Fixed bugs on other sites.',
      ],
      vi: [
        'Làm trang chủ với custom widget API, chuẩn pixel-perfect theo thiết kế.',
        'Style trang đăng ký/đăng nhập, vận chuyển, FAQ, sản phẩm; hiển thị nội dung từ custom fields.',
        'Sửa lỗi ở các site khác.',
      ],
    },
    stack: ['HTML', 'CSS', 'jQuery'],
  },
  {
    name: 'Factory Buys',
    period: '2021 – 10/2021',
    client: { en: 'Australia', vi: 'Úc' },
    teamSize: 5,
    description: {
      en: 'E-commerce website for furniture.',
      vi: 'Website thương mại điện tử bán nội thất.',
    },
    responsibilities: {
      en: [
        'Created sections on the homepage and cart page; researched the technologies used in the project.',
        'Edited installed apps to the customer’s specific requirements.',
        'Worked with the customer and teammates to clarify requirements; maintained, optimized code and fixed bugs.',
      ],
      vi: [
        'Làm section ở trang chủ và trang giỏ hàng; tìm hiểu công nghệ dùng trong dự án.',
        'Chỉnh sửa app được cài theo yêu cầu riêng của khách hàng.',
        'Trao đổi với khách hàng và team để làm rõ yêu cầu; bảo trì, tối ưu code, sửa lỗi.',
      ],
    },
    stack: ['HTML', 'JavaScript', 'jQuery', 'Bootstrap', 'GraphQL', 'Liquid'],
  },
];

export const education = {
  school: 'FPT Polytechnic College',
  major: { en: 'Web Design', vi: 'Thiết kế Web' },
  period: '08/2018 – 01/2021',
  gpa: '7.3/10',
};

export const skills: SkillGroup[] = [
  {
    title: { en: 'Frontend', vi: 'Frontend' },
    items: ['HTML/CSS', 'JavaScript', 'jQuery', 'Vue 2 & 3', 'Pinia', 'React'],
  },
  {
    title: { en: 'Styling', vi: 'Styling' },
    items: ['SCSS', 'Sass', 'Less', 'Bootstrap', 'Tailwind'],
  },
  {
    title: { en: 'E-commerce', vi: 'Thương mại điện tử' },
    items: ['Shopify (Liquid)', 'BigCommerce', 'Magento (styling)'],
  },
  {
    title: { en: 'Other', vi: 'Khác' },
    items: ['REST API', 'GraphQL', 'Axios', 'Figma', 'Perfect pixel', 'PHP/Laravel (basic)'],
  },
];

export const languages: { name: Localized; level: Localized }[] = [
  { name: { en: 'Vietnamese', vi: 'Tiếng Việt' }, level: { en: 'Native', vi: 'Bản ngữ' } },
  { name: { en: 'English', vi: 'Tiếng Anh' }, level: { en: 'Basic working proficiency', vi: 'Giao tiếp cơ bản' } },
];

export const strengths: LocalizedList = {
  en: [
    '5+ years of hands-on frontend experience',
    'Worked with clients in Australia and Europe',
    'Pixel-perfect delivery from Figma/PSD',
    'Quick to learn new technologies',
  ],
  vi: [
    'Hơn 5 năm kinh nghiệm thực tế về frontend',
    'Làm việc với khách hàng Úc và châu Âu',
    'Giao diện chuẩn pixel-perfect từ Figma/PSD',
    'Học công nghệ mới nhanh',
  ],
};

export const labels = {
  summary: { en: 'Profile', vi: 'Giới thiệu' },
  experience: { en: 'Experience', vi: 'Kinh nghiệm làm việc' },
  projects: { en: 'Selected projects', vi: 'Dự án tiêu biểu' },
  client: { en: 'Client', vi: 'Khách hàng' },
  team: { en: 'Team', vi: 'Team' },
  skills: { en: 'Skills', vi: 'Kỹ năng' },
  education: { en: 'Education', vi: 'Học vấn' },
  languages: { en: 'Languages', vi: 'Ngoại ngữ' },
  strengths: { en: 'Highlights', vi: 'Điểm nổi bật' },
  contact: { en: 'Contact', vi: 'Liên hệ' },
  present: { en: 'Present', vi: 'Hiện tại' },
  print: { en: 'Download PDF', vi: 'Tải PDF' },
  yearsExp: { en: 'years of experience', vi: 'năm kinh nghiệm' },
} satisfies Record<string, Localized>;
