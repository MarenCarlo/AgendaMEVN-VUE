<template>
    <br>
    <div class="container">
        <form @submit.prevent="editEnterprise(Empresa)">
            <div class="card blue-grey darken-2 z-depth-3">
                <div class="card-content">
                    <h5 style="color: #FFF;">Editar Datos de Empresa</h5>
                    <br>
                    <div class="row">
                        <div class="input-field col s12 m12 l12">
                        <input id="first_name" type="text" class="validate" v-model="Empresa.Nombre">
                        <label for="first_name" class="active">Nombre de Empresa</label>
                        </div>
                        
                    </div>
                    <div class="row">              
                        <div class="input-field col s12 m12 l12">
                            <input id="last_name" type="text" class="validate" v-model="Empresa.Direccion">
                            <label for="last_name" class="active">Direccion</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea white-text" maxlength="1024" rows="8" v-model="Empresa.Descripcion"></textarea>
                            <label for="textarea1" class="active">Descripcion</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12 m6 l6">
                            <input id="Pri_Telephone" type="text" class="validate" v-model="Empresa.Telephone">
                            <label for="Pri_Telephone" class="active">Telefono Principal</label>
                        </div>
                        <div class="input-field col s12 m6 l6">
                            <input id="Email" type="email" class="validate" v-model="Empresa.Email">
                            <label for="Email" class="active">Email</label>
                        </div>
                    </div>
                </div>
                <div class="card-action center-align">
                    <button style="color: #666;" class="btn-large waves-effect blue-grey lighten-5" type="submit">Agregar</button>
                    <br>
                    <div class="container">
                        <br>
                        <div class="red-text" v-if="setEditEnterpriseAlerts">{{ setEditEnterpriseAlerts }}</div>
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
                Empresa: {
                    _id: '',
                    Nombre: '',
                    Email: '',
                    Telephone: '',
                    Direccion: '',
                    Descripcion: ''
                },
            }
        },
        methods: {
        ...mapActions(['editEnterprise'])
        },
        computed: {
        ...mapState(['setEditEnterpriseAlerts', 'token'])
        },
        mounted(){
            const identifier = this.$route.params.id;
            axios.get('http://localhost:3000/api/empresas/'+identifier,{
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': this.token
                }
            }).then(res => {
                this.Empresa._id         = res.data.data.Empresas[0]._id
                this.Empresa.Nombre      = res.data.data.Empresas[0].Nombre
                this.Empresa.Email       = res.data.data.Empresas[0].Email
                this.Empresa.Telephone   = res.data.data.Empresas[0].Telephone
                this.Empresa.Direccion   = res.data.data.Empresas[0].Direccion
                this.Empresa.Descripcion = res.data.data.Empresas[0].Descripcion
            }).catch(e => {
                this.errors.push(e)
            });
        },
    }
</script>