<template>
  <router-view/>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    //methods nos sirve para instanciar las funciones.
    methods: {
      ...mapActions(['isTokioOnLocalStorage'])
    },
    //Created nos sirve para llamar las funciones.
    created(){
      this.isTokioOnLocalStorage();
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
body{
  background: #303030;
  overflow-x: hidden;
}
.sidenav-trigger {
  padding-top: 0.5rem;
}
.navbarX{
  position: fixed;
  z-index: 1000;
}
.titles1{
  color: #ff9204;
  font-size: 10pt;
}
.titles2{
  font-size: 16pt;
}

#mobile-demo{
  z-index: 32000;
}
#input{
  align-content: center;
}
#search_icon{
  margin-top: 1.5rem;
}
#content{
  z-index: -100;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#countRep{
  position: fixed;
  margin-top: -1.5rem;
  padding: -2%;
  z-index: 2000;
}
#Busqueda{
  margin-top: -1rem;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
