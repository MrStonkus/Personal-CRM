<template>
  <div id="kanban">
    <!-- Kanban start   -->
    <kanban-board :stages="stages" :blocks="deals" @update-block="updateDeal">
      <div v-for="deal in deals" :slot="deal.id" :key="deal.id">
        <div>
          <strong>id:</strong>
          {{ deal.id }}
        </div>
        <div>{{ deal.title }}</div>
      </div>
    </kanban-board>
    <!-- Kanban end -->
  </div>
</template>

<script>
export default {
  name: "KanBan",
  //Get data of deals from global Vuex store
  computed: {
    stages() {
      return this.$store.state.stages;
    },
    deals() {
      return this.$store.state.deals;
    }
  },
  // data() {
  //   return {};
  // },
  methods: {
    updateDeal(id, status) {
      this.deals.find(d => d.id === Number(id)).status = status;
      console.log(this.deals);
    },
    addDeal() {
      console.log("Add deal");
      this.deals.push({
        id: 14,
        status: "Bendraujama",
        title: "Naujas sandoris"
      });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/kanban.scss";
#kanban {
  height: auto;
}
</style>
