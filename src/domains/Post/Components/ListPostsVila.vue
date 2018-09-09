<template>
  <!-- Post Item -->
  <div class="row">          
    <h1 class="cent-mid-content">POSTAGENS DA VILA DO SILÍCIO</h1>
    <div class="col-md-8 offset-md-2 blog-post-hr" :key="index" v-for="(post, index) of posts">
      <div class="blog-post mb-30">
        <div class="post-media">
          <img :src="post.better_featured_image.source_url" alt="" />
        </div>
        <div class="post-meta"><span>por <a>{{post._embedded.author[0].name}}</a>,</span> <span>{{formatDateTimeWithTimeZoneToDateTime(post.date)}}</span></div>
        <div class="post-header">
          <h4><a :href="post.guid.rendered" target="_blank"><span v-html="post.title.rendered"></span></a></h4>
        </div>
        <div class="post-entry">
          <span v-html="removeText(post.excerpt.rendered, post.slug)"></span>
        </div>
        <!-- <div class="post-tag pull-left"><span><a>Branding</a>,</span><span><a>Design</a></span></div> -->
        <div class="post-more-link pull-right"><a :href="post.guid.rendered" target="_blank">Leia Mais<i class="fa fa-long-arrow-right right"></i></a></div>
      </div>

      <hr />            

    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ListPostsVila',
  props: {
    posts: {
      type: Array
    }
  },
  methods: {
    removeText (text, slug) {
      return text.replace(`<a class="read-more" href="http://viladosilicio.com.br/${slug}/">Continue lendo&#8230;</a>`, '...')
    },
    formatDateTimeWithTimeZoneToDateTime ( dataTimeTimeZone ) {
      return moment.utc(dataTimeTimeZone).format('DD/MM/YYYY h:mm:ss A')
    }
  }
}
</script>
