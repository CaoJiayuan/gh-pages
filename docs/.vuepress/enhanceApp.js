import Vuetify from 'vuetify'
require('./theme/styles/theme.styl')
export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(Vuetify)
}