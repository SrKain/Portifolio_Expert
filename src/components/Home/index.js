import Links from "../Links";

const Home = () => {
    return (
        <section className="min-h-[70vh] flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 py-12 items-center">
            <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-left-8 duration-700">
                <div className='flex flex-col gap-6'>
                    <h1 className="font-principal text-3xl md:text-5xl leading-tight">
                        Acelere seus resultados com uma <span className='text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]'>Identidade</span> única e estratégica.
                    </h1>
                    
                    <div className="liquid-glass p-6 rounded-2xl border-l-4 border-l-cyan-400">
                        <h3 className="font-secundaria text-lg md:text-xl leading-relaxed opacity-90">
                            Olá! Sou <strong className="text-cyan-400 font-bold">Kauan Iasin</strong>, consultor em tecnologia e presença digital. 
                            Especialista em <span className="underline decoration-cyan-400/50">React e UX Design</span>, ajudo empresas a transformarem 
                            ideias em soluções digitais de alta confiabilidade e performance.
                        </h3>
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <Links />
                    <div className="hidden sm:block h-12 w-px bg-white/20"></div>
                    <p className="text-sm opacity-60 font-medium tracking-widest uppercase">
                        Disponível para novos projetos
                    </p>
                </div>
            </div>

            <div className="relative w-full max-w-md mx-auto lg:max-w-none group">
                <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-colors duration-500"></div>
                <div className="relative liquid-glass p-8 rounded-[2rem] overflow-hidden">
                    <img 
                        alt="Logo Kauan Iasin - Consultoria em Tecnologia" 
                        src='./assets/logoKauanIasin.png' 
                        className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 w-24 h-24 liquid-glass rounded-2xl flex items-center justify-center animate-bounce duration-[3s]">
                    <span className="text-3xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 px-6 py-3 liquid-glass rounded-full text-xs font-bold tracking-widest text-cyan-400 uppercase">
                    Tech Consultant
                </div>
            </div>
        </section>
    )
}
export default Home;
