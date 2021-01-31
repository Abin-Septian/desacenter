<template>
    <div class="container">
        <div class="card mt-4">
            <div class="card-header">
                <h4>Kuisioner</h4>
            </div>
            <div class="card-body" v-for="(data, idx) in kuisioner" :key="idx">
                <h6>
                    <u>
                        <strong>
                            {{ data.name }}
                        </strong>
                    </u>
                </h6>
                <div v-for="(item, index) in data.soal" :key="index" class="card mb-2 p-2">
                    <p>{{`${index + 1} ${item}`}}</p>
                    <div class="row ml-4" style="max-width:250px;">
                        <div class="form-check form-check-inline col">
                            <input class="form-check-input" type="radio" :name="data.name+index" @change="updateNilai(idx, index, 'ya')" :key="index" :id="data.name+index" :value="ya">
                            <label class="form-check-label" :for="data.name+index">Ya</label>
                        </div>
                        <div class="form-check form-check-inline col">
                            <input class="form-check-input" type="radio" :name="data.name+index" @change="updateNilai(idx, index, 'tidak')" :key="index" :id="data.name+index" :value="tidak">
                            <label class="form-check-label" :for="data.name+index">Tidak</label>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-end mt-4">
            <router-link to="/peserta">
            <button class="btn btn-secondary"> <strong><b> ^ </b></strong>Sebelumnya</button>
            </router-link>
            <router-link to="/logout">
            <button @click="postData()" class="btn btn-primary ml-4">Simpan <strong><b> ></b></strong></button>
            </router-link>
        </div>
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            kuisioner : [ 
                {
                    name : "Kelembagaan",
                    soal : [ 
                        'Apakah kepala desa anda seorang yang visioner?',
                        'Apakah BPD dan Pemerintah Desa kompak?','Apakah pernah ada demonstrasi warga di 2 tahun terakhir?',
                        'Apakah MUSDES berjalan dengan partisipatif?',
                        'Apakah pengelolaan keuangan desa anda transparan?',
                        'Apakah pengurus Bumdes dipilih secara terbuka?',
                        'Apakah sudah ada Profil Desa ?',
                        'Apakah RPJMDes sudah tersusun?',
                        'Apakah APBDEs 2021 sudah disahkan?',
                        'Apakah informasi APBDes bisa diakses warga?',
                        'Apakah anda paham yang dimaksud dengan SDGs Desa' ],
                    jawaban : ["tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak" ]
                },
                {
                    name : "Bumdes",
                    soal : [ 
                        'Apakah Bumdes di desa anda sudah terbentuk?',
                        'Apakah di tahun 2021 ada penyertaan untuk Bumdes',
                        'Apakah Unit Usaha di Bumdes anda Sudah jalan?',
                        'Apakah Unit Usaha di Bumdes anda Sudah mendapat Keuntungan?',
                        'Apakah Bumdes sudah dapat menyumbang dana PADes?',
                        'Apakah Jumlah karyawan Bumdes sudah lebih dari 50 orang? ',
                        'Apakah Omzet Bumdes sudah lebih dari 300 Juta? ',
                        'Apakah Omzet Bumdes sudah lebih dari 1 milyar? ',
                        'Apakah Omzet Bumdes sudah lebih dari 5 Milyar?',
                        'Apakah AD/ART Bumdes sudah sesuai aturan?',
                        'Apakah Bumdes menyusun Rencana Usaha?',
                        'Apakah Bumdes memiliki SOP?',
                        'Apakah Bumdes memiliki Laporan Keuangan?',
                        'Apakah LPJ Bumdes dibahas di Musdes?',
                        'Apakah ada penyertaan modal dari masyarakat?'],
                    jawaban : ["tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak" ]
                },
                {
                    name : "Inovasi",
                    soal : [ 
                        'Apakah ada produk asli desa anda yang dipasarkan di luar desa?',
                        'Apakah ada produk asli desa anda yang dipasarkan di luar pulau?',
                        'Apakah ada produk asli desa anda yang dipasarkan di luar negeri?',
                        'Apakah desa  anda punya prestasi tingkat kabupaten?',
                        'Apakah desa anda punya prestasi tingkat provinsi?',
                        'Apakah desa anda punya prestasi tingkat nasional?',
                        'Apakah desa anda pernah diliput/masuk TV?',
                        'Apakah desa anda pernah masuk berita media nasional?',
                        'Apakah Desa sudah ada kerjasama dengan Perguruan Tinggi',
                        'Apakah Desa sudah ada kerjasama dengan Off Taker/Industri',
                        'Apakah Desa pernah juara Teknologi Tepat Guna' ],
                    jawaban : ["tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak" ]
                },
                {
                    name : "Digitalisasi",
                    soal : [ 
                        'Apakah internet di desa anda lancar?',
                        'Apakah desa anda sudah memiliki website?',
                        'Apakah layanan warga bisa dilakukan secara online?',
                        'Apakah Bumdes anda memiliki website?',
                        'Apakah Bumdes anda memiliki page Facebook?',
                        'Apakah Bumdes anda memiliki akun instagram? ',
                        'Apakah follower akun instagram anda diatas 1000 ?', 
                        'Apakah Bumdes anda sudah menggunakan marketplace?',
                        'Apakah jumlah transaksi Bumdes anda secara online diatas 100 Juta?' 
                    ],
                    jawaban : ["tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak", "tidak"]
                },
            ]
        }
    },
    methods: {
        updateNilai(idx, index, value){
            this.kuisioner[idx].jawaban[index] = value;
        },
        postData(){
            var user = firebase.auth().currentUser;

            let allData = { 
                bumdes: this.$store.getters.getBumdesData,
                peserta: this.$store.getters.getPesertaData,
                kuisioner: this.kuisioner,
            };

            db.collection("data").doc(user.email).set(allData, { merge: true })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        }
    }
}
</script>

<style>

</style>