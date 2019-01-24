<template>
  <section class="ptb ptb-sm-80">
    <div class="container">
  <!-- End work Filter -->
      <div class="row container-grid nf-col-3">

        <div class="nf-item branding coffee spacing" :key="index" v-for="(port, index) in portfolio">
          <div class="item-box">
            <a :href="port.link" target="_blank">
              <img alt="1" :src="port.image" class="item-container">
              <div class="item-mask">
                <div class="item-caption">
                  <h5 class="white">{{port.name}}</h5>
                  <p class="white">{{port.type}}</p>
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
import Chopp from '@/assets/portfolio/chopp.png'
import Conceito from '@/assets/portfolio/conceito.png'
import i9Empresa from '@/assets/portfolio/i9empresa.jpeg'
import i9Gestao from '@/assets/portfolio/i9gestao.jpeg'
import i9Site from '@/assets/portfolio/i9site.jpeg'
import OuuaProd from '@/assets/portfolio/ouua_prod.png'
import Ouua from '@/assets/portfolio/ouua.png'
import Medium from '@/assets/portfolio/medium.png'
import Vila from '@/assets/portfolio/vila.jpeg'
import PersonalBoard from '@/assets/portfolio/personal-board.png'
import QTube from '@/assets/portfolio/qtube.png'
import SocioBicolor from '@/assets/portfolio/socio-login.png'

export default {
  data: () => ({
    portfolio: [
      {
        image: Chopp,
        name: 'Chopp Delivery',
        type: 'Layout, Site (Desativado)',
        link: '#'
      },
      {
        image: Conceito,
        name: 'Conceito Representação',
        type: 'Layout, Site (Desativado)',
        link: '#'
      },
      {
        image: i9Empresa,
        name: 'Sistema i9Empresa',
        type: 'ERP',
        link: '#'
      },
      {
        image: i9Gestao,
        name: 'i9 Gestão',
        type: 'Dashboard',
        link: 'http://i9gestao.i9amazon.com.br/'
      },
      {
        image: i9Site,
        name: 'i9 Amazon',
        type: 'Dashboard Cliente, Site (Atualmente modificado)',
        link: 'http://i9amazon.com.br/'
      },
      {
        image: Medium,
        name: 'Medium Clone',
        type: 'Site',
        link: 'https://iagocavalcante.github.io/medium'
      },
      {
        image: Ouua,
        name: 'Ouua Painel',
        type: 'Dashboard',
        link: 'http://painel.ouua.com.br/'
      },
      {
        image: OuuaProd,
        name: 'Ouua App',
        type: 'Android',
        link: 'http://ouua.com.br/'
      },
      {
        image: SocioBicolor,
        name: 'Aplicativo Sócio Bicolor',
        type: 'Android',
        link: 'http://ouua.com.br/'
      },
      {
        image: Vila,
        name: 'Vila do Silício',
        type: 'Site, Blog',
        link: 'http://viladosilicio.com.br/'
      },
      {
        image: PersonalBoard,
        name: 'Personal Board',
        type: 'Site, Application',
        link: 'https://personal-board.netlify.com/'
      },
      {
        image: QTube,
        name: 'QTube',
        type: 'Application',
        link: 'https://iagocavalcante.github.io/qtube/'
      }
    ]
  })
}
</script>
