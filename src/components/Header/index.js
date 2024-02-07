const Header = (props) => {

    return(
        <section className="flex h-[15vh] max-w-full max-h-full items-center px-8 my-5 justify-between gap-[10%]">

                <a className='h-full' href='#'> 
                    <img className="h-full" src="./assets/logoKauanIasin.png" />
                </a>

                <nav className="flex w-full justify-evenly">
                {props.pages.map(item => 
                <button 
                className="bg-smooth-gradient rounded-sm px-[3%] py-[0.5%] border-l-2 border-cyan-300 text-cyan-300 font-sans font-semibold hover:border-l-[0.4rem] transition-all duration-75" 
                href="#"
                key={item.titulo} 
                onClick={() => {props.paginaatual(item.conteudo, item.titulo)
                }}>

                    {item.titulo}

                </button>)}
            </nav>
        </section>
    )
}

export default Header;