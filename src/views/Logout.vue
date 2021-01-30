<template>
    <div>
        <button @clik="signOut()" class="btn btn-danger">SignOut</button>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    methods: {
        signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "login"
          });
        });
    }
    },
}
</script>

<style>

</style>