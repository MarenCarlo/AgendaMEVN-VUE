<template>
  <div id="menu">
    <NavBar/>
    <br>
    <br>
    <br>
    <AddContactForm/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar_InitSes.vue';
  import AddContactForm from '@/components/AddContactForm.vue';
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
      AddContactForm
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