<template>
  <!-- Post Item -->
  <div class="row">
    <h1 class="cent-mid-content">POSTAGENS DO MEDIUM</h1>
    <div class="col-md-8 offset-md-2 blog-post-hr" :key="index" v-for="(post, index) of posts">
      <div class="blog-post mb-30">
        <div class="post-media">
          <img :src="returnImageLink(post.previewContent.bodyModel.paragraphs[0].metadata ? post.previewContent.bodyModel.paragraphs[0].metadata.id : '')" alt="" />
        </div>
        <div class="post-meta"><span>por <a>Iago Cavalcante</a>,</span> <span>{{formatEpochToDate(post.firstPublishedAt)}}</span></div>
        <div class="post-header">
          <h4><a :href="returnPostLink(post.uniqueSlug)" target="_blank">{{post.title}}</a></h4>
        </div>
        <div class="post-entry">
          {{post.content.subtitle}}
        </div>
        <!-- <div class="post-tag pull-left"><span><a>Branding</a>,</span><span><a>Design</a></span></div> -->
        <div class="post-more-link pull-right"><a :href="returnPostLink(post.uniqueSlug)" >Leia Mais<i class="fa fa-long-arrow-right right"></i></a></div>
      </div>

      <hr />            

    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ListPostsMedium',
  props: {
    posts: {
      type: Array
    }
  },
  methods: {
    returnImageLink ( imageName ) {
      return imageName ? `https://cdn-images-1.medium.com/max/800/${imageName}` : ''
    },
    returnPostLink ( postLink ) {
      return `https://medium.com/@iagoangelimc/${postLink}`
    },
    formatEpochToDate ( epoch ) {
      moment.locale('pt-BR')
      return moment.unix(epoch).format('DD MMMM')
    }
  }
}
</script>
