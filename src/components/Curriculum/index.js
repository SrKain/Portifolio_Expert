import Links from "../Links";
import Project from "../ProjectFromApi";

const Portifolio = (props) => {
  return (
    <section className="py-12 flex flex-col gap-16">
      {/* Header Section */}
      <section className="liquid-glass rounded-[2rem] p-8 md:p-12 flex flex-col md:grid md:grid-cols-[1fr_3fr] gap-12 items-center">
        <div className="w-48 h-48 md:w-full md:h-auto max-w-[250px]">
          {props.img}
        </div>
        
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-principal text-cyan-400 text-xl tracking-wider uppercase border-b-2 border-cyan-400/30 pb-2 w-fit">
                Especialidades
              </h2>
              <div className="font-secundaria text-lg opacity-90 leading-relaxed">
                <p>Front-end: <span className="text-cyan-400">React, Next.js, Tailwind, JavaScript (ES6+)</span></p>
                <p>Arquitetura: <span className="text-cyan-400">Mobile-first, Acessibilidade, Clean Code</span></p>
                <p>Consultoria: <span className="text-cyan-400">SEO Strategy, Presença Digital, UX Research</span></p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <h2 className="font-principal text-cyan-400 text-xl tracking-wider uppercase border-b-2 border-cyan-400/30 pb-2 w-fit">
                Conecte-se
              </h2>
              <Links />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col gap-10">
        <div className="flex items-center gap-6">
          <h2 className="font-principal text-3xl md:text-4xl">
            Projetos <span className="text-cyan-400">Recentes</span>
          </h2>
          <div className="flex-grow h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.isArray(props.api) && props.api.length > 0 ? (
            props.api.map((item) => (
              <Project key={item.id} object={item} />
            ))
          ) : (
            <div className="col-span-full liquid-glass p-12 rounded-2xl text-center">
              <p className="opacity-60 italic">Carregando projetos do GitHub...</p>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Portifolio;
