import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import { getAllBlogPosts } from '../../data/blogPosts';

const Blog = () => {
  const navigate = useNavigate();
  const blogPosts = getAllBlogPosts();

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  const BlogCard = ({ post }) => (
    <div className="liquid-glass rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-[1.02] flex flex-col h-full group cursor-pointer">
      {/* Imagem com overlay */}
      <div className="relative overflow-hidden h-48 md:h-56">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-cyan-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
          {post.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        {/* Metadados */}
        <div className="flex items-center gap-4 text-sm opacity-70 mb-4">
          <div className="flex items-center gap-1">
            <FaCalendarAlt size={14} className="text-cyan-400" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <FaClock size={14} className="text-cyan-400" />
            {post.readTime}
          </div>
        </div>

        {/* Título */}
        <h3 className="font-principal text-xl md:text-2xl text-cyan-400 mb-3 leading-tight group-hover:text-cyan-300 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="font-secundaria text-base opacity-80 mb-4 flex-grow line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 3).map((tag, idx) => (
            <span 
              key={idx}
              className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full hover:bg-cyan-500/30 transition-colors"
            >
              #{tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="text-xs text-cyan-300/70 px-3 py-1">
              +{post.tags.length - 3}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => handleReadMore(post.slug)}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-400 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] group w-full"
        >
          Ler Artigo Completo
          <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-12 flex flex-col gap-16">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto">
        <h1 className="font-principal text-4xl md:text-6xl leading-tight mb-4">
          Blog de <span className="text-cyan-400">Estratégia Digital</span>
        </h1>
        <p className="font-secundaria text-xl opacity-80">
          Insights, estratégias e dicas práticas para transformar seu e-commerce em uma máquina de vendas orgânicas. Aprenda como o SEO e o marketing de conteúdo podem revolucionar seu negócio digital.
        </p>
      </header>

      {/* Grid de Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Seção de Mais Artigos */}
      <div className="text-center mt-8 liquid-glass rounded-2xl p-8 md:p-12">
        <h2 className="font-principal text-2xl md:text-3xl text-cyan-400 mb-4">
          Mais Artigos em Breve
        </h2>
        <p className="font-secundaria text-lg opacity-80 mb-6">
          Estou constantemente criando novos conteúdos sobre SEO, e-commerce e estratégia digital. Fique atento às atualizações do blog para não perder as próximas insights que podem transformar seu negócio.
        </p>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto rounded-full" />
      </div>

      {/* Newsletter CTA */}
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="font-principal text-2xl text-cyan-400 mb-4">
          Quer Receber as Últimas Estratégias de SEO?
        </h3>
        <p className="font-secundaria text-lg opacity-80 mb-8">
          Entre em contato comigo pelo WhatsApp e vamos conversar sobre como levar seu e-commerce para o próximo nível.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! Gostaria de receber as últimas estratégias de SEO e vendas orgânicas para meu e-commerce."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-white font-bold rounded-full text-lg hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] group"
        >
          FALE COMIGO AGORA
          <span className="ml-3 text-xl group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
};

export default Blog;
