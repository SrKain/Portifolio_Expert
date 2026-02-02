import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaFire } from "react-icons/fa";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Como Aumentar as Vendas no Seu E-commerce Usando Truques de SEO",
      excerpt: "Descubra as 8 estratégias mais eficazes de SEO para transformar visitantes em clientes e alavancar suas vendas exponencialmente. Aprenda com quem tem 4 anos de experiência.",
      date: "30 de Janeiro de 2026",
      author: "IAI",
      readTime: "12 min",
      category: "SEO",
      slug: "seo-ecommerce-vendas",
      featured: true,
      views: "2.3K"
    }
  ];

  return (
    <section className="min-h-screen py-16 px-4">
      {/* Schema.org para Blog */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Blog de Estratégia Digital - IAI",
          "description": "Conteúdo profundo sobre SEO, e-commerce e estratégias digitais que realmente funcionam",
          "url": "https://iasin.dev.br/blog",
          "author": {
            "@type": "Person",
            "name": "IAI (Kauan Iasin)",
            "url": "https://iasin.dev.br"
          }
        })}
      </script>

      {/* Header do Blog */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full mb-6 border border-cyan-500/30">
          <FaFire className="text-cyan-400" />
          <span className="text-sm font-bold text-cyan-400">Conteúdo Estratégico</span>
        </div>
        
        <h1 className="font-principal text-5xl md:text-6xl mb-6 leading-tight">
          Blog de <span className="text-cyan-400">Estratégia</span> Digital
        </h1>
        
        <p className="font-secundaria text-lg opacity-80 mb-4 leading-relaxed">
          Conteúdo profundo e acionável sobre SEO, e-commerce e estratégias digitais que realmente funcionam. 
          Aprenda com quem tem 4 anos de experiência transformando negócios.
        </p>
        
        <p className="font-secundaria text-sm opacity-60">
          Atualizado regularmente com insights e estratégias comprovadas
        </p>
      </div>

      {/* CTA Inicial */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="liquid-glass p-8 rounded-2xl border-l-4 border-l-cyan-400">
          <p className="font-secundaria text-base opacity-90 mb-4">
            <strong className="text-cyan-300">Quer implementar essas estratégias no seu negócio?</strong> 
            Receba uma análise personalizada e um plano de ação específico para aumentar suas vendas.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! IAI, vi seu blog e quero implementar essas estratégias!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-500/20 text-cyan-400 font-bold rounded-full hover:bg-cyan-500/30 transition-all group"
          >
            <span>Fale Comigo Agora</span>
            <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Lista de Posts */}
      <div className="max-w-5xl mx-auto">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="block mb-8 group"
          >
            <article className="liquid-glass p-8 md:p-10 rounded-3xl hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer">
              {/* Badge Featured */}
              {post.featured && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-bold mb-4 border border-cyan-500/30">
                  <FaFire size={12} />
                  <span>Artigo em Destaque</span>
                </div>
              )}

              {/* Meta informações */}
              <div className="flex flex-wrap gap-4 mb-4 text-sm opacity-70">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt size={14} className="text-cyan-400" />
                  <time dateTime="2026-01-30">{post.date}</time>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser size={14} className="text-cyan-400" />
                  <span>Por {post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock size={14} className="text-cyan-400" />
                  <span>{post.readTime} de leitura</span>
                </div>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-bold border border-cyan-500/30">
                  {post.category}
                </span>
              </div>

              {/* Título */}
              <h2 className="font-principal text-2xl md:text-3xl mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="font-secundaria text-base opacity-80 mb-6 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400 font-bold group-hover:gap-4 transition-all">
                  <span>Ler Artigo Completo</span>
                  <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-xs opacity-60">{post.views} visualizações</span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* CTA Final - Newsletter */}
      <div className="max-w-5xl mx-auto mt-16">
        <div className="liquid-glass p-10 rounded-3xl text-center border border-cyan-500/30">
          <h3 className="font-principal text-2xl md:text-3xl mb-4">
            Receba Estratégias Exclusivas
          </h3>
          <p className="font-secundaria opacity-80 mb-8 max-w-2xl mx-auto">
            Novos artigos, insights e estratégias são publicados regularmente. 
            Fale comigo via WhatsApp para ficar atualizado com as melhores práticas de SEO e e-commerce.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! IAI, quero receber suas estratégias exclusivas de SEO!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-cyan-500 text-white font-bold rounded-full text-lg hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all group"
          >
            AGENDAR CONSULTORIA GRATUITA
            <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
