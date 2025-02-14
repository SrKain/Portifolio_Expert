import Links from "../Links";

const Home = () => {
    return (
        <section className="text-white md:grid md:grid-cols-2 md:gap-[5%] md:p-[10%] md:items-start flex flex-col-reverse p-[10%] gap-3 ">
            <section className=" flex flex-col justify-center gap-[1rem]">
                <div className='flex flex-col text-xl text-start gap-[0.5rem]'>
                    <h1 className="font-principal text-center md:text-start">
                    Acelere seus resultados para um próximo nível com uma <strong className='font-extrabold text-cyan-300' >Identidade</strong> única!<br></br>
                    <strong className='font-extrabold text-cyan-300' >Usando Tecnologia.</strong>
                    </h1>
                    <h3 className="font-secundaria font-semibold">Olá! Sou <strong className="font-extrabold text-cyan-300">Kauan Iasin</strong>, <br />consultor em tecnologia e desenvolvedor Front-end com especialidade em <strong className="font-extrabold text-cyan-300" >React, Tailwind, HTML, CSS e muito mais.</strong> Ajudo pequenos negócios e designers a colocarem em prática boas ideias. <strong className="font-extrabold text-cyan-300">Vamos conversar?</strong></h3>
                </div>
                <div className="flex flex-col items-center gap-[1rem]">
                    <Links>Acesse Minhas Redes:</Links>
                </div>
            </section>
            <section className="w-full h-full px-[20%]">
                <a href="https://portifolio-expert.vercel.app/" ><img alt="logo do desenvolvedor front-end Kauan Iasin." src='./assets/logoKauanIasin.png' /></a>
            </section>
        </section>
    )
}
export default Home;