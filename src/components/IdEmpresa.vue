<template>
    <div class="container">
        <div class="col s12">
            <div v-for="items in info" :key="items._id">
                <div class="col l4 m6 s12">
                <div class="card blue-grey darken-2 z-depth-3">
                    <div class="card-content white-text">
                    <h6 class="card-title">{{ items.Nombre }}</h6>
                    <br>
                    <div class="divider"></div>
                    <p>{{ items.Direccion}}</p>
                    <br>
                    <div class="container">
                        <p style="text-align: justify;">{{ items.Descripcion }}</p>
                    </div>
                    <br>
                    <div class="divider"></div>
                    <br>
                        <div class="container">
                            <h6 class="titles1">Email</h6>
                            <p class="titles2">{{ items.Email }}</p>
                            <br>
                            <h6 class="titles1">Telefono Primario</h6>
                            <p class="titles2">{{ items.Telephone }}</p>
                            <br>
                            <div class="row">
                                <div class="col s1 m1 l4"></div>
                                <div class="col s5 m5 l2">
                                    <a class="right-align btn-floating btn-large light-green darken-1 pulse"  @click="whatsapp_Phone()" onmouseenter="M.toast({html: 'Enviar mensaje a Whatsapp', displayLength: 1000, classes: 'tostada'})">
                                        <svg id="whatsapp-btn" fill="white" enable-background="new 0 0 32 32" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m17.507 14.307-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/><path d="m20.52 3.449c-7.689-7.433-20.414-2.042-20.419 8.444 0 2.096.549 4.14 1.595 5.945l-1.696 6.162 6.335-1.652c7.905 4.27 17.661-1.4 17.665-10.449 0-3.176-1.24-6.165-3.495-8.411zm1.482 8.417c-.006 7.633-8.385 12.4-15.012 8.504l-.36-.214-3.75.975 1.005-3.645-.239-.375c-4.124-6.565.614-15.145 8.426-15.145 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99z"/></svg>
                                    </a>
                                </div>
                                <div class="col s5 m5 l2">
                                    <a class="right-align btn-floating btn-large cyan darken-1 pulse" @click="llamada_Phone()" onmouseenter="M.toast({html: 'llamar a contacto', displayLength: 1000, classes: 'tostada'})">
                                        <svg id="whatsapp-btn" xmlns="http://www.w3.org/2000/svg" fill="white" width="40" height="40" viewBox="0 0 48 48"><path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49C35.1 30.6 37.51 31 40 31c1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2C21.22 42 6 26.78 6 8c0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z"/></svg>
                                    </a>
                                </div>
                                <div class="col s1 m1 l4"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card-action center-align">
                        <div class="row">
                            <div class="col s6">
                                <router-link  class="right-align btn-floating btn-large yellow darken-3 pulse" :to="{ name: 'Editar_Empresa', params: {id: items._id}}" onmouseenter="M.toast({html: 'Editar Contacto de Empresa', displayLength: 1000, classes: 'tostada'})">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="whatsapp-btn" fill="white" enable-background="new 0 0 32 32" height="40" viewBox="0 0 24 24" width="40"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                                </router-link >
                            </div>
                            <div class="col s6">
                                <a class="right-align btn-floating btn-large red darken-1 pulse modal-trigger" href="#modal1" onmouseenter="M.toast({html: 'Eliminar Contacto', displayLength: 1000, classes: 'tostada'})">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="whatsapp-btn" fill="white" enable-background="new 0 0 32 32" height="40" viewBox="0 0 24 24" width="40"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div id="modal1" class="modal">
                <form @submit.prevent="delEmpresa(del_params)">
                    <div class="modal-content">
                        <h4>Eliminar</h4>
                        <p>Enserio desea eliminar este contacto??</p>
                        <p>Para eliminar este contacto escriba a continuacion su contraseña</p>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="pass" type="password" class="validate" v-model="del_params.PassUser" required>
                                <label for="pass">Contraseña</label>
                            </div>
                        </div>
                        <div class="red-text" v-if="setDeleteEmpresaAlerts">{{ setDeleteEmpresaAlerts }}</div>
                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col s12 m2">
                                <button class="modal-close waves-effect waves-red btn-flat" @click="clear_alerts()">Cerrar</button>
                            </div>
                            <div class="col s12 m1">
                                <button type="submit" href="#!" class="waves-effect waves-green btn-flat">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style>
    #whatsapp-btn{
        margin-top: 0.5rem;
    }
    #whatsapp-btn{
        margin-top: 0.5rem;
    }
    #modal1{
        overflow-x: hidden;
    }
</style>
<script>
    import {mapState} from "vuex";
    import {mapActions} from "vuex";
    import axios from "axios";
    
    export default {
        computed: {
            ...mapState(['token', 'setDeleteEmpresaAlerts'])
        },
        data() {
            return {
                info: [],
                identifier: '',
                Phone: '',
                del_params: {
                    _id: '',
                    PassUser: ''
                }
            }
        },
        methods: {
            ...mapActions(['delEmpresa', 'clear_alerts']),
            whatsapp_Phone(){
                window.open('https://api.whatsapp.com/send?phone='+this.Phone, '_blank');
            },
            llamada_Phone(){
                window.location.assign('tel:'+this.Phone);
            },
        },
        created(){
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.modal');
                var instances = M.Modal.init(elems);
            });
        },
        mounted(){
            const identifier = this.$route.params.id;
            axios.get('http://localhost:3000/api/empresas/'+identifier,{
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': this.token
                }
            }).then(res => {
                this.del_params._id = res.data.data.Empresas[0]._id
                this.info           = res.data.data.Empresas
                this.Phone          = res.data.data.Empresas[0].Telephone
            }).catch(e => {
                this.errors.push(e)
            });
        },
    }
</script>