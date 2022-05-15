<template>
  <div id="contacto">
    <NavBar/>
    <br>
    <br>
    <br>
    <EditContactForm/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '../components/NavBar_InitSes';
  import EditContactForm from '../components/EditContactForm'
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
      EditContactForm
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