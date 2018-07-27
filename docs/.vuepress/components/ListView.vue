<template>
    <div class="component-item-list">
        <v-card v-for="(item,i) in items" :key="i">
            <v-card-title>{{item.title}}</v-card-title>
        </v-card>
    </div>
</template>
<script>
  export default {
    computed: {
      items () {
        return this.$page.frontmatter.items
      },
    },
  }
</script>
