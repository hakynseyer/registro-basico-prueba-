<template>
  <div class="container">
    <h1 class="title">Formulario de anexo de Municipios</h1>
    <h2 class="subtitle">Añade una lista de municipios con la siguiente estructura: <b>municipio1,municipio2,municipio3,...,municipioN</b>; al final esto se guardará en la base datos</h2>
    <div class="columns">
      <div class="column is-half">
        <div class="filed">
            <label for="" class="label">Estado</label>
            <div class="control">
                <div class="select">
                  <select v-model="estado">
                    <option
                      v-for="(estado, index) in estados"
                      :value="estado.id"
                    >{{estado.estado}}</option>
                  </select>
                </div>
            </div>
        </div>
        <div class="filed">
            <label for="" class="label">Municipios</label>
            <div class="control">
                <textarea v-model="municipios" class="textarea" placeholder="municipio1,municipio2,municipio3"></textarea>
            </div>
        </div>
        <br>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="enviarMunicipios">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Servidor from '@/dataBase/municipios'

export default {
  data () {
    return {
      estado: null,
      municipios: null,
      estados: []
    }
  },
  created () {
    Servidor.cargarEstados()
      .then(respuesta => {
        let obtenerDatos = new Promise((resolve, reject) => {
          resolve(
            respuesta.data.map(estado => {
              return {id: estado.id, estado: estado.estado}
            })
          )
        })
        obtenerDatos.then((estados) => {
          this.estados = estados
          this.estado = estados[0].id
        })
      })
  },
  methods: {
    enviarMunicipios () {
      if (this.municipios !== null) {
        let formaJSON = new Promise((resolve, reject) => {
          resolve(
            this.municipios.split(',')
          )
        })
        formaJSON.then(municipios => {
          Servidor.crearMunicipios({estado: this.estado, municipios: municipios})
            .then(respuesta => {
              console.log('Municipio Subido')
              this.municipios = []
            })
        })
      }
    }
  }
}
</script>

