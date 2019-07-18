<template>
  <div class="component-item-list" style="width: 100%;">
    <v-card v-for="(item,i) in items" :key="i" class="list-item">
      <v-card-title>
        <router-link class="item-title" :to="item.link + '.html'">{{item.title}}</router-link>
      </v-card-title>
      <v-card-text>
        <p class="item-desc">
          {{ item.description }}
        </p>
        <p class="text-xs-right">
          {{ item.date }}
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>

  export default {
    props   : {
      data: {
        type: Array,
        sr  : null
      }
    },
    computed: {
      items() {
        return this.data ? this.data : this.$page.frontmatter.items;
      },
    },
    mounted() {
      const ScrollReveal = require('scrollreveal')
      let config = {
        viewFactor: 0.15,
        duration  : 800,
        distance  : "10em",
        scale     : .95,
        opacity   : .5,
        delay     : 80,
      };
      this.sr = new ScrollReveal(config);
      this.sr.reveal('.list-item', {useDelay: 'onload'});
    }
  };
</script>
<style lang="stylus">
  .item-title
    font-size 24px
    text-decoration none
    color: #000

  .item-desc
    text-indent 2em

  .list-item
    margin-top 25px
    visibility hidden
</style>