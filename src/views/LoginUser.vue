<template>
  <div class="login">
    <h3>Sign In with Google</h3>
    <p>
      <button @click="socialLogin" class="social-button">
        <img alt="Google Logo" src="../assets/google-logo.png">
      </button>
    </p>
    <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import { mapActions } from 'vuex';

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      ...mapActions(['setUser']),
      login() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.replace('home');
        }).catch((err) => {
          alert('Oops. ' + err.message)
        });
      },
      socialLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        
        provider.addScope('profile');
        provider.addScope('email');

        firebase.auth().signInWithPopup(provider).then((result) => {
            this.$router.replace('bumdes');
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var detail = result.user;

            var user = {
                token,
                detail
            }

            this.setUser(user);
        
        }).catch((err) => {
          alert('Oops. ' + err.message)
          console.log(err)
        });
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */

  .login {
    margin-top: 40px;
    text-align: center;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
  .social-button {
    width: 75px;
    background: white;
    padding: 10px;
    border-radius: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    outline: 0;
    border: 0;
  }
  .social-button:active {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  }
  .social-button img {
    width: 100%;
  }
</style>