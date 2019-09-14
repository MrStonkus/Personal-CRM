<template>
  <div>
    <!-- Add deal button -->
    <b-button v-b-modal.modalAddDeal variant="success">Add deal</b-button>
    <b-modal id="modalAddDeal" title="Add new deal">
      <p class="my-4">Add new deal!</p>

      <!-- Add default deal button-->
      <b-button @click="addDeal" variant="success">Add default deal</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddDealModalButton",
  methods: {
    addDeal() {
      this.$store.commit("ADD_DEAL");
    }
  }
};
</script>
<style scoped>
.btn-success {
  padding-top: 3px;
  margin-left: 10px;
}
</style>
