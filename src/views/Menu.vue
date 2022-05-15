<template>
  <div id="menu">
    <NavBar/>
    <br>
    <br>
    <MenuComp/>
    <br>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar_InitSes.vue';
  import MenuComp from '@/components/MenuComp.vue';
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
      MenuComp
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