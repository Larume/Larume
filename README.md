# Larume — Velas & Aromas (landing page)

HTML5 + CSS3 + JavaScript puro. Sem build, sem dependências (apenas as fontes do Google Fonts, com fallback).
Abre direto no `index.html` e funciona no GitHub Pages.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (ex.: `larume`).
2. Envie **o conteúdo desta pasta** (index.html, css/, js/, assets/) para a raiz do repositório (branch `main`).
   - Pelo site: *Add file → Upload files*, arraste tudo e faça o commit.
3. Em **Settings → Pages**, em *Build and deployment*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
4. Em 1–2 minutos o site estará em `https://SEU-USUARIO.github.io/larume/`.
5. Depois de publicar, edite no `index.html` a tag `og:image` para o endereço completo, por exemplo
   `https://SEU-USUARIO.github.io/larume/assets/images/hero.jpg` (redes sociais exigem URL absoluta).

## Trocar as fotos
Todas ficam em `assets/images/`. Basta substituir mantendo o mesmo nome do arquivo:

| Arquivo | Onde aparece |
|---|---|
| logo.png | Header e rodapé |
| hero.jpg | Primeira dobra (formato vertical, ~3:4) |
| essence.jpg | Nossa essência (quadrada) |
| candles.jpg | Card de velas aromáticas (vertical, 4:5) |
| final-bg.jpg | Fundo da chamada final (quanto maior a resolução, melhor; ideal ≥1600px de largura) |
| home-spray.jpg | Card de home sprays (vertical) |
| diffuser.jpg | Card de difusores (vertical) |
| handmade.jpg | Seção "Feito à mão" (horizontal) |
| gifts.jpg / gifts-2.jpg | Seção de presentes |
| ../favicon.png | Favicon |

As fotos atuais são recortes das imagens enviadas e têm resolução baixa; em telas grandes, vale trocar por originais em alta resolução (JPG otimizado, até ~300 KB cada).

## WhatsApp e catálogo
- Todos os botões de pedido abrem o WhatsApp com mensagem pré-preenchida. Os botões principais usam o número da Eduarda; a seção "Contato" e o rodapé trazem Eduarda e Leonardo.
- Para trocar um número, busque no `index.html` por `5511940664095` (Eduarda) ou `5535991601576` (Leonardo) e substitua (formato: 55 + DDD + número, sem espaços).
- O item "Produtos" do menu abre `assets/catalogo-larume.pdf`: numa janela dentro da página no desktop e em nova aba no celular. Para atualizar o catálogo, substitua o PDF mantendo o nome do arquivo.
- O Instagram ficou apenas como rede social, no rodapé.
