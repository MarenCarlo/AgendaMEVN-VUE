<template>
    <div class="container">
        <form @submit.prevent="registerUser(usuario)">
            <div class="card blue-grey darken-2 z-depth-3">
                <div class="card-content">
                    <h5 style="color: #FFF;">Registrar Nuevo Usuario</h5>
                    <br>
                    <div class="row">
                        <div class="input-field col s12 m6 l6">
                        <input id="first_name" type="text" class="validate" v-model="usuario.FName_User" required>
                        <label for="first_name">Nombres</label>
                        </div>
                        <div class="input-field col s12 m6 l6">
                        <input id="last_name" type="text" class="validate" v-model="usuario.LName_User" required>
                        <label for="last_name">Apellidos</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 m6 l6">                
                            <label>Rol</label>            
                            <select id="select_form" class="browser-default" v-model="usuario.Rel_Rol" required>
                                <option v-for="items in Rol" v-bind:value="items._id" :key="items._id">
                                        {{ items.Rol }}
                                </option>
                            </select>
                        </div>
                        <div class="col s12 m6 l6">                
                            <label>Estado</label>            
                            <select id="select_form" class="browser-default" v-model="usuario.Rel_State" required>
                                <option value="true">
                                    Activado
                                </option>
                                <option value="false">
                                    Desactivado
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12 m21 l12">
                            <input id="User" type="text" class="validate" v-model="usuario.UserName" required style="text-align: center;">
                            <label for="User">Nombre de Usuario</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12 m6 l6">
                            <input id="pass1" type="password" class="validate" v-model="usuario.PassUser" required>
                            <label for="pass1">Password</label>
                        </div>
                        <div class="input-field col s12 m6 l6">
                            <input id="pass2" type="password" class="validate" required>
                            <label for="pass2">Repita su Password</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12 m6 l6">
                            <input id="Email" type="email" class="validate" v-model="usuario.Email" required style="text-align: center;">
                            <label for="Email">Email</label>
                        </div>
                        <div class="input-field col s12 m6 l6">
                            <input id="Pri_Telephone" type="text" class="validate" v-model="usuario.Telephone" required style="text-align: center;">
                            <label for="Pri_Telephone">Telefono</label>
                        </div>
                    </div>
                </div>
                <div class="card-action center-align">
                    <button style="color: #666;" class="btn-large waves-effect blue-grey lighten-5" type="submit">Agregar</button>
                    <br>
                    <div class="container">
                        <br>
                        <div class="red-text" v-if="setAddUserAlerts">{{ setAddUserAlerts }}</div>
                    </div>
                </div>
            </div>
        </form>
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
                Rol: [],
                selected: '',
                usuario: {
                    UserName: '',
                    PassUser: '',
                    Email: '',
                    Telephone: '',
                    FName_User: '',
                    LName_User: '',
                    Rel_Rol: '',
                    Rel_State: '',
                },
                cargo: {
                    Nombre: '',
                    Descripcion: ''
                },
            }
        },
        methods: {
        ...mapActions(['registerUser'])
        },
        computed: {
        ...mapState(['setAddUserAlerts', 'token'])
        },
        mounted() {
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('select');
                var instances = M.FormSelect.init(elems);
            });
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.datepicker');
                var instances = M.Datepicker.init(elems, {
                    format: 'yyyy-mm-dd',
                });
            });
            axios.get('http://localhost:3000/api/roles',{
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': this.token
                }
            }).then(res => {
                this.Rol = res.data.data.Roles
            }).catch(e => {
                this.errors.push(e)
            });
        }
    }
</script>