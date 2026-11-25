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
  client?: Localized;
  teamSize?: number;
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
    en: 'Frontend Web Developer · React / Next.js / Vue.js',
    vi: 'Lập trình viên Frontend Web · React / Next.js / Vue.js',
  },
  location: { en: 'Hanoi, Vietnam', vi: 'Hà Nội, Việt Nam' },
  email: 'lanyentran@gmail.com',
  phone: '0899 264 583',
  github: 'https://github.com/yentacute',
  // Square photo in public/. Set to '' to hide.
  avatar: '/avatar.jpg',
  // Optional: add your LinkedIn URL here to show it in the header.
  linkedin: '',
  summary: {
    en: 'Frontend developer with 5+ years of experience building web products with React, Next.js and Vue.js. Currently building internal applications with React and Vue.js at F88, and comfortable with Next.js (App Router, static export, TypeScript). Started by crafting pixel-perfect Shopify, BigCommerce and Magento storefronts for clients in Australia and Europe, then moved on to building internal business applications. Uses Claude (Claude Code) and OpenAI Codex daily to ship faster: scaffolding, refactoring, debugging and writing tests, always reviewing the output. Detail-oriented, quick to pick up new technologies, and used to working directly with international clients to clarify requirements and ship on time.',
    vi: 'Lập trình viên Frontend với hơn 5 năm kinh nghiệm phát triển web bằng React, Next.js và Vue.js. Hiện đang xây dựng ứng dụng nội bộ bằng React và Vue.js tại F88, thành thạo Next.js (App Router, static export, TypeScript). Bắt đầu với việc xây dựng giao diện Shopify, BigCommerce, Magento chuẩn pixel-perfect cho khách hàng Úc và châu Âu, sau đó phát triển các ứng dụng nghiệp vụ nội bộ. Sử dụng Claude (Claude Code) và OpenAI Codex hằng ngày để làm việc nhanh hơn: dựng khung code, refactor, debug, viết test, luôn tự review kết quả. Tỉ mỉ, học công nghệ mới nhanh, quen làm việc trực tiếp với khách hàng nước ngoài để làm rõ yêu cầu và bàn giao đúng hạn.',
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
        'Develop and maintain internal business tools with React and Vue.js.',
        'Build React screens with hooks, reusable components and TypeScript types.',
        'Build reusable UI components and forms shared across modules.',
        'Integrate REST APIs and collaborate with backend, QA and business teams.',
      ],
      vi: [
        'Phát triển và bảo trì các công cụ nghiệp vụ nội bộ bằng React và Vue.js.',
        'Xây dựng màn hình React với hooks, component tái sử dụng và TypeScript.',
        'Xây dựng component và form dùng chung giữa các module.',
        'Tích hợp REST API, phối hợp với đội backend, QA và nghiệp vụ.',
      ],
    },
    stack: ['React', 'Vue.js', 'TypeScript', 'REST API'],
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
    name: 'Personal CV website',
    url: 'https://yentacute.github.io/cv-cua-toi/',
    period: '2026',
    description: {
      en: 'This site: a bilingual (EN/VI) online CV with a print-ready PDF layout, deployed on GitHub Pages.',
      vi: 'Chính trang này: CV online song ngữ (EN/VI), có bản in PDF, deploy trên GitHub Pages.',
    },
    responsibilities: {
      en: [
        'Built with Next.js App Router, React and TypeScript, exported as a static site.',
        'Responsive layout, language switch saved in localStorage, A4 print stylesheet.',
        'CI/CD with GitHub Actions deploying to GitHub Pages.',
        'Built with an AI-assisted workflow (Claude Code): planning, coding and review in pull requests.',
      ],
      vi: [
        'Xây dựng bằng Next.js App Router, React, TypeScript, xuất static site.',
        'Responsive, chuyển ngôn ngữ lưu bằng localStorage, stylesheet in A4.',
        'CI/CD bằng GitHub Actions deploy lên GitHub Pages.',
        'Xây dựng với quy trình có AI hỗ trợ (Claude Code): lên kế hoạch, code và review qua pull request.',
      ],
    },
    stack: ['Next.js', 'React', 'TypeScript', 'GitHub Actions', 'Claude Code'],
  },
  {
    name: 'Minimog',
    url: 'https://themeforest.net/item/minimog-the-high-converting-shopify-theme/33380968',
    period: '12/2023 – 09/2024',
    description: {
      en: 'Shopify theme sold on ThemeForest (Insights).',
      vi: 'Shopify theme bán trên ThemeForest (Insights).',
    },
    responsibilities: {
      en: [
        'Developed theme features with HTML/CSS, Liquid, JavaScript and SCSS.',
        'Created new features and optimized existing ones following Figma designs.',
        'Supported customers with their issues.',
      ],
      vi: [
        'Phát triển tính năng theme bằng HTML/CSS, Liquid, JavaScript, SCSS.',
        'Làm tính năng mới và tối ưu tính năng có sẵn theo thiết kế Figma.',
        'Hỗ trợ khách hàng xử lý vấn đề.',
      ],
    },
    stack: ['Shopify', 'HTML/CSS', 'Liquid', 'JavaScript', 'SCSS'],
  },
  {
    name: 'Zest',
    url: 'https://themes.shopify.com/themes/zest/styles/flairy/preview',
    period: '12/2023 – 09/2024',
    description: {
      en: 'Shopify theme on the official Shopify Theme Store (Insights).',
      vi: 'Shopify theme trên Shopify Theme Store chính thức (Insights).',
    },
    responsibilities: {
      en: [
        'Developed theme features with HTML/CSS, Liquid, JavaScript and SCSS.',
        'Created new features and optimized existing ones following Figma designs.',
        'Supported customers with their issues.',
      ],
      vi: [
        'Phát triển tính năng theme bằng HTML/CSS, Liquid, JavaScript, SCSS.',
        'Làm tính năng mới và tối ưu tính năng có sẵn theo thiết kế Figma.',
        'Hỗ trợ khách hàng xử lý vấn đề.',
      ],
    },
    stack: ['Shopify', 'HTML/CSS', 'Liquid', 'JavaScript', 'SCSS'],
  },
  {
    name: 'Megamog',
    url: 'https://demo.megamog.co/',
    period: '12/2023 – 09/2024',
    description: {
      en: 'Shopify theme (Insights).',
      vi: 'Shopify theme (Insights).',
    },
    responsibilities: {
      en: [
        'Developed theme features with HTML/CSS, Liquid, JavaScript and SCSS.',
        'Created new features and optimized existing ones following Figma designs.',
        'Supported customers with their issues.',
      ],
      vi: [
        'Phát triển tính năng theme bằng HTML/CSS, Liquid, JavaScript, SCSS.',
        'Làm tính năng mới và tối ưu tính năng có sẵn theo thiết kế Figma.',
        'Hỗ trợ khách hàng xử lý vấn đề.',
      ],
    },
    stack: ['Shopify', 'HTML/CSS', 'Liquid', 'JavaScript', 'SCSS'],
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
    title: { en: 'React ecosystem', vi: 'Hệ sinh thái React' },
    items: ['React', 'Next.js (App Router)', 'React Hooks', 'TypeScript'],
  },
  {
    title: { en: 'AI-assisted development', vi: 'Phát triển với AI' },
    items: ['Claude', 'Claude Code', 'OpenAI Codex', 'Prompt engineering', 'AI code review & debugging'],
  },
  {
    title: { en: 'Frontend', vi: 'Frontend' },
    items: ['Vue 2 & 3', 'Pinia', 'JavaScript (ES6+)', 'HTML/CSS', 'jQuery'],
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
    'Hands-on with React and Next.js, plus Vue 2/3',
    'AI-assisted development: faster delivery with Claude Code and Codex',
    'Worked with clients in Australia and Europe',
    'Pixel-perfect delivery from Figma/PSD',
    'Quick to learn new technologies',
  ],
  vi: [
    'Hơn 5 năm kinh nghiệm thực tế về frontend',
    'Có kinh nghiệm thực tế với React, Next.js và Vue 2/3',
    'Phát triển với AI: tăng tốc công việc bằng Claude Code và Codex',
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
