<template>
  <div>
    <div>
      <DealsActionBar />
    </div>

    <!-- If condition true, Window dragAndDrop start ----------->
    <div v-if="displayWindowAs === 'dragAndDrop'">
      <div class="display-window">
        <div class="kanban-board">
          <Kanban />
        </div>
      </div>
    </div>
    <!-- Window dragAndDrop END -------------------------------->

    <!-- If condition true, Window split start ----------------->
    <div v-else-if="displayWindowAs === 'splitted'">
      <Split class="display-window" direction="vertical">
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
    <!-- Window split END -------------------------------------->

    <!-- If condition true, Window table start ----------------->
    <div v-else>
      <div class="display-window">
        <div class="kanban-board">
          <KanbanTable />
        </div>
      </div>
    </div>
    <!-- Window table END -------------------------------------->
  </div>
</template>

<script>
import DealsActionBar from "@/components/DealsActionBar.vue";
import Kanban from "@/components/Kanban.vue";
import KanbanTable from "@/components/KanbanTable.vue";

export default {
  name: "home",
  data() {
    return {
      // Main window can be displayed as: dragAndDrop, splitted, table
      displayWindowAs: "splitted"
    };
  },
  components: {
    DealsActionBar,
    Kanban,
    KanbanTable
  },
  computed: {},
  methods: {}
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

.display-window {
  height: calc(100vh - 48px - 70px);
  border: solid 1px #e5e5e5;
  overflow: hidden;
}
</style>
