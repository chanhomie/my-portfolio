import {
  motion,
  useScroll,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

import bottomLazy16 from "./assets/bottom-lazy-16.png";
import bottomLazy26 from "./assets/bottom-lazy-26.png";
import bottomLazy35 from "./assets/bottom-lazy-35.png";
import bottomUrhey from "./assets/bottom-urhey.png";
import clientGyeonggiLogo from "./assets/client-gyeonggi-lifelong-learning-center-logo.png";
import clientHwaseongLogo from "./assets/client-hwaseong-special-city-logo.png";
import clientKobacoLogo from "./assets/client-kobaco-logo.png";
import clientLazySocietyLogo from "./assets/client-lazy-society-logo.png";
import clientSiheungCityLogo from "./assets/client-siheung-city-logo.png";
import clientSiheungIndustryLogo from "./assets/client-siheung-industry-promotion-agency-logo.png";
import clientUnarokLogo from "./assets/client-unarok-logo.png";
import clientUrheyLogo from "./assets/client-urhey-logo.png";
import clientXtronLogo from "./assets/client-xtron-logo.png";
import heroCamera from "./assets/hero-camera-transparent.png";
import thumbnail5 from "./assets/thumbnail-5.jpeg";
import thumbnail6 from "./assets/thumbnail-6.jpeg";
import thumbnail7Cropped from "./assets/thumbnail-7-cropped.jpeg";
import thumbnail8Cropped from "./assets/thumbnail-8-cropped.jpeg";
import thumbnail9 from "./assets/thumbnail-9.jpeg";
import workBrand01 from "./assets/work-brand-01.png";
import workBrand02 from "./assets/work-brand-02.png";
import workBrand03 from "./assets/work-brand-03.png";
import workChannel01 from "./assets/work-channel-01.png";
import workChannel02 from "./assets/work-channel-02.png";
import workChannel03 from "./assets/work-channel-03.png";
import workPublic01 from "./assets/work-public-01.png";
import workPublic02 from "./assets/work-public-02.png";

const contactHref = "mailto:info@930studio.co.kr";
const studioUrl = "https://930studio.co.kr";

type MarqueeImage = {
  src: string;
  width?: number;
  height?: number;
  cropLetterbox?: boolean;
};

type ClientLogo = {
  alt: string;
  src: string;
  theme?: "light" | "dark";
};

const topMarqueeImages: MarqueeImage[] = [
  { src: thumbnail6, width: 1280, height: 720 },
  { src: thumbnail7Cropped, width: 480, height: 204, cropLetterbox: true },
  { src: thumbnail8Cropped, width: 480, height: 204, cropLetterbox: true },
  { src: thumbnail9, width: 1280, height: 720 },
  { src: thumbnail5, width: 1280, height: 720 },
];

const bottomMarqueeImages: MarqueeImage[] = [
  { src: bottomLazy35, width: 1280, height: 720 },
  { src: bottomLazy26, width: 1280, height: 720 },
  { src: bottomLazy16, width: 1280, height: 720 },
  { src: bottomUrhey, width: 1280, height: 720 },
];

const clientLogoRows: ClientLogo[][] = [
  [
    { alt: "KOBACO", src: clientKobacoLogo },
    { alt: "경기도교육청평생학습관", src: clientGyeonggiLogo },
    { alt: "화성특례시", src: clientHwaseongLogo },
    { alt: "시흥시", src: clientSiheungCityLogo },
    { alt: "시흥산업진흥원", src: clientSiheungIndustryLogo },
  ],
  [
    { alt: "Lazy Society", src: clientLazySocietyLogo },
    { alt: "유엔한국협회", src: clientUnarokLogo },
    { alt: "URHEY", src: clientUrheyLogo },
    { alt: "XTRON", src: clientXtronLogo, theme: "dark" },
  ],
];

const aboutBadges = [
  {
    label: "KOBACO",
    detail: "origin",
    color: "#FFD400",
    className:
      "top-[8%] left-[4%] sm:left-[6%] md:left-[8%]",
    fade: { delay: 0.1, x: -80 },
  },
  {
    label: "SUWON",
    detail: "local",
    color: "#58C9F5",
    className:
      "bottom-[10%] left-[5%] sm:left-[8%] md:left-[12%]",
    fade: { delay: 0.25, x: -80 },
  },
  {
    label: "Cinematography",
    detail: "visual",
    color: "#F25F3A",
    className:
      "top-[8%] right-[4%] sm:right-[6%] md:right-[8%]",
    fade: { delay: 0.15, x: 80 },
  },
  {
    label: "DIRECT",
    detail: "producer",
    color: "#D7E2EA",
    className:
      "bottom-[10%] right-[5%] sm:right-[8%] md:right-[12%]",
    fade: { delay: 0.3, x: 80 },
  },
];

const services = [
  {
    number: "01",
    name: "Public Video",
    description:
      "기관의 목적과 핵심 메시지를 분석해 지자체와 공공기관에 맞는 영상 방향을 기획하고 촬영부터 편집까지 직접 수행합니다.",
  },
  {
    number: "02",
    name: "Branded Film",
    description:
      "브랜드가 말해야 할 가치와 고객이 반응할 매력 포인트를 찾아 스토리 중심의 브랜드 필름과 숏폼 콘텐츠로 제작합니다.",
  },
  {
    number: "03",
    name: "YouTube Operation",
    description:
      "채널 기획, 섭외, 촬영, 편집, 업로드 관리와 성과 리포팅까지 유튜브 운영에 필요한 제작 흐름을 함께 설계합니다.",
  },
  {
    number: "04",
    name: "Studio Production",
    description:
      "Sony FX6, FX3, 조명, 드론, 짐벌 등 현장형 제작 인프라를 바탕으로 프로젝트에 맞는 촬영 솔루션을 제공합니다.",
  },
  {
    number: "05",
    name: "Direct Communication",
    description:
      "실제 촬영과 편집을 맡는 제작자가 담당자로 직접 소통해 빠른 대응, 유연한 맞춤 기획, 신속한 납품을 만듭니다.",
  },
];

const projects = [
  {
    number: "01",
    name: "Public Communication",
    category: "Government",
    images: [workPublic01, workPublic02, workPublic01],
  },
  {
    number: "02",
    name: "Brand Focus Stories",
    category: "Branded",
    images: [workBrand01, workBrand02, workBrand03],
  },
  {
    number: "03",
    name: "Channel Momentum",
    category: "YouTube",
    images: [workChannel01, workChannel02, workChannel03],
  },
];

type FadeInProps = {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  style?: CSSProperties;
  id?: string;
};

function FadeIn({
  as = "div",
  children,
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  style,
  id,
}: FadeInProps) {
  const MotionComponent = useMemo(
    () => motion.create(as) as React.ElementType,
    [as],
  );

  return (
    <MotionComponent
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionComponent>
  );
}

type MagnetProps = {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
};

function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const activeRef = useRef(false);

  useEffect(() => {
    let frame = 0;
    const element = ref.current;

    if (!element || window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    element.style.transition = inactiveTransition;

    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const isActive =
          event.clientX >= rect.left - padding &&
          event.clientX <= rect.right + padding &&
          event.clientY >= rect.top - padding &&
          event.clientY <= rect.bottom + padding;

        if (!isActive) {
          if (activeRef.current) {
            element.style.transition = inactiveTransition;
            element.style.transform = "translate3d(0px, 0px, 0px)";
            activeRef.current = false;
          }
          return;
        }

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (event.clientX - centerX) / strength;
        const y = (event.clientY - centerY) / strength;

        if (!activeRef.current) {
          element.style.transition = activeTransition;
          activeRef.current = true;
        }

        element.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [activeTransition, inactiveTransition, padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: "translate3d(0px, 0px, 0px)",
        transition: inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

function ContactButton({ className = "" }: { className?: string }) {
  return (
    <a
      className={`group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3 text-xs font-medium uppercase tracking-widest text-white outline outline-2 outline-offset-[-3px] outline-white transition duration-200 hover:brightness-110 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      href={contactHref}
      style={{
        background:
          "linear-gradient(123deg, #031B52 7%, #0057B8 38%, #F25F3A 72%, #FFD400 100%)",
        boxShadow:
          "0px 4px 4px rgba(0, 87, 184, 0.25), 4px 4px 12px rgba(255, 212, 0, 0.28) inset",
      }}
    >
      <span className="whitespace-nowrap">Contact Us</span>
      <ArrowUpRight
        aria-hidden="true"
        className="hidden h-4 w-4 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block sm:h-5 sm:w-5"
      />
    </a>
  );
}

function LiveProjectButton() {
  return (
    <a
      href={studioUrl}
      rel="noreferrer"
      target="_blank"
      className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      <span>View Work</span>
      <ExternalLink
        aria-hidden="true"
        className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const words = text.split(" ");
  let characterIndex = 0;

  return (
    <p
      ref={ref}
      aria-label={text}
      className="max-w-[680px] break-keep px-2 text-center text-[clamp(1rem,1.8vw,1.3rem)] font-medium leading-relaxed text-[#D7E2EA]"
    >
      {words.map((word, wordIndex) => {
        const characters = Array.from(word);

        return (
          <span
            className="inline-block whitespace-nowrap"
            key={`${word}-${wordIndex}`}
            style={wordIndex < words.length - 1 ? { marginRight: "0.25em" } : undefined}
          >
            {characters.map((character) => {
              const index = characterIndex;
              characterIndex += 1;

              return (
                <AnimatedCharacter
                  character={character}
                  index={index}
                  key={`${character}-${index}`}
                  progress={scrollYProgress}
                  total={text.length}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
}

function AnimatedCharacter({
  character,
  index,
  total,
  progress,
}: {
  character: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = Math.min(1, start + 0.12);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const glyph = character === " " ? "\u00A0" : character;

  return (
    <span aria-hidden="true" className="relative inline-block">
      <span className="opacity-0">{glyph}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {glyph}
      </motion.span>
    </span>
  );
}

function HeroSection() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Service", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "Contact", href: contactHref },
  ];

  return (
    <section className="relative flex h-screen min-h-[640px] flex-col overflow-visible bg-transparent">
      <FadeIn
        as="nav"
        className="relative z-30 flex justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
        delay={0}
        y={-20}
      >
        {navItems.map((item) => (
          <a
            className="transition-opacity duration-200 hover:opacity-70"
            href={item.href}
            key={item.label}
          >
            {item.label}
          </a>
        ))}
      </FadeIn>

      <div className="relative z-0 mt-6 w-full overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-center text-[12vw] font-black uppercase leading-none tracking-tight sm:text-left sm:text-[13vw] md:text-[14vw] lg:text-[15.5vw]">
            930Studio
          </h1>
        </FadeIn>
      </div>

      <div className="isolate absolute left-1/2 top-1/2 z-10 w-[420px] -translate-x-1/2 -translate-y-1/2 sm:bottom-[-4%] sm:top-auto sm:w-[570px] sm:translate-y-0 md:w-[700px] lg:w-[820px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[72%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,87,184,0.34)_0%,rgba(88,201,245,0.18)_32%,rgba(242,95,58,0.16)_54%,transparent_76%)] blur-3xl sm:h-[78%] sm:w-[118%]"
        />
        <FadeIn className="relative z-10" delay={0.6} y={30}>
          <Magnet
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            padding={90}
            strength={10}
          >
            <img
              alt="Floating cinema camera for 930studio"
              className="w-full select-none object-contain drop-shadow-[0_36px_95px_rgba(0,87,184,0.42)]"
              draggable="false"
              src={heroCamera}
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:gap-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[170px] break-keep whitespace-nowrap text-[clamp(0.72rem,1.25vw,1.35rem)] font-normal uppercase leading-snug tracking-wide text-[#D7E2EA]/85 sm:max-w-[360px] md:max-w-[460px]">
            필요한 메시지를 결과로 만듭니다.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      if (!sectionRef.current) {
        return;
      }

      const sectionTop =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    updateOffset();
    window.addEventListener("scroll", updateOffset, { passive: true });
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip bg-transparent pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="relative z-10">
        <MarqueeRow
          images={topMarqueeImages}
          preserveRatio
          transform={`translate3d(${offset - 200}px, 0, 0)`}
        />
        <MarqueeRow
          images={bottomMarqueeImages}
          preserveRatio
          transform={`translate3d(${-(offset - 200)}px, 0, 0)`}
        />
      </div>
    </section>
  );
}

function MarqueeRow({
  images,
  preserveRatio = false,
  transform,
}: {
  images: MarqueeImage[];
  preserveRatio?: boolean;
  transform: string;
}) {
  const tripledImages = [...images, ...images, ...images];

  return (
    <div
      className="mb-2 flex gap-2 last:mb-0 sm:mb-3 sm:gap-3"
      style={{ transform, willChange: "transform" }}
    >
      {tripledImages.map((image, index) => {
        const ratioStyle =
          preserveRatio && image.cropLetterbox
            ? { aspectRatio: "16 / 9" }
            : preserveRatio && image.width && image.height
            ? { aspectRatio: `${image.width} / ${image.height}` }
            : undefined;
        const ratioImageClass = image.cropLetterbox
          ? "h-[118px] w-[210px] max-w-none flex-none rounded-xl bg-black object-cover object-center sm:h-[210px] sm:w-[373px] sm:rounded-2xl md:h-[270px] md:w-[480px]"
          : "h-[118px] w-auto max-w-none flex-none rounded-xl bg-black object-contain sm:h-[210px] sm:rounded-2xl md:h-[270px]";

        return (
          <img
            alt=""
            className={
              preserveRatio
                ? ratioImageClass
                : "h-[270px] min-w-[420px] rounded-2xl object-cover"
            }
            height={image.height}
            key={`${image.src}-${index}`}
            loading="lazy"
            src={image.src}
            style={ratioStyle}
            width={image.width}
          />
        );
      })}
    </div>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      {aboutBadges.map((badge) => (
        <FadeIn
          className={`pointer-events-none absolute z-0 ${badge.className}`}
          delay={badge.fade.delay}
          duration={0.9}
          key={badge.label}
          x={badge.fade.x}
          y={0}
        >
          <div
            className="rounded-full border bg-[#0C0C0C]/70 px-4 py-2 text-xs font-black uppercase leading-none tracking-widest shadow-[0_0_40px_rgba(215,226,234,0.08)] backdrop-blur sm:px-6 sm:py-3 sm:text-base md:text-xl"
            style={{
              borderColor: badge.color,
              color: badge.color,
            }}
          >
            <span>{badge.label}</span>
            <span className="ml-2 font-light text-[#D7E2EA]/60">
              {badge.detail}
            </span>
          </div>
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
              About 930
            </h2>
          </FadeIn>
          <AnimatedText text="930스튜디오는 KOBACO에서 시작한 콘텐츠 크리에이티브 팀입니다. 기관과 기업의 메시지를 정확히 정리하고, 촬영부터 편집까지 제작자가 직접 소통하며 신뢰도 높은 결과물을 만듭니다." />
        </div>
        <FadeIn className="mt-16 sm:mt-20 md:mt-24" delay={0.25} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

function ClientLogoMarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      if (!sectionRef.current) {
        return;
      }

      const sectionTop =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    updateOffset();
    window.addEventListener("scroll", updateOffset, { passive: true });
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="relative overflow-x-clip bg-[#0C0C0C] pb-24 pt-4 sm:pb-28 md:pb-36"
    >
      <FadeIn className="px-5 pb-10 text-center sm:px-8 md:px-10" y={24}>
        <p className="text-sm font-medium uppercase tracking-[0.45em] text-[#FFD400]">
          Partner Clients
        </p>
      </FadeIn>

      <ClientLogoRow
        logos={clientLogoRows[0]}
        transform={`translate3d(${offset - 180}px, 0, 0)`}
      />
      <ClientLogoRow
        logos={clientLogoRows[1]}
        transform={`translate3d(${-(offset - 180)}px, 0, 0)`}
      />
    </section>
  );
}

function ClientLogoRow({
  logos,
  transform,
}: {
  logos: ClientLogo[];
  transform: string;
}) {
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div
      className="mb-2 flex gap-2 last:mb-0 sm:mb-3 sm:gap-3"
      style={{ transform, willChange: "transform" }}
    >
      {repeatedLogos.map((logo, index) => (
        <div
          className={`flex h-[82px] w-[178px] flex-none items-center justify-center rounded-xl border px-5 text-center shadow-[0_20px_70px_rgba(0,87,184,0.1)] backdrop-blur sm:h-[140px] sm:w-[340px] sm:rounded-2xl sm:px-9 md:h-[160px] md:w-[420px] md:px-12 ${
            logo.theme === "dark"
              ? "border-[#D7E2EA]/15 bg-[#111820]/85"
              : "border-white/10 bg-[#F7FAF4]"
          }`}
          key={`${logo.alt}-${index}`}
        >
          <img
            alt={logo.alt}
            className="max-h-[38px] w-auto max-w-[86%] object-contain sm:max-h-[72px] md:max-h-[92px]"
            loading="lazy"
            src={logo.src}
          />
        </div>
      ))}
    </div>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32 rounded-t-[40px]"
    >
      <FadeIn y={40}>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, index) => (
          <FadeIn delay={index * 0.1} key={service.number} y={30}>
            <article className="grid grid-cols-[auto_1fr] items-center gap-5 border-t border-[rgba(12,12,12,0.15)] py-8 last:border-b sm:gap-8 sm:py-10 md:gap-12 md:py-12">
              <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C]">
                {service.number}
              </span>
              <div>
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight">
                  {service.name}
                </h3>
                <p className="mt-3 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-75">
                  {service.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Work
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.number}
            project={project}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[number];
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const cardStyle = {
    "--card-offset": `${index * 28}px`,
    scale,
  } as MotionStyle & Record<"--card-offset", string>;

  return (
    <div ref={containerRef} className="h-[85vh] min-h-[620px]">
      <motion.article
        className="sticky top-[calc(6rem+var(--card-offset))] overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 text-[#D7E2EA] sm:rounded-[50px] sm:p-6 md:top-[calc(8rem+var(--card-offset))] md:rounded-[60px] md:p-8"
        style={cardStyle}
      >
        <div className="mb-5 grid items-end gap-4 sm:mb-6 md:mb-8 md:grid-cols-[auto_0.8fr_1fr_auto] md:gap-6">
          <span className="text-[clamp(3rem,10vw,140px)] font-black leading-[0.8] text-[#D7E2EA]">
            {project.number}
          </span>
          <p className="text-sm font-medium uppercase tracking-widest opacity-70 sm:text-base">
            {project.category}
          </p>
          <h3 className="break-keep text-[clamp(1.35rem,3.5vw,3.5rem)] font-black uppercase leading-none tracking-tight">
            {project.name}
          </h3>
          <LiveProjectButton />
        </div>

        <div className="grid grid-cols-[0.4fr_0.6fr] gap-3">
          <div className="flex flex-col gap-3">
            <img
              alt={`${project.name} preview one`}
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
              src={project.images[0]}
            />
            <img
              alt={`${project.name} preview two`}
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
              src={project.images[1]}
            />
          </div>
          <img
            alt={`${project.name} main preview`}
            className="h-full min-h-[calc(clamp(130px,16vw,230px)+clamp(160px,22vw,340px)+0.75rem)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            loading="lazy"
            src={project.images[2]}
          />
        </div>
      </motion.article>
    </div>
  );
}

function FooterSection() {
  const details = [
    ["Company", "930studio"],
    ["Business No.", "265-21-02406"],
    ["Contact", "info@930studio.co.kr"],
    ["Homepage", "930studio.co.kr"],
    ["YouTube", "youtube.com/@930Studio"],
  ];

  return (
    <footer className="bg-[#0C0C0C] px-5 pb-10 pt-16 text-[#D7E2EA] sm:px-8 md:px-10 md:pb-14 md:pt-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 border-t border-[#D7E2EA]/20 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#FFD400]">
            Contents Creative Team
          </p>
          <h2 className="mt-4 text-[clamp(2.75rem,8vw,7rem)] font-black uppercase leading-none tracking-tight">
            930studio
          </h2>
        </div>

        <dl className="grid gap-x-10 gap-y-4 text-sm sm:grid-cols-2 md:min-w-[520px] md:text-base">
          {details.map(([label, value]) => (
            <div className="break-keep" key={label}>
              <dt className="font-medium uppercase tracking-widest text-[#D7E2EA]/45">
                {label}
              </dt>
              <dd className="mt-1 font-medium text-[#D7E2EA]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </footer>
  );
}

function IntroSection() {
  return (
    <div className="relative overflow-hidden bg-[#0C0C0C]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,#0C0C0C_0%,rgba(12,12,12,0.86)_32%,rgba(5,25,40,0.34)_54%,rgba(6,22,34,0.26)_70%,#0C0C0C_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[34vh] z-0 h-[190vh] w-[240vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,87,184,0.1)_0%,rgba(88,201,245,0.06)_42%,rgba(242,95,58,0.045)_64%,rgba(12,12,12,0)_92%)] blur-[96px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[72vh] z-0 h-[62vh] bg-[linear-gradient(180deg,rgba(7,26,40,0)_0%,rgba(7,26,40,0.2)_38%,rgba(7,26,40,0.2)_62%,rgba(7,26,40,0)_100%)] blur-2xl"
      />
      <div className="relative z-10">
        <HeroSection />
        <MarqueeSection />
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-kanit">
      <IntroSection />
      <AboutSection />
      <ClientLogoMarqueeSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}

export default App;
