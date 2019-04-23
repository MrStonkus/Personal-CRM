<template>
  <div id="home-container">
    <!-- load Deals Action Bar component-->
    <DealsActionBar />

    <!-- Load Kanban component -->
    <div class="kanban-board">
      Kanbanas
      <div class="kanban-board-child">20%</div>
      <!-- <Kanban /> -->
    </div>

    <div class="list-board">ListBoard</div>
  </div>
</template>

<script>
// @ = ..
import NavBar from "@/components/NavBar.vue";
import DealsActionBar from "@/components/DealsActionBar.vue";
import Kanban from "@/components/Kanban.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    NavBar,
    DealsActionBar,
    Kanban,
    Footer
  }
};
</script>
<style lang="scss">
#home-container {
  min-height: 100% !important;
  height: 100%;
}
.kanban-board {
  // calculating example (50vh - (NavBar+ActionBar+Footer)/2)
  min-height: calc(70vh - 59px);
  border: 1px solid #e5e5e5;
  margin: -1px 0px 0px 0px;
  resize: vertical;
  overflow: auto;
  // min-height: -o-calc(50vh - 24px); /* opera */
  // min-height: -webkit-calc(50vh - 24px); /* google, safari */
  // min-height: -moz-calc(50vh - 24px); /* firefox */
}

.kanban-board-child {
  background: red;
  height: 100%;
}
.list-board {
  // calculating example (50vh - (NavBar+ActionBar+Footer)/2)
  min-height: calc(30vh - 59px);
  border: 1px solid #e5e5e5;
  margin: -1px 0px 0px 0px;
}
</style>
