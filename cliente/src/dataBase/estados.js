import axios from '@/tools/__axios'

export default {
  crearEstado (datos) {
    return axios().post('/estados', datos)
  }
}
