<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <div class="column">
        </div>
        <div class="column">
        </div>
        <div class="column">
          <h4>Creado por Hakyn Seyer <b>[<i>Joaquin Reyes Sánchez</i>]</b></h4>
        </div>
      </div>
    </div>
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="{name: 'Registro'}">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </router-link>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{name: 'Registro'}">Registrar</router-link>
          <router-link class="navbar-item" :to="{name: 'estados'}">Estados</router-link>
          <router-link class="navbar-item" :to="{name: 'municipios'}">Municipios</router-link>
        </div>
      </div>
    </nav>
    <section class="section">
      <div class="container">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
