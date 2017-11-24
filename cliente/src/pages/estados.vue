<template>
  <div class="container">
    <h1 class="title">Formulario de anexo de Estados</h1>
    <h2 class="subtitle">Añade cualquier estado y este se guardará en la base datos</h2>
    <div class="columns">
      <div class="column is-half">
        <div class="filed">
            <label for="" class="label">Estado</label>
            <div class="control">
                <input v-model="estado" type="text" class="input" placeholder="Estado">
            </div>
        </div>
        <br>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="enviarEstado">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Servidor from '@/dataBase/estados'

export default {
  data () {
    return {
      estado: null
    }
  },
  methods: {
    enviarEstado () {
      if (this.estado !== null) {
        Servidor.crearEstado({estado: this.estado})
          .then(respuesta => {
            console.log('Estado Subido')
            this.estado = null
          })
      }
    }
  }
}
</script>

