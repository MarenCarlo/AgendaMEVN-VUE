<template>
  <div class="row">
    <div class="col s1 offset-s8 m11 l1">
      <a id="countRep" class="btn-floating btn-large grey darken pulse" title="Empresas registradas">{{ cuenta }}</a>
    </div>
  </div>
  <div class="row">

    <nav id="Busqueda">
      <div class="nav-wrapper grey darken-3">
        <form>
          <div class="input-field">
            <input id="search" type="search" required disabled>
            <label class="label-icon" for="search"><svg xmlns="http://www.w3.org/2000/svg" id="search_icon" width="32" height="32" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></label>
            <i class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" id="search_icon" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></i>
          </div>
        </form>
      </div>
    </nav>
    <div class="row">
      <div class="col s12 offset-s5">
        <router-link id="add_contact" class="btn-floating btn-large waves-effect waves-light green pulse" to="/agregar_empresa" style="position: fixed;" onmouseenter="M.toast({html: 'Agregar Empresa', displayLength: 1000, classes: 'tostada'})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="50" height="50" viewBox="0 0 24 24"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/></svg>
        </router-link>
      </div>
    </div>
    <div class="col s12">
      <br>
      <div v-for="items in info" :key="items._id">
        <div class="col l4 m6 s12">
          <div id="card_contacto" class="card blue-grey darken-2 z-depth-3">
            <div class="card-content white-text">
              <h6 class="card-title">{{ items.Nombre }}</h6>
              <p>{{ items.Direccion }}</p>
              <div class="divider"></div>
              <br>
              <p>{{ items.Descripcion }}</p>
            </div>
            <div class="card-action center-align">
              <router-link id="eyes" class="btn-floating btn-tiny" :to="{ name: 'Empresa', params: {id: items._id}}" title="ver empresa">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="40" height="40" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </router-link>
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
  #countRep{
    transform: rotate(30deg);
    transition: all 0.5s;
  }
  #countRep:hover{
    transform: rotate(0deg);
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
  #add_contact{
    transform: rotate(320deg);
  }
  #add_contact:hover{
    transform: rotate(360deg);
    transition: all 0.5s;
  }
</style>

<script>
  import {mapState} from "vuex";
  import axios from "axios";
  
  export default {
    computed: {
      ...mapState(['token'])
    },
    data() {
      return {
        info: [],
        cuenta: '',
        busqueda: ''
      }
    },
    mounted(){
      axios.get('http://localhost:3000/api/empresas',{
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.token
          }
      }).then(res => {
        this.info   = res.data.data.Empresas
        this.cuenta = res.data.data.NEmpresas
			}).catch(e => {
      			this.errors.push(e)
    	});
    },
  }
</script>