<template>
  <div>
    <!-- Add deal button -->
    <b-button
      id="show-btn"
      variant="success"
      @click="$bvModal.show('bv-modal-example')"
      >Add deal</b-button
    >

    <b-modal id="bv-modal-example">
      <template v-slot:modal-title
        >Add new deal</template
      >

      <h4 class="card-tittle">Add deal (index: )</h4>
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddDealModalButton",
  data() {
    return {
      companyInfo: {
        street: null
      }
    };
  },
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
