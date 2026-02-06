import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiCpanel,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGooglesheets,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  jQuery: {
    title: "jQuery",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  gac: {
    title: "Google Apps Script",
    bg: "black",
    fg: "white",
    icon: <SiGooglesheets />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  cpanel: {
    title: "cPanel",
    bg: "black",
    fg: "white",
    icon: <SiCpanel />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  php: {
    title: "PHP ",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "goshen-training",
    category: "Goshen Training",
    title: "Goshen Training",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.gac,
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://www.goshen.co.id/Goshen-Training/",
    github: "https://github.com/anuterbang/fe_tracking",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Goshen Training Center
          </TypographyP>
          <TypographyP className="font-mono ">
            Goshen Training Center adalah platform pelatihan online dan in-class
            yang dirancang untuk membantu profesional, pelajar, dan praktisi
            industri meningkatkan keterampilan teknis di bidang audio, visual,
            dan teknologi pendukung. Platform ini menyediakan berbagai materi
            edukatif, pelatihan terstruktur, serta konten pembelajaran yang
            relevan dengan kebutuhan industri modern.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Deskripsi </TypographyH3>
          <p className="font-mono mb-6">
            Website Goshen Training Center adalah platform resmi dari PT Goshen
            Swara Indonesia yang menyediakan informasi dan pendaftaran untuk
            program training in-classroom di bidang audio dan sound system
            profesional. Situs ini menampilkan daftar sesi pelatihan yang akan
            datang, lengkap dengan detail seperti topik training, tanggal,
            durasi, jam pelaksanaan, lokasi training, serta jumlah slot peserta
            yang tersedia.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/problems.png`,
              `${BASE_PATH}/codingducks/problem.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "goshen-training-cms",
    category: "Goshen Training CMS",
    title: "Goshen Training CMS",
    src: "/assets/projects-screenshots/couponluxury/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://www.goshen.co.id/Goshen-Training-CMS/",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.mysql, PROJECT_SKILLS.gac, PROJECT_SKILLS.php],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Goshen Training Center CMS
          </TypographyP>
          <TypographyP className="font-mono ">
            Website ini adalah portal CMS untuk training internal Goshen Swara
            Indonesia, digunakan oleh peserta dan admin untuk mengakses materi
            pelatihan dan manajemen konten training. Sistem ini dilengkapi
            dengan form login, dashboard admin, dan fitur pengelolaan konten
            yang mudah digunakan.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Deskripsi </TypographyH3>
          <p className="font-mono mb-8 mt-6">
            Website ini berhasil menghadirkan portal training yang efisien,
            aman, dan mudah digunakan, mempermudah admin mengelola konten dan
            peserta, sekaligus meningkatkan pengalaman peserta saat mengakses
            materi training.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} />
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: "email-blast",
    category: "Email Blast Goshen",
    title: "Email Blast Goshen",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["1.png"],
    live: "https://www.goshen.co.id/Goshen-Email-Blast/",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.mysql, PROJECT_SKILLS.gac, PROJECT_SKILLS.php],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Goshen Email Blast adalah portal login untuk sistem Email Blast yang
            digunakan oleh PT Goshen Swara Indonesia sebagai alat internal untuk
            mengelola pengiriman email massal. Halaman ini berfungsi sebagai
            pintu akses dashboard email blast, di mana pengguna terotorisasi
            (mis. admin atau tim marketing) dapat masuk untuk mengelola kampanye
            email, daftar kontak, dan konten email yang akan dikirim ke
            pelanggan atau audience tertentu.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-8 mt-8">
            Portal email blast ini membantu tim Goshen Swara Indonesia mengelola
            komunikasi massal secara terstruktur dan aman, sekaligus mendukung
            kegiatan pemasaran digital lewat kampanye email yang terjadwal dan
            terkontrol.
          </p>
          <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "tracking-service",
    category: "Goshen Tracking Service",
    title: " Goshen Tracking Service",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["1.png"],
    live: "https://www.goshen.co.id/Goshen-Tracking-Service/",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.mysql, PROJECT_SKILLS.gac, PROJECT_SKILLS.php],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Goshen Email Blast adalah portal login untuk sistem Email Blast yang
            digunakan oleh PT Goshen Swara Indonesia sebagai alat internal untuk
            mengelola pengiriman email massal. Halaman ini berfungsi sebagai
            pintu akses dashboard email blast, di mana pengguna terotorisasi
            (mis. admin atau tim marketing) dapat masuk untuk mengelola kampanye
            email, daftar kontak, dan konten email yang akan dikirim ke
            pelanggan atau audience tertentu.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-8 mt-8">
            Portal email blast ini membantu tim Goshen Swara Indonesia mengelola
            komunikasi massal secara terstruktur dan aman, sekaligus mendukung
            kegiatan pemasaran digital lewat kampanye email yang terjadwal dan
            terkontrol.
          </p>
          <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "alpha-fund",
    category: "Alpha Fund",
    title: "Alpha Fund",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["1.png"],
    live: "https://www.alpha-fund.com/",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.mysql, PROJECT_SKILLS.gac, PROJECT_SKILLS.php],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Goshen Email Blast adalah portal login untuk sistem Email Blast yang
            digunakan oleh PT Goshen Swara Indonesia sebagai alat internal untuk
            mengelola pengiriman email massal. Halaman ini berfungsi sebagai
            pintu akses dashboard email blast, di mana pengguna terotorisasi
            (mis. admin atau tim marketing) dapat masuk untuk mengelola kampanye
            email, daftar kontak, dan konten email yang akan dikirim ke
            pelanggan atau audience tertentu.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-8 mt-8">
            Portal email blast ini membantu tim Goshen Swara Indonesia mengelola
            komunikasi massal secara terstruktur dan aman, sekaligus mendukung
            kegiatan pemasaran digital lewat kampanye email yang terjadwal dan
            terkontrol.
          </p>
          <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
        </div>
      );
    },
  },
];
export default projects;
