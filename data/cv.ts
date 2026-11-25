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
  links?: LinkItem[];
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
    en: 'Frontend developer with 6 years of experience building web products with Vue.js, React and vanilla JavaScript. Started by crafting pixel-perfect Shopify, BigCommerce and Magento storefronts for clients in Australia and Europe, then moved on to building internal business systems (dashboards, ERP/MES tools) with Vue.js and React. Detail-oriented, quick to pick up new technologies, and used to working directly with international clients to clarify requirements and ship on time.',
    vi: 'Lập trình viên Frontend với 6 năm kinh nghiệm phát triển web bằng Vue.js, React và JavaScript thuần. Bắt đầu với việc xây dựng giao diện Shopify, BigCommerce, Magento chuẩn pixel-perfect cho khách hàng Úc và châu Âu, sau đó phát triển các hệ thống nội bộ (dashboard, công cụ ERP/MES) bằng Vue.js và React. Tỉ mỉ, học công nghệ mới nhanh, quen làm việc trực tiếp với khách hàng nước ngoài để làm rõ yêu cầu và bàn giao đúng hạn.',
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
    role: { en: 'Frontend Developer (Shopify Themes)', vi: 'Lập trình viên Frontend (Shopify Theme)' },
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
    stack: ['Shopify', 'Liquid', 'JavaScript', 'SCSS', 'Figma'],
    links: [
      { label: 'Minimog', url: 'https://themeforest.net/item/minimog-the-high-converting-shopify-theme/33380968' },
      { label: 'Zest', url: 'https://themes.shopify.com/themes/zest/styles/flairy/preview' },
      { label: 'Megamog', url: 'https://demo.megamog.co/' },
    ],
  },
  {
    company: 'IOTLink',
    role: { en: 'Frontend Developer (Vue.js)', vi: 'Lập trình viên Frontend (Vue.js)' },
    start: '2022-10',
    end: '2023-11',
    summary: {
      en: 'Built internal and customer projects with Vue 2/3, including ERP and MES systems.',
      vi: 'Xây dựng các dự án nội bộ và cho khách hàng bằng Vue 2/3, bao gồm hệ thống ERP và MES.',
    },
    highlights: {
      en: [
        'Developed projects with Vue 2/3, JavaScript and SCSS from Figma designs.',
        'Built dashboard features (data management, maps, users and roles) on top of Django APIs.',
        'Worked on ERP and MES systems; clarified requirements directly with customers.',
      ],
      vi: [
        'Phát triển dự án bằng Vue 2/3, JavaScript, SCSS theo thiết kế Figma.',
        'Làm các tính năng dashboard (quản lý dữ liệu, bản đồ, người dùng, phân quyền) trên API Django.',
        'Làm việc với hệ thống ERP, MES; trao đổi trực tiếp với khách hàng để làm rõ yêu cầu.',
      ],
    },
    stack: ['Vue 2/3', 'Pinia', 'JavaScript', 'Axios', 'Bootstrap'],
  },
  {
    company: 'AHT Tech JSC',
    role: { en: 'Frontend Developer (Shopify / BigCommerce)', vi: 'Lập trình viên Frontend (Shopify / BigCommerce)' },
    start: '2020-01',
    end: '2022-09',
    summary: {
      en: 'Built and customized e-commerce storefronts for clients in Australia and Europe.',
      vi: 'Xây dựng và tuỳ biến website thương mại điện tử cho khách hàng Úc và châu Âu.',
    },
    highlights: {
      en: [
        'Developed Shopify and BigCommerce UIs from designs with HTML/CSS, Liquid, JavaScript/jQuery and SCSS.',
        'Built BigCommerce features with its APIs and kept every layout pixel-perfect on desktop, tablet and mobile.',
        'Created theme-settings options so clients could change content themselves; styled several Magento projects.',
        'Maintained code daily, debugged issues and solved client problems on schedule.',
      ],
      vi: [
        'Cắt giao diện Shopify, BigCommerce từ thiết kế bằng HTML/CSS, Liquid, JavaScript/jQuery, SCSS.',
        'Làm tính năng BigCommerce qua API, đảm bảo pixel-perfect trên desktop, tablet, mobile.',
        'Tạo các tuỳ chọn theme settings để khách hàng tự thay đổi nội dung; style cho một số dự án Magento.',
        'Bảo trì code hằng ngày, debug và xử lý vấn đề của khách hàng đúng hạn.',
      ],
    },
    stack: ['Shopify', 'Liquid', 'BigCommerce', 'Magento', 'jQuery', 'SCSS'],
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
        'Built the homepage and dashboard features: data management, map, users and roles.',
        'Integrated Django APIs on the frontend; clarified requirements with customers.',
      ],
      vi: [
        'Làm trang chủ và các tính năng dashboard: quản lý dữ liệu, bản đồ, người dùng, phân quyền.',
        'Tích hợp API Django; làm rõ yêu cầu với khách hàng.',
      ],
    },
    stack: ['Vue 2/3', 'JavaScript', 'Axios', 'Bootstrap'],
  },
  {
    name: 'Piksters',
    url: 'https://piksters.com/',
    period: '05/2022 – 10/2022',
    client: { en: 'Australia', vi: 'Úc' },
    teamSize: 4,
    description: {
      en: 'E-commerce site for healthcare products with B2B and B2C accounts.',
      vi: 'Website bán sản phẩm y tế, có tài khoản B2B và B2C.',
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
    stack: ['Liquid', 'jQuery', 'Bootstrap', 'GraphQL'],
  },
  {
    name: 'Karolina York',
    period: '03/2022 – 08/2022',
    client: { en: 'Australia', vi: 'Úc' },
    teamSize: 4,
    description: {
      en: 'Online store with B2B and B2C accounts.',
      vi: 'Cửa hàng trực tuyến có tài khoản B2B và B2C.',
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
      en: 'E-commerce site where customers buy online, register and track orders.',
      vi: 'Website thương mại điện tử: mua hàng online, đăng ký tài khoản, theo dõi đơn hàng.',
    },
    responsibilities: {
      en: [
        'Built the homepage with a custom widget API, pixel-perfect to the design.',
        'Styled sign-up/sign-in, shipping, FAQ and product pages; rendered content from custom fields.',
      ],
      vi: [
        'Làm trang chủ với custom widget API, chuẩn pixel-perfect theo thiết kế.',
        'Style trang đăng ký/đăng nhập, vận chuyển, FAQ, sản phẩm; hiển thị nội dung từ custom fields.',
      ],
    },
    stack: ['BigCommerce', 'HTML', 'CSS', 'jQuery'],
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
        'Built homepage and cart page sections; customized installed apps to client requirements.',
        'Worked with the client and team to clarify requirements; maintained and optimized code.',
      ],
      vi: [
        'Làm các section trang chủ và giỏ hàng; tuỳ chỉnh app theo yêu cầu khách hàng.',
        'Trao đổi với khách hàng và team để làm rõ yêu cầu; bảo trì, tối ưu code.',
      ],
    },
    stack: ['Shopify', 'Liquid', 'jQuery', 'Bootstrap', 'GraphQL'],
  },
];

export const otherSites: LinkItem[] = [
  { label: 'bamboozld.com.au', url: 'https://www.bamboozld.com.au/' },
  { label: 'ecostork.com.au', url: 'https://ecostork.com.au/' },
  { label: 'morfars.dk', url: 'https://morfars.dk/' },
  { label: 'kiannamagelaki.com', url: 'https://kiannamagelaki.com/' },
];

export const education = {
  school: 'FPT Polytechnic College',
  major: { en: 'Web Design', vi: 'Thiết kế Web' },
  period: '08/2018 – 01/2021',
  gpa: '7.3/10',
};

export const skills: SkillGroup[] = [
  {
    title: { en: 'Frameworks & libraries', vi: 'Framework & thư viện' },
    items: ['Vue 2/3', 'Pinia', 'React', 'Next.js', 'jQuery'],
  },
  {
    title: { en: 'Languages', vi: 'Ngôn ngữ' },
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: { en: 'Styling', vi: 'Styling' },
    items: ['SCSS / Sass', 'Less', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: { en: 'E-commerce', vi: 'Thương mại điện tử' },
    items: ['Shopify (Liquid)', 'BigCommerce', 'Magento (styling)'],
  },
  {
    title: { en: 'APIs & tools', vi: 'API & công cụ' },
    items: ['REST API', 'GraphQL', 'Axios', 'Git', 'Figma', 'PHP/Laravel (basic)'],
  },
];

export const languages: { name: Localized; level: Localized }[] = [
  { name: { en: 'Vietnamese', vi: 'Tiếng Việt' }, level: { en: 'Native', vi: 'Bản ngữ' } },
  { name: { en: 'English', vi: 'Tiếng Anh' }, level: { en: 'Basic working proficiency', vi: 'Giao tiếp cơ bản' } },
];

export const strengths: LocalizedList = {
  en: [
    '6 years of hands-on frontend experience',
    'Worked with clients in Australia and Europe',
    'Pixel-perfect delivery from Figma/PSD',
    'Quick to learn new technologies',
  ],
  vi: [
    '6 năm kinh nghiệm thực tế về frontend',
    'Làm việc với khách hàng Úc và châu Âu',
    'Giao diện chuẩn pixel-perfect từ Figma/PSD',
    'Học công nghệ mới nhanh',
  ],
};

export const labels = {
  summary: { en: 'Profile', vi: 'Giới thiệu' },
  experience: { en: 'Experience', vi: 'Kinh nghiệm làm việc' },
  projects: { en: 'Selected projects', vi: 'Dự án tiêu biểu' },
  otherSites: { en: 'Other sites', vi: 'Website khác' },
  products: { en: 'Products', vi: 'Sản phẩm' },
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
