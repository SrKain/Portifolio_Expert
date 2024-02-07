import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Content from './components/Content';
import About from './components/About';
import Footer from './components/Footer';
import Portifolio from './components/Curriculum';

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
    <section className="App flex flex-col gap-2 bg-port-gradient h-[100%] box-border max-w-screen font-secundaria">
      <Header pages={pages} paginaatual={(pagina, titulo) => mudapagina(pagina, titulo)}/>
      <Content pagina={atual}></Content>
      <Footer>Desenvolvido por Kauan Iasin.</Footer>
    </section>
  );
}

export default App;
