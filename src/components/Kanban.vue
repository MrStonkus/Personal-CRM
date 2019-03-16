<template>
  <div id="kanban">
    <!-- Kanban start   -->
    <kanban-board :stages="stages" :blocks="deals" @update-block="updateDeal">
      <div
        class="stages-header"
        v-for="stage in stages"
        :slot="stage"
        :key="stage"
      >
        <div>
          <h2>{{ stage }}</h2>
        </div>
        <div class="stage-value">{{ getDeals(stage) }} deals</div>
      </div>
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
import { mapState } from "vuex";

export default {
  name: "KanBan",
  //Get data of deals from global Vuex store
  computed: {
    ...mapState(["stages", "deals"])
  },

  methods: {
    getDeals: function(stage) {
      let deals = this.$store.state.deals;
      return deals.filter(x => x.status === stage).length;
    },
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
