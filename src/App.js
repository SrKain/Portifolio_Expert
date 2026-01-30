import { useEffect, useState, useCallback } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header";
import Home from "./components/Home";
import Content from "./components/Content";
import About from "./components/About";
import Footer from "./components/Footer";
import Portifolio from "./components/Curriculum";
import { Analytics } from '@vercel/analytics/react';
import { MdLightMode, MdDarkMode } from "react-icons/md";

function App() {
  const [repos, setRepos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    {
      titulo: "Home",
      conteudo: <Home />,
    },
    {
      titulo: "Sobre mim",
      conteudo: <About/>,
    },
    {
      titulo: "Meu Portifólio",
      conteudo: <Portifolio img={perfilGitHubSquare} api={repos} />,
    },
  ];

  const [atual, setAtual] = useState(pages[0].conteudo);
  const [titulo, setTitulo] = useState(pages[0].titulo);

  function mudapagina(pagina, titulo) {
    setAtual(pagina);
    document.title = `${titulo} | Kauan Iasin - Consultoria`;
    setTitulo(titulo);
  }

  return (
    <section className={`App min-h-screen flex flex-col transition-colors duration-500 ${isDarkMode ? 'bg-port-gradient text-white' : 'bg-light-gradient text-slate-900'} font-secundaria`}>
      <Header
        pages={pages}
        pagina={atual}
        tituloatual={titulo}
        paginaatual={(pagina, titulo) => mudapagina(pagina, titulo)}
      />
      
      <main className="flex-grow container mx-auto px-4">
        <Content pagina={atual}></Content>
      </main>

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

export default App;
