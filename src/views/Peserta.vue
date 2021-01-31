<template>
  <div class="container pt-4">
      <div class="card">
          <div class="card-header">
              <h4>Daftar Peserta</h4>
          </div>
          <div class="card-body">
              <div v-for="(peserta, index) in daftarPeserta" :key="index" class="card mt-4">
                  <div class="card-header d-flex justify-content-between">
                        <p>
                            Peserta {{ index + 1}}
                        </p>
                        <button v-if="daftarPeserta.length > 1" :key="index" @click="hapusPeserta(index)" class="btn btn-danger">Hapus</button>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label for="" class="form-label">Nama</label>
                      <input type="text" v-model="peserta.nama" :key="index" name="" id="" class="form-control" />
                  </div>

                  <div class="mb-3">
                      <label for="" class="form-label">Email</label>
                      <input type="text" v-model="peserta.email" :key="index" name="" id="" class="form-control" />
                  </div>
                  </div>
              </div>
              <div class="d-flex justify-content-end mt-4">
                  <router-link to="/bumdes">
                    <button class="btn btn-secondary"> <strong><b> ^ </b></strong>Sebelumnya</button>
                  </router-link>
                  <button @click="insertPeserta()" class="btn btn-success  ml-4"><b>+</b> Tambah Peserta</button>
                  <router-link to="/kuisioner">
                    <button @click="updateLocalPeserta(daftarPeserta)" class="btn btn-primary ml-4">Lanjut <strong><b> ></b></strong></button>
                  </router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            daftarPeserta : [
                {
                    nama: "",
                    email: ""
                }
            ],
        }
    },
    methods:{
        ...mapActions(['updateLocalPeserta']),
        insertPeserta(){
            let newPeserta = {
                nama : "",
                email : ""
            }

            this.daftarPeserta.push(newPeserta);
        },
        hapusPeserta(index){
            this.daftarPeserta.splice(index, 1);
        },
    },
    created(){
        let localData = this.$store.getters.getPesertaData;
        this.daftarPeserta = localData;
    }
}
</script>

<style>

</style>