const Project = (props) => {
  return (
    <section className="text-white items-center justify-center">
      <a
        className="grid grid-rows-[1fr_2fr] h-full"
        href={props.object.homepage}
      >
        <div className="bg-cyan-300 flex justify-center rounded-t-xl items-center ">
          <h1 className="font-principal font-bold text-black text-xl">
            {props.object.name}
          </h1>
        </div>
        <div>
          <p className=" h-full font-secundaria text-md font-semibold bg-smooth-gradient-up rounded-b-xl text-start px-[5%] py-1">
            {props.object.description}
          </p>
        </div>
      </a>
    </section>
  );
};

export default Project;
