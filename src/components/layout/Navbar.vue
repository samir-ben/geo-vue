<template>
  <nav>
    <div class="nav-wrapper">
      <div class="container">
        <router-link class="brand-logo" :to="{ name: 'GMap' }">GeoVue</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li v-if="!user"><router-link :to="{ name: 'Signup' }">Inscription</router-link></li>
          <li v-if="!user"><router-link :to="{ name: 'Login' }">Connexion</router-link></li>
          <li v-if="user"><a>{{ user.email }}</a></li>
          <li v-if="user"><a @click="logout">Se déconnecter</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  name: "Navbar",
  data() {
    return {
      user: null
    };
  },
  created() {
    // let user = firebase.auth().currentUser
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.user = user
      } else {
        this.user = null
      }
    })
  },
  methods: {
      logout(){
          firebase.auth().signOut().then(() =>{
              this.$router.push({name: 'Login'});
          })
      }
  },
};
</script>


<style scoped>
</style>
