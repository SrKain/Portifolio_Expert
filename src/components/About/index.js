const About = (props) => {
  return (
    <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 py-12 items-center">
      <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-left-8 duration-700">
        <h1 className="font-principal text-3xl md:text-4xl leading-tight">
          Sou <span className="text-cyan-400">Kauan Iasin</span>, especialista em soluções digitais de alta performance.
        </h1>
        
        <div className="liquid-glass p-8 rounded-3xl flex flex-col gap-6">
          <p className="font-secundaria text-lg leading-relaxed opacity-90">
            Minha jornada na tecnologia começou com uma curiosidade insaciável sobre como o mundo digital funciona. 
            Hoje, transformo essa paixão em resultados tangíveis através de arquiteturas sólidas em 
            <strong className="text-cyan-400"> React, Next.js e Tailwind CSS</strong>.
          </p>
          
          <p className="font-secundaria text-lg leading-relaxed opacity-90">
            Foco em criar experiências que não apenas pareçam modernas, mas que passem 
            <strong className="text-cyan-400"> confiabilidade e autoridade</strong> para o seu negócio. 
            Acredito que cada linha de código deve servir a um propósito estratégico.
          </p>

          <a
            className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-400 transition-all hover:shadow-lg group"
            href="https://api.whatsapp.com/send?phone=5511948675920&text=Olá! Kauan, vi seu portifólio e gostaria de conversar!"
          >
            VAMOS ESCALAR SEU NEGÓCIO?
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      <div className="relative group flex justify-center items-center">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative liquid-glass p-2 rounded-full">
          <img
            src="./assets/fotoPerfilGitHub.jpeg"
            alt="Kauan Iasin - Consultor de Tecnologia"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-cyan-400/30"
          />
        </div>
        
        {/* Floating badge */}
        <div className="absolute top-0 right-0 md:right-10 liquid-glass px-4 py-2 rounded-2xl border border-cyan-400/50 animate-pulse">
          <span className="text-xs font-bold text-cyan-400">DISPONÍVEL</span>
        </div>
      </div>
    </section>
  );
};

export default About;
