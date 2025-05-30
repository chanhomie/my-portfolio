import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm("xeogyzqd"); // Formspree 폼 ID

  const portfolioItems = [
    {
      id: 1,
      title: "UN Association of Korea",
      category: "Various event videos",
      description: "kiki",
      thumbnail: process.env.PUBLIC_URL + "/img/kiki.png",
      link: "https://www.youtube.com"
    },
    {
      id: 2,
      title: "Korean Bar Association",
      category: "Youtube Contents",
      description: "Create diverse content formats",
      thumbnail: "https://i.ibb.co/V0dbhX99/image.png",
      link: "https://www.youtube.com/@KR_lawyer"
    },
    {
      id: 3,
      title: "CGN",
      category: "Shorts Video",
      description: "Highlight video from upload",
      thumbnail: "https://i.ibb.co/FLPYvWSZ/t4.jpg ",
      link: "https://www.youtube.com/@cgn/shorts"
    },
    {
      id: 4,
      title: "Elchoice",
      category: "Viral Contents",
      description: "Make eye-catching content",
      thumbnail: "https://i.ibb.co/WpGsZ8MW/t5.png ",
      link: "https://www.instagram.com/elchoice.official/reels/"
    },
    {
      id: 5,
      title: "Nautica",
      category: "Fashion Film",
      description: "Styled fashion concept film",
      thumbnail: "https://i.ibb.co/tT1nCkLQ/T7-png.webp ",
      link: "https://www.youtube.com"
    },
    {
      id: 6,
      title: "Wisely",
      category: "Advertisement",
      description: "Eye-catching promotional video",
      thumbnail: "https://i.ibb.co/zTScVgjY/T6.webp ",
      link: "https://www.youtube.com"
    },

  ];

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
          setActiveSection(targetId.substring(1));
          setIsMenuOpen(false);
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800 w-full">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Portfolio
          </h1>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
          <nav className="hidden md:flex space-x-8">
            {["about", "portfolio", "services", "contact"].map((section) => (
              <a key={section} href={`#${section}`} className={`capitalize ${activeSection === section ? "text-purple-400" : ""}`}>
                {section}
              </a>
            ))}
          </nav>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-900/90 backdrop-blur-md p-4 animate-fadeIn">
            <ul className="space-y-3">
              {["about", "portfolio", "services", "contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="block capitalize hover:text-purple-400"
                    onClick={() => {
                      setActiveSection(section);
                      setIsMenuOpen(false);
                    }}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="about" className="min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              SNS, 광고, 홍보 콘텐츠를
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">제작하는 930Studio</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              📸브랜드의 분위기를 영상으로🎞기획, 촬영, 편집까지 제가 직접 만듭니다🌿 감성 + 디테일, 모두 담아낼게요
            </p>
            <div className="flex gap-4">
              <a href="#portfolio" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-colors inline-block">포트폴리오 보기</a>
              <a href="#contact" className="px-6 py-3 border border-gray-600 hover:border-purple-500 rounded-full font-medium transition-colors inline-block">연락하기</a>
            </div>
          </div>
          <div className="md:w-1/2 w-full mt-12 md:mt-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-xl transform rotate-3 scale-105"></div>
              <img src="https://i.ibb.co/7xQsVgYm/t8.png " alt="포트폴리오 대표 이미지" className="rounded-xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              나의{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">작품들</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">다양한 형식과 스타일로 제작한 영상 및 콘텐츠 작품들을 소개합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden h-64 block rounded-t-xl">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <span className="text-xs uppercase tracking-wider text-purple-400">
                      {item.category}
                    </span>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                </div>
                </a>
                <div className="p-5">
                  <p className="text-gray-400 text-sm line-clamp-3">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              제공하는{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">서비스</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">영상 제작부터 최종 편집까지, 다양한 영상 관련 서비스를 제공합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "영상 편집",
                description: "프로페셔널한 영상 편집과 색 보정, 사운드 믹싱을 통해 완성도 높은 결과물을 제공합니다.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                  </svg>
                ),
              },
              {
                title: "콘텐츠 제작",
                description: "플랫폼별 특화된 영상 콘텐츠 제작과 쇼츠, 하이라이트 영상 등 다양한 형태의 콘텐츠를 제작합니다.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 1-4-4H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a4 4 0 0 0 4-4h6z" />
                  </svg>
                ),
              },
              {
                title: "촬영 및 연출",
                description: "현장 촬영부터 연출, 조명 설정까지 전문 장비와 기술로 고품질 콘텐츠를 제작합니다.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="mb-4 text-purple-400">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                함께할{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">프로젝트</span>
                를 기다립니다
              </h2>
              <p className="text-gray-400">궁금한 점이 있거나 협업하고 싶으신 경우 아래 양식을 통해 연락 주세요.</p>
            </div>

            {state.succeeded ? (
              <p className="text-green-500 text-lg text-center">✅ 전송되었습니다!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">이름</label>
                    <input id="name" type="text" name="name" required className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg" placeholder="당신의 이름" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">이메일</label>
                    <input id="email" type="email" name="email" required className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg" placeholder="example@domain.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">제목</label>
                  <input id="subject" type="text" name="subject" required className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg" placeholder="문의 내용 요약" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">메시지</label>
                  <textarea id="message" name="message" rows="5" required className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg" placeholder="세부 문의 내용을 입력해주세요."></textarea>
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "전송 중..." : "보내기"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Portfolio</h3>
              <p className="text-gray-500 text-sm mt-1">&copy; copyright(c)2025 All rights reserved by 930studio</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}