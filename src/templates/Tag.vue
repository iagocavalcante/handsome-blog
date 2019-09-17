<template>
  <Layout>
    <section class="ptb ptb-sm-80">
      <h1 class="tag-title text-center space-bottom">
        # {{ $page.tag.title }}
      </h1>

      <div class="posts">
        <section class="ptb ptb-sm-80">
          <div class="container">
            <div class="row">
              <div class="col-md-8 offset-md-2 blog-post-hr" v-for="post in $page.tag.belongsTo.edges" :key="post.node.id" :post="post.node">
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
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Tag ($id: String!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "DD/MM/YYYY")
            timeToRead
            description
            coverImage (width: 860, blur: 10)
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Tags'
  }
}
</script>

<style lang="scss">

</style>

