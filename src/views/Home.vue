<template>
  <div>
    <div>
      <DealsActionBar />
    </div>

    <!-- Window split start -->
    <Split
      style="height: calc(100vh - 48px - 70px); border: solid 1px #e5e5e5;"
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

export default {
  name: "home",
  components: {
    DealsActionBar,
    Kanban,
    KanbanTable
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
