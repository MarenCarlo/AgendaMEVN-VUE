import { createStore } from 'vuex'
import router from '../router';

export default createStore({
  state: {
    token: null,
    login_alerts: null,
    rol: null,
    user_name: null,
    setAddContactAlerts: null,
    setAddEnterpriseAlerts: null,
    setAddCargoAlerts: null,
    editContactAlerts: null,
    setDeleteContactAlerts: null,
    setDeleteEmpresaAlerts: null,
    setAddUserAlerts: null
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setLoginAlerts(state,payload) {
      state.login_alerts = payload
    },
    userRol(state,payload) {
      state.rol = payload
    },
    userName(state,payload) {
      state.user_name = payload
    },
    setAddContactAlerts(state,payload) {
      state.setAddContactAlerts = payload
    },
    setAddEnterpriseAlerts(state,payload) {
      state.setAddEnterpriseAlerts = payload
    },
    setAddCargoAlerts(state,payload) {
      state.setAddCargoAlerts = payload
    },
    editContactAlerts(state,payload) {
      state.editContactAlerts = payload
    },
    setDeleteContactAlerts(state,payload) {
      state.setDeleteContactAlerts = payload
    },
    setDeleteEmpresaAlerts(state,payload) {
      state.setDeleteEmpresaAlerts = payload
    },
    setAddUserAlerts(state,payload) {
      state.setAddUserAlerts = payload
    }
  },
  actions: {
    
    /**
     *  Funcion de Login, lleva el async por que se conecta a la Base de Datos.
     */
    async login({commit}, usuario){
      try{
        /**
         * Se realiza un try/catch para realizar la funcion del login adentro del try
         * dentro de la funcion fetch se coloca la url de nuestra api en donde operamos
         * los datos que enviamos y junto a la url, las configuraciones necesarias para 
         * que funcione ej: method, headers y body, esta ultima utiliza la funcion 
         * JSON.stringify(obejeto obtenido), que nos permite convertir el objeto a objeto JSON.
         * Basicamente hacemos lo mismo que en Insomnia/Postman.
         */
        const res = await fetch('http://localhost:3000/api/usuario/ingresar',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario)
        });
        /**
         * constante donde guardamos el JSON 
         */
        const resTokie = await res.json();
        if(resTokie.data){
          /**
           * 
           * commit(), nos sirve para llamar a una mutation().
           */
          commit('setToken', resTokie.data.token);
          /**
           * Nos sirve para que nuestro estado quede guardado
           * asi aunque nuestra pagina se refresque no perderemos
           * el Token almacenado NOTA: en este punto solo se almacena
           * en el Local Storage, si se refresca seguira en este
           * pero en el State el token se actualizara nuevamente a "null".
           */
          localStorage.setItem('Tokio', resTokie.data.token);
          commit('setLoginAlerts', null);
          router.push('/menu');
        } else {
          commit('setLoginAlerts', resTokie.message);
          console.log(resTokie.message)
          router.push('/');
        }
      } catch(e) {
        console.log(this.state.login_alerts);
      }
    },
/**
     *  Funcion de Agregar Contacto Nuevo
     */
    async registerUser({commit}, usuario){
      try{
        const res = await fetch('http://localhost:3000/api/registrar',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.state.token
          },
          body: JSON.stringify(usuario)
        });
        const resJSON = await res.json();
        if(resJSON.data){
          commit('setAddUserAlerts', null);
          router.push('/menu');
        } else {
          commit('setAddUserAlerts', resJSON.message);
        }
      } catch(e) {
        console.log(this.state.setAddUserAlerts);
      }
    },

    /**
     *  Funcion de Agregar Contacto Nuevo
     */
    async addContact({commit}, contacto){
      try{
        const res = await fetch('http://localhost:3000/api/contactos/agregar_contacto',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.state.token
          },
          body: JSON.stringify(contacto)
        });
        const resJSON = await res.json();
        if(resJSON.data){
          commit('setAddContactAlerts', null);
          router.push('/menu');
        } else {
          commit('setAddContactAlerts', resJSON.message);
        }
      } catch(e) {
        console.log(this.state.setAddContactAlerts);
      }
    },
    /**
     *  Funcion de Editar Contacto
     */
    async editContact({commit}, items){
      try{
        const identifier = items._id;
        const res = await fetch('http://localhost:3000/api/contactos/editar_contacto/'+identifier,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.state.token
          },
          body: JSON.stringify(items),
        });
        const resJSON = await res.json();
        if(resJSON.data){
          commit('editContactAlerts', null);
          router.push('/contacto/'+identifier);
        } else {
          commit('editContactAlerts', resJSON.message);
        }
      } catch(e) {
        console.log(this.state.editContactAlerts);
      }
    },
    /**
     * Funcion de eliminar contacto
     */
    async delContacto({commit}, del_params){
      try{
        const identifier = del_params._id;
        const res = await fetch('http://localhost:3000/api/contactos/eliminar_contacto/'+identifier,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.state.token
          },
          body: JSON.stringify(del_params)
        });
        const resJSON = await res.json();
        if(resJSON.data){
          commit('setDeleteContactAlerts', null);
          router.push('/menu');
        } else {
          commit('setDeleteContactAlerts', resJSON.message);
        }
      } catch(e) {
        console.log(this.state.setDeleteContactAlerts);
      }
    },
    
    /**
     *  Funcion de Agregar Empresa Nueva
     */
    async addEnterprise({commit}, Empresa){
      try{
        const res = await fetch('http://localhost:3000/api/empresas/agregar_empresa',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.state.token
          },
          body: JSON.stringify(Empresa)
        });
        const resJSON = await res.json();
        if(resJSON.data){
          commit('setAddEnterpriseAlerts', null);
          router.push('/empresas');
        } else {
          commit('setAddEnterpriseAlerts', resJSON.message);
        }
      } catch(e) {
        console.log(this.state.setAddEnterpriseAlerts);
      }
    },
    /**
     *  Funcion de Editar Empresa
     */
    async editEnterprise({commit}, Empresa){
      try{
        const identifier = Empresa._id;
        const res = await fetch('http://localhost:3000/api/empresas/editar_empresa/'+identifier,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.state.token
          },
          body: JSON.stringify(Empresa),
        });
        const resJSON = await res.json();
        if(resJSON.data){
          commit('editContactAlerts', null);
          router.push('/empresa/'+identifier);
        } else {
          commit('editContactAlerts', resJSON.message);
        }
      } catch(e) {
        console.log(this.state.editContactAlerts);
      }
    },
    /**
     * Funcion de eliminar empresa
     */
    async delEmpresa({commit}, del_params){
      try{
        const identifier = del_params._id;
        const res = await fetch('http://localhost:3000/api/empresas/eliminar_contacto/'+identifier,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.state.token
          },
          body: JSON.stringify(del_params)
        });
        const resJSON = await res.json();
        if(resJSON.data){
          commit('setDeleteEmpresaAlerts', null);
          router.push('/menu');
        } else {
          commit('setDeleteEmpresaAlerts', resJSON.message);
        }
      } catch(e) {
        console.log(this.state.setDeleteEmpresaAlerts);
      }
    },

    /**
     *  Funcion de Agregar un Nuevo Cargo
     */
    async addCargo({commit}, cargo){
      try{
        const res = await fetch('http://localhost:3000/api/cargos/agregar_cargo',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.state.token
          },
          body: JSON.stringify(cargo)
        });
        /**
         * constante donde guardamos el JSON 
         */
        const resJSON = await res.json();
        if(resJSON.data){
          commit('setAddCargoAlerts', null);
          router.push('/menu');
        } else {
          commit('setAddCargoAlerts', resJSON.message);
        }
      } catch(e) {
        console.log(this.state.setAddEnterpriseAlerts);
      }
    },

    /**
     * Funcion de Datos Protegidos del Menu Principal
     */
    async datosProtegidosMenu({ commit }) {
      try{
        const res = await fetch('http://localhost:3000/api/menu',{
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.state.token
          },
        });
        const resDB = await res.json();
        if(resDB.data){
          commit('userRol', resDB.data.user.rol);
          commit('userName', resDB.data.user.user_name);
        } else {
          console.log(resDB.message);
        }
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Funcion que verifica si el token existe.
     */
    isTokioOnLocalStorage({ commit }){
      /**
       * Esta pequeña funcion se encarga de revisar si el Token guardado como
       * Tokio, esta en el LocalStorage y si esta, guardarlo en su respectivo State,
       * esto es por si en dado caso se nos refresca la aplicacion y nuevamente el estado
       * se ha seteado en "null".
       */
      if(localStorage.getItem('Tokio')){
        commit('setToken', localStorage.getItem('Tokio'));
        
      } else {
        commit('setToken', null);
      }
    },

    /**
     * Funcion que nos sirve para cerrar nuestra sesion
     */
    cerrarSesion({ commit }){
      localStorage.removeItem('Tokio');
      commit('setToken', null);
      router.push('/');
    },

    clear_alerts({ commit }){
      commit('setDeleteEmpresaAlerts', null);
    }
  },
  modules: {
    
  }
})
