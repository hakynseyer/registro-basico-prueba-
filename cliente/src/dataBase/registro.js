import axios from '@/tools/__axios'

export default {
  crearRegistro (data) {
    return axios().post('/registro', data)
  },
  cargarLista () {
    return axios().get('/registro/lista')
  }
}
