<template>
    <v-app class="page-main" id="app-content">
        <nav-bar></nav-bar>
        <v-content app class="page-container">
            <v-container class="component-page" fluid>
                <component :is="com"></component>
                <v-layout v-if="!com">
                  <v-flex xs12 lg8 offset-lg2 offset-md1>
                    <v-card class="app-content">
                        <Content />
                    </v-card>
                  </v-flex>
                </v-layout>
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
    @import '~vuetify/dist/vuetify.css';
</style>