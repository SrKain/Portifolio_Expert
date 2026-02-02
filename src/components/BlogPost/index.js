import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaClock, FaArrowLeft, FaCheckCircle, FaLightbulb, FaRocket } from "react-icons/fa";

const BlogPost = () => {
  const { slug } = useParams();

  const post = {
    id: 1,
    title: "Como Aumentar as Vendas no Seu E-commerce Usando Truques de SEO",
    metaDescription: "Descubra as 8 estratégias mais eficazes de SEO para e-commerce. Aprenda técnicas comprovadas que aumentam vendas e ROI. Assinado por IAI.",
    date: "30 de Janeiro de 2026",
    author: "IAI",
    readTime: "12 min",
    category: "SEO",
    slug: "seo-ecommerce-vendas",
  };

  const contentSections = [
    {
      title: "Introdução: O Poder do SEO para E-commerce",
      content: `Se você tem um e-commerce e quer aumentar suas vendas, você precisa entender uma coisa fundamental: 80% das pessoas que fazem compras online começam sua jornada em um motor de busca. Isso significa que se seu site não está otimizado para SEO, você está perdendo a maioria do seu potencial de vendas.

Neste artigo, vou compartilhar as estratégias mais eficazes que implementei em meus 4 anos de consultoria em tecnologia e presença digital. Estas não são teorias genéricas – são técnicas comprovadas que aumentam conversão e ROI.`,
      cta: true
    },
    {
      title: "1. Pesquisa de Palavras-chave: O Alicerce do SEO para E-commerce",
      content: `Tudo começa com uma pesquisa de palavras-chave profunda. Você precisa entender o que seus clientes estão procurando.

Por que isso importa?
• Intenção de Compra: Nem toda palavra-chave é igual. "Comprar tênis esportivo" tem muito mais potencial de venda do que "o que é um tênis".
• Menos Concorrência: Palavras-chave de cauda longa (3+ palavras) têm menos competição e custos mais baixos.
• Público Qualificado: Quem busca "melhor tênis para corrida" está muito mais próximo de comprar do que quem busca "tipos de calçados".

Como fazer:
1. Use ferramentas como Google Keyword Planner, Ahrefs ou SEMrush
2. Procure por palavras-chave com volume de busca de 100-1000 por mês
3. Priorize palavras-chave com intenção comercial (contêm "comprar", "preço", "melhor")
4. Analise a concorrência – se todos os top 10 resultados são grandes marcas, escolha outra palavra`,
      cta: false
    },
    {
      title: "2. Otimização On-Page: Transforme Visitantes em Clientes",
      content: `Depois de identificar suas palavras-chave, é hora de otimizar suas páginas de produto e categoria.

Meta Titles e Descriptions:
• Title: Deve ter entre 50-60 caracteres, incluir a palavra-chave principal e ser persuasivo
• Exemplo: "Tênis Esportivo Premium | Melhor Preço + Frete Grátis | [Sua Loja]"
• Description: 150-160 caracteres, com CTA claro
• Exemplo: "Descubra nossos tênis esportivos premium. Qualidade garantida, melhor preço e frete grátis. Compre agora!"

URLs Amigáveis:
• Use: /tenis-esportivo-premium
• Evite: /produto?id=12345&categoria=calçados
• URLs curtas, descritivas e com hífens (não underscores)

Estrutura de Heading (H1, H2, H3):
• Um único H1 por página (seu título principal)
• H2s para seções principais
• H3s para subseções
• Inclua palavras-chave naturalmente`,
      cta: true
    },
    {
      title: "3. Conteúdo de Qualidade: O Rei da Conversão",
      content: `Aqui está a verdade que muitos ignoram: conteúdo de qualidade não apenas melhora o SEO, ele converte.

Estratégias de Conteúdo que Vendem:
• Descrições de Produto Detalhadas: Não escreva "Tênis azul de qualidade". Escreva: "Tênis Esportivo com Tecnologia de Amortecimento Avançado, Solado Antiderrapante e Design Ergonômico. Perfeito para corridas de longa distância."
• Guias de Compra: Crie conteúdo que responda perguntas comuns: "Como escolher o melhor tênis para corrida?"
• Avaliações e Depoimentos: Incluir reviews aumenta confiança e melhora SEO
• Comparações: "Tênis A vs Tênis B" atrai tráfego qualificado`,
      cta: false
    },
    {
      title: "4. Link Building: Construa Autoridade",
      content: `Links de qualidade são como votos de confiança para o Google.

Estratégias Eficazes:
• Guest Posts: Escreva artigos em blogs relevantes com link para seu site
• Parcerias: Colabore com influenciadores e blogs do seu nicho
• Diretórios Locais: Se você vende localmente, liste-se em diretórios como Google Meu Negócio
• Conteúdo Linkável: Crie guias, infográficos ou ferramentas que outros queiram linkar

A qualidade importa mais que a quantidade. Um link de um site com autoridade vale mais que 100 links de sites irrelevantes.`,
      cta: false
    },
    {
      title: "5. Velocidade de Carregamento: O Fator Oculto de Conversão",
      content: `Você sabia que cada segundo de atraso no carregamento reduz conversão em 7%?

Como otimizar:
• Comprima imagens (use WebP)
• Implemente lazy loading
• Use CDN para servir conteúdo mais rápido
• Minimize CSS e JavaScript
• Teste com Google PageSpeed Insights

Essa é uma das razões pelas quais meu site utiliza tecnologias modernas como React e Tailwind CSS – performance é prioridade.`,
      cta: true
    },
    {
      title: "6. Mobile-First: Onde Está o Dinheiro",
      content: `Mais de 60% das compras online agora são feitas em dispositivos móveis.

Otimizações Essenciais:
• Design responsivo (não apenas "mobile-friendly")
• Botões de CTA grandes e fáceis de clicar
• Checkout simplificado (máximo 3 cliques)
• Imagens otimizadas para mobile
• Teste em diferentes dispositivos

Se seu site não é mobile-first, você está perdendo a maioria do seu tráfego potencial.`,
      cta: false
    },
    {
      title: "7. Schema Markup: Fale a Linguagem do Google",
      content: `Schema markup ajuda o Google a entender seu conteúdo melhor.

Tipos Importantes para E-commerce:
• Product Schema: Preço, disponibilidade, avaliações
• Review Schema: Ratings e comentários
• Organization Schema: Informações da sua empresa

Implementar schema markup corretamente pode aumentar sua taxa de cliques em até 30%.`,
      cta: false
    },
    {
      title: "8. Análise e Otimização Contínua",
      content: `SEO não é um "set and forget". Você precisa monitorar e otimizar constantemente.

Métricas Importantes:
• Tráfego Orgânico: Está crescendo?
• Taxa de Conversão: Quantos visitantes viram clientes?
• Posição Média: Suas palavras-chave estão subindo?
• Bounce Rate: As pessoas estão saindo rápido?

Revise seus dados a cada 2 semanas e ajuste sua estratégia conforme necessário.`,
      cta: true
    },
    {
      title: "Conclusão: SEO é Investimento, Não Custo",
      content: `Muitos empreendedores veem SEO como um custo necessário. Mas a verdade é que SEO bem executado é o investimento com melhor ROI a longo prazo. Enquanto anúncios pagos param de funcionar quando você para de pagar, o tráfego orgânico continua gerando vendas indefinidamente.

Se você implementar estas 8 estratégias, você verá resultados significativos em 3-6 meses. Mas se quiser acelerar o processo e ter uma estratégia personalizada para seu e-commerce específico, estou aqui para ajudar.

Vamos transformar seu e-commerce em uma máquina de vendas?`,
      cta: true
    }
  ];

  return (
    <section className="min-h-screen py-12 px-4">
      {/* Schema.org para BlogPosting */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.metaDescription,
          "image": "https://iasin.dev.br/assets/logoKauanIasin.png",
          "datePublished": "2026-01-30",
          "author": {
            "@type": "Person",
            "name": "IAI (Kauan Iasin)",
            "url": "https://iasin.dev.br"
          }
        })}
      </script>

      <div className="max-w-4xl mx-auto">
        {/* Botão Voltar */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-cyan-400 font-bold mb-8 hover:gap-4 transition-all group"
        >
          <FaArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para Blog</span>
        </Link>

        {/* Header do Post */}
        <header className="mb-12">
          <h1 className="font-principal text-4xl md:text-5xl mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm opacity-70 mb-8">
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
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full font-bold text-xs border border-cyan-500/30">
              {post.category}
            </span>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 mb-8"></div>
        </header>

        {/* CTA 1: Antes do Conteúdo */}
        <div className="liquid-glass p-8 rounded-2xl mb-12 border-l-4 border-l-cyan-400">
          <div className="flex items-start gap-4">
            <FaLightbulb className="text-cyan-400 text-2xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-principal text-lg mb-2">Quer Implementar Essas Estratégias?</h3>
              <p className="font-secundaria opacity-90 mb-4 text-sm">
                Neste artigo, você vai aprender as 8 estratégias mais eficazes de SEO para e-commerce. 
                Se quiser uma análise personalizada do seu site e um plano de ação específico, estou aqui.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! IAI, li seu artigo e quero implementar essas estratégias no meu e-commerce!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:gap-4 transition-all text-sm"
              >
                <span>Fale Comigo Agora</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <article className="mb-12">
          {contentSections.map((section, index) => (
            <div key={index}>
              <h2 className="font-principal text-3xl mt-12 mb-6 text-cyan-400">
                {section.title}
              </h2>
              
              <div className="font-secundaria leading-relaxed text-base space-y-4 opacity-90 mb-8 whitespace-pre-wrap">
                {section.content}
              </div>

              {/* CTA Estratégico */}
              {section.cta && (
                <div className="liquid-glass p-6 rounded-xl mb-8 bg-gradient-to-r from-cyan-500/10 to-transparent border-l-2 border-l-cyan-400">
                  <div className="flex items-start gap-4">
                    <FaRocket className="text-cyan-400 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-secundaria opacity-90 text-sm mb-3">
                        <strong className="text-cyan-300">Essas estratégias funcionam,</strong> mas implementá-las requer tempo e expertise. 
                        Se você quer resultados rápidos, vamos conversar sobre uma estratégia personalizada.
                      </p>
                      <a
                        href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! IAI, quero uma estratégia de SEO personalizada para meu e-commerce!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 font-bold rounded-full text-sm hover:bg-cyan-500/30 transition-all"
                      >
                        <span>AGENDAR CONSULTORIA</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </article>

        {/* Autor Bio */}
        <div className="liquid-glass p-8 rounded-2xl mb-12 border border-cyan-500/30">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
              <FaUser size={40} className="text-cyan-400" />
            </div>
            <div>
              <h4 className="font-principal text-xl mb-2">Sobre o Autor</h4>
              <p className="font-secundaria opacity-90 mb-4 text-sm leading-relaxed">
                <strong className="text-cyan-400">IAI (Kauan Iasin)</strong> é consultor de tecnologia e presença digital com 4 anos de experiência. 
                Especialista em SEO, e-commerce e estratégias digitais que geram resultados reais. 
                Já ajudou dezenas de empresas a aumentar suas vendas através de estratégias comprovadas e implementação técnica de alta qualidade.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! IAI, vi seu artigo e gostaria de conversar!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:gap-4 transition-all text-sm"
              >
                <span>Conecte-se no WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="liquid-glass p-10 rounded-3xl text-center border border-cyan-500/30">
          <h3 className="font-principal text-3xl mb-4">
            Transforme Visitantes em <span className="text-cyan-400">Clientes</span>
          </h3>
          <p className="font-secundaria opacity-90 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            SEO não é opcional para e-commerce. É a diferença entre crescer exponencialmente ou ficar para trás. 
            Vamos criar uma estratégia que funcione para seu negócio específico e gere resultados mensuráveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=5541987883510&text=Olá! IAI, quero aumentar as vendas do meu e-commerce com SEO!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-all group text-sm sm:text-base"
            >
              AGENDAR CONSULTORIA GRATUITA
              <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-10 py-4 liquid-glass text-white font-bold rounded-full hover:bg-cyan-400/20 transition-all text-sm sm:text-base"
            >
              Voltar para Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
