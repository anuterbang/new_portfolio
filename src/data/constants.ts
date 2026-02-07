// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  PHP = "php",
  FLUTTER = "flutter",
  LARABEL = "laravel",
  VERCEL = "vercel",
  MYSQL = "mysql",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription:
      "Ngoding dan ngelempar kode ke DOM sejak ’95 — bukan kaleng-kaleng! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "Sepupunya JavaScript yang overpowered — suka flex skill terus 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription:
      "Sesepuh internet — tapi masih relevan dan gas terus 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Desain rapi, clean, dan penuh style — no cap 🎨🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "setState go brrrr, fr fr 🚀⚛️",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription: "frame front-end yang santai, enak aja! 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "framework drama, tapi kita support! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes yang sadis banget, fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript di backend, deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middleware yang powerful, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL tapi fancy, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "no-SQL yang flexible, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "si pengaman kode, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "ngacir di pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "bikin kode rapi, thank u next 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "package manager yang siap bantuin, period! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "wingman aplikasi lo, tapi hati-hati vendor lock-in! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "kakek dari CMS, masih gagang terus 🧓👴",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "tempat 'chmod 777' adalah ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "containerization yang top notch! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "reverse proxy yang kenceng, sheesh! 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.FLUTTER]: {
    id: 22,
    name: "flutter",
    label: "Flutter",
    shortDescription: "selalu extra, bikin sesuatu jadi rumit, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 25,
    name: "mysql",
    label: "MySQL ",
    shortDescription: "database SQL yang solid, living rent free! ☁️🔥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.LARABEL]: {
    id: 23,
    name: "laravel",
    label: "Laravel",
    shortDescription: "framework PHP yang bikin web dev jadi mudah! 🧁🔥",
    color: "#f74430",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "platform deploy yang canggih, bikin lu touch grass! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.PHP]: {
    id: 25,
    name: "php",
    label: "PHP",
    shortDescription: "bahasa backend yang legendaris, masih relevant! 🔧⚡",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Sekarang",
    endDate: " ",
    title: "Freelance Programmer",
    company: "ikbal.site",
    description: [
      "Membangun website, web app, mobile app, atau software sesuai kebutuhan klien.",
      "Mengembangkan frontend (UI/UX) dan/atau backend (API, database, server).",
      "Membuat sistem yang scalable, secure, dan maintainable.",
      "Mengumpulkan requirement dan memahami kebutuhan bisnis klien.",
      "Menyusun estimasi waktu pengerjaan dan scope project."
    ],

    skills: [
      SkillNames.NEXTJS,
      SkillNames.TS,
      SkillNames.EXPRESS,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.FLUTTER,
      SkillNames.DOCKER,
      SkillNames.MYSQL,
      SkillNames.PHP,
      SkillNames.FLUTTER,
      SkillNames.LARABEL,
      SkillNames.WORDPRESS,
      SkillNames.REACT,
      SkillNames.MYSQL,
    ],
  },
  {
    id: 2,
    startDate: "Oktober 2025",
    endDate: "Sekarang",
    title: "Programmer",
    company: "PT Goshen Swara Indonesia",
    description: [
      "Mendesain dan membangun API untuk komunikasi antara frontend dan backend.",
      "Mengelola server Linux, termasuk konfigurasi Nginx, database MySQL/MongoDB, dan deployment.",
      "Mengoptimalkan performa aplikasi dan pipeline media untuk pengalaman pengguna yang lebih cepat.",
      "Menulis kode berkualitas, melakukan testing, dan deployment end-to-end.",
    ],

    skills: [
      SkillNames.NEXTJS,
      SkillNames.TS,
      SkillNames.EXPRESS,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.FLUTTER,
      SkillNames.DOCKER,
      SkillNames.MYSQL,
      SkillNames.PHP,
      SkillNames.NGINX,
    ],
  },
  {
    id: 3,
    startDate: "Januari 2025",
    endDate: "Mei 2025",
    title: "Programmer",
    company: "PT Paramitra Alpha Sekuritas",
    description: [
      "Mengubah ide dan wireframe menjadi aplikasi mobile Flutter yang rapi dan mudah digunakan.",
      "Membangun dashboard dan antarmuka kustom yang terintegrasi dengan backend Laravel sesuai alur kerja pengguna.",
      "Mengotomatisasi proses di aplikasi untuk meningkatkan efisiensi dan mengurangi kesalahan manual.",
      "Fokus pada kode yang bersih, mudah dipelihara, dan antarmuka yang menyenangkan bagi pengguna.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.FLUTTER,
      SkillNames.LARABEL,
      SkillNames.FIREBASE,
      SkillNames.POSTGRES,
      SkillNames.WORDPRESS,
    ],
  },
  {
    id: 4,
    startDate: "Juni 2022",
    endDate: "Juli 2023",
    title: "Web IT Developer",
    company: "PT Portal Biz Nusantara",
    description: [
      "Membangun dan mengelola API backend untuk mendukung interaksi frontend.",
      "Mengotomatisasi proses internal melalui web tools untuk meningkatkan efisiensi kerja.",
      "Memastikan kode bersih, mudah dipelihara, dan antarmuka web intuitif bagi pengguna.",
      "Mengoptimalkan performa website, termasuk waktu load dan pengiriman aset media.",
      "Bekerja sama dengan tim untuk mengimplementasikan fitur end-to-end dari analisis kebutuhan hingga deployment.",
    ],

    skills: [
      SkillNames.WORDPRESS,
      SkillNames.NODEJS,
      SkillNames.LINUX,
      SkillNames.MONGODB,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
