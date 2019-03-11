<template>
  <div>
    <DealsActionBar />
    <p>This is Kanban view</p>
  </div>
</template>

<script>
// @ = /src
import DealsActionBar from "@/components/DealsActionBar.vue";

export default {
  name: "deals",
  components: {
    DealsActionBar
    // DealsActionBar
  }
};
</script>
