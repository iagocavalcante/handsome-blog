<template>
  <section class="ptb ptb-sm-80">
    <div class="container">
      <div class="row container-grid nf-col-3">
        <div class="nf-item branding coffee spacing" :key="index" v-for="(certificate, index) in certifcates">
          <div class="item-box">
            <a :href="certificate.link">
              <img alt="1" :src="certificate.image" class="item-container">
              <div class="item-mask">
                <div class="item-caption">
                  <h5 class="white">{{certificate.name}}</h5>
                  <p class="white">{{certificate.type}}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import KingHost  from '@/assets/certificates/certificadoKingHost.jpg'
import AndroidComLaravel from '@/assets/certificates/certificate-android-com-laravel-parte-2.jpg'
import AspnetCore from '@/assets/certificates/certificate-aspnet-core.jpg'
import AutenticacaoComLaravelJwt from '@/assets/certificates/certificate-autenticacao-com-laravel-e-jwt.jpg'
import AutenticacaoComNodePassport from '@/assets/certificates/certificate-autenticacao-com-nodejs-e-passport-rev2.jpg'
import AvancandoComJenkins from '@/assets/certificates/certificate-avancando-com-jenkins.jpg'
import AvancandoComPhaser from '@/assets/certificates/certificate-avancando-com-phaserio.jpg'
import AvancandoComReactReduxSauce from '@/assets/certificates/certificate-avancando-com-react-e-redux-redux-sauce.jpg'
import CriandoAppCrudComAngularJs from '@/assets/certificates/criando-um-app-crud-com-angular-js.png'
import CriandoFormLoginBootstrap from '@/assets/certificates/Criando-um-form-de-login-com-Bootstrap.png'
import DesenvolvimentoApiComNodejs from '@/assets/certificates/certificate-desenvolvimento-de-api-com-nodejs-2.jpg'
import HapiJs from '@/assets/certificates/certificate-hapijs.jpg'
import IniciandoComJenkins from '@/assets/certificates/certificate-iniciando-com-jenkins.jpg'
import IniciandoComReactjs from '@/assets/certificates/certificate-iniciando-com-reactjs.jpg'
import IonicIntroducao from '@/assets/certificates/ionic-introducao.png'
import IonicComoConsumirWebServicesRESTFul from '@/assets/certificates/Ionic-2-Como-consumir-web-services-RESTful.png'
import IonicNativeParte1 from '@/assets/certificates/certificate-ionic-native-parte-1.jpg'
import IIIConferencia from '@/assets/certificates/III-Conferencia-de-Social-CRM.png'
import IonicWebToMobile from '@/assets/certificates/ionic-1-web-to-mobile.png'
import JavascriptBasico from '@/assets/certificates/certificate-javascript-basico.jpg'
import JavaTecnicasAvancadas from '@/assets/certificates/Java-Tecnicas-Avancadas-para-Java-SE.png'
import LaravelComAndroidParte1 from '@/assets/certificates/certificate-laravel-com-android-parte-1.jpg'
import Localforage from '@/assets/certificates/certificate-localforage.jpg'
import MeanRev2 from '@/assets/certificates/certificate-mean-rev2.jpg'
import NodeJsBasico from '@/assets/certificates/certificate-node-js-basico.jpg'
import NodejsComExpressJadeSequelizeRev2 from '@/assets/certificates/certificate-nodejs-com-express-jade-e-sequelize-rev2.jpg'
import OrientacaoObjetosComJavascript from '@/assets/certificates/certificate-orientacao-objetos-com-javascript.jpg'
import PhaserioCriandoJogosComJavascript from '@/assets/certificates/certificate-phaserio-criando-jogos-com-javascript.jpg'
import PhaserioIntermediario from '@/assets/certificates/certificate-phaserio-intermediario.jpg'
import ProgressiveWebApps from '@/assets/certificates/certificate-progressive-web-apps.jpg'
import QuasarFrameworkMobileVuejs from '@/assets/certificates/certificate-quasar-framework-mobile-com-vuejs.jpg'
import ReactReduxRev2 from '@/assets/certificates/certificate-react-com-redux-rev-2.jpg'
import ReactRedux from '@/assets/certificates/certificate-react-com-redux.jpg'
import SistemaEmailMarketingComNodejsVuejs from '@/assets/certificates/certificate-sistema-de-email-marketing-com-nodejs-e-vuejs.jpg'
import SocketioAppsRealtime from '@/assets/certificates/certificate-socketio-apps-realtime.jpg'
import TestesUnitariosComNodejs from '@/assets/certificates/certificate-testes-unitarios-com-nodejs.jpg'
import TheUltimateVuejs from '@/assets/certificates/the-ultimate-vuejs-2.png'
import Vue2ComVuex from '@/assets/certificates/certificate-vue-20-com-vuex.jpg'
import Vuejs2 from '@/assets/certificates/certificate-vuejs-20.jpg'
import Vuejs from '@/assets/certificates/certificate-vuejs.jpg'

export default {
  data: () => ({
    certifcates: [
      {
        image: KingHost,
        name: 'Palestras Conexão King Host',
        link: '#'
      },
      {
        image: LaravelComAndroidParte1,
        name: 'Curso Android com laravel Parte1 ',
        link: '#'
      },
      {
        image: AndroidComLaravel,
        name: 'Curso Android com Laravel parte 2',
        link: '#'
      },
      {
        image: AspnetCore,
        name: 'Curso Aspnet Core',
        link: '#'
      },
      {
        image: AutenticacaoComLaravelJwt,
        name: 'Curso Autenticação com Laravel e Jwt',
        link: '#'
      },
      {
        image: AutenticacaoComNodePassport,
        name: 'Curso Autenticação com Node e Passport',
        link: '#'
      },
      {
        image: AvancandoComJenkins,
        name: 'Curso Avançando com Jenkins',
        link: '#'
      },
      {
        image: AvancandoComPhaser,
        name: 'Curso Avançando com Phaser',
        link: '#'
      },
      {
        image: AvancandoComReactReduxSauce,
        name: 'Curso Avançando com React e Redux Sauce',
        link: '#'
      },
      {
        image: CriandoAppCrudComAngularJs,
        name: 'Curso Criando um app Crud Com AngularJs',
        link: '#'
      },
      {
        image: CriandoFormLoginBootstrap,
        name: 'Curso Criando um form de login com Bootstrap',
        link: '#'
      },
      {
        image: DesenvolvimentoApiComNodejs,
        name: 'Curso Desenvolvimento de Api com Nodejs',
        link: '#'
      },
      {
        image: HapiJs,
        name: 'Curso HapiJs',
        link: '#'
      },
      {
        image: IIIConferencia,
        name: 'III Conferência de Social CRM',
        link: '#'
      },
      {
        image: IniciandoComJenkins,
        name: 'Curso Iniciando com Jenkins',
        link: '#'
      },
      {
        image: IniciandoComReactjs,
        name: 'Curso Iniciando com ReactJs',
        link: '#'
      },
      {
        image: IonicIntroducao,
        name: 'Curso Introdução ao Ionic',
        link: '#'
      },
      {
        image: IonicComoConsumirWebServicesRESTFul,
        name: 'Curso Ionic: como consumir WebServices RESTFul',
        link: '#'
      },
      {
        image: IonicNativeParte1,
        name: 'Curso Ionic Native Parte 1',
        link: '#'
      },
      {
        image: IonicWebToMobile,
        name: 'Curso Ionic: Web to Mobile',
        link: '#'
      },
      {
        image: JavascriptBasico,
        name: 'Curso Javascript Básico',
        link: '#'
      },
      {
        image: JavaTecnicasAvancadas,
        name: 'Curso Java: Técnicas Avançadas para Java SE',
        link: '#'
      },
      {
        image: Localforage,
        name: 'Curso Localforage',
        link: '#'
      },
      {
        image: MeanRev2,
        name: 'Curso MEAN Atualizado',
        link: '#'
      },
      {
        image: NodeJsBasico,
        name: 'Curso NodeJs Básico',
        link: '#'
      },
      {
        image: NodejsComExpressJadeSequelizeRev2,
        name: 'Curso Nodejs com Express Jade Sequelize Atualizado',
        link: '#'
      },
      {
        image: OrientacaoObjetosComJavascript,
        name: 'Curso Orientação a Objetos com Javascript',
        link: '#'
      },
      {
        image: PhaserioCriandoJogosComJavascript,
        name: 'Curso Phaser.io Criando Jogos Com Javascript',
        link: '#'
      },
      {
        image: PhaserioIntermediario,
        name: 'Curso Phaser.io Intermediário',
        link: '#'
      },
      {
        image: ProgressiveWebApps,
        name: 'Curso Progressive Web Apps',
        link: '#'
      },
      {
        image: QuasarFrameworkMobileVuejs,
        name: 'Curso Quasar Framework Mobile Vuejs',
        link: '#'
      },
      {
        image: ReactReduxRev2,
        name: 'Curso React e Redux Atualizado',
        link: '#'
      },
      {
        image: ReactRedux,
        name: 'Curso React e Redux',
        link: '#'
      },
      {
        image: SistemaEmailMarketingComNodejsVuejs,
        name: 'Curso Sistema de Email Marketing com Nodejs e Vuejs',
        link: '#'
      },
      {
        image: SocketioAppsRealtime,
        name: 'Curso Socket.io Aplicativos RealTime',
        link: '#'
      },
      {
        image: TestesUnitariosComNodejs,
        name: 'Curso Testes Unitários com NodeJs',
        link: '#'
      },
      {
        image: TheUltimateVuejs,
        name: 'Curso The Ultimate VueJs',
        link: '#'
      },
      {
        image: Vue2ComVuex,
        name: 'Curso VueJs com Vuex',
        link: '#'
      },
      {
        image: Vuejs2,
        name: 'Curso VueJs 2',
        link: '#'
      },
      {
        image: Vuejs,
        name: 'Curso VueJs 1',
        link: '#'
      }
    ]
  })
}
</script>