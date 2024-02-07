import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Content from './components/Content';
import About from './components/About';
import Footer from './components/Footer';
import Portifolio from './components/Curriculum';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {  

  const [repos, setRepos] = useState('')

  function getApiFromGitHub  () {
    fetch("https://api.github.com/users/srkain/repos")
      .then(async (res) => {
        if (!res.ok) {
          alert("não foi possivel encontrar os repositórios");
        }
        let data = await res.json();
        setRepos(data);
      })
      .catch((erro) => console.log(erro));
  };

  useEffect(() => {
    getApiFromGitHub();
  }, []);

  const pages = [
    {
      titulo: 'Home',
      conteudo: <Home/>,
    },
    {
      titulo: 'Sobre mim',
      conteudo: <About/>,
    },
    {
      titulo: 'Meu Portifólio',
      conteudo: <Portifolio api={repos} />,
    },
  ]

  const [atual, setAtual] = useState(<Home/>)

  function mudapagina(pagina, titulo) {
    setAtual(pagina);
    document.title = `${titulo} | Portifólio Kauan Iasin`
  }

  return (
    <section className="App flex flex-col md:gap-2 bg-port-gradient md:h-[100%] md:box-border md:max-w-screen md:font-secundaria">
      <Header pages={pages} paginaatual={(pagina, titulo) => mudapagina(pagina, titulo)}/>
      <Content pagina={atual}></Content>
      <Footer>Desenvolvido por Kauan Iasin.</Footer>
      <SpeedInsights/>
    </section>
  );
}

export default App;
