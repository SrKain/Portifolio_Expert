# Documentação de Roteamento e SEO

## Estrutura de Roteamento (React Router v6)

O site utiliza **React Router v6** para navegação entre páginas sem recarregar a aplicação (SPA - Single Page Application).

### Rotas Disponíveis

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Página inicial com metodologia e diferenciais |
| `/sobre` | Sobre Mim | Informações pessoais e experiência |
| `/portfolio` | Meu Portifólio | Projetos do GitHub |
| `/metodo` | Método | Metodologia de consultoria (4 passos) |

## Configuração de Deployment

### Vercel (Recomendado)

O arquivo `vercel.json` está configurado para:
- Redirecionar todas as rotas para `index.html` (necessário para SPAs)
- Servir `sitemap.xml` com tipo MIME correto
- Servir `robots.txt` com tipo MIME correto

### Netlify (Alternativa)

Se usar Netlify, criar arquivo `_redirects` na pasta `public`:

```
/* /index.html 200
```

## SEO e Indexação

### Sitemap.xml

O arquivo `public/sitemap.xml` contém:
- Todas as rotas principais do site
- Data de última modificação
- Frequência de atualização
- Prioridade para cada página
- Referências a imagens

**Submeter em:**
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster Tools: https://www.bing.com/webmasters

### Robots.txt

O arquivo `public/robots.txt` contém:
- Permissões para Googlebot e Bingbot
- Referência ao sitemap.xml
- Diretórios bloqueados (node_modules, .git, build)

## Melhorias de Performance

- **Scroll automático para o topo** ao mudar de rota
- **Indicador de página ativa** no menu de navegação
- **Lazy loading** de componentes (pode ser implementado com React.lazy)

## Próximos Passos

1. Instalar dependências: `npm install`
2. Testar localmente: `npm start`
3. Build para produção: `npm run build`
4. Deploy no Vercel: `vercel deploy`

## Troubleshooting

### Rotas não funcionam após deploy

- Verificar se `vercel.json` está na raiz do projeto
- Garantir que `basename="/"` está correto em `<Router>`
- Limpar cache do navegador (Ctrl+Shift+Del)

### Sitemap não é encontrado

- Verificar se `public/sitemap.xml` existe
- Confirmar que o tipo MIME está correto em `vercel.json`
- Submeter manualmente no Google Search Console
