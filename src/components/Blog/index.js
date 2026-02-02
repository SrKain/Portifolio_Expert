import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "A Força Silenciosa: Como Vendas Orgânicas Podem Transformar Seu E-commerce",
      slug: "vendas-organicas-ecommerce",
      excerpt: "Descubra como as vendas orgânicas podem ser o pilar fundamental para o crescimento sustentável do seu e-commerce, reduzindo custos e aumentando a credibilidade da sua marca.",
      date: "15 de Fevereiro de 2026",
      readTime: "8 min",
      category: "SEO & E-commerce",
      image: "./assets/blog_vendas_organicas_capa.png",
      content: `
# A Força Silenciosa: Como Vendas Orgânicas Podem Transformar Seu E-commerce

No dinâmico universo do e-commerce, onde a atenção é uma moeda valiosa e a concorrência é acirrada, a busca por estratégias que garantam crescimento sustentável e lucratividade é constante. Entre as diversas abordagens, as **vendas orgânicas** emergem como um pilar fundamental, oferecendo um caminho robusto para o sucesso a longo prazo.

## O Que São Vendas Orgânicas e Por Que Elas Importam?

Vendas orgânicas referem-se àquelas transações que ocorrem sem a necessidade de investimento direto em publicidade paga. Elas são o resultado de uma presença digital forte e autêntica, construída através de otimização para mecanismos de busca (SEO), conteúdo de valor, marketing de relacionamento e uma experiência de usuário excepcional.

**A importância das vendas orgânicas reside em diversos fatores:**

- **Custo de Aquisição de Cliente (CAC) Reduzido:** Ao contrário das vendas pagas, que exigem um investimento contínuo, as vendas orgânicas diminuem o CAC, aumentando a margem de lucro.
- **Sustentabilidade a Longo Prazo:** Uma estratégia orgânica bem-sucedida constrói um ativo digital duradouro, que continua a gerar tráfego e vendas mesmo sem campanhas ativas.
- **Credibilidade e Confiança:** Clientes que encontram sua marca organicamente tendem a percebê-la como mais confiável e autoritária.
- **Tráfego Qualificado:** O SEO e o conteúdo direcionado atraem usuários que já estão procurando ativamente por soluções que seu e-commerce oferece.

## Estratégias para Aumentar Suas Vendas Orgânicas

### 1. Otimização para Mecanismos de Busca (SEO)

O SEO é a espinha dorsal das vendas orgânicas. Ele garante que seu e-commerce seja encontrado por potenciais clientes nos resultados de busca:

- **Pesquisa de Palavras-Chave:** Identifique os termos que seu público-alvo utiliza para buscar produtos como os seus.
- **SEO On-Page:** Otimize títulos, descrições, URLs, cabeçalhos e o conteúdo das páginas.
- **SEO Técnico:** Garanta que seu site seja rápido, responsivo, seguro (HTTPS) e facilmente rastreável.
- **Conteúdo de Qualidade:** Crie descrições de produtos detalhadas e posts informativos.

### 2. Conteúdo de Valor e Marketing de Conteúdo

Além das páginas de produto, um blog corporativo, vídeos e infográficos são poderosas ferramentas para atrair e engajar seu público:

- **Educar o Cliente:** Ofereça informações úteis que ajudem na decisão de compra.
- **Construir Autoridade:** Posicione sua marca como uma referência no seu nicho.
- **Gerar Backlinks:** Conteúdo de alta qualidade é mais propenso a ser compartilhado.

### 3. Experiência do Usuário (UX) e Design Responsivo

Um site intuitivo, rápido e agradável visualmente melhora a satisfação e o ranqueamento:

- **Fácil Navegação:** Menus claros e processo de checkout simplificado.
- **Otimizado para Mobile:** Design responsivo é mandatório.
- **Carregamento Rápido:** Páginas lentas frustram usuários e são penalizadas pelos motores de busca.

### 4. Presença em Redes Sociais e Engajamento

Embora não contribuam diretamente para o SEO, as redes sociais são canais importantes para amplificar conteúdo e gerar tráfego direto.

## Como Melhorar o Ranqueamento do Seu E-commerce

Melhorar o ranqueamento no Google é um objetivo central para quem busca vendas orgânicas:

- **Otimização de Imagens:** Use nomes descritivos, tags ALT e comprima imagens.
- **Schema Markup:** Implemente marcações de schema para produtos e avaliações.
- **Link Building de Qualidade:** Busque parcerias para obter backlinks de sites relevantes.
- **Monitoramento e Análise:** Utilize Google Analytics e Google Search Console.

## Dicas de Sucesso para Vendas Orgânicas

1. **Foco no Cliente:** Entenda profundamente as necessidades do seu público.
2. **Consistência:** Mantenha uma produção consistente de conteúdo e otimizações.
3. **Adaptação:** Mantenha-se atualizado com as últimas tendências do Google.
4. **Humanização da Marca:** Conecte-se com seu público em um nível pessoal.
5. **Peça Avaliações:** Incentivar clientes satisfeitos a deixar avaliações é crucial.

## Conclusão

As vendas orgânicas são mais do que uma estratégia; são uma filosofia de negócios que prioriza a construção de valor, autoridade e relacionamento com o cliente. Ao investir em SEO, conteúdo de qualidade e uma excelente experiência de usuário, você constrói um e-commerce resiliente e preparado para o futuro.

**Pronto para Desbloquear o Potencial Orgânico do Seu E-commerce?**

Se você busca transformar seu e-commerce em uma máquina de vendas orgânicas, com estratégias de SEO que realmente convertem, minha consultoria está pronta para te guiar.
      `,
      tags: ["SEO", "E-commerce", "Marketing Digital", "Vendas Orgânicas"]
    }
  ];

  const BlogCard = ({ post }) => (
    <div className="liquid-glass rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
      <div className="relative overflow-hidden h-48 md:h-56">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-cyan-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
          {post.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-sm opacity-70 mb-3">
          <div className="flex items-center gap-1">
            <FaCalendarAlt size={14} className="text-cyan-400" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <FaClock size={14} className="text-cyan-400" />
            {post.readTime}
          </div>
        </div>

        <h3 className="font-principal text-xl md:text-2xl text-cyan-400 mb-3 leading-tight">
          {post.title}
        </h3>

        <p className="font-secundaria text-base opacity-80 mb-4 flex-grow">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => setSelectedPost(post)}
          className="inline-flex items-center justify-center gap-2 mt-auto px-6 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-400 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] group w-full"
        >
          Ler Artigo Completo
          <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  const BlogPostModal = ({ post, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-900 to-black rounded-3xl max-w-4xl w-full my-8 liquid-glass p-8 md:p-12">
        <button
          onClick={onClose}
          className="text-cyan-400 hover:text-cyan-300 text-2xl mb-6 font-bold"
        >
          ✕ Fechar
        </button>

        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-96 object-cover rounded-2xl mb-8"
        />

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

        <h1 className="font-principal text-4xl md:text-5xl text-cyan-400 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="prose prose-invert max-w-none mb-8">
          <div className="font-secundaria text-lg opacity-90 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <h3 className="font-principal text-2xl text-cyan-400 mb-4">Pronto para Crescer?</h3>
          <p className="font-secundaria text-lg opacity-80 mb-6">
            Se você busca transformar seu e-commerce em uma máquina de vendas orgânicas, com estratégias de SEO que realmente convertem, minha consultoria está pronta para te guiar.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! Vi seu artigo sobre vendas orgânicas e gostaria de conversar sobre como implementar essas estratégias no meu e-commerce!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-white font-bold rounded-full text-lg hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] group"
          >
            FALE COM O CONSULTOR AGORA
            <span className="ml-3 text-xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 flex flex-col gap-16">
      <header className="text-center max-w-4xl mx-auto">
        <h1 className="font-principal text-4xl md:text-6xl leading-tight mb-4">
          Blog de <span className="text-cyan-400">Estratégia Digital</span>
        </h1>
        <p className="font-secundaria text-xl opacity-80">
          Insights, estratégias e dicas práticas para transformar seu e-commerce em uma máquina de vendas orgânicas. Aprenda como o SEO e o marketing de conteúdo podem revolucionar seu negócio digital.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="font-secundaria text-lg opacity-80 mb-6">
          Mais artigos em breve! Fique atento às nossas atualizações sobre SEO, e-commerce e estratégia digital.
        </p>
      </div>

      {selectedPost && (
        <BlogPostModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  );
};

export default Blog;
