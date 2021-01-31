<template>
    <div>
        <button @click="signOut()" class="btn btn-danger">SignOut</button>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    methods:  {
        signOut() {
            firebase.auth().signOut().then((result) => {
                this.$router.replace('login');
                console.log(result);
            }).catch((err) => {
          console.log('Oops. ' + err.message)
        });
        }
    },
}
</script>

<style>

</style>