import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { FaCalendarAlt, FaClock, FaUser, FaArrowLeft, FaWhatsapp } from 'react-icons/fa';
import { getBlogPostBySlug } from '../../data/blogPosts';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <section className="py-12 flex flex-col gap-8">
        <div className="text-center">
          <h1 className="font-principal text-4xl md:text-6xl text-cyan-400 mb-4">
            Artigo Não Encontrado
          </h1>
          <p className="font-secundaria text-xl opacity-80 mb-8">
            Desculpe, o artigo que você está procurando não existe.
          </p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-400 transition-all"
          >
            <FaArrowLeft /> Voltar ao Blog
          </button>
        </div>
      </section>
    );
  }

  return (
    <article className="py-12 flex flex-col gap-8">
      {/* Header do Post */}
      <header className="flex flex-col gap-6">
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 w-fit px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
        >
          <FaArrowLeft size={16} /> Voltar ao Blog
        </button>

        {/* Imagem Hero */}
        <div className="relative overflow-hidden rounded-3xl h-96 md:h-[500px] w-full">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-cyan-500/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold">
                {post.category}
              </span>
            </div>
            <h1 className="font-principal text-3xl md:text-5xl lg:text-6xl leading-tight text-white mb-4">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Metadados */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 border-b border-white/10 pb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <FaUser className="text-cyan-400" />
            </div>
            <div>
              <p className="text-sm opacity-70">Por</p>
              <p className="font-semibold">{post.author}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 opacity-80">
            <FaCalendarAlt className="text-cyan-400" size={16} />
            <span className="font-secundaria">{post.date}</span>
          </div>

          <div className="flex items-center gap-2 opacity-80">
            <FaClock className="text-cyan-400" size={16} />
            <span className="font-secundaria">{post.readTime} de leitura</span>
          </div>

          <div className="flex flex-wrap gap-2 md:ml-auto">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Conteúdo do Post */}
      <div className="prose prose-invert max-w-none blog-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="font-principal text-4xl md:text-5xl text-cyan-400 mt-12 mb-6 leading-tight" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="font-principal text-3xl md:text-4xl text-cyan-400 mt-10 mb-5 leading-tight" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="font-principal text-2xl md:text-3xl text-cyan-300 mt-8 mb-4 leading-tight" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="font-secundaria text-lg leading-relaxed opacity-90 mb-6" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="font-secundaria text-lg leading-relaxed opacity-90 ml-6 mb-3" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc mb-6" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal mb-6" {...props} />
            ),
            strong: ({ node, ...props }) => (
              <strong className="text-cyan-300 font-bold" {...props} />
            ),
            em: ({ node, ...props }) => (
              <em className="italic opacity-95" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-cyan-500 pl-6 py-2 my-6 italic opacity-80 bg-cyan-500/10 px-6 py-4 rounded-r-lg"
                {...props}
              />
            ),
            code: ({ node, inline, ...props }) =>
              inline ? (
                <code className="bg-black/40 text-cyan-300 px-2 py-1 rounded font-mono text-sm" {...props} />
              ) : (
                <code className="block bg-black/60 text-cyan-200 p-4 rounded-lg overflow-x-auto font-mono text-sm my-6" {...props} />
              ),
            a: ({ node, ...props }) => (
              <a className="text-cyan-400 hover:text-cyan-300 underline transition-colors" {...props} />
            ),
            img: ({ node, ...props }) => (
              <img className="rounded-2xl my-8 w-full max-w-3xl mx-auto" {...props} />
            ),
            hr: ({ node, ...props }) => (
              <hr className="border-white/10 my-12" {...props} />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {/* CTA Section */}
      <section className="mt-16 pt-12 border-t border-white/10">
        <div className="liquid-glass rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-principal text-3xl md:text-4xl text-cyan-400 mb-4">
            Pronto para Transformar Seu E-commerce?
          </h2>
          <p className="font-secundaria text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Se você busca implementar essas estratégias de vendas orgânicas e SEO no seu negócio, minha consultoria está pronta para te guiar em cada passo do caminho. Vamos construir juntos um e-commerce que gera vendas de forma consistente e sustentável.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! Li seu artigo sobre vendas orgânicas e gostaria de conversar sobre como implementar essas estratégias no meu e-commerce!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-cyan-500 text-white font-bold rounded-full text-lg hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] group"
          >
            <FaWhatsapp size={20} />
            FALE COM O CONSULTOR AGORA
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>

      {/* Artigos Relacionados */}
      <section className="mt-16 pt-12 border-t border-white/10">
        <h2 className="font-principal text-3xl md:text-4xl text-cyan-400 mb-8">
          Mais Artigos em Breve
        </h2>
        <p className="font-secundaria text-lg opacity-80">
          Estou constantemente criando novos conteúdos sobre SEO, e-commerce e estratégia digital. Fique atento às atualizações do blog para não perder as próximas insights que podem transformar seu negócio.
        </p>
      </section>
    </article>
  );
};

export default BlogPost;
