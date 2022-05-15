<template>
  <div id="menu">
    <NavBar/>
    <br>
    <br>
    <br>
    <AddUser/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar_InitSes.vue';
  import AddUser from '../components/AddUser';
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
      AddUser
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