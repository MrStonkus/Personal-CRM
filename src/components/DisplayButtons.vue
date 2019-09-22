<template>
  <div class="btn-group btn-group-toggle" data-toggle="buttons">
    <label
      class="btn btn-outline-secondary btn-sm"
      :class="{ active: displayWindowAs === 'kanban' }"
    >
      <input
        type="radio"
        name="options"
        id="kanbanRadio"
        autocomplete="off"
        value="kanban"
        v-model="displayWindowAs"
      />
      Kanban
    </label>
    <label
      class="btn btn-outline-secondary btn-sm"
      :class="{ active: displayWindowAs === 'splitted' }"
    >
      <input
        type="radio"
        name="options"
        id="splittedRadio"
        autocomplete="off"
        value="splitted"
        v-model="displayWindowAs"
      />
      Splitted
    </label>
    <label
      class="btn btn-outline-secondary btn-sm"
      :class="{ active: displayWindowAs === 'table' }"
    >
      <input
        type="radio"
        name="options"
        id="tableRadio"
        autocomplete="off"
        value="table"
        v-model="displayWindowAs"
      />
      Table
    </label>
  </div>
</template>

<script>
export default {
  name: "DisplayButtons",
  computed: {
    displayWindowAs: {
      get() {
        return this.$store.state.displayWindowAs;
      },
      set(value) {
        this.$store.commit("SET_DISPLAY", value);
      }
    }
  }
};
</script>

<style scoped>
.windowDisplayRadio {
  background: #f7f7f7;
  padding: 9px 16px 10px 14px;
  display: flex;
  /* justify-content: space-between; */
  height: 50px;
  /* float: left; */
}
.btn-group {
  /* margin-right: 10px; */
  padding-top: 3px;
}
</style>
