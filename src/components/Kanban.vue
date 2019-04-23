<template>
  <div class="drag-container">
    konteineris
    <div class="viduje">Viduje</div>
    <!-- ----------------------------------------FOOTER ----------------------------- -->
    <!-- <div class="footer-container">
      <div class="footer-item">Delete</div>
      <div class="footer-item2">Lost</div>
      <div class="footer-item3">Won</div>
    </div>-->
    <!-- ---------------------------------------END FOOTER ---------------------------------- -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.drag-container {
  // display: flex;
  // flex-flow: column;
  // height: 100%;
  min-height: 100px;
  // max-width: 1000px;
  // height: 100%;
  // max-height: 100%;
  background: red;
}

.viduje {
  background: blue;
  // height: 100%;
  min-height: calc(100% - 10px);
  padding: 0;
  margin: 0;
}
</style>
