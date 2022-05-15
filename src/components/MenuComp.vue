<template>
  <div class="row">
    <div class="col s1 offset-s8 m11 l1">
      <a id="countRep" class="btn-floating btn-large grey darken pulse" title="Contactos registrados">{{ cuenta }}</a>
    </div>
  </div>
  <div class="row">
    <nav id="Busqueda">
      <div class="nav-wrapper grey darken-3">
        <form>
          <div class="input-field">
            <input v-bind:value="search" id="search" type="search" disabled required>
            <label class="label-icon" for="search"><svg xmlns="http://www.w3.org/2000/svg" id="search_icon" width="32" height="32" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></label>
            <i class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" id="search_icon" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></i>
          </div>
        </form>
      </div>
    </nav>
    <div class="row">
      <div class="col s12 offset-s5">
        <router-link id="add_contact" class="btn-floating btn-large waves-effect waves-light green pulse" to="/agregar_contacto" style="position: fixed;" onmouseenter="M.toast({html: 'Agregar Contacto', displayLength: 1000, classes: 'tostada'})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="55" height="55" viewBox="0 0 24 24"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/></svg>
        </router-link>
      </div>
    </div>
    <div class="col s12">
      <br>
      <div v-for="items in info" :key="items._id">
        <div class="col l4 m6 s12">
          <div id="card_contacto" class="card blue-grey darken-2 z-depth-3">
            <div class="card-content white-text">
              <h6 class="card-title">{{ items.FN_Contact }} {{ items.LN_Contact }}</h6>
              <p>{{ items.Rel_Cargo.Nombre }}</p>
              <p>{{ items.Rel_Empresa.Nombre }}</p>
              <div class="divider"></div>
              <br>
              <p>{{ items.Descripcion }}</p>
            </div>
            <div class="card-action center-align">
              <router-link id="eyes" class="btn-floating btn-tiny" :to="{ name: 'Contacto', params: {id: items._id}}" title="ver contacto">
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
        search: ''
      }
    },
    mounted(){
      axios.get('http://localhost:3000/api/contactos',{
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.token
          }
      }).then(res => {
        this.info   = res.data.data.Contactos
        this.cuenta = res.data.data.NContactos
			}).catch(e => {
      			this.errors.push(e)
    	});
    },
  }
</script>