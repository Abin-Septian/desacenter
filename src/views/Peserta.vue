<template>
  <div class="container pt-4">
      <div class="card">
          <div class="card-header">
              <h4>Daftar Peserta</h4>
          </div>
          <div class="card-body">
              <div v-for="(peserta, index) in jumlahPeserta" :key="index" class="card mt-4">
                  <div class="card-header">
                      Peserta {{ index + 1}}
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label for="" class="form-label">Nama</label>
                      <input type="text" name="" id="" class="form-control" />
                  </div>

                  <div class="mb-3">
                      <label for="" class="form-label">Email</label>
                      <input type="text" name="" id="" class="form-control" />
                  </div>
                  </div>
              </div>
              <div class="d-flex justify-content-end mt-4">
                  <router-link to="/bumdes">
                    <button class="btn btn-secondary"> <strong><b> ^ </b></strong>Sebelumnya</button>
                  </router-link>
                  <button @click="jumlahPeserta++" class="btn btn-success  ml-4"><b>+</b> Tambah Peserta</button>
                  <router-link to="/kuisioner">
                    <button class="btn btn-primary ml-4">Lanjut <strong><b> ></b></strong></button>
                  </router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jumlahPeserta : 1,
        }
    },
}
</script>

<style>

</style>