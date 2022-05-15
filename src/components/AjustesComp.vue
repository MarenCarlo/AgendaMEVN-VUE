<template>
    <div class="row">
        <div class="col s12">
            <br>
            <div>
                <div class="col l4 m6 s12">
                <div id="card_contacto" class="card blue-grey darken-2 z-depth-3">
                    <div class="card-action center-align white-text">
                        <div class="divider"></div>
                        <br>
                        <h6 class="card-title">Menu de Usuarios</h6>
                    </div>
                    <div class="card-content white-text">
                        <p>
                            En este menu puede agregar mas usuarios al sistema.
                        </p>
                        <br>
                        <div class="divider"></div>
                        <br>
                        <p></p>
                    </div>
                    <div class="card-action center-align">
                        <div class="row">
                            <div class="col s12">
                                <router-link id="eyes" class="btn-floating btn-tiny" to="/registro_usuario" title="Agregar Usuario" onmouseenter="M.toast({html: 'Agregar Usuario', displayLength: 1000, classes: 'tostada'})">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="40" height="40" viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
  body{
    overflow-x: hidden;
  }
  .tostada{
    margin-right: 2rem;
  }
  #card_contacto:hover{
    box-shadow: 7px 5px 40px 0px!important;
    transition: all 0.5s;
  }
  #eyes:hover{
    transform: rotate(360deg);
    filter: invert(60%) sepia(100%) saturate(200%);
    transition: all 0.5s;
  }
  #eyes{
    background: #00000000!important;
    box-shadow: 0 0 0 0!important;
    transition: all 0.5s;
  }
</style>

<script>
  import {mapState} from "vuex";
  
  export default {
    computed: {
      ...mapState(['token'])
    },
    data() {
      return {
        info: [],
        cuenta: '',
        search: ''
      }
    },
  }
</script>