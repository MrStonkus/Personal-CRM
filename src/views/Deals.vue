<template>
  <div>
    <!-- <b-button @click="addDeal" variant="success">Add deal</b-button> -->
    <!-- load Deals Action Bar component-->
    <DealsActionBar />
    <!-- Load Kanban component -->
    <Kanban />
  </div>
</template>

<script>
// @ = /src
import DealsActionBar from "@/components/DealsActionBar.vue";
import Kanban from "@/components/Kanban.vue";

export default {
  name: "deals",
  components: {
    DealsActionBar,
    Kanban
  }
  // display: "Two Lists",
  // order: 1,
};
</script>
