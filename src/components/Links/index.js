import { FaInstagram , FaWhatsapp, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Links = (props) => {
  return (
    <div className="flex flex-col justify-center items-center w-[90%] gap-2 m-1" >
        <h3>{props.children}</h3>
      <a
        href="https://www.instagram.com/kauan_iasin/"
        className="border-solid border-cyan-300 flex justify-start gap-[0.7rem] border-[0.1px] rounded-md py-[2%] px-[15%] w-[65%] hover:bg-smooth-gradient hover:underline decoration-solid hover:w-[67%] transition-all"
      >
        <FaInstagram className="text-cyan-300" size={25} />
        Instagram.
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=5511948675920&text=Ol%C3%A1%21%20Kauan%2C%20vi%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20conversar%21"
        className="border-solid border-cyan-300 flex justify-start gap-[0.7rem] border-[0.1px] rounded-md py-[2%] px-[15%] w-[65%] hover:bg-smooth-gradient hover:underline decoration-solid hover:w-[67%] transition-all"
      >
        <FaWhatsapp className="text-cyan-300" size={25} />
        WhatsApp.
      </a>

      <a
        href="https://github.com/SrKain"
        className="border-solid border-cyan-300 flex justify-start gap-[0.7rem] border-[0.1px] rounded-md py-[2%] px-[15%] w-[65%] hover:bg-smooth-gradient hover:underline decoration-solid hover:w-[67%] transition-all"
      >
        <FaGithub className="text-cyan-300" size={25} />
        GitHub.
      </a>

      <a
        href="https://www.linkedin.com/in/kauan-iasin-504b24253/"
        className="border-solid border-cyan-300 flex justify-start gap-[0.7rem] border-[0.1px] rounded-md py-[2%] px-[15%] w-[65%] hover:bg-smooth-gradient hover:underline decoration-solid hover:w-[67%] transition-all"
      >
        <CiLinkedin className="text-cyan-300" size={25} />
        linkedin.
      </a>
    </div>
  );
};

export default Links;
