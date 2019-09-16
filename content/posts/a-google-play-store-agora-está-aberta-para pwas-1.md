---
title: "A Google Play Store agora está aberta para\_PWA's"
date: 2019-09-15T23:51:14.773Z
tags:
  - vuejs
description: "A Google Play Store agora está aberta para\_PWA's\n\nObs.: Essa é uma tradução do artigo Google Play Store now open for Progressive Web Apps do Maximiliano Firtman.\n\nIsenção de responsabilidade: não sou afiliado ao Google Play, Chrome ou qualquer outra empresa mencionada. Esta não é uma declaração oficial; o uso do logotipo e nome é apenas para ilustração.O Chrome 72 para Android lançou o muito aguardado recurso Trusted Web Activity, que significa que agora podemos distribuir PWAs na Google Play Store! Eu brinquei com o recurso por um tempo, investigando as APIs e aqui você tem um resumo do que está acontecendo, o que esperar e como usá-lo hoje.\n\nEste artigo é uma introdução e estou trabalhando em uma série de tutoriais, portanto, se você tiver interesse nisso, siga-me no Twitter ou assine minha newsletter."
---
A Google Play Store agora está aberta para PWA's

Obs.: Essa é uma tradução do artigo Google Play Store now open for Progressive Web Apps do Maximiliano Firtman.

Isenção de responsabilidade: não sou afiliado ao Google Play, Chrome ou qualquer outra empresa mencionada. Esta não é uma declaração oficial; o uso do logotipo e nome é apenas para ilustração.O Chrome 72 para Android lançou o muito aguardado recurso Trusted Web Activity, que significa que agora podemos distribuir PWAs na Google Play Store! Eu brinquei com o recurso por um tempo, investigando as APIs e aqui você tem um resumo do que está acontecendo, o que esperar e como usá-lo hoje.

Este artigo é uma introdução e estou trabalhando em uma série de tutoriais, portanto, se você tiver interesse nisso, siga-me no Twitter ou assine minha newsletter.

PWAs agora podem ser colocados na loja

O Chrome 72 para Android está sendo enviado da Play Store para todos os usuários e esta versão inclui a Trusted Web Activity (TWA), que em poucas palavras é uma maneira de abrir o Chrome no modo autônomo (sem barra de ferramentas ou Chrome UI) no escopo do nosso próprio APK.

Deixe-me começar a dizer que o processo de publicação não é direto como deveria ser (como "insira seu URL" no Play Console e pronto). Também não é uma maneira de usar o WebAPK já disponível e publicá-lo na loja. É uma API Java que se comunica por meio de serviços com o Chrome e parece estar nos estágios iniciais, portanto, há muito trabalho manual a ser feito. Mas depois de algum esforço, consegui fazê-lo funcionar. Compartilharei minha experiência neste artigo para todos os interessados.

Por algum motivo, o recurso não aparece como enviado no Status da plataforma do Chrome e ainda não há documentação disponível mais do que a publicada há 15 meses. Mas isso não é uma surpresa, já que os documentos oficiais disponíveis para os TWAs foram publicados em outubro de 2017, anunciando o recurso para o Chrome 69, com a maioria dos links e amostras mortos.







Aqui você pode assistir a um vídeo de Pete Le Page explicando TWAs há um ano.Por que publicar um PWA na loja?

É a plataforma Web, Max! Por que queremos usar a loja?

Bem, é uma longa discussão, mas faço consultoria a pequenas e grandes empresas há anos e, quando se fala em investimento da PWA, a loja é uma demanda recorrente. "Meus usuários procurarão meu aplicativo na Loja", "Eu já tenho um aplicativo nativo que quero parar de fazer, mas não quero perder meus usuários", "preciso acessar uma API nativa" ou "Quero monetizar meu PWA".

A partir de agora, será possível publicar seu PWA na Loja, assim como no navegador. Claro, é uma operação opt-in. A Play Store não está emulando a Loja da Microsoft: seu PWA não será listado na loja se você não compilar seu próprio APK e publicá-lo.

Vantagens sobre a instalação padrão do PWA

Apesar do novo mecanismo de distribuição e das pessoas que encontram seu aplicativo na loja (e até mesmo na pesquisa do Google em "Aplicativos"), há algumas coisas que podemos fazer com um PWA na Loja, como:

Oferecer um widget de tela inicial

Oferecer um aplicativo complementar do sistema operacional de uso ou extensão do Android Auto

Ter serviços de segundo plano acessando recursos nativos (a comunicação com o PWA ainda é limitada - mais sobre isso depois)

Monetize o aplicativo - limitado hoje, mais sobre isso mais tarde

Ter algumas telas nativas misturadas com o conteúdo do PWA

Distribuir mais de um ícone do PWA no Iniciador e / ou na tela inicial apontando para URLs diferentes (dentro do mesmo host)

Melhor suporte de internacionalização



O que há de novo aqui?

Na Google Play Store, já existem alguns PWAs publicados, como o Google Maps Go, o Instagram Lite ou o Twitter Lite. O primeiro está usando algum tipo de versão privada pré-TWA, e os dois últimos estão usando um WebView que, embora não seja o ideal, era a única maneira de fazer algo assim antes dos TWAs. Esses aplicativos estão adicionando muito código nativo para algumas coisas, como notificações. Queremos publicar os PWAs como desenvolvedores web, não queremos escrever muito código Java.

O TWA é um modo especial nas guias personalizadas do Chrome, uma solução disponível para aplicativos Android nativos do Chrome 45 para abrir um navegador no aplicativo.

O TWA é um framework híbrido, semelhante ao Cordova?

Não. Com o Cordova ou outras soluções híbridas, você normalmente envia seus recursos da Web (HTML, JS, CSS etc.) ao seu pacote do APK. Além disso, o mecanismo é diferente e isolado do navegador dos usuários, portanto, não há compartilhamento de sessão ou de cache.

É assim que um PWA se parece com o Trusted Web Activity (a Starbucks ainda não tinha um). Eu não vejo a cor do tema implementada aindaCom a TWA, você não precisa empacotar nenhum arquivo de recurso do seu PWA (somente componentes nativos, caso deseje); todos os seus recursos serão baixados e atualizados na hora direto do seu Service Worker. Seu PWA ainda será renderizado com a versão do Chrome instalada, compartilhando todo o armazenamento, o cache e as sessões com o navegador. Portanto, se o usuário tiver uma sessão no seu website aberta quando o usuário instalar o aplicativo na Play Store, ela ainda estará conectada. O usuário está apenas instalando um atalho para o Chrome usando um modo especial.

Opções de desenvolvimento

Para criar um pacote Android usando o TWA, primeiro precisamos do Android Studio. No momento, as opções disponíveis são do tipo experimental e documentadas apenas com alguns exemplos de código aberto.

Podemos desenvolver aplicativos com TWA:

Use uma biblioteca de suporte Java de alto nível fornecida pela equipe do Google Chrome: nesse caso, você não precisa escrever nenhum código Java ou Kotlin; você cria um projeto do Android Studio (ou clona o exemplo), configura alguns metadados no AndroidManifest.xml a partir do seu Manifesto de aplicativo Web e está pronto.

A estrutura fornecerá a conexão com o TWA e habilidades opcionais para criar uma entrada de Configurações no dispositivo Android e disponibilizar as notificações do Web Push. A estrutura está atualmente disponível como uma biblioteca de suporte em um repositório temporário do Jitpack. Eu acho que esse não será o local final para essa biblioteca no futuro.

Conecte-se à Trusted Web Activity manualmente. Se você tiver experiência no desenvolvimento de aplicativos Android com Java ou Kotlin, basta conectar seu PWA manualmente ao seu aplicativo. Isso significa que você pode ter algumas atividades nativas e, em determinado momento, pode abrir a Trusted Web Activity com o seu PWA. Nesse caso, sugiro analisar a Biblioteca de suporte para entender como se conectar ao Chrome em seu projeto.



Espalhando o Manifesto

Um PWA na App Store não usará o Manifesto do Webapp para definir como seu aplicativo é executado. precisaremos copiar alguns desses valores manualmente. Os ícones serão retirados da pasta "res" como qualquer outro aplicativo Android nativo, o bloqueio de orientação deve ser definido na activity entry do AndroidManifest, etc.

Se você estiver usando a Java Support library, uma tela inicial poderá ser criada automaticamente para você, mas outras propriedades do manifesto não serão usadas. De fato, nos meus testes, não consegui ver a cor do tema sendo aplicada ainda quando o meu PWA está na tela.

Validação de URL

Os TWAs funcionarão somente se o handshake digital for nosso domínio com nosso aplicativo. Este é um mecanismo conhecido como Links de Ativos Digitais. Isso criará um relacionamento confiável entre seu host e seu APK, provando que você é o proprietário do PWA e que você não estará publicando PWAs na Play Store que você não possui. Ele também cria um link digital entre seu website e seu aplicativo nativo que, em teoria, pode permitir que eles compartilhem dados privados (mas não parece ser possível com a API do TWA de hoje).

Com os Digital Asset Links, você deve exibir um arquivo no domínio do seu PWA na URL <your-domain>/.well-known/assetlinks.json. Esse arquivo JSON conterá informações sobre seu pacote Android (como o código do pacote) e um hash do certificado do seu aplicativo para que você possa executar um comando no terminal. Seu pacote Android terá uma contraparte configurando o URL do host. Existe uma ferramenta validadora online disponível para verificar se está tudo bem.

Se você não fizer o handshake, os TWAs não serão ativados e seu app usará as guias personalizadas normais do Chrome com uma interface de usuário do Chrome semelhante à exibição do seu PWA: minimal-ui. Não tenho certeza, mas acho que a Play Store pode rejeitar aplicativos que estão apenas apontando para guias personalizadas normais e TWAs não validados. Ainda não tenho certeza se o Chrome está fazendo a verificação do link de ativo digital. se estiver sendo feito em todos os acessos ao aplicativo antes de abri-lo como um TWA, pode ser um problema de desempenho. Eu acho que um cache será possível, e também a Play Store pode verificar isso antes de aceitar o aplicativo. Veremos se a documentação futura nos dá clareza sobre esse assunto.

Existe um mecanismo (não tão simples) para contornar o processo de certificação do Digital Asset Link para fins de desenvolvimento, explicado abaixo neste artigo.

Publicando seu aplicativo

Para publicar seu atalho do PWA usando TWAs, você precisará seguir todas as regras da Google Play Store. Verifique o Centro de Políticas do Desenvolvedor para mais informações. Você também precisará de uma conta de Desenvolvedor pagando uma taxa única de US$25 e criar metadados, capturas de tela e material de marketing para seu aplicativo.

Para publicar na Google Play Store, você deve aceitar o contrato de desenvolvedor e pagar uma taxa de registro de US$25,00Publicação

Quando você terminar de criar seu APK (Android Native Package) do Android Studio e já tiver uma conta do Developer Console, deverá criar um APK de produção e assiná-lo com uma chave criada por você e criada dentro das ferramentas do Android Studio. Você também pode querer verificar a assinatura de apps no Google Play para simplificar o processo no futuro.

O Google Play Console

Não há regras ou processos especiais para carregar esses aplicativos na Play Store, mas a equipe de revisão pode detectar que você está usando TWAs e fará uma verificação de que 1) Digital Asset Links está ativado e validado, e 2) aURL está passando os critérios PWA (principalmente para um Service Worker manipulador de eventos de busca).

O preenchimento de muitos metadados e recursos gráficos será obrigatório para publicar seu PWA na Google Play StoreAtualizando seu aplicativo

Você não precisa fazer o upload do seu aplicativo novamente se alterar o conteúdo da web - a menos que você altere o aplicativo completamente de acordo com as regras da loja. Você continuará atualizando seu aplicativo através de Service Workers e novas implantações em seu servidor. Você terá que criar e fazer upload de outro APK somente se quiser alterar metadados, código nativo ou ícones.

Limitações

Estou vendo uma lista de possíveis limitações em relação à plataforma hoje, mas é apenas um começo e espero que possamos ver melhorias em relação a novas versões.

PWAs em subpastas

Se você publicar seu PWA em uma subpasta de um host, parece haver alguns problemas aqui.

O Digital Asset Link conecta todo o domínio, não apenas uma pasta

A Support Library atual parece manipular como um Intent (Captura de link) todo o host, mesmo se o seu PWA estiver em uma subpasta



Sem aplicativo interno

Embora essa seja uma restrição da própria Play Store (você não pode publicar aplicativos de intranet ou aplicativos que são apenas para você ou sua empresa), convém usar TWAs e criar APKs que serão implantados fora da loja.

Isso não será possível, já que o Digital Asset Link funciona somente com URLs públicos porque o Chrome precisa verificar se somos os proprietários do domínio, e isso ainda não é possível com URLs internos.

Experiência no primeiro carregamento

Na primeira vez que você abrir o aplicativo instalado recentemente, você não terá arquivos reais do aplicativo (o Service Worker ainda não foi registrado - a menos que o usuário tenha visitado o PWA anteriormente), portanto, se você estiver off-line, uma tela branca. Acho que tentar preparar o Chrome depois da instalação de alguma forma será útil em versões futuras. Se você estiver usando APIs TWA em vez da Support Library, poderá detectar essa situação e informar o usuário corretamente usando APIs nativas.

Chamando código nativo

Já existe um canal bidirecional para comunicar o servidor TWA (Chrome) e o cliente TWA (nosso APK). Esse canal está sendo usado para enviar mensagens push e mostrá-las como parte de nosso aplicativo nativo, e não do Chrome, mas nada mais.

Existe um potencial aqui para fazer a ponte entre o código nativo e o código JavaScript sem muito esforço e permitir que nossos PWAs acessem o código nativo, semelhante ao que acontece quando publicamos um APPX com um PWA para o Microsoft Store.

Estou vendo uma versão futura com uma maneira de registrar as classes Java/Kotlin no TWA Client para que possamos chamá-las com uma API JavaScript quando nosso PWA for renderizado no modo TWA.

Hoje, a única maneira de executar o código nativo é usar o Intents para abrir outras atividades nativas e voltar a abrir o TWA enviando e recebendo argumentos por meio de parâmetros de URIs.

Além disso, você pode criar algum tipo de servidor da Web ou servidor WebSocket em código nativo executado em um Serviço e deixar o PWA falar com ele, mas é meio estranho, complicado e talvez consuma bateria. Mas há um mundo totalmente novo que pode se abrir agora. Vamos ver o que a comunidade cria!

Monetização com a Play Store

Se o seu aplicativo não for gratuito para download, não haverá uma maneira fácil de validar se o usuário realmente pagou por ele (no final, seu conteúdo é apenas um URL); Além disso, se você tiver recursos digitais ou assinaturas que gostaria de vender usando a carteira da Play Store, será um desafio fazer com que funcione sem ter uma ponte real para o código nativo.

Depuração

Não tenho certeza se é um bug ou algo no meu ambiente de desenvolvimento, mas a depuração remota do Service Worker do TWA não está funcionando. Eu posso inspecionar o contexto da janela, mas não o Service Worker.

Outros motores

Os TWAs funcionam apenas com o Chrome hoje, mas a API também pode ser clonada por outros navegadores, como a Samsung Internet, Edge ou Firefox no futuro.

O que acontece se o usuário tiver uma versão mais antiga do Chrome e instalar o aplicativo na Play Store? Nesse caso, seu PWA aparecerá como uma guia personalizada do Chrome, não em um modo completamente autônomo.

O Google Maps Go na Play Store já estava usando algo semelhante ao TWA, especificando o Chrome como um requisitoO que acontece se o usuário não tiver o Chrome? A partir de hoje, usando a Support Library seu aplicativo não funcionará. Se você estiver usando a API do TWA em seu próprio código Java/Kotlin, poderá detectar a disponibilidade do navegador e carregar uma solução alternativa, como um WebView ou abrir o navegador.

Embora não seja tão comum ver dispositivos Android sem o Google Chrome, há alguns dispositivos sem ele por padrão, incluindo novos dispositivos na Europa que são vendidos sem o Chrome por padrão.

Outras plataformas

Os PWAs não funcionam em wear SO (relógios), mas não tenho certeza do que acontece em outras plataformas Android. Eu acho que provavelmente ainda não, mas vou testá-lo para um próximo artigo. Estou falando sobre a Android TV ou até mesmo Chromebooks com a Play Store. Enquanto isso, se você não testou, pode ser uma boa ideia desativar essas plataformas na listagem da sua loja.

Conflito com o WebAPK

Se você já instalou o PWA a partir do Chrome, já instalou um APK para esse URL assinado pela Play Store, mas isso não impedirá a loja de listar seu aplicativo e permitir que o usuário também o instale. O mesmo da outra forma: ter o aplicativo instalado da loja não impedirá que o Chrome ofereça ao usuário "Adicionar" a partir do navegador. Acho que isso pode ser evitado no futuro se o WebAPK também tiver um link de recursos digitais de alguma forma, ou se pudermos corresponder ao id do aplicativo WebAPK, mas não vejo isso em breve. Veremos.

Dois aplicativos da Starbucks em execução ao mesmo tempo: WebAPK e nosso próprio APKVocê pode impedir que o Chrome ofereça o WebAPK e ofereça seu aplicativo de listagem de lojas usando o related_applications_attribute e os atributos prefer_related_applications no Web App Manifest. Get Installed Related Apps API pode ajudar no futuro com este conflito.

Criando seu primeiro PWApk

Sim, eu sei, eu acabei de inventar a palavra PWApk, mas não parece tão ruim, certo?

Este artigo é uma introdução e estou trabalhando em uma série de tutoriais, portanto, se você tiver interesse nisso, siga-me no Twitter ou assine minha newsletter.

Há alguns anos, fiz um curso em vídeo sobre aplicativos nativos Web para Android, que, embora não seja exatamente o que você precisa fazer para os PWAs, ajudará os desenvolvedores da Web a entender o ecossistema do Android.

Você pode clonar a amostra do git ou iniciar um novo projeto. Vamos começar um novo, só para entender o que está acontecendo. Crie um novo projeto no Android Studio e selecione "Empty Activity", pois usaremos apenas uma Trusted Web Activity fornecida pela Biblioteca de suporte.

Nós começamos com um projeto vazioPreencha os detalhes, escolhendo um nome (vamos substituir isso mais tarde) e um nome do pacote. O nome do pacote é importante, pois será o ID do nosso aplicativo no sistema operacional Android e também na loja. Recomendo usar o host do seu PWA na ordem de reserva e um nome opcional depois, como: com.mypwa.calculator, se o seu PWA for https://mypwa.com/calculator.

API 19 (Android 4.4) como base parece ser bom. Atualmente, o Chrome é compatível apenas com o Chrome, já que parece que será a versão mínima exigida para o Google Chrome em breve. Algumas coisas no TWA funcionarão apenas da API 23 (Android 6.0), mas a Biblioteca de Suporte cuidará disso.

Escolher o nível mínimo da API limitará os dispositivos que verão nosso PWA na Google Play StoreAdicionando Dependência

A próxima etapa é adicionar a Biblioteca de Suporte a TWA como uma dependência, portanto, iremos abrir dois arquivos com o nome build.gradle

Existem dois arquivos de configuração gradle, um para o projeto e outro para o aplicativo AndroidComeçando com o projeto build.gradle, adicionaremos em allprojects> repositories, a seguinte linha:

maven { url "https://jitpack.io" }

Na próxima etapa, abrimos o módulo build.gradle e adicionamos as dependências:

implementation 'com.github.GoogleChrome:custom-tabs-client:e446d08014'

Configurando o TWA

A próxima etapa é permanecer no arquivo build.gradle do módulo e definir as configurações do PWA para a atividade da Web confiável. Em defaultConfig, adicionaremos:

manifestPlaceholders = [

\    hostName: "app.starbucks.com",

\    defaultUrl: "https://app.starbucks.com",

\    launcherName: "Starbucks",

\    assetStatements: '\[{ "relation": ["delegate_permission/common.handle_all_urls"], ' +

\    '"target": {"namespace": "web", "site": "https://app.starbucks.com"}}]'

]

Nesse caso, usarei o PWA da Starbucks como exemplo. A chave assetStatements é aquela que precisará de informações do processo Digital Asset Link. Vamos pular essa parte para fins de desenvolvimento. A propriedade com o nome launcherName deve corresponder a short_name no Manifesto do Aplicativo da Web.

Configurando o Manifesto

O arquivo de manifesto padrão do Android que temos agoraLá, podemos alterar o valor de android: label com ${launcherName} para usar o launcherName que definimos anteriormente nos metadados, para que tenhamos uma única fonte de verdade para o nome do aplicativo.

O próximo passo é configurar esse arquivo, começando com a abertura da tag <application>, para que possamos adicionar alguns filhos que se parecem com o seguinte código:

<meta-data

\    android:name="asset_statements"

\    android:value="${assetStatements}" />



<activity android:name="android.support.customtabs.trusted.LauncherActivity"

\    android:label="${launcherName}">

\    <meta-data android:name="android.support.customtabs.trusted.DEFAULT_URL"

\    android:value="${defaultUrl}" />



\    <intent-filter>

\    <action android:name="android.intent.action.MAIN" />

\    <category android:name="android.intent.category.LAUNCHER" />

\    </intent-filter>



\    <intent-filter>

\    <action android:name="android.intent.action.VIEW"/>

\    <category android:name="android.intent.category.DEFAULT" />

\    <category android:name="android.intent.category.BROWSABLE"/>

\    <data android:scheme="https"

\    android:host="${hostName}"/>

\    </intent-filter>

</activity>

O código abaixo configurará o TWA usando a Biblioteca de suporte, o Intent Filter, para que seu aplicativo capture links para o seu PWA e o Digital Asset Link. Vou pular os detalhes sobre o que está acontecendo lá do ponto de vista de um aplicativo Android.

É hora de sincronizarNesse ponto, você precisará fazer com que o Android Studio receba todas as alterações clicando em "Sincronizar agora". Se tudo estiver correto, você não receberá nenhum erro neste momento.

Substituição do ícone

Agora nosso aplicativo usa apenas um ícone android padrão, devemos substituir todos os arquivos disponíveis em app> res> mipmap em diferentes subpastas para diferentes densidades de pixel. Existem duas versões, ícones quadrados e arredondados. Os ícones arredondados são novos no Android 7.1 e, se você quiser ignorá-los, remova a referência android: roundIcon no AndroidManifest.xml.

Precisamos pegar manualmente os ícones do nosso manifesto e copiá-los nas subpastas mipmap com o nome certoAjuste do tema

Por fim, devemos abrir app/res/values/styles.xml e fazer algumas alterações no tema para que ele se pareça com um PWA:

<style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">

\    <item name="colorPrimary">@color/colorPrimary</item>

\    <item name="colorPrimaryDark">@color/colorPrimaryDark</item>

\    <item name="colorAccent">@color/colorAccent</item>

\    <item name="android:windowNoTitle">true</item>

\    <item name="android:backgroundDimEnabled">false</item>

</style>

Você pode alterar as cores do aplicativo de app/res/values/colors.xml, mas ainda não as vi na TWA.

Se você está atualmente restringindo a orientação em seu manifesto, convém também adicionar essa restrição no elemento <activity> no AndroidManifest.xml.

Pronto para testar?

Estamos prontos para testar nosso PWApk, mas antes disso, precisamos configurar o modo TWA de desenvolvimento para o Chrome em nosso dispositivo de teste ou emulador Android (com o Chrome 72+).

Configurando o Chrome

Verifique se você tem a versão 72 estável do Google Chrome e abra chrome://flags. Pesquise por "Ativar linha de comando em dispositivos que não possui root" e ative o sinalizador. Você precisará reiniciar o Chrome.

Em seguida, precisamos configurar o Chrome para ignorar o Digital Asset Link para o host que queremos testar, no nosso exemplo: app.starbucks.com. (Me desculpe Starbucks, mas nós amamos você, você sabe disse LOL)

Para alterar os argumentos da linha de comando do Chrome no Android, precisamos gravar um arquivo de texto no sistema de arquivos do Android. A maneira mais simples de fazer isso é através do adb (android debug bridge) que tem que estar no path (pesquise no google se não tiver) e execute:

adb shell cat /data/local/tmp/chrome-command-line _ - disable-digital-asset-link-verification-for-url="https://app.starbucks.com"

Existe um script simples disponível no exemplo do Chrome para usar se você quiser.

Precisamos para o Chrome para que ele assuma nossa nova configuração de desenvolvedorE agora, precisamos reiniciar o Chrome. Mas não apenas matando o aplicativo da janela multitarefa. Vá em Configurações/Aplicativos/Chrome e encerre todo o processo (Force Stop/Forçar Parada). Eu tive que fazer isso algumas vezes antes de tê-lo pronto.

O aviso informando que a flag está ativadaSe estiver pronto, toda vez que você abrir o Chrome, receberá um aviso sobre essa flag e, se executar o aplicativo no Android Studio, você finalmente terá o seu PWA instalado e funcionando de forma independente com seu APK, ícone e nome.

Conclusão

A ideia de que agora podemos publicar PWAs na Google Play Store é realmente uma mudança no jogo. Parece que estamos nos estágios iniciais da API agora e definitivamente precisamos de uma solução de nível mais alto para isso. Eu realmente quero ver uma ferramenta para inserir o URL do nosso PWA e obter um APK dele. Não será simplesmente por causa do sistema de verificação do Digital Asset Link. Somente a Play Store pode fazer isso apenas usando o mesmo WebAPK que eles estão gerando.

Eu estava questionando se o Google estava aprovando ou não TWAs, então eles estão removendo as suspeitas pelo menos da parte do artigo que fala do TWA.

Vamos analisar o Chrome 72 TWA como o primeiro passo de uma longa jornada!

Quero agradecer a Paul Kinlan pelo seu apoio em relação às TWAs, minhas perguntas e porques, tenho chamado ele quase todos os meses pra falar sobre isso :P

Maximiliano Firtman é um desenvolvedor web + móvel, instrutor, palestrante e autor independente. Ele é autor de vários livros, incluindo o High-Performance Mobile Web publicado pela O'Reilly Media. Ele é um orador frequente em conferências em todo o mundo e tem sido amplamente reconhecido por seu trabalho na comunidade de web móvel. Ele ensina treinamentos de desempenho em dispositivos móveis, JavaScript, PWA e web para as principais empresas do mundo. Ele é um consultor independente e ministrou vários workshops e cursos de PWA em muitas empresas e editores on-line, como Linked Learning / Lynda e Safari. Twitter: @firt
