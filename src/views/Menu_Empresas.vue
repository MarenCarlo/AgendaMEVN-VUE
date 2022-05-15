<template>
  <div id="contacto">
    <NavBar/>
    <br>
    <br>
    <EmpresasComp/>
    <br>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '../components/NavBar_InitSes';
  import EmpresasComp from '../components/EmpresasComp';
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
      EmpresasComp
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