import Links from "../Links";

const Home = () => {
    return(
        <section className="text-white grid grid-cols-2 gap-[5%] p-[10%] items-start">
            <section className=" flex flex-col justify-center gap-[1rem]">
                <div className='flex flex-col text-xl text-start gap-[0.5rem]'>
                    <h2 className="font-principal">Eleve seu negócio a outro nível com um <strong className='font-extrabold text-cyan-300' >Front-end</strong> de qualidade!</h2>
                    <p>Olá! Sou <strong className="font-extrabold text-cyan-300">Kauan Iasin</strong>, <br/>desenvolvedor Front-end com especialidade em <strong className="font-extrabold text-cyan-300" >React, Tailwind, HTML, CSS e muito mais.</strong> Ajudo pequenos negócios e designers a colocarem em prática boas ideias.<strong className="font-extrabold text-cyan-300" >Vamos conversar?</strong></p>
                </div>
                <div className="flex flex-col items-center gap-[1rem]">
                    <Links>Acesse Minhas Redes:</Links>
                </div>
            </section>
            <section className="w-full h-full px-[20%]">
                <a href="https://github.com/srkain" ><img src='./assets/logoKauanIasin.png'/></a>
            </section>
        </section>
    )
}
export default Home;