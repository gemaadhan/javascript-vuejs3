<template>
  <h1>HomeComp Component</h1>
  <label for="tahun">Tahun </label>
  <input type="text" name="tahun" v-model="tahun" /> <br />
  <label for="kode_kelurahan">kode_kelurahan </label>
  <input type="text" name="kode_kelurahan" v-model="kode_kelurahan" /><br />
  <label for="unit">unit </label>
  <input type="text" name="unit" v-model="unit" /><br />
  <label for="anggaran">anggaran </label>
  <input type="text" name="anggaran" v-model="anggaran" /><br />
  <button v-on:click="addUser()">Add New User</button>
</template>
<script>
import axios from "axios";
export default {
  name: "HomeComp",
  data() {
    return {
      tahun: "",
      kode_kelurahan: "",
      unit: "",
      anggaran: "",
    };
  },
  methods: {
    async addUser() {
      // axios.defaults.baseURL = "tes.com";
      let result = await axios.post("http://127.0.0.1:3000/penanganan-rtlh", {
        tahun: this.tahun,
        kode_kelurahan: this.kode_kelurahan,
        sumber_dana: {
          apbn_bsps: {
            rencana: {
              pk: {
                unit: this.unit,
                anggaran: this.anggaran,
              },
            },
          },
        },
      });
      console.warn(result);
    },
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>