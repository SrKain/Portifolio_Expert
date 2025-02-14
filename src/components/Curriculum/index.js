import Links from "../Links";
import Project from "../ProjectFromApi";

const Portifolio = (props) => {
  return (
    <section className="text-white p-[5%]">
      <section className=" p-[5%] gap-[2%] md:grid md:grid-cols-[1fr_4fr] flex flex-col">
        <section className="p-[8%] md:p-0">
          {props.img}
        </section>
        <section className="flex flex-col  items-start">
          <div className="md:grid md:grid-cols-2 flex flex-col gap-5">
            <div>
              <h1 className="font-principal text-cyan-300 font-bold text-2xl md:text-2xl text-start underline">
                Capacidades
              </h1>
              <div className="font-secundaria text-white text-start text-xl">
                HTML, CSS, React.js, TailWind, JavaScript.
                <br />
                Acessibilidade, Mobile-first, React components.
              </div>
            </div>

            <div className="flex flex-col items-end justify-end">
              <h1 className="font-principal text-cyan-300 font-bold text-2xl md:text-3xl text-start underline">
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
          <div className="md:grid md:grid-cols-4 flex flex-col gap-5">
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
