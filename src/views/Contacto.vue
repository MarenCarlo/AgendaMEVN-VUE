<template>
  <div id="contacto">
    <NavBar/>
    <br>
    <br>
    <br>
    <br>
    <IdContacto/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '../components/NavBar_InitSes';
  import IdContacto from '../components/IdContacto';
  import {mapState} from "vuex";
  import {mapActions} from "vuex";

  export default {
    computed: {
      ...mapState(['token', 'rol', 'user_name'])
    },
    methods:{
      ...mapActions(['datosProtegidosMenu'])
    },
    components: {
      NavBar,
      IdContacto
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