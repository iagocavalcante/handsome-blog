---
title: Criando componente de share com React em um projeto NextJS
date: 2022-03-30T20:19:08.178Z
tags:
  - javascript
  - react
  - nextjs
description: Neste breve artigo, estarei mostrando como resolvemos uma
  funcionalidade de compartilhamento de conteúdo onde o link é enviado por email
  e o usuário tem a possibilidade de clicar e ir para o site com as opções de
  compartilhamento
---
## O problema

Em um projeto em que eu me time estamos trabalhando enfrentamos o desafio de criar um componente para dar a possibilidade do usuário compartilhar algo que ele recebeu pelo email nas principais redes sociais (whatsapp, twitter, facebook e email) além da possibilidade de copiar o link exibido.

## Solução

Para resolver este problema, começamos a pensar em como poderíamos pegar algo enviado por emai, abrir a página web daquele email e ativar o compartilhamento. A solução seria no link compartilhar que é recebido por email, adicionar uma `query string` indicando que será aberto o modal contendo os links de compartilhamento nas respectivas redes.

![Captura de Tela 2022-03-30 às 16.27.45.png](https://user-images.githubusercontent.com/5131187/160923928-20325d91-390e-4fc6-af81-1781b0f661a9.png)

O link acima é representado no email pela seguinte tag

```html
<a href="https://linkqualquer.com/nome/id?share=true">
  Compartilhe! ->
</a>
```

Com isso estamos aptos a clicar no link e ser redirecionado para nossa página web que irá receber o parâmetro e realizar alguma ação. 

Para verificar os parametros de rota, iremos utilizar hook roteador do `NextJS` que iremos importar da seguinte forma na nossa página:

```JSX
import { useRouter } from 'next/router'
```

E no componente iremos utilizar a variável `query` que o `useRouter()` disponibiliza para nós. Para executar a verificação no momento que entramos na página, iremos utilizar o `useEffect` e nosso componente ficará da seguinte forma:


```JSX
const { query } = useRouter()

useEffect(() => {
    if (query.share == 'true') {
      
    }
  }, [query])

```

Temos a verificação inicial se tem o parametro `share` na _query string_ e com isso podemos implementar a lógica de exibição do modal e definir os dados que serão compartilhados. Mas vamos deixar essa primeira parte guardadinha e começar a trabalhar no nosso componente de share que será um modal. 


####  ** Obs: No projeto estamos utilizando o _framework de UI chamado Tailwind_ **

<script src="https://gist.github.com/iagocavalcante/35b7853b58def724e0a95ba8c63ee059.js"></script>

Nosso componente irá receber apenas 3 propriedades, sendo elas a `url` do conteúdo que vamos compartilhar, o `status` que será responsável por mostrar ou não o modal e a `action` que define quando o modal será fechado.


![Compartilhe!](https://user-images.githubusercontent.com/5131187/160923931-fed444b4-6f9c-4ae1-86a3-55000a5ebccb.png)

Dentro do componente teremos duas funções onde uma será responável por tratar a ação dos botões de compartilhamento `handleSharing()` e a outra será responsável por copiar o link e jogar dentro do clipboard (mesma ação do _ctrl_ + _c_) chamada de `handleCopy`. 

Com nosso componente criado, vamos voltar a página onde tem o conteúdo a ser compartilhada e onde fazemos a verificação da _query string_.

Lá iremos implementar a importação do componente e quando que ele será exebido, nossa página ficará da seguinte forma: 

<script src="https://gist.github.com/iagocavalcante/da046227b26c522359e12ecda1000c57.js"></script>

Agora temos a lógica completa de exibição do modal ácima. 

## Conclusão

Inicialmente pode ser algo assustador para quem ta começando a desenvolver e ter que pensar em resolver esse problema, mas é mais simples do que parece, só precisamos relembrar de alguns conceitos e unificar nessa solução.

Poderíamos refatorar essa solução para algo um pouco melhor, porém nosso objetivo aqui era ser o mais didático possível.

Agradeço a leitura de todos(as).





