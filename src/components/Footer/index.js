const Footer = (props) => {
    return(
        <footer className="mt-20 py-12 liquid-glass border-b-0 rounded-t-[3rem]">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <h3 className="font-principal text-lg tracking-tighter">KAUAN IASIN</h3>
                    <p className="font-secundaria text-sm opacity-60">Consultoria em Tecnologia & Estratégia Digital</p>
                </div>
                
                <div className="flex flex-col items-center md:items-end gap-4">
                    <a 
                        href="https://github.com/srkain" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-secundaria font-bold hover:text-cyan-400 transition-colors"
                    >
                        {props.children}
                    </a>
                    <p className="text-[10px] tracking-[0.2em] opacity-40 uppercase">
                        © 2026 Todos os direitos reservados
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
