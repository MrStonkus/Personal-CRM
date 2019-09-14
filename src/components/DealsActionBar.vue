<template>
  <div>
    <div class="dealsActionBar">
      <!-- Add display windows radio buttons -->
      <DisplayButtons />
      <!-- Add deal button -->
      <AddDealModalButton />
    </div>
  </div>
</template>

<script>
import AddDealModalButton from "./AddDealModalButton";
import DisplayButtons from "./DisplayButtons";

export default {
  name: "dealsActionBar",
  components: {
    AddDealModalButton,
    DisplayButtons
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.dealsActionBar {
  background: #f7f7f7;
  padding: 9px 16px 10px 14px;
  display: flex;
  /* justify-content: space-between; */
  height: 50px;
  /* float: left; */
}
</style>
