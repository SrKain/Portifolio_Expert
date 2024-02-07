import Links from "../Links";
import Project from "../ProjectFromApi";

const Portifolio = (props) => {
  return (
    <section className="text-white p-[5%]">
      <section className=" gap-[2%] grid grid-cols-[1fr_4fr]">
        <section>
          <img
            src="https://github.com/srkain.png"
            alt="Foto do Desenvolvedor Front-end Kauan Iasin"
          />
          <h1 className="font-secundaria text-white text-start text-lg">
            Kauan Iasin.
            <br />
            21 Anos.
            <br />
            Solteiro.
            <br />
            Campina Grande Do Sul - PR.
          </h1>
        </section>

        <section className="flex flex-col items-start">
          <div className="grid grid-cols-2 gap-[2%]">
            <div>
              <h1 className="font-principal text-cyan-300 font-bold text-3xl text-start underline">
                Capacidades
              </h1>
              <div className="font-secundaria text-white text-start text-xl">
                HTML, CSS, React.js, TailWind, JavaScript.
                <br />
                Acessibilidade, Mobile-first, React components.
              </div>
            </div>

            <div>
              <h1 className="font-principal text-cyan-300 font-bold text-3xl text-start underline">
                Entre em contato
              </h1>
              <Links />
            </div>
          </div>
        </section>
      </section>
      <section className="p-[5%]">
        <section className="flex flex-col justify-center items-center gap-6 w-full">
          <h1 className="font-principal my-2 text-cyan-300 font-bold text-3xl text-start underline">
            Projetos
          </h1>
          <div className="grid grid-cols-4 gap-5">
            {props.api.map((item) => (
              <Project key={item.id} object={item} />
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Portifolio;
