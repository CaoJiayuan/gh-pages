<template>
    <div>
      <v-toolbar app dark color="primary" style="z-index: 100" flat dense fixed>
        <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <template v-for="menu in menus">
                <v-btn flat :to="menu.link">{{ menu.text}}</v-btn>
            </template>
        </v-toolbar-items>
      </v-toolbar>

      <v-navigation-drawer
        fixed
        v-model="drawer"
        style="z-index: 100"
      class="hidden-md-and-up"
      >
      <v-list class="pt-0">
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in menus"
          :key="item.link"
          :to="item.link"
        >
  
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        drawer : false
      } 
    },
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
