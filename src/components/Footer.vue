<template>
  <div class="footer-line">&copy; Copyright {{ yearNow }} MrStonkus</div>
</template>

<script>
export default {
  name: "footer-line",
  data() {
    return {
      yearNow: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss">
.footer-line {
  height: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
