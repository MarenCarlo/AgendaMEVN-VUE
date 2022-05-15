<template>
    <div class="container">
      
      <div class="row">
        <div class="col s12 m2 l2">
        </div>
        <div class="col s12 m8 l8">
          <div class="card grey darken-3" id="card_login">
            <div class="card-image" id="image_login_container">
              <img src="/favicon.png" id="image_login">
              <span class="card-title">Agenda Empresarial</span>
            </div>
            <div class="white-text">
              <form class="card-content" @submit.prevent="login(usuario)">
                <div class="col s12">
                  <div class="row">
                    <div class="input-field col s12" id="input">
                      <input type="text" validate required v-model="usuario.UserName" style="color: #D4D4D4; text-align: center;"/>
                      <label class="grey-text">Usuario</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12" id="input">
                      <input type="password" validate required v-model="usuario.PassUser" style="color: #D4D4D4; text-align: center;"/>
                      <label class="grey-text">Contraseña</label>
                    </div>
                  </div>
                  <br>
                  <button style="color: #666;" class="btn-large waves-effect blue-grey lighten-5" type="submit">Ingresar</button>
                  <br>
                  <div class="container">
                    <br>
                    <div class="red-text accent-4" v-if="login_alerts">
                      {{ login_alerts }}
                    </div>
                  </div>
                </div>
                <br>
              </form>
              <p class="card-content" id="footer_card">.</p>
            </div>
          </div>
        </div>
        <div class="col s12 m2 l2">
        </div>
      </div>
    </div>
    <br>
</template>
<style>
  #card_login:hover{
    box-shadow: 5px 4px 40px 0px!important;
    margin-top: -2rem;
    transition: all 0.5s;
  }
  #card_login{
    transition: all 0.5s;
  }
  #image_login_container{
    height: 15%;
  }
  #image_login{
    object-fit: cover;    
    height: 20rem;
  }
  #image_login:hover{
    filter: blur(2px);
    transition: all 0.5s;
  }
  #image_login{
    transition: all 0.5s;
  }
</style>
<script>
  import {mapActions} from 'vuex';
  import {mapState} from "vuex";

  export default {
    data() {
      return {
        usuario: {
          //211216MC pass de todos los users.
          UserName: '',
          PassUser: ''
        }
      }
    },
    methods: {
      ...mapActions(['login'])
    },
    computed: {
      ...mapState(['login_alerts'])
    }
  }
</script>