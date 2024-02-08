const About = (props) => {
  return (
    <section className="text-white md:grid md:grid-cols-2 flex flex-col-reverse md:gap-[5%] p-[10%] md:px-[8%] md:py-[5%] items-center">
      <div className="font-principal text-xl text-start gap-[1rem] flex flex-col">
        <h1 className="text-2xl md:text-3xl">
          Sou
          <strong className="text-cyan-300 font-semibold">
            {" "}
            Kauan Iasin,
          </strong>{" "}
          especialista em
          <strong className="text-cyan-300 font-semibold">
            CSS, HTML, REACT E TAILWIND.
          </strong>
        </h1>
        <p className="font-secundaria text-2xl md:text-xl">
          Desde sempre fui apaixonado por tecnologia e internet, sempre vi em
          mim o talento natural para lidar com isso.
          <br />
          Então, decidi estudar mais a fundo e me tornar um verdadeiro
          desenvolvedor, para que assim, eu pudesse me tornar ainda melhor
          lidando com a área.
          <br />
          Agora, busco oportunidades de colocar os meus conhecimentos e talentos
          em prática, e crescer cada dia mais na minha carreira.
        </p>
        <h2 className="text-cyan-300">
          <a
            className="hover:underline decoration-solid"
            href="https://api.whatsapp.com/send?phone=5511948675920&text=Ol%C3%A1%21%20Kauan%2C%20vi%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20conversar%21"
          >
            Que tal conversamos sobre?
          </a>
        </h2>
      </div>
      <div className="flex justify-center items-center">
          <img
            src="../assets/fotoPerfilGitHub.jpeg"
            alt="foto de perfil do desenvolvedor em front-end Kauan Iasin"
            style={{
              borderRadius: "50%",
              display: "flex",
              border: "solid",
              borderWidth: "2px",
              padding: "0.25rem",
              borderColor: "rgb(103 232 249) ",
            }}
          />
      </div>
    </section>
  );
};

export default About;
