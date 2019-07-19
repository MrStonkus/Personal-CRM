<template>
  <div>
    <div class="drag-container">
      <ul class="drag-list">
        <li
          v-for="stage in stages"
          class="drag-column"
          :class="{ ['drag-column-' + stage]: true }"
          :key="stage"
        >
          <div class="drag-options"></div>

          <!-- List deals items in current stage-->
          <ul class="drag-inner-list" ref="list" :data-status="stage">
            <li
              class="drag-item"
              v-for="deal in getDeals(stage)"
              :data-deal-id="deal.id"
              :key="deal.id"
            >
              <!-- Reuterio pradžia -->
              <router-link
                class="link-to-deal"
                :to="{ name: 'deal-show', params: { id: deal.id } }"
              >
                <div>
                  <!-- Action icon ------------------------------------------------------->
                  <span v-bind:style="{ color: getActionColor(deal, stages) }">
                    <i v-if="deal.activityDate" class="fas fa-sign-out-alt"></i>
                    <i
                      v-else-if="
                        !deal.activityDate && deal.status === stages[0]
                      "
                      class="fas fa-parking"
                    ></i>
                    <i
                      v-else-if="
                        !deal.activityDate && deal.status !== stages[0]
                      "
                      class="fas fa-exclamation-triangle"
                    ></i>
                  </span>

                  <!-- end Icon -->
                  <div>
                    <strong>{{ deal.company }}</strong>
                  </div>
                  <div v-show="deal.contact">
                    <img src="../assets/user.png" />
                    {{ deal.contact }}
                  </div>
                  <div v-if="deal.activityDate">
                    {{ getActivityDate(deal) }}
                  </div>
                  <div>{{ deal.product }}</div>
                  <div>{{ deal.action }}</div>
                </div>
              </router-link>
            </li>
          </ul>
          <div class="drag-column-footer">
            <slot :name="`footer-${stage}`"></slot>
          </div>
        </li>
      </ul>

      <!-- Delete Won Lost action bar -->
      <div id="dealFooterActionsBar" style="background-color:lightblue">
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
      <!-- End -->
    </div>
  </div>
</template>

<script>
//TODO: make template look correct
//This component helps drag and drop items
import dragula from "dragula";
//Get all vuex store states in one mapState array
import { mapState } from "vuex";

//Get moment component for time and date calculations
var moment = require("moment");
moment().format("YYYY-MM-DD, h:mm:ss");

export default {
  name: "Kanban",

  data() {
    return {};
  },

  computed: {
    localDeals() {
      return this.deals;
    },
    //Set this.$store.state.stages to stages and deals to deals
    ...mapState(["stages", "deals", "isSortDealsAuto"])
  },

  methods: {
    // get deals and sorting by activityDate
    getDeals(status) {
      let deals = this.localDeals.filter(deal => deal.status === status);
      return deals.sort(function(a, b) {
        return (
          Number(new Date(a.activityDate)) - Number(new Date(b.activityDate))
        );
      });
    },

    //Geting action icon color by deal stage
    getActionColor: function(deal, stages) {
      var now = moment();
      const startToday = moment().startOf("day");
      const endToday = moment().endOf("day");
      const dealTime = moment(deal.activityDate);
      const isDealTimeValid = dealTime.isValid();
      let color = "rgb(0, 0, 0)";

      // Red if deal overdue
      if (
        (dealTime < now && deal.exactTime === true) ||
        dealTime < startToday
      ) {
        color = "rgb(255, 0, 0)";

        //Green if deal is not overdue and today
      } else if (
        (startToday < dealTime &&
          dealTime < endToday &&
          deal.exactTime === false) ||
        (now < dealTime && deal.exactTime === true && dealTime < endToday)
      ) {
        color = "rgb(0, 255, 0)";

        //Blue if deal wihout date and in first stage
      } else if (!isDealTimeValid && deal.status === stages[0]) {
        color = "rgb(38, 22, 126)";

        //Yellow if deal time do not defined
      } else if (!isDealTimeValid && deal.status !== stages[0]) {
        color = "rgb(219, 143, 0)";

        //Grey if deal in the future from today
      } else {
        color = "rgb(136, 136, 136)";
      }
      return color;
    },

    //Get date and time of current deal in local time format YYYY-MM-DD HH:MM
    getActivityDate: function(deal) {
      const date = new Date(deal.activityDate).toLocaleString();
      return deal.exactTime ? date.slice(0, 19) : date.slice(0, 10);
    },

    //Update deal after move to store
    updateDeal(id, status) {
      const updatedDeal = { id: id, status: status };
      this.$store.commit("updateDealsList", updatedDeal);
    }
  },

  mounted() {
    dragula(this.$refs.list)
      .on("drag", el => {
        el.classList.add("is-moving");
      })
      .on("drop", (deal, list) => {
        let index = 0;
        for (index = 0; index < list.children.length; index += 1) {
          if (list.children[index].classList.contains("is-moving")) break;
        }
        console.log(deal.dataset.dealId);
        console.log(list.dataset.status);
        this.updateDeal(deal.dataset.dealId, list.dataset.status);
      })
      .on("dragend", el => {
        el.classList.remove("is-moving");

        window.setTimeout(() => {
          el.classList.add("is-moved");
          window.setTimeout(() => {
            el.classList.remove("is-moved");
          }, 600);
        }, 100);
      });
  }
};
</script>
<style lang="scss">
// @import "../assets/kanban.scss";
//----------------------------------------------------------
$ease-out: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

ul.drag-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul.drag-inner-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.drag-container {
  // max-width: 1000px;
  // margin: 20px auto;
  height: auto;
  // border: solid 2px #e5e5e5;
}

.drag-list {
  display: flex;
  align-items: flex-start;
  height: 100%;

  @media (max-width: 690px) {
    display: block;
  }
}

.drag-column {
  flex: 1;
  margin: 0 0px;
  position: relative;
  background: rgba(white, 0.2);
  height: auto;
  overflow: hidden;

  @media (max-width: 690px) {
    margin-bottom: 30px;
  }

  h2 {
    font-size: 0.8rem;
    margin: 0;
    font-weight: 600;
    font: 600 16px/24px Open Sans, sans-serif;
    width: 100%;
    display: inline-block;
    text-overflow: ellipsis; //shorted text
    white-space: nowrap;
    overflow: hidden;
  }
}

.stages-header {
  // display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  // padding: 8px 24px 4px 12px;
  border: 1px solid #e5e5e5;
  // text-align: left;
  // height: 70px;
  // position: relative;
}
.stage-value {
  font: 400 12px/16px Open Sans, sans-serif;
  height: 16px;
  width: 100%;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
}
.drag-inner-list {
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  height: 100vh; //Kanban height
  //Scroll only one list
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.drag-footer-inner-list {
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  // height: 50vh; //Footer height
  //Scroll only one list
  // overflow-y: scroll;
  // scrollbar-width: none; /* Firefox */
  // -ms-overflow-style: none; /* IE 10+ */
}
// hide scroll bar
.drag-inner-list::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}

.drag-item {
  margin: -1px;
  background: rgba(white, 1);
  transition: $ease-out;
  color: #212529;
  border-radius: 0.35rem;
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  cursor: pointer;
  min-height: 50px;
  text-align: left;

  &.is-moving {
    // transform: scale(2);
    // background: rgba(rgb(159, 238, 166), 1);
  }
}

.footer-container {
  position: static;
  // position: absolute;
  min-width: 100%;
}

.footer-item {
  // margin: -1px;
  background: white;
  // -webkit-transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  // transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  color: #212529;
  // border-radius: 0.35rem;
  // position: relative;
  display: block;
  // padding: 1rem 0.75rem;
  // background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  // cursor: pointer;
  min-height: 50px;
  text-align: center;
  float: left;
}

.drag-item:active {
  // transform: scale(0.75);
}

.drag-header-more {
  cursor: pointer;
}

.drag-options {
  position: absolute;
  top: 44px;
  left: 0;
  width: 100%;
  padding: 10px;
  transform: translateX(100%);
  opacity: 0;
  transition: $ease-out;

  &.active {
    transform: translateX(0);
    opacity: 1;
  }

  &-label {
    display: block;
    margin: 0 0 5px 0;

    input {
      opacity: 0.6;
    }

    span {
      display: inline-block;
      font-size: 0.9rem;
      font-weight: 400;
      margin-left: 5px;
    }
  }
}

/* Dragula CSS  */

.gu-mirror {
  position: fixed !important;
  margin: 0 !important;
  z-index: 9999 !important;
  opacity: 0.8;
  list-style-type: none;
  // height: 100px;
  transform: scale(1);
}

.gu-hide {
  display: none !important;
}

.gu-unselectable {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}

.gu-transit {
  opacity: 0.5;
  background: rgb(253, 204, 204);
}

#dealFooterActionsBar {
  // opacity: 0;
  // position: fixed;
  // left: 0;
  // right: 0;
  // bottom: -67px;
  // height: 67px;
  // background-color: #f7f7f7;
  // z-index: 100;
  // box-shadow: 0 5px 40px rgba(0, 0, 0, 0.4);
  // transition: opacity 0.3s ease-out, bottom 0.1s ease-out 1s;
}

#kanban {
  color: rgb(0, 0, 0);
  height: auto;
}

img {
  height: 14px;
  margin: -5px 0px 0px 0px;
}

.link-to-deal:link,
.link-to-deal:visited {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

.fa-sign-out-alt,
.fa-parking,
.fa-exclamation-triangle {
  position: absolute;
  top: calc(50% - 8px);
  right: 8px;
  font-size: 18px;
}

.fa-sign-out-alt:hover,
.fa-parking:hover,
.fa-exclamation-triangle:hover {
  position: absolute;
  top: calc(50% - 10px);
  right: 6px;
  font-size: 22px;
}
</style>
