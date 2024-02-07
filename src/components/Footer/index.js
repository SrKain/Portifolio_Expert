const Footer = (props) => {
    return(
        <section className="flex justify-center bg-cyan-300 h-[10vh] items-center font-sans font-bold">
            <a href="https://github.com/srkain"><h1>{props.children}</h1></a>
        </section>
    )
}

export default Footer;