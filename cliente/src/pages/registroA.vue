<template>
  <div class="container">
    <h1 class="title">Formulario de Registro</h1>
    <h2 class="subtitle">Ejemplo de formulario sencillo utilizando las tecnologias node, express, vue, bulma, sequelize, mariaDB</h2>
    <div class="columns">
      <div class="column is-half">
        <div class="filed">
            <label for="" class="label">Nombre</label>
            <div class="control">
                <input v-model="nombre" type="text" class="input" placeholder="Nombre Completo">
            </div>
        </div>

        <div class="filed">
            <label for="" class="label">Edad</label>
            <div class="control">
                <input v-model="edad" type="number" class="input" placeholder="Nombre Completo">
            </div>
        </div>

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
          <label for="" class="label">Municipio</label>
          <div class="control">
              <div class="select">
                <select v-model="municipio">
                  <option
                    v-for="municipio in municipios"
                    :value="municipio"
                  >{{municipio}}</option>
                </select>
              </div>
          </div>
        </div>
        <br>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="enviarRegistro">Enviar</button>
          </div>
        </div>
      </div>
      <div class="column">
        <table class="table is-hoverable">
          <thead>
            <tr>
              <th><abbr title="Position">Id</abbr></th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Estado</th>
              <th>Municipio</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th><abbr title="Position">Id</abbr></th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Estado</th>
              <th>Municipio</th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="(registro, index) in registros">
              <td>{{registro.id}}</td>
              <td>{{registro.nombre}}</td>
              <td>{{registro.edad}}</td>
              <td>{{registro.Estado.estado}}</td>
              <td>{{registro.municipio}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Servidor from '@/dataBase/municipios'
import ServidorRegistro from '@/dataBase/registro'

export default {
  data () {
    return {
      nombre: null,
      edad: null,
      estado: null,
      estados: [],
      municipio: null,
      municipios: [],
      registros: []
    }
  },
  created () {
    this.cargarEstados()
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

          this.cargarMunicipios()
            .then(respuesta => {
              this.municipios = JSON.parse(respuesta.data.municipios)
              this.municipio = JSON.parse(respuesta.data.municipios)[0]
            })
        })
      })
    this.cargarRegistros()
  },
  watch: {
    estado: function (nuevoEstado) {
      this.cargarMunicipios()
        .then(respuesta => {
          this.municipios = JSON.parse(respuesta.data.municipios)
          this.municipio = JSON.parse(respuesta.data.municipios)[0]
        })
    }
  },
  methods: {
    cargarEstados () {
      return Servidor.cargarEstados()
    },
    cargarMunicipios () {
      return Servidor.cargarMunicipios({estado: this.estado})
    },
    cargarRegistros () {
      ServidorRegistro.cargarLista()
        .then(respuesta => {
          this.registros = respuesta.data
        })
    },
    enviarRegistro () {
      if (this.estado !== null && this.municipio !== null && this.nombre !== null && this.edad !== null) {
        ServidorRegistro.crearRegistro({nombre: this.nombre, edad: this.edad, municipio: this.municipio, estado: this.estado})
          .then(respuesta => {
            console.log('Registro Creado')
            this.nombre = null
            this.edad = null
            this.cargarRegistros()
          })
      }
    }
  }
}
</script>

