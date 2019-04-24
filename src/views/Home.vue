<template>
  <div>
    <Split direction="vertical">
      <SplitArea :size="70">
        <div class="kanban-board">Kanban
          <Kanban/>
        </div>
      </SplitArea>
      <SplitArea :size="30">
        <div class="kanban-table">
          <p>AAAAAAAAAAAAAAAAAAAAAAAA</p>
          <p>Tekstas</p>
          <p>Tekstas2</p>
          <p>Tekstas</p>
          <p>Tekstas</p>
          <p>Tekstas</p>
          <p>Tekstas4</p>
          <p>Tekstas</p>
          <p>Tekstas</p>
          <p>Tekstas</p>
          <p>dddddddddddd</p>
        </div>
      </SplitArea>
    </Split>
  </div>
</template>

<script>
import DealsActionBar from "@/components/DealsActionBar.vue";
import Kanban from "@/components/Kanban.vue";

export default {
  name: "home",
  components: {
    DealsActionBar,
    Kanban
    
  }
};
</script>

<style lang="scss">
.split {
  height: calc(100vh - 48px - 20px);
  overflow: auto;
}

.kanban-board {
  background-color: red;
  min-height: 100%;
  // overflow: hidden;
}

.kanban-table {
  background-color: green;
  min-height: 100%;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 0px;
}
</style>
