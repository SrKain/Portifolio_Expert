const About = () => {
    return (
        <section className="text-white grid grid-cols-2 gap-[5%] p-[10%] items-center">
            <div className="font-principal text-xl text-start gap-[1rem] flex flex-col">
                <h1>
                    Sou <strong className="text-cyan-300 font-semibold">Kauan Iasin,</strong> especialista em{" "}
                    <strong className="text-cyan-300 font-semibold">CSS, HTML, REACT E TAILWIND.</strong>
                </h1>
                <p className="font-secundaria">
                    Desde sempre fui apaixonado por tecnologia e internet, sempre vi em
                    mim o talento natural para lidar com isso.<br/>
                    Então, decidi estudar
                    mais a fundo e me tornar um verdadeiro desenvolvedor, para que assim, eu
                    pudesse me tornar ainda melhor lidando com a área.<br/> 
                    Agora, busco oportunidades
                    de colocar os meus conhecimentos e talentos em prática, e crescer cada dia mais na minha carreira.
                </p>
                <h2 className='text-cyan-300'><a className="hover:underline decoration-solid" href="https://api.whatsapp.com/send?phone=5511948675920&text=Ol%C3%A1%21%20Kauan%2C%20vi%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20conversar%21">Que tal conversamos sobre?</a></h2>
            </div>
            <div className='flex justify-center items-center'>
                <a className="rounded-full" href="https://www.linkedin.com/in/kauan-iasin-504b24253/">
                <img className="flex border-solid border-2 border-cyan-300 rounded-full p-1 " src="https://github.com/srkain.png"/>
                </a>
            </div>
        </section>
    );
};

export default About;
