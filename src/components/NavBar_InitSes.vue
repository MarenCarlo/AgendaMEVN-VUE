<template>
    <nav class="navbarX">
      <div class="nav-wrapper grey darken-2">
        <a data-target="mobile-demo" class="sidenav-trigger"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32px" height="32px" class="menu-bar"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"/></svg></a>
        <div class="row">
          <div class="col s3 offset-s1">
            <ul class="center hide-on-med-and-down">
              <li><router-link to="/menu" id="name_user2">{{ user_name }} <span id="rol_user2">({{ rol }})</span></router-link></li>
            </ul>
          </div>
          <div class="col s8">
            <ul class="right hide-on-med-and-down">
              <li><router-link to="/menu">Contactos</router-link></li>
              <li><router-link to="/empresas">Empresas</router-link></li>
              <li v-if="rol === 'Administrador'"><router-link to="/ajustes">Ajustes</router-link></li>
              <li><a @click="cerrarSesion">Cerrar Sesion</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
        <li><router-link to="/menu" id="name_user">{{ user_name }}</router-link></li>
        <p id="rol_user">({{ rol }})</p>
        <div class="divider"></div>
        <li><router-link to="/menu">Contactos</router-link></li>
        <li><router-link to="/empresas">Empresas</router-link></li>
        <li v-if="rol === 'Administrador'"><router-link to="/ajustes">Ajustes</router-link></li>
        <div class="divider"></div>
        <li><a @click="cerrarSesion">Cerrar Sesion</a></li>
    </ul>
</template>
<style>
  #rol_user{
    margin-top: -1rem;
    color: #AAA;
    font-size: 9pt;
  }
  #rol_user2{
    margin-top: 0rem;
    color: #AAA;
    font-size: 9pt;
  }
  #name_user{
    color: #666;
    font-size: 13pt;
  }
  #name_user2{
    color: #DDD;
    font-size: 13pt;
    margin-bottom: -3rem;
  }
</style>
<script>
  import {mapActions} from "vuex";
  import {mapState} from "vuex"

  export default {
    name: 'NavBar',
    methods:{
      ...mapActions(['cerrarSesion'])
    },
    computed: {
      ...mapState(['rol', 'user_name'])
    }
  }
</script>