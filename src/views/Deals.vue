<template>
  <div>
    <!-- load Deals Action Bar -->
    <DealsActionBar />
    <!-- Kanban start   -->
    <div class="dealsView">
      <div class="row">
        <!-- list1 -->
        <div class="col-3">
          <h3 class="list-group-item">Draggable 1</h3>
          <draggable
            class="list-group"
            :list="list1"
            group="people"
            @change="log"
          >
            <div
              class="list-group-item"
              v-for="(element, index) in list1"
              :key="element.name"
            >
              {{ element.name }} {{ index }}
            </div>
          </draggable>
        </div>

        <!-- List2 -->
        <div class="col-3">
          <h3 class="list-group-item">Draggable 2</h3>
          <draggable
            class="list-group"
            :list="list2"
            group="people"
            @change="log"
          >
            <div
              class="list-group-item"
              v-for="(element, index) in list2"
              :key="element.name"
            >
              {{ element.name }} {{ index }}
            </div>
          </draggable>
        </div>

        <rawDisplayer class="col-3" :value="list1" title="List 1" />
        <rawDisplayer class="col-3" :value="list2" title="List 2" />
      </div>
    </div>
    <!-- Kanban end -->
  </div>
</template>

<script>
// @ = /src
import DealsActionBar from "@/components/DealsActionBar.vue";
import draggable from "vuedraggable";

export default {
  name: "deals",
  components: {
    DealsActionBar,
    draggable
  },
  display: "Two Lists",
  order: 1,
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      console.log(evt);
    }
  }
};
</script>
