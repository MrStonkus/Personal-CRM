<template>
  <div>
    <div>
      <h1>This is settings page</h1>
    </div>
    <div>
      <b-form-checkbox
        switch
        v-model="isSortDealsAuto"
        name="isSortDealsAuto-button"
        >Sort deals in Home page automaticaly
        <!-- <b>(Checked: {{ isSortDealsAuto }})</b> -->
      </b-form-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "settings",
  computed: {
    //GET and SET dynamical and global isSortDealsAuto checkbox status
    isSortDealsAuto: {
      set(val) {
        this.$store.commit("updateisSortDealsAuto", val);
      },
      get() {
        return this.$store.state.isSortDealsAuto;
      }
    }
  },
  methods: {}
};
</script>
