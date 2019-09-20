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
      color: #111;
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
  max-width: 960px;
  padding: calc(3.5rem / 2);
  margin: 0 auto;
  
  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(3.5rem / 2);
}

pre {
  padding: calc(3.5rem / 2);
  font-size: .85em;
  background-color: #fffbf3;
  margin-bottom: 2em;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 5px;
}

code {
  background-color: #fffbf3;
  font-size: .85em;
  padding: .2em .5em;
}

code[class*="language-"],
pre[class*="language-"] {
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}


@media print {
	code[class*="language-"],
	pre[class*="language-"] {
		text-shadow: none;
	}
}

/* Code blocks */
pre[class*="language-"] {
	overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	border-radius: 5px;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: #999;
}

.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
	color: #c71b7b;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	color: #9a6e3a;
	background: hsla(0, 0%, 100%, .5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #20a7e0;
}

.token.function,
.token.class-name {
	color: #DD4A68;
}

.token.regex,
.token.important,
.token.variable {
	color: #e90;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
</style>