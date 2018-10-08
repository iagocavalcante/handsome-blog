<template>
  <section class="ptb ptb-sm-80">
    <div class="container">
  <!-- End work Filter -->
      <div class="row container-grid nf-col-3">

        <div class="nf-item branding coffee spacing" :key="index" v-for="(port, index) in portfolio">
          <div class="item-box">
            <a :href="port.link">
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
import Chopp from '@/assets/chopp.png'
import Conceito from '@/assets/conceito.png'
import i9Empresa from '@/assets/i9empresa.jpeg'
import i9Gestao from '@/assets/i9gestao.jpeg'
import i9Site from '@/assets/i9site.jpeg'
import OuuaProd from '@/assets/ouua_prod.png'
import Ouua from '@/assets/ouua.png'
import Vila from '@/assets/vila.jpeg'
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
        link: '#'
      },
      {
        image: i9Site,
        name: 'i9 Amazon',
        type: 'Dashboard Cliente, Site (Atualmente modificado)',
        link: '#'
      },
      {
        image: Ouua,
        name: 'Ouua Painel',
        type: 'Dashboard',
        link: '#'
      },
      {
        image: OuuaProd,
        name: 'Ouua App',
        type: 'Android',
        link: '#'
      },
      {
        image: Vila,
        name: 'Vila do Silício',
        type: 'Site, Blog',
        link: '#'
      }
    ]
  })
}
</script>