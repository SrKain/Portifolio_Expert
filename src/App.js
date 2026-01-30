import { useEffect, useState, useCallback } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
// import Content from "./components/Content";
import About from "./components/About";
import Footer from "./components/Footer";
import Portifolio from "./components/Curriculum";
import Metodo from "./components/Metodo";
import { Analytics } from '@vercel/analytics/react';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function AppContent() {
  const [repos, setRepos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  const getApiFromGitHub = useCallback(() => {
    fetch("https://api.github.com/users/srkain/repos")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Não foi possível encontrar os repositórios");
        }
        let data = await res.json();
        setRepos(data);
      })
      .catch((erro) => console.error(erro));
  }, []);

  useEffect(() => {
    getApiFromGitHub();
  }, [getApiFromGitHub]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const perfilGitHubSquare = (
    <img
      src="./assets/fotoPerfilGitHub.jpeg"
      alt="foto de perfil do desenvolvedor em front-end Kauan Iasin"
      className="rounded-full shadow-lg"
    />
  );

  const pages = [
    { titulo: "Home", path: "/" },
    { titulo: "Sobre mim", path: "/sobre" },
    { titulo: "Meu Portifólio", path: "/portfolio" },
    { titulo: "Método", path: "/metodo" },
  ];

  /* const getPageTitle = (pathname) => {
    const page = pages.find(p => p.path === pathname);
    return page ? page.titulo : "Home";
  }; */

  return (
    <section className={`App min-h-screen flex flex-col transition-colors duration-500 ${isDarkMode ? 'bg-port-gradient text-white' : 'bg-light-gradient text-slate-900'} font-secundaria`}>
      <Header pages={pages} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/portfolio" element={<Portifolio img={perfilGitHubSquare} api={repos} />} />
          <Route path="/metodo" element={<Metodo />} />
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! Kauan, vi seu portifólio e gostaria de conversar!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 p-4 rounded-full liquid-glass z-50 bg-green-500/80 hover:bg-green-500 hover:scale-110 transition-transform shadow-xl"
        aria-label="Fale Conosco pelo WhatsApp"
      >
        <FaWhatsapp size={24} className="text-white" />
      </a>

      <button 
        onClick={toggleTheme}
        className="fixed bottom-8 right-8 p-4 rounded-full liquid-glass z-50 hover:scale-110 transition-transform"
        aria-label="Alternar Tema"
      >
        {isDarkMode ? <MdLightMode size={24} className="text-yellow-400" /> : <MdDarkMode size={24} className="text-slate-700" />}
      </button>

      <Footer>Desenvolvido por Kauan Iasin.</Footer>
      <SpeedInsights />
      <Analytics/>
    </section>
  );
}

function App() {
  return (
    <Router basename="/">
      <AppContent />
    </Router>
  );
}

export default App;
