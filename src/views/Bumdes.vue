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
                      <input type="text" id="desa" v-model="data.desa" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Nama Kecamatan</label>
                      <input type="text" id="kecamatan" v-model="data.kecamatan" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Nama Kabupaten</label>
                      <input type="text" id="kabupaten" v-model="data.kabupaten" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Nama Provinsi</label>
                      <input type="text" id="provinsi" v-model="data.provinsi" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Nama Kepala Desa</label>
                      <input type="text" id="kades" v-model="data.kades" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">WhatsApp Kepala Desa</label>
                      <input type="text" id="waKades" v-model="data.waKades" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Nama Sekertaris Desa</label>
                      <input type="text" id="sekdes" v-model="data.sekdes" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">WhatsApp Sekertaris Desa</label>
                      <input type="text" id="waSekdes" v-model="data.waSekdes" class="form-control">
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
                      <input type="text" id="bumdes" v-model="data.bumdes" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Tahun Berdiri</label>
                      <input type="number" id="tahunBerdiri" value="2021" v-model="data.tahunBerdiri" class="form-control" >
                  </div>
                  <div class="mb-3">
                      <label for="" class="form-label">Unit Usaha</label>
                      <div v-for="(unit, index) in unitUsaha" :key="index" class="form-check ml-4">
                        <input class="form-check-input"  v-model="data.unit"  type="checkbox" :value="unit" :id="`unit${index}`">
                        <label class="form-check-label" :for="`unit${index}`">
                            {{ unit }}
                        </label>
                      </div>
                  </div>
                  
                  <div class="mb-3">
                      <label for="" class="form-label">Produk / Layanan Unggulan</label>
                      <textarea type="text" id="" v-model="data.produk" class="form-control" />
                  </div>
                  
                  <div class="mb-3">
                      <label for="" class="form-label">Alamat Kantor BUMDes</label>
                      <textarea type="text" id="" v-model="data.alamat" class="form-control" />
                  </div>
                  
                  <div class="mb-3">
                      <label for="" class="form-label">e-mail BUMDes</label>
                        <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="email" v-model="data.email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                  </div>
                  

                  <div class="mb-3">
                      <label for="" class="form-label">Telephone BUMDes</label>
                      <input type="text" id="" v-model="data.phone" class="form-control" />
                  </div>

                 <!-- data direktur -->
                  <h4 class="pt-4">Data Direktur</h4>

                  <div class="mb-3">
                      <label for="" class="form-label">Nama Direktur</label>
                      <input type="text" id="" v-model="data.direktur" class="form-control" />
                  </div>

                  <div class="mb-3">
                      <label for="" class="form-label">WhastApp Direktur</label>
                      <input type="text" id="" v-model="data.waDirektur" class="form-control" />
                  </div>
                 
                  <div class="mb-3">
                      <label for="" class="form-label">Email Direktur</label>
                        <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="email" v-model="data.emailDirektur" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                  </div>

                 <!-- data sekertaris -->
                  <h4 class="pt-4">Data Sekertaris</h4>

                  <div class="mb-3">
                      <label for="" class="form-label">Nama Sekertaris</label>
                      <input type="text" id="" v-model="data.sekertaris" class="form-control" />
                  </div>

                  <div class="mb-3">
                      <label for="" class="form-label">WhastApp Sekertaris</label>
                      <input type="text" id="" v-model="data.waSekertaris" class="form-control" />
                  </div>
                  
                  <div class="mb-3">
                      <label for="" class="form-label">Email Sekertaris</label>
                        <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="email" v-model="data.emailSekertaris" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                  </div>

                 <!-- data Bendahara -->
                  <h4 class="pt-4">Data Bendahara</h4>

                  <div class="mb-3">
                      <label for="" class="form-label">Nama Bendahara</label>
                      <input type="text" id="" v-model="data.bendahara" class="form-control" />
                  </div>

                  <div class="mb-3">
                      <label for="" class="form-label">WhastApp Bendahara</label>
                      <input type="text" id="" v-model="data.waBendahara" class="form-control" />
                  </div>
                  
                  <div class="mb-3">
                      <label for="" class="form-label">Email Bendahara</label>
                        <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="email" v-model="data.emailBendahara" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                  </div>


              </form>
          </div>
      </div>
      <div class="d-flex justify-content-end m-3 mb-4">
          <router-link to="/peserta">
            <button @click="updateLocalBumdes(data)" class="btn btn-primary">Lanjut <strong> <b>></b> </strong></button>
          </router-link>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            unitUsaha : ['unit 1', 'unit 2', 'unit 3', 'unit 4'],
            data : {
                tahunBerdiri: 2021,
                unit: [],
            }
        }
    },
    methods:{
        ...mapActions(['updateLocalBumdes']),
    },
    created(){
        let localData = this.$store.getters.getBumdesData;
        this.data = localData;
    }
}
</script>

<style>

</style>