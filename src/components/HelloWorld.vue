<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Add deal</h5>

        <!-- Start of form fields -->

        <form>
          <div class="form-group">
            <label for="organizationNameInput" style="float:left"
              >Organization name</label
            >
            <input
              type="text"
              class="form-control"
              id="organizationNameInput"
              placeholder="Enter organization name"
            />
          </div>
        </form>

        <!-- End of form fields -->
        <button type="button" class="btn btn-warning">Cancel</button>
        <button type="submit" class="btn btn-success">Save</button>
      </div>
    </div>
    <div class="my-2">
      <v-btn small color="error">Error</v-btn>
    </div>
  </div>
</template>

<script>
// import VueGridLayout from "vue-grid-layout";

export default {
  name: "AddDealForm",
  components: {
    // GridLayout: VueGridLayout.GridLayout,
    // GridItem: VueGridLayout.GridItem,
  },
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 4, h: 3, i: "0" },
        { x: 3, y: 0, w: 4, h: 3, i: "1" }
        // { x: 4, y: 0, w: 2, h: 5, i: "2" },
        // { x: 6, y: 0, w: 2, h: 3, i: "3" },
        // { x: 8, y: 0, w: 2, h: 3, i: "4" },
        // { x: 10, y: 0, w: 2, h: 3, i: "5" },
        // { x: 0, y: 5, w: 2, h: 5, i: "6" }
      ]
    };
  },
  mounted() {},

  methods: {}

  // addDeal() {
  //   if (
  //     this.deal.organizationName !== "" ||
  //     this.deal.contactPersonName !== ""
  //   ) {
  //     this.$store.commit("ADD_DEAL", this.deal);
  //     this.notFilled = false;
  //     console.log("deal added");
  //   } else {
  //     this.notFilled = true;
  //     console.log("Please enter organization or contact name");
  //   }
  // }
};
</script>
<style scoped lang="scss">
.card {
  margin: 0 auto;
}
.btn-warning,
.btn-success {
  float: right;
  margin-left: 10px;
}
// .card-footer {
//   font-size: 19px;
//   text-align: right;
// }
// .fa-times-circle {
//   color: #d86969;
// }
// .fa-check-circle {
//   color: green;
// }
</style>
