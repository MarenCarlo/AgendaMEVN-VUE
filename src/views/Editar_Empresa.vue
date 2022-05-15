<template>
  <div id="contacto">
    <NavBar/>
    <br>
    <br>
    <br>
    <EditEnterpriseForm/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '../components/NavBar_InitSes';
  import EditEnterpriseForm from '../components/EditEnterpriseForm'
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
      EditEnterpriseForm
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