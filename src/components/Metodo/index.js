import React from 'react';
import { FaSearch, FaClipboardList, FaCheckCircle, FaRocket } from 'react-icons/fa';

const Metodo = () => {
  const steps = [
    {
      icon: <FaSearch size={40} className="text-cyan-400" />,
      title: "Diagnóstico Estratégico",
      description: "Análise profunda do seu negócio, mercado e concorrência. Identificamos gargalos tecnológicos e oportunidades de crescimento digital. Esta fase é crucial para o SEO, pois define as palavras-chave de cauda longa e a intenção de busca do seu público-alvo.",
      keywords: "Análise de Mercado, Auditoria Tecnológica, Oportunidades Digitais, Pesquisa de Concorrência",
    },
    {
      icon: <FaClipboardList size={40} className="text-cyan-400" />,
      title: "Planejamento de Soluções",
      description: "Desenho de uma arquitetura de solução personalizada. Criamos um roadmap claro, definindo a stack tecnológica (React, Next.js, Tailwind) e a estratégia de conteúdo que irá gerar autoridade e tráfego orgânico de forma sustentável.",
      keywords: "Roadmap Tecnológico, Arquitetura de Solução, Estratégia de Conteúdo, Planejamento SEO",
    },
    {
      icon: <FaCheckCircle size={40} className="text-cyan-400" />,
      title: "Validação e Prototipagem",
      description: "Construção de protótipos e MVPs para testar a usabilidade (UX) e a eficácia da solução antes do desenvolvimento completo. Garantimos que a experiência do usuário seja fluida, um fator vital para o ranqueamento no Google (Core Web Vitals).",
      keywords: "Prototipagem, Teste de Usabilidade, MVP, Core Web Vitals, Otimização UX",
    },
    {
      icon: <FaRocket size={40} className="text-cyan-400" />,
      title: "Execução e Otimização Contínua",
      description: "Desenvolvimento ágil e implementação da solução. Após o lançamento, monitoramos o desempenho, tráfego orgânico e conversões, aplicando otimizações contínuas para garantir que o projeto entregue o máximo retorno sobre o investimento (ROI).",
      keywords: "Desenvolvimento Ágil, Lançamento, Monitoramento de Tráfego, Otimização de Conversão, ROI",
    },
  ];

  return (
    <section className="py-12 flex flex-col gap-16">
      <header className="text-center max-w-4xl mx-auto">
        <h1 className="font-principal text-4xl md:text-6xl leading-tight mb-4">
          O <span className="text-cyan-400">Método</span> que Transforma Visão em <span className="text-cyan-400">Resultado</span>
        </h1>
        <p className="font-secundaria text-xl opacity-80">
          Há <strong className="text-cyan-400">4 anos</strong>, utilizo esta metodologia validada para entregar projetos de consultoria em tecnologia que não apenas funcionam, mas que dominam o ambiente digital.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="liquid-glass p-8 rounded-3xl flex flex-col items-center text-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            <div className="p-4 rounded-full bg-cyan-400/10 mb-2">
              {step.icon}
            </div>
            <h2 className="font-principal text-xl text-cyan-400">{step.title}</h2>
            <p className="font-secundaria text-base opacity-70 flex-grow">{step.description}</p>
            <div className="mt-4 text-xs opacity-50 italic">
                {step.keywords}
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center mt-8">
        <h3 className="font-principal text-2xl mb-4">
            Pronto para aplicar um método que garante <span className="text-cyan-400">Autoridade e Conversão</span>?
        </h3>
        <a
            href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! Kauan, gostaria de aplicar o seu Método de 4 anos no meu negócio!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-cyan-500 text-white font-bold rounded-full text-lg hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] group"
        >
            FALE COM O CONSULTOR AGORA
            <span className="ml-3 text-xl group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </footer>
    </section>
  );
};

export default Metodo;
