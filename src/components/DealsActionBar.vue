<template>
  <div>
    <div class="dealsActionBar">
      <!-- Add display windows radio buttons -->
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label
          class="btn btn-outline-secondary btn-sm"
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
            :checked="checked"
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
            :checked="checked"
          />
          Table
        </label>
      </div>
      <!-- Add deal button -->
      <b-button @click="addDeal" variant="success ">Add deal</b-button>
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

.btn-group {
  /* margin-right: 10px; */
  padding-top: 3px;
}

.btn-success {
  padding-top: 3px;
  margin-left: 10px;
}
</style>
