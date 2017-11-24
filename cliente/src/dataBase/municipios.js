import axios from '@/tools/__axios'

export default {
  cargarEstados () {
    return axios().get('/estados/lista')
  },
  crearMunicipios (datos) {
    return axios().post('/municipios', datos)
  },
  cargarMunicipios (estado) {
    return axios().post('/municipios/lista', estado)
  }
}
