import Vuetify from 'vuetify'
require('./theme/styles/index.styl')
export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(Vuetify)
}