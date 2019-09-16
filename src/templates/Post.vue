<template>
  <Layout>
    <section class="ptb ptb-sm-80">
      <div class="post-title">
        <h1 class="post-title__text">
          {{ $page.post.title }}
        </h1>
        
        <AppPostMeta :post="$page.post" />

      </div>
      
      <div class="post content-box">
        <div class="post__header">
          <g-image alt="Cover image" v-if="$page.post.coverImage" :src="$page.post.coverImage" />
        </div>

        <div class="post__content" v-html="$page.post.content" />

        <div class="post__footer">
          <AppPostTags :post="$page.post" />
        </div>
      </div>

      <div class="post-comments">
        <vue-disqus shortname="iagocavalcante-github-io" :identifier="$page.post.title"></vue-disqus>
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
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    path
    date (format: "DD/MM/YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    coverImage (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">

.post-title {
  padding: calc(3.5rem / 2) 0 calc(3.5rem / 2);
  text-align: center;
}

.content-box {
  background-color: #fff;
  max-width: 960px;
  margin: 0 auto;
  transition: background-color .6s;
  padding: 3.5rem;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.02), 1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  transition: transform .3s, background-color .3s, box-shadow .6s;
}

.post {


  &__header {
    width: calc(100% + 3.5rem * 2);
    margin-left: calc(3.5rem * -1);
    margin-top: calc(3.5rem * -1);
    margin-bottom: calc(3.5rem / 2);
    overflow: hidden;
    border-radius: 5px 5px 0 0;
    
    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }

  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + 3.5rem * 2);
      margin-left: calc(3.5rem * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(3.5rem / 2);
  
  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(3.5rem / 2);
}
</style>