<template>
  <div>
    <div>
      <DealsActionBar />
    </div>
    <div style="float: none">
      <!-- If condition true, Window kanban start ----------->
      <div v-if="displayWindowAs === 'kanban'">
        <div class="display-window">
          <Kanban />
        </div>
      </div>
      <!-- Window kanban END -------------------------------->

      <!-- If condition true, Window table start ----------------->
      <div v-else-if="displayWindowAs === 'table'">
        <div class="display-window">
          <KanbanTable />
        </div>
      </div>
      <!-- Window table END -------------------------------------->

      <!-- If condition true, Window split start ----------------->
      <div v-else-if="displayWindowAs === 'splitted'">
        <Split class="display-window" direction="vertical">
          <!-- Window first  -->
          <SplitArea :size="70">
            <Kanban />
          </SplitArea>

          <!-- Window second -->
          <SplitArea :size="30">
            <KanbanTable />
          </SplitArea>
        </Split>
      </div>
      <!-- Window split END -------------------------------------->
    </div>
  </div>
</template>

<script>
import DealsActionBar from "@/components/DealsActionBar.vue";
import Kanban from "@/components/Kanban.vue";
import KanbanTable from "@/components/KanbanTable.vue";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    DealsActionBar,
    Kanban,
    KanbanTable
  },
  computed: {
    // Main window can be displayed as: kanban, splitted, table
    // Get display from store
    displayWindowAs: {
      get() {
        return this.$store.state.displayWindowAs;
      }
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
  width: 0px;
}

.display-window {
  height: calc(100vh - 48px - 70px);
  border: solid 1px #e5e5e5;
  overflow: hidden;
}
</style>
