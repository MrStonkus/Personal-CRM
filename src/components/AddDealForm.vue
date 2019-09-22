<template>
  <div class="container">
    <!--  -->
    <div class="display-add-form" id="addFormDiv" ref="addFormDiv">
      <vue-draggable-resizable
        :drag-handle="'.drag-handle'"
        :min-width="266"
        :min-height="300"
        :max-width="1000"
        :max-height="800"
        :w="width"
        :h="height"
        :y="0"
        :x="widthOfDiv"
        @dragging="onDrag"
        @resizing="onResize"
        :parent="true"
        :draggable="false"
      >
        <!-- Form card start -->
        <div
          class="card"
          v-bind:style="{ width: width + 'px', height: height + 'px' }"
        >
          <div class="card-body">
            <div class="drag-handle">D</div>
            <h5 class="card-title">Add deal</h5>
            <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
            <p class="card-text">
              <grid-layout
                :layout.sync="layout"
                :col-num="4"
                :row-height="30"
                :is-draggable="true"
                :is-resizable="true"
                :is-mirrored="false"
                :vertical-compact="true"
                :margin="[1, 1]"
                :use-css-transforms="true"
              >
                <grid-item
                  class="card"
                  v-for="item in layout"
                  :x="item.x"
                  :y="item.y"
                  :w="item.w"
                  :h="item.h"
                  :i="item.i"
                  :key="item.i"
                >
                  {{ item.i }}
                  <label for="input">Kompanija</label>
                  <input
                    id="input"
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </grid-item>
              </grid-layout>
            </p>
          </div>
        </div>
        <!--  -->
      </vue-draggable-resizable>
    </div>

    <!--  -->

    <!--  -->
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import VueDraggableResizable from "vue-draggable-resizable";
// optionally import default styles
import "vue-draggable-resizable/dist/VueDraggableResizable.css";

export default {
  name: "AddDealForm",
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    vueDraggableResizable: VueDraggableResizable
  },
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 4, h: 3, i: "0" },
        { x: 3, y: 0, w: 4, h: 3, i: "1" }
        // { x: 4, y: 0, w: 2, h: 5, i: "2" },
        // { x: 6, y: 0, w: 2, h: 3, i: "3" },
        // { x: 8, y: 0, w: 2, h: 3, i: "4" },
        // { x: 10, y: 0, w: 2, h: 3, i: "5" },
        // { x: 0, y: 5, w: 2, h: 5, i: "6" }
      ],
      width: 265,
      height: 300,
      x: 0,
      y: 0,
      widthOfDiv: 0
    };
  },
  mounted() {
    this.getWindowWidth();
  },
  // --------------

  methods: {
    onResize: function(x, y, width, height) {
      this.width = width;
      this.height = height;
      this.widthOfDiv = Math.round(
        (this.$refs.addFormDiv.clientWidth - this.width) / 2
      );

      console.log(Math.round(this.widthOfDiv, 0));
    },
    // onDrag: function(x, y) {
    //   this.x = x;
    //   this.y = y;
    // },
    getWindowWidth() {
      this.widthOfDiv = Math.round(
        (this.$refs.addFormDiv.clientWidth - this.width) / 2
      );

      console.log(Math.round(this.widthOfDiv, 0));
    }

    // addDeal() {
    //   if (
    //     this.deal.organizationName !== "" ||
    //     this.deal.contactPersonName !== ""
    //   ) {
    //     this.$store.commit("ADD_DEAL", this.deal);
    //     this.notFilled = false;
    //     console.log("deal added");
    //   } else {
    //     this.notFilled = true;
    //     console.log("Please enter organization or contact name");
    //   }
    // }
  }
};
// console.log(this.containerWidth);
</script>
<style scoped lang="scss">
.display-add-form {
  height: calc(100vh - 48px - 20px);
  // border: solid 1px #e5e5e5;
  // overflow: hidden;
  // width: 270px;
  margin: 0px auto;
  border: 1px solid red;
  position: relative;
}
.drag-handle {
  border: 1px solid;
}
.vdr {
  border: 0px solid;
}
</style>
