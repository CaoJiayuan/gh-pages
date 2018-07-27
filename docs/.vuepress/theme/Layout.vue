<template>
    <v-app class="page-main">
        <nav-bar></nav-bar>
        <v-content class="page-container">
            <v-container class="component-page">
                <component :is="com"></component>
                <Content/>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
  import NavBar from './layouts/NavBar'

  export default {
    components: {
      NavBar
    },
    computed:{
      com(){
        return this.$page.frontmatter.component
      }
    },
    watch:{
      $page(now) {
        console.log(now)
      }
    }
  }
</script>

<style>

</style>