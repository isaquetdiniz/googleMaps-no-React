# Como utilizar o Google Maps API no React.js
> Repositório para demonstrar o uso do Google Maps no React.js

## O problema

Quando tive a oportunidade de mexer com o google maps, foi uma grande luta para achar um pacote que funcionasse e que suprisse minhas necessidades, já que **não existia pacote oficial para React.js**. Após alguns problemas com pacotes de terceiros, tomei a decisão de utilizar como se estivesse fazendo no html, e aparentemente deu certo.

## A solução

O jeito foi, através do *useEffect*, instanciar o objeto do mapa no momento em que o componente carrega na tela. E para todos os efeitos, ocorreu tecnicamente bem. Após isso, conseguimos utilizar as funcionalidades padrões do google maps, adaptar funções, modularizar responsabilidades e manter tudo organizado.

## Esse Repositório

Criei esse repositório com o intuito de registrar essa pequena aventura, e quem sabe, ajudar outras pessoas. Comentei o código, bem mais do que deveria talvez, e pretendo melhorá-lo à medida que aprender coisas novas e melhores. *Ah, estou aberto a ajuda também, viu? rsrs*.
O que fiz até agora:
- Criei um projeto react na mão mesmo (não sei o motivo de gostar de fazer isso)
- Adicionei a biblioteca styled components (mesmo que seja só uma div eu adoro utilizá-la <3)

### Como utilizar?

1. O primeiro passo é criar adquiri uma **API KEY** de desenvolvedor, caso contrário não vai conseguir ver o mapa em funcionamento. Você pode ver a documentação oficial [aqui](https://developers.google.com/maps/documentation/javascript/overview?hl=pt).
2. Com sua **API KEY** em mãos, você pode baixar o projeto e no arquivo `public/index.html` inserir o sua API KEY no script do mapa.
3. Agora, pode instalar as dependências com `yarn` e iniciar com `yarn start`
