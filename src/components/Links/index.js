import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Links = (props) => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/kauan_iasin/",
      icon: <FaInstagram size={20} />,
    },
    {
      name: "WhatsApp",
      url: "https://api.whatsapp.com/send?phone=5511948675920&text=Olá! Kauan, vi seu portifólio e gostaria de conversar!",
      icon: <FaWhatsapp size={20} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/SrKain",
      icon: <FaGithub size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kauan-iasin-504b24253/",
      icon: <FaLinkedin size={20} />,
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-xs">
      {props.children && (
        <h3 className="font-principal text-xs tracking-widest opacity-60 uppercase text-center md:text-start mb-2">
          {props.children}
        </h3>
      )}
      <div className="grid grid-cols-2 sm:flex sm:flex-col gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 liquid-glass rounded-xl text-sm font-semibold hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all group"
          >
            <span className="text-cyan-400 group-hover:scale-110 transition-transform">
              {link.icon}
            </span>
            <span className="hidden sm:inline">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Links;
