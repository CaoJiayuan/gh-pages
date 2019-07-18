import Vuetify from 'vuetify'
import Notes from './components/Notes'
require('./theme/styles/theme.styl')
export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(Vuetify)
  Vue.component('notes', Notes)
}