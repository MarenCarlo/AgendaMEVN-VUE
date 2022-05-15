<template>
    <br>
    <div class="container">
        <form @submit.prevent="addEnterprise(Empresa)">
            <div class="card blue-grey darken-2 z-depth-3">
                <div class="card-content">
                    <h5 style="color: #FFF;">Agregar Empresa Nueva</h5>
                    <br>
                    <div class="row">
                        <div class="input-field col s12 m12 l12">
                        <input id="first_name" type="text" class="validate" v-model="Empresa.Nombre">
                        <label for="first_name">Nombre de Empresa</label>
                        </div>
                        
                    </div>
                    <div class="row">              
                        <div class="input-field col s12 m12 l12">
                            <input id="last_name" type="text" class="validate" v-model="Empresa.Direccion">
                            <label for="last_name">Direccion</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea white-text" maxlength="1024" rows="8" v-model="Empresa.Descripcion"></textarea>
                            <label for="textarea1">Descripcion</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12 m6 l6">
                            <input id="Pri_Telephone" type="text" class="validate" v-model="Empresa.Telephone">
                            <label for="Pri_Telephone">Telefono Principal</label>
                        </div>
                        <div class="input-field col s12 m6 l6">
                            <input id="Email" type="email" class="validate" v-model="Empresa.Email">
                            <label for="Email">Email</label>
                        </div>
                    </div>
                </div>
                <div class="card-action center-align">
                    <button style="color: #666;" class="btn-large waves-effect blue-grey lighten-5" type="submit">Agregar</button>
                    <br>
                    <div class="container">
                        <br>
                        <div class="red-text" v-if="setAddEnterpriseAlerts">{{ setAddEnterpriseAlerts }}</div>
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

    export default {
        data() {
            return {
                Empresa: {
                    Nombre: '',
                    Email: '',
                    Telephone: '',
                    Direccion: '',
                    Descripcion: ''
                },
            }
        },
        methods: {
        ...mapActions(['addEnterprise'])
        },
        computed: {
        ...mapState(['setAddEnterpriseAlerts', 'token'])
        },
    }
</script>