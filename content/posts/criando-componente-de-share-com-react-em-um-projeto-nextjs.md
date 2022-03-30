---
title: Criando componente de share com React em um projeto NextJS
date: 2022-03-30T20:19:08.178Z
tags:
  - javascript
  - react
  - nextjs
coverImage: /images/uploads/undraw_share_link_re_54rx.png
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

Temos a verificação inicial se tem o parametro `share` na *query string* e com isso podemos implementar a lógica de exibição do modal e definir os dados que serão compartilhados. Mas vamos deixar essa primeira parte guardadinha e começar a trabalhar no nosso componente de share que será um modal. 

####  **Obs: No projeto estamos utilizando o *framework de UI chamado Tailwind*** 

```
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
const ShareModal = ({
  status = false,
  url = '',
  action,
}) => {
  const cancelButtonRef = useRef(null)

  const handleSharing = async (social) => {
    if (social === 'twitter') {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`
      window.open(twitterUrl, '_blank')
    } else if (social === 'facebook') {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        'pop',
        'width=600, height=400, scrollbars=no'
      )
    } else if (social === 'linkedin') {
      window.open(
        `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${text}`,
        'pop',
        'width=600, height=400, scrollbars=no'
      )
    }
  }

  const SHARE_TITLE = 'Veja este belo link!'

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
  }

  return (
    <Transition.Root show={status} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={status}
        onClose={action}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-3 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
              <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-col space-y-5 gap-3 md:gap-0 md:flex-col justify-center items-center">
                <h2>Compartilhar essa newsletter</h2>
                <div className="flex flex-col justify-center space-y-2">
                  <div className="flex flex-row justify-center space-x-2">
                    <button onClick={() => handleSharing('facebook')} className="social-buttons">
                      <Image src={'/modal/facebook.svg'} width={20} height={20} alt="Facebook" />
                      Facebook
                    </button>

                    <button onClick={() => handleSharing('twitter')} className="social-buttons">
                      <Image src={'/modal/twitter.svg'} width={20} height={20} alt="Twitter" />
                      Twitter
                    </button>
                  </div>
                  <div className="flex flex-row justify-start space-x-2">
                    <a
                      className="social-buttons"
                      href={`https://wa.me/?text=${url}!`}
                      data-action="share/whatsapp/share"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      <Image src={'/modal/whatsapp.svg'} width={20} height={20} alt="Twitter" />
                      Whatsapp
                    </a>

                    <a
                      className="social-buttons"
                      href={`mailto:?body=${url}&subject=${SHARE_TITLE}`}
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      <Image src={'/modal/email.svg'} width={20} height={20} alt="Twitter" />
                      Email
                    </a>
                  </div>
                </div>

                <section className="w-full flex flex-row justify-center space-x-1">
                  <button
                    className="w-1/2 bg-violet-400  p-3 rounded-sm text-base text-gray-100"
                    onClick={() => handleCopy()}
                  >
                    Copiar link
                  </button>
                </section>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ShareModal
```

Nosso componente irá receber apenas 3 propriedades, sendo elas a `url` do conteúdo que vamos compartilhar, o `status` que será responsável por mostrar ou não o modal e a `action` que define quando o modal será fechado.

![Compartilhe!](https://user-images.githubusercontent.com/5131187/160923931-fed444b4-6f9c-4ae1-86a3-55000a5ebccb.png)

Dentro do componente teremos duas funções onde uma será responável por tratar a ação dos botões de compartilhamento `handleSharing()` e a outra será responsável por copiar o link e jogar dentro do clipboard (mesma ação do *ctrl* + *c*) chamada de `handleCopy`. 

Com nosso componente criado, vamos voltar a página onde tem o conteúdo a ser compartilhada e onde fazemos a verificação da *query string*.

Lá iremos implementar a importação do componente e quando que ele será exebido, nossa página ficará da seguinte forma: 

```
import { useRouter } from 'next/router'
import ShareModal from 'components/Modals/ShareModal'

const Pagina = () => {
  const [showModal, setShowModal] = useState(false)
  const [url, setUrl] = useState('')
  
  useEffect(() => {
    if (query.share == 'true') {
      setUrl('https://urldinamica.com/id/compartilha`)
      setShowModal(true)
    }
  }, [query])
  
  <WrapperArticle slug={slug}>
      <ShareModal url={url} status={showModal} action={() => setShowModal(false)} />
      {children}
  </WrapperArticle>
}

export default Pagina
```

Agora temos a lógica completa de exibição do modal ácima. 

## Conclusão

Inicialmente pode ser algo assustador para quem ta começando a desenvolver e ter que pensar em resolver esse problema, mas é mais simples do que parece, só precisamos relembrar de alguns conceitos e unificar nessa solução.

Poderíamos refatorar essa solução para algo um pouco melhor, porém nosso objetivo aqui era ser o mais didático possível.

Agradeço a leitura de todos(as).