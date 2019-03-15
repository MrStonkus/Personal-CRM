<template>
  <div>
    <!-- load Deals Action Bar -->
    <DealsActionBar />
    <!-- Kanban start   -->
    <kanban-board :stages="stages" :blocks="blocks" @update-block="updateBlock">
      <div v-for="block in blocks" :slot="block.id" :key="block.id">
        <div>
          <strong>id:</strong>
          {{ block.id }}
        </div>
        <div>{{ block.title }}</div>
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
      stages: ["on-hold", "in-progress", "needs-review", "approved", "kkk"],
      blocks: [
        {
          id: 0,
          status: "approved",
          title: "Buy coffee machine"
        },
        {
          id: 1,
          status: "in-progress",
          title: "Find better AirBnB options"
        },
        {
          id: 3,
          status: "kkk",
          title: "Find better AirBnB options"
        }
      ]
    };
  },
  methods: {
    updateBlock() {
      console.log(this.blocks);
    }
  }
};
</script>
<style lang="scss">
@import "../assets/kanban.scss";
</style>
