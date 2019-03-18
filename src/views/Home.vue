<template>
  <div>
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
  name: "home",
  components: {
    DealsActionBar,
    Kanban
  }
};
</script>
