<template>
  <div>
    <div class="dealsActionBar">
      <b-button @click="addDeal" variant="success btn-sm">Add deal</b-button>

      <div class="windowDisplayRadio">
        <input
          type="radio"
          id="dragAndDropRadio"
          value="dragAndDrop"
          v-model="displayWindowAs"
        />
        <label for="dragAndDrop">Kanban &nbsp;</label>
        <input
          type="radio"
          id="splittedRadio"
          value="splitted"
          v-model="displayWindowAs"
        />
        <label for="splitted">Splitted &nbsp;</label>
        <input
          type="radio"
          id="tableRadio"
          value="table"
          v-model="displayWindowAs"
        />
        <label for="table">Table &nbsp;</label>
        <!-- <span>Selected: {{ displayWindowAs }}</span> -->

        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label
            class="btn btn-secondary"
            :class="{ active: displayWindowAs === 'dragAndDrop' }"
          >
            <input
              type="radio"
              name="options"
              id="dragAndDropRadio"
              autocomplete="off"
              value="dragAndDrop"
              v-model="displayWindowAs"
              :checked="checked"
            />
            Kanban
          </label>
          <label
            class="btn btn-secondary"
            :class="{ active: displayWindowAs === 'splitted' }"
          >
            <input
              type="radio"
              name="options"
              id="splittedRadio"
              autocomplete="off"
              value="splitted"
              v-model="displayWindowAs"
              :checked="checked"
            />
            Splitted
          </label>
          <label
            class="btn btn-secondary"
            :class="{ active: displayWindowAs === 'table' }"
          >
            <input
              type="radio"
              name="options"
              id="tableRadio"
              autocomplete="off"
              value="table"
              v-model="displayWindowAs"
              :checked="checked"
            />
            Table
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dealsActionBar",
  data() {
    return {};
  },
  computed: {
    displayWindowAs: {
      get() {
        return this.$store.state.displayWindowAs;
      },
      set(value) {
        this.$store.commit("SET_DISPLAY", value);
      }
    }
  },
  methods: {
    addDeal() {
      this.$store.commit("ADD_DEAL");
    }
  }
};
</script>
<style scoped>
.dealsActionBar,
.windowDisplayRadio {
  background: #f7f7f7;
  padding: 9px 16px 10px 14px;
  display: flex;
  /* justify-content: space-between; */
  height: 50px;
  /* float: left; */
}
</style>
