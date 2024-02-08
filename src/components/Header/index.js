import { useState } from "react";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";

const Header = (props) => {
  const [display, setDisplay] = useState(false);

  return (
    <section
      className={`flex ${
        display === true ? "h-[30vh]" : "h-[15vh]"
      } md:h-[15vh] max-w-full max-h-full items-center px-8 my-5 justify-between gap-[8%] md:gap-[10%]`}
    >
      <a className="h-full w-auto" href="https://portifolio-expert.vercel.app/">
        <img
          className={`${display === true ? "h-1/2" : "h-full"} md:h-full`}
          alt="logo do desenvvolvedor Front-end Kauan Iasin."
          src="./assets/logoKauanIasin.png"
        />
      </a>

      <div
        className={`flex ${
          !display ? "flex-row justify-evenly" : "flex-col"
        } gap-5 items-end justify-center w-full`}
      >
        <h2
          className={`md:hidden font-principal ${
            display === true ? "hidden" : "flex"
          } text-cyan-300 p-2 bg-smooth-gradient-up rounded-xl`}
        >
          {props.tituloatual}
        </h2>

        {display === false ? (
          <AiOutlineMenu
            className="text-cyan-300 md:hidden"
            onClick={() => {
              display === true ? setDisplay(false) : setDisplay(true);
            }}
            size={40}
          />
        ) : (
          <AiOutlineMenuUnfold
            className="text-cyan-300 md:hidden"
            onClick={() => {
              display === true ? setDisplay(false) : setDisplay(true);
            }}
            size={40}
          />
        )}

        <nav
          className={`md:flex md:flex-row w-full md:justify-evenly ${
            display === true
              ? `flex flex-col gap-4 justify-evenly h-full`
              : "hidden"
          }`}
        >
          {props.pages.map((item) => (
            <button
              className="bg-smooth-gradient rounded-sm px-[3%] py-[0.5%] border-l-2 border-cyan-300 text-cyan-300 font-sans font-semibold md:hover:border-l-[0.4rem] transition-all duration-75"
              href="#"
              key={item.titulo}
              onClick={() => {
                props.paginaatual(item.conteudo, item.titulo);
                setDisplay(!display);
              }}
            >
              {item.titulo}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Header;
