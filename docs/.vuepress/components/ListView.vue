<template>
    <div class="component-item-list" style="width: 100%;">
        <v-card v-for="(item,i) in items" :key="i">
            <v-card-title>
                <router-link class="item-title" :to="item.link + '.html'">{{item.title}}</router-link>
            </v-card-title>
            <v-card-body>

            </v-card-body>
        </v-card>
    </div>
</template>
<script>
  export default {
    props: {
      data : {
        type: Array,
      }
    },
    computed: {
      items () {
        return this.data ? this.data : this.$page.frontmatter.items
      },
    },
    mounted(){
    }
  }
</script>
<style lang="stylus">
.item-title
    font-size 24px
    text-decoration none
    color: #000
</style>