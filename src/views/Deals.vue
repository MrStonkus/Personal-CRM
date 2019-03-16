<template>
  <div id="kanban">
    <!-- load Deals Action Bar -->
    <DealsActionBar />
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
// @ = /src
import DealsActionBar from "@/components/DealsActionBar.vue";

export default {
  name: "deals",
  components: {
    DealsActionBar
  },
  display: "Two Lists",
  order: 1,
  data() {
    return {
      stages: [
        "Įvesta",
        "Bendraujama",
        "Reikalingas pasiūlymas",
        "Pasiūlymas pateiktas",
        "Užsakymas vykdomas"
      ],
      deals: [
        {
          id: 0,
          status: "Įvesta",
          title: "Buy coffee machine"
        },
        {
          id: 1,
          status: "Įvesta",
          title: "Buy coffee machine"
        },
        {
          id: 2,
          status: "Įvesta",
          title: "Buy coffee machine"
        },
        {
          id: 3,
          status: "Įvesta",
          title: "Buy coffee machine"
        },
        {
          id: 4,
          status: "Įvesta",
          title: "Find better AirBnB options"
        },
        {
          id: 5,
          status: "Įvesta",
          title: "Find"
        },
        {
          id: 6,
          status: "Įvesta",
          title: "Find better AirBnB options sdfsdfds sdfsdf"
        },
        {
          id: 7,
          status: "Įvesta",
          title: "Buy coffee machine"
        },
        {
          id: 8,
          status: "Įvesta",
          title: "Buy coffee machine"
        },
        {
          id: 9,
          status: "Įvesta",
          title: "Buy coffee machine"
        },
        {
          id: 10,
          status: "Įvesta",
          title: "Buy coffee machine"
        },
        {
          id: 11,
          status: "Įvesta",
          title: "Find better AirBnB options"
        },
        {
          id: 12,
          status: "Įvesta",
          title: "Find"
        },
        {
          id: 13,
          status: "Užsakymas vykdomas",
          title: "Find better AirBnB options sdfsdfds sdfsdf"
        }
      ]
    };
  },
  methods: {
    updateDeal(id, status) {
      this.deals.find(d => d.id === Number(id)).status = status;
      console.log(this.deals);
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
