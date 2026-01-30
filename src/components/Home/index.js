import Links from "../Links";
import { FaRocket, FaLightbulb, FaChartLine, FaShieldAlt, FaClock } from "react-icons/fa";

const Home = () => {
    const diferenciais = [
        {
            icon: <FaLightbulb size={32} className="text-cyan-400" />,
            titulo: "Estratégia Inteligente",
            descricao: "Análise profunda de mercado e concorrência para definir o melhor caminho para seu negócio."
        },
        {
            icon: <FaChartLine size={32} className="text-cyan-400" />,
            titulo: "Resultados Mensuráveis",
            descricao: "Cada projeto é acompanhado com KPIs claros e relatórios de performance em tempo real."
        },
        {
            icon: <FaShieldAlt size={32} className="text-cyan-400" />,
            titulo: "Confiabilidade",
            descricao: "4 anos de experiência entregando soluções que passam autoridade e segurança ao seu público."
        },
        {
            icon: <FaClock size={32} className="text-cyan-400" />,
            titulo: "Agilidade",
            descricao: "Metodologia ágil que permite iterações rápidas e ajustes conforme necessário."
        }
    ];

    const metodologia = [
        {
            numero: "01",
            titulo: "Diagnóstico",
            descricao: "Análise profunda do seu negócio, mercado e oportunidades digitais."
        },
        {
            numero: "02",
            titulo: "Planejamento",
            descricao: "Definição de estratégia, roadmap e tecnologias para máximo impacto."
        },
        {
            numero: "03",
            titulo: "Validação",
            descricao: "Prototipagem e testes de usabilidade antes do desenvolvimento completo."
        },
        {
            numero: "04",
            titulo: "Execução",
            descricao: "Desenvolvimento ágil com otimizações contínuas e monitoramento de resultados."
        }
    ];

    return (
        <>
            {/* Hero Section */}
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
                    
                    {/* Floating elements with icons instead of emojis */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 liquid-glass rounded-2xl flex items-center justify-center animate-bounce duration-[3s]">
                        <FaRocket size={40} className="text-cyan-400" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 px-6 py-3 liquid-glass rounded-full text-xs font-bold tracking-widest text-cyan-400 uppercase">
                        Tech Consultant
                    </div>
                </div>
            </section>

            {/* Metodologia Section */}
            <section className="py-16 flex flex-col gap-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-principal text-4xl md:text-5xl mb-4">
                        Minha <span className="text-cyan-400">Metodologia</span> Comprovada
                    </h2>
                    <p className="font-secundaria text-lg opacity-80">
                        Há 4 anos, aplico um método estruturado que transforma visão em resultados mensuráveis. 
                        Cada etapa é pensada para garantir máximo impacto e ROI no seu negócio digital.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metodologia.map((etapa, index) => (
                        <div 
                            key={index}
                            className="liquid-glass p-8 rounded-2xl flex flex-col gap-4 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="font-principal text-5xl text-cyan-400/30">{etapa.numero}</div>
                            <h3 className="font-principal text-xl text-cyan-400">{etapa.titulo}</h3>
                            <p className="font-secundaria opacity-80">{etapa.descricao}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <a
                        href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! Kauan, gostaria de conhecer mais sobre sua metodologia!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-4 bg-cyan-500 text-white font-bold rounded-full text-lg hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] group"
                    >
                        CONHEÇA MEU MÉTODO
                        <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </section>

            {/* Diferenciais Section */}
            <section className="py-16 flex flex-col gap-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-principal text-4xl md:text-5xl mb-4">
                        Por que <span className="text-cyan-400">Escolher</span> Minha Consultoria?
                    </h2>
                    <p className="font-secundaria text-lg opacity-80">
                        Não entrego apenas código. Entrego estratégia, confiabilidade e resultados que impactam 
                        o crescimento real do seu negócio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {diferenciais.map((diferencial, index) => (
                        <div 
                            key={index}
                            className="liquid-glass p-8 rounded-3xl flex gap-6 items-start hover:scale-[1.02] transition-transform duration-300"
                        >
                            <div className="p-4 rounded-full bg-cyan-400/10 flex-shrink-0">
                                {diferencial.icon}
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-principal text-xl text-cyan-400">{diferencial.titulo}</h3>
                                <p className="font-secundaria opacity-80">{diferencial.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Final Section */}
            <section className="py-16 flex flex-col items-center gap-8 text-center">
                <div className="max-w-2xl">
                    <h2 className="font-principal text-4xl md:text-5xl mb-4">
                        Pronto para <span className="text-cyan-400">Transformar</span> Seu Negócio?
                    </h2>
                    <p className="font-secundaria text-lg opacity-80 mb-8">
                        Vamos conversar sobre como posso ajudar você a alcançar seus objetivos digitais 
                        com estratégia, tecnologia e resultados comprovados.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! Kauan, gostaria de marcar uma consultoria!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-4 bg-cyan-500 text-white font-bold rounded-full text-lg hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] group"
                    >
                        AGENDAR CONSULTORIA
                        <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kauan-iasin-504b24253/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-4 liquid-glass text-white font-bold rounded-full text-lg hover:bg-cyan-400/20 transition-all group"
                    >
                        CONECTAR NO LINKEDIN
                        <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </section>
        </>
    )
}
export default Home;
