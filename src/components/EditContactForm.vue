<template>
    <div class="row">
      <div class="col s12 offset-s5">
        <a href="#modal1" id="add_contact" class="btn-floating btn-large waves-effect waves-light green pulse modal-trigger" style="position: fixed;" onmouseenter="M.toast({html: 'Agregar Cargo', displayLength: 1000, classes: 'tostada'})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="55" height="55" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col s12 offset-s5">
        <router-link id="add_contact2" class="btn-floating btn-large waves-effect waves-light green pulse" to="/agregar_empresa" style="position: fixed;" onmouseenter="M.toast({html: 'Agregar Empresa', displayLength: 1000, classes: 'tostada'})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="50" height="50" viewBox="0 0 24 24"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/></svg>
        </router-link>
      </div>
    </div>
    <form @submit.prevent="addCargo(cargo)">
        <div id="modal1" class="modal modal-fixed-footer grey darken-2">
            <div class="modal-content">
                <h5 class="white-text">Agregar Nuevo Cargo</h5>
                <div class="row">
                    <div class="input-field col s12 m12 l12">
                        <input id="Nombre" type="text" class="validate" v-model="cargo.Nombre">
                        <label for="Nombre">Nombre</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea id="textarea2" class="materialize-textarea white-text" maxlength="1024" rows="8" v-model="cargo.Descripcion"></textarea>
                        <label for="textarea2">Descripcion</label>
                    </div>
                </div>
                <div class="container">
                    <br>
                    <div class="red-text" v-if="setAddCargoAlerts">{{ setAddCargoAlerts }}</div>
                </div>
            </div>
            <div class="modal-footer grey darken-3 center-align">
                <button style="color: #666;" class="btn-small waves-effect blue-grey lighten-5" type="submit">Agregar</button>
            </div>
        </div>
    </form>
    <div>
        <div class="container">
            <form @submit.prevent="editContact(items, id)">
                <div class="card blue-grey darken-2 z-depth-3">
                    <div class="card-content">
                        <h5 style="color: #FFF;">Editar Contacto</h5>
                        <br>
                        <div class="row">
                            <div class="input-field col s12 m6 l6">
                            <input id="first_name" type="text" class="validate" v-model="items.FN_Contact" required>
                            <label for="first_name" class="active">Nombres</label>
                            </div>
                            <div class="input-field col s12 m6 l6">
                            <input id="last_name" type="text" class="validate" v-model="items.LN_Contact" required>
                            <label for="last_name" class="active">Apellidos</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 m6 l6">                
                                <label>Empresa</label>            
                                <select id="select_form" class="browser-default" v-model="items.Rel_Empresa" required>
                                    <option v-for="item in info_empresas" v-bind:value="item._id" :key="item._id">
                                            {{ item.Nombre }}
                                    </option>
                                </select>
                            </div>
                            <div class="col s12 m6 l6">
                                <label>Cargo</label>        
                                <select id="select_form" class="browser-default" v-model="items.Rel_Cargo" required>
                                    <option v-for="item in info_cargos" v-bind:value="item._id" :key="item._id">
                                            {{ item.Nombre }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <textarea id="textarea1" class="materialize-textarea white-text active" maxlength="1024" rows="8" v-model="items.Descripcion" required></textarea>
                                <label for="textarea1" class="active">Descripcion</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 m4 l4">
                                <input id="Pri_Telephone" type="tel" class="validate" v-model="items.Pri_Telephone" required>
                                <label for="Pri_Telephone" class="active">Telefono Principal</label>
                            </div>
                            <div class="input-field col s12 m4 l4">
                                <input id="Alt_Telephone" type="tel" class="validate" v-model="items.Alt_Telephone">
                                <label for="Alt_Telephone" class="active">Telefono Alterno</label>
                            </div>
                            <div class="input-field col s12 m4 l4">
                                <input id="Email" type="email" class="validate" v-model="items.Email" required>
                                <label for="Email" class="active">Email</label>
                            </div>
                        </div>
                    </div>
                    <div class="card-action center-align">
                        <button style="color: #666;" class="btn-large waves-effect blue-grey lighten-5" type="submit">Guardar Cambios</button>
                        <br>
                        <div class="container">
                            <br>
                            <div class="red-text" v-if="editContactAlerts">{{ editContactAlerts }}</div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<style>
    input{
        color: #d6d6d6;
    }
    .tostada{
        margin-right: 2rem;
    }
    #add_contact{
        margin-top: 1rem;
        transform: rotate(320deg);
    }
    #add_contact:hover{
        transform: rotate(360deg);
        transition: all 0.5s;
    }
    #add_contact2{
        margin-top: 5rem;
        transform: rotate(320deg);
    }
    #add_contact2:hover{
        transform: rotate(360deg);
        transition: all 0.5s;
    }
    #select_form{
        background: #647181;
        color: #d6d6d6;
        border: none;
    }
</style>
<script>
    import {mapActions} from 'vuex';
    import {mapState} from "vuex";
    import axios from "axios";

    export default {
        data() {
            return {
                info_empresas: [],
                info_cargos: [],
                id: this.$route.params.id,
                items: {
                    _id: '',
                    FN_Contact: '',
                    LN_Contact: '',
                    Rel_Empresa: '',
                    Rel_Cargo: '',
                    Email: '',
                    Pri_Telephone: '',
                    Alt_Telephone: '',
                    Descripcion: '',
                    Rel_Contacto_De_Usuario: ''
                },
                cargo: {
                    Nombre: '',
                    Descripcion: ''
                },
            }
        },
        methods: {
            ...mapActions(['editContact', 'addCargo'])
        },
        computed: {
            ...mapState(['editContactAlerts', 'setAddCargoAlerts', 'token'])
        },
        mounted() {
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('select');
                var instances = M.FormSelect.init(elems);
            });
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.modal');
                var instances = M.Modal.init(elems);
            });
            const identifier = this.$route.params.id;
            axios.get('http://localhost:3000/api/contactos/'+identifier,{
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': this.token
                }
            }).then(res => {
                this.items._id           = res.data.data.Contacto[0]._id
                this.items.FN_Contact    = res.data.data.Contacto[0].FN_Contact
                this.items.LN_Contact    = res.data.data.Contacto[0].LN_Contact
                this.items.Rel_Empresa   = res.data.data.Contacto[0].Rel_Empresa._id
                this.items.Rel_Cargo     = res.data.data.Contacto[0].Rel_Cargo._id
                this.items.Email         = res.data.data.Contacto[0].Email
                this.items.Pri_Telephone = res.data.data.Contacto[0].Pri_Telephone
                this.items.Alt_Telephone = res.data.data.Contacto[0].Alt_Telephone
                this.items.Descripcion   = res.data.data.Contacto[0].Descripcion
                this.items.Rel_Contacto_De_Usuario = res.data.data.Contacto[0].Rel_Contacto_De_Usuario
            }).catch(e => {
                this.errors.push(e)
            });
            axios.get('http://localhost:3000/api/empresas',{
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': this.token
                }
            }).then(res => {
                this.info_empresas = res.data.data.Empresas
            }).catch(e => {
                this.errors.push(e)
            });
            axios.get('http://localhost:3000/api/cargos',{
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': this.token
                }
            }).then(res => {
                this.info_cargos = res.data.data.Cargos
            }).catch(e => {
                this.errors.push(e)
            });
        }
    }
</script>