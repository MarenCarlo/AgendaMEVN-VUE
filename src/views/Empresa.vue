<template>
  <div id="contacto">
    <NavBar/>
    <br>
    <br>
    <br>
    <br>
    <IdEmpresa/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '../components/NavBar_InitSes';
  import IdEmpresa from '../components/IdEmpresa';
  import {mapState} from "vuex";
  import {mapActions} from "vuex";

  export default {
    computed: {
      ...mapState(['token', 'rol'])
    },
    methods:{
      ...mapActions(['datosProtegidosMenu'])
    },
    components: {
      NavBar,
      IdEmpresa
    },
    created(){
      this.datosProtegidosMenu();
    },
    mounted() {
      M.AutoInit();
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });
    }
  }
</script>