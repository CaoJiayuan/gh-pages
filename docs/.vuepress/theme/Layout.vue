<template>
    <v-app class="page-main">
        <nav-bar></nav-bar>
        <v-content class="page-container">
            <v-container class="component-page">
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
    }
  }
</script>

<style>

</style>