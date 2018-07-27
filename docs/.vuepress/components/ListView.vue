<template>
    <div class="component-item-list" style="width: 100%;">
        <v-card v-for="(item,i) in items" :key="i">
            <v-card-title>{{item.title}}</v-card-title>
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
  }
</script>
<style>
</style>