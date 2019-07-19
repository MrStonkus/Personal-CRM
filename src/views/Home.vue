<template>
  <div>
    <div>
      <DealsActionBar />
    </div>

    <!-- Kanban header -->
    <div>
      <ul class="drag-list">
        <li
          v-for="stage in stages"
          class="drag-column"
          :class="{ ['drag-column-' + stage]: true }"
          :key="stage"
        >
          <div class="stages-header">
            <slot :name="stage">
              <h2>{{ stage }}</h2>
            </slot>
            <!-- Show number of deals in Kanban stage header -->
            <div class="stage-value">{{ getDealsCountString(stage) }}</div>
          </div>
        </li>
      </ul>
    </div>
    <!-- End of Kanban header -->

    <!-- Window split start -->
    <Split
      style="height: calc(100vh - 48px - 70px); border: solid 1px #e5e5e5; overflow: hidden;"
      direction="vertical"
    >
      <!-- Window first  -->
      <SplitArea :size="70">
        <div class="kanban-board">
          <Kanban />
        </div>
      </SplitArea>

      <!-- Window second -->
      <SplitArea :size="30">
        <div class="kanban-table">
          <KanbanTable />
        </div>
      </SplitArea>
    </Split>
  </div>
</template>

<script>
import DealsActionBar from "@/components/DealsActionBar.vue";
import Kanban from "@/components/Kanban.vue";
import KanbanTable from "@/components/KanbanTable.vue";
//Get all vuex store states in one mapState array
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    DealsActionBar,
    Kanban,
    KanbanTable
  },
  computed: {
    //Set this.$store.state.stages to stages and deals to deals
    ...mapState(["stages", "deals"])
  },
  methods: {
    //Count deals number in current stage
    getDealsCountString: function(stage) {
      const deals = this.$store.state.deals;
      const count = deals.filter(x => x.status === stage).length;
      let dealText = "";
      if (count === 1) {
        dealText = count + " deal";
      } else if (count > 1) {
        dealText = count + " deals";
      }
      return dealText;
    }
  }
};
</script>

<style scoped lang="scss">
.split {
  // height: calc(100vh - 48px - 20px);
  // overflow: auto;
}

.kanban-board {
  // background-color: yellow;
  // min-height: 100%;
  // overflow: hidden;
}

.kanban-table {
  // background-color: green;
  // min-height: 100%;
  // overflow: auto;
}

::-webkit-scrollbar {
  width: 0px;
}
</style>
