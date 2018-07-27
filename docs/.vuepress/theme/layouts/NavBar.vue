<template>
    <v-toolbar dense>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <template v-for="menu in menus">
                <v-btn flat :to="menu.link">{{ menu.text}}</v-btn>
            </template>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
  export default {
    computed: {
      menus () {
        return this.$site.themeConfig.nav || []
      },
      pages () {
        return this.$site.pages || []
      },
      defaultPath () {
        return this.$route.path.replace(/\/(\w+-*\w+)\.html$/, '/')
      }
    },
  }
</script>
