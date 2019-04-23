<template>
  <div class="dealsActionBar">
    <b-button @click="addDeal" variant="success btn-sm">Add deal</b-button>
  </div>
</template>

<script>
export default {
  name: "dealsActionBar",
  methods: {
    addDeal() {
      this.$store.commit("ADD_DEAL");
    }
  }
};
</script>
<style scoped>
.dealsActionBar {
  background: #f7f7f7;
  padding: 9px 16px 10px 14px;
  display: flex;
  justify-content: space-between;
}
</style>
