import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";

const Header = (props) => {
  const [display, setDisplay] = useState(false);
  const location = useLocation();

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        display ? "h-auto py-8" : "h-24"
      } flex items-center px-6 md:px-12 justify-between liquid-glass rounded-b-2xl border-t-0`}
    >
      <Link className="h-16 w-auto flex items-center gap-3" to="/">
        <img
          className="h-full object-contain hover:rotate-3 transition-transform"
          alt="Logo Kauan Iasin"
          src="./assets/logoKauanIasin.png"
        />
        <span className="hidden md:block font-principal text-sm tracking-tighter opacity-80">
          KAUAN IASIN
        </span>
      </Link>

      <div className="flex items-center gap-4">
        <h2
          className={`md:hidden font-principal text-xs text-cyan-400 px-3 py-1 bg-black/20 rounded-full ${
            display ? "hidden" : "flex"
          }`}
        >
          {props.pages.find(p => p.path === location.pathname)?.titulo || "Home"}
        </h2>

        <button
          className="md:hidden text-cyan-400 p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setDisplay(!display)}
          aria-label="Menu"
        >
          {display ? <AiOutlineMenuUnfold size={32} /> : <AiOutlineMenu size={32} />}
        </button>

        <nav
          className={`md:flex md:flex-row items-center gap-6 ${
            display
              ? "absolute top-24 left-0 w-full flex flex-col p-8 liquid-glass rounded-b-2xl animate-in fade-in slide-in-from-top-4"
              : "hidden"
          }`}
        >
          {props.pages.map((item) => (
            <Link
              className={`relative group px-4 py-2 font-secundaria font-semibold transition-all
                ${location.pathname === item.path
                  ? "text-cyan-400" 
                  : "hover:text-cyan-300 opacity-80 hover:opacity-100"
                }`}
              key={item.titulo}
              to={item.path}
              onClick={() => setDisplay(false)}
            >
              {item.titulo}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transition-transform duration-300 origin-left 
                ${location.pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} 
              />
            </Link>
          ))}
          
          <a 
            href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! Kauan, vi seu portifólio e gostaria de conversar!" 
            target="_blank"
            rel="noopener noreferrer"
            className="md:ml-4 px-6 py-2 bg-cyan-500 text-white rounded-full font-bold hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all text-center"
            onClick={() => setDisplay(false)}
          >
            CONTATO IMEDIATO (WHATSAPP)
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
