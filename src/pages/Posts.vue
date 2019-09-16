<template>
  <Layout>
    <section class="ptb ptb-sm-80">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2 blog-post-hr" v-for="post in $page.posts.edges" :key="post.node.id">
            <div class="blog-post mb-30">
              <div class="post-media">
                <g-image alt="Cover image" v-if="post.node.coverImage" class="post-card__image" :src="post.node.coverImage" />
              </div>
              <div class="post-header">
                <h4><a :href="post.node.path">{{post.node.title}}</a></h4>
              </div>
              <p class="post-entry" v-html="post.node.description" />
              <AppPostMeta class="post-meta" :post="post.node" />
              <AppPostTags class="post-tag pull-left" :post="post.node" />
              <g-link class="post-more-link pull-right" :to="post.node.path">Leia mais<i class="fa fa-long-arrow-right right"></i></g-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import AppPostMeta from '~/components/AppPostMeta'
import AppPostTags from '~/components/AppPostTags'
export default {
  components: {
    AppPostMeta,
    AppPostTags
  },
  props: ['post'],
  metaInfo: {
    title: 'Blog'
  }
}
</script>

<page-query>
{
  posts: allPost {
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "DD/MM/YYYY")
        timeToRead
        description
        coverImage (width: 770, height: 380, blur: 10)
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>
