const Project = (props) => {
  return (
    <article className="group h-full">
      <a
        className="flex flex-col h-full liquid-glass rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10"
        href={props.object.homepage || props.object.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center p-6 border-b border-white/5 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-colors">
          <h3 className="font-principal font-bold text-cyan-400 text-lg text-center leading-tight group-hover:scale-110 transition-transform">
            {props.object.name.replace(/-/g, ' ')}
          </h3>
        </div>
        
        <div className="flex-grow p-5 flex flex-col gap-4">
          <p className="font-secundaria text-sm opacity-80 leading-relaxed line-clamp-3">
            {props.object.description || "Projeto incrível desenvolvido com as melhores práticas de front-end e foco em experiência do usuário."}
          </p>
          
          <div className="mt-auto flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-widest text-cyan-500 uppercase">
              {props.object.language || "Web Project"}
            </span>
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[10px] font-medium opacity-50 uppercase">Ver Projeto</span>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default Project;
