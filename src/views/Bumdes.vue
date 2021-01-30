<template>
  <div class="container">
      <div class="card my-4">
          <div class="card-header">
              <h4>Informasi Desa</h4>
          </div>
          <div class="card-body">
              <form action="">
                  <div class="mb-3">
                      <label for="desa" class="form-label">Nama Desa</label>
                      <input type="text" name="" id="desa" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Nama Kecamatan</label>
                      <input type="text" name="" id="" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Nama Kabupaten</label>
                      <input type="text" name="" id="" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Nama Provinsi</label>
                      <input type="text" name="" id="" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Nama Kepala Desa</label>
                      <input type="text" name="" id="" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">WhatsApp Kepala Desa</label>
                      <input type="text" name="" id="" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Nama Sekertaris Desa</label>
                      <input type="text" name="" id="" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">WhatsApp Sekertaris Desa</label>
                      <input type="text" name="" id="" class="form-control">
                  </div>
              </form>
          </div>
      </div>
      <hr>
      <div class="card my-4">
          <div class="card-header">
              <h4>Informasi BUMDes</h4>
          </div>
          <div class="card-body">
              <form action="">
                  <div class="mb-3">
                      <label for="" class="form-label">Nama Bumdes</label>
                      <input type="text" name="" id="" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Tahun Berdiri</label>
                      <input type="number" name="" id="" class="form-control" value="2021">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Unit Usaha</label>
                      <div v-for="(unit, index) in unitUsaha" :key="index" class="form-check ml-4">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            {{ unit }}
                        </label>
                      </div>
                  </div>
                  
                  <div class="mb-3">
                      <label for="" class="form-label">Produk / Layanan Unggulan</label>
                      <textarea type="text" name="" id="" class="form-control" />
                  </div>
                  
                  <div class="mb-3">
                      <label for="" class="form-label">Alamat Kantor BUMDes</label>
                      <textarea type="text" name="" id="" class="form-control" />
                  </div>
                  
                  <div class="mb-3">
                      <label for="" class="form-label">e-mail BUMDes</label>
                        <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                  </div>
                  

                  <div class="mb-3">
                      <label for="" class="form-label">Telephone BUMDes</label>
                      <input type="text" name="" id="" class="form-control" />
                  </div>

                  <div class="mb-3">
                      <label for="" class="form-label">Nama Direktur</label>
                      <input type="text" name="" id="" class="form-control" />
                  </div>

                 <!-- data direktur -->
                  <h4 class="pt-4">Data Direktur</h4>

                  <div class="mb-3">
                      <label for="" class="form-label">Nama Direktur</label>
                      <input type="text" name="" id="" class="form-control" />
                  </div>

                  <div class="mb-3">
                      <label for="" class="form-label">WhastApp Direktur</label>
                      <input type="text" name="" id="" class="form-control" />
                  </div>
                 
                  <div class="mb-3">
                      <label for="" class="form-label">Email Direktur</label>
                        <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                  </div>

                 <!-- data sekertaris -->
                  <h4 class="pt-4">Data Sekertaris</h4>

                  <div class="mb-3">
                      <label for="" class="form-label">Nama Sekertaris</label>
                      <input type="text" name="" id="" class="form-control" />
                  </div>

                  <div class="mb-3">
                      <label for="" class="form-label">WhastApp Sekertaris</label>
                      <input type="text" name="" id="" class="form-control" />
                  </div>
                  
                  <div class="mb-3">
                      <label for="" class="form-label">Email Sekertaris</label>
                        <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                  </div>

                 <!-- data Bendahara -->
                  <h4 class="pt-4">Data Bendahara</h4>

                  <div class="mb-3">
                      <label for="" class="form-label">Nama Bendahara</label>
                      <input type="text" name="" id="" class="form-control" />
                  </div>

                  <div class="mb-3">
                      <label for="" class="form-label">WhastApp Bendahara</label>
                      <input type="text" name="" id="" class="form-control" />
                  </div>
                  
                  <div class="mb-3">
                      <label for="" class="form-label">Email Bendahara</label>
                        <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                  </div>


              </form>
          </div>
      </div>
      <div class="d-flex justify-content-end m-3 mb-4">
          <router-link to="/peserta">
            <button class="btn btn-primary">Lanjut <strong> <b>></b> </strong></button>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            unitUsaha : ['unit 1', 'unit 2', 'unit 3', 'unit 4']
        }
    },
}
</script>

<style>

</style>