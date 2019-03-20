<template>
  <div id="kanban">
    <!-- Kanban start   -->
    <kanban-board :stages="stages" :blocks="deals" @update-block="updateDeal">
      <div
        class="stages-header"
        v-for="stage in stages"
        :slot="stage"
        :key="stage"
      >
        <!-- Stage header title -->
        <div>
          <h2>{{ stage }}</h2>
        </div>

        <!-- Show number of deals in Kanban stage header -->
        <div class="stage-value">{{ getDealsCountString(stage) }}</div>
      </div>

      <!-- List deals items in current stage-->
      <div v-for="deal in deals" :slot="deal.id" :key="deal.id">
        <router-link
          class="link-to-deal"
          :to="{ name: 'deal-show', params: { id: deal.id } }"
        >
          <!-- <div>id: {{ deal.id }}</div> -->
          <div>
            <!-- Action icon ------------------------------------------------------->
            <span v-bind:style="{ color: getActionColor(deal) }">
              <i class="far fa-arrow-alt-circle-right"></i>
            </span>

            <!-- end Icon -->
            <div>
              <strong>{{ deal.company }}</strong>
            </div>
            <div v-show="deal.contact">
              <img src="../assets/user.png" />
              {{ deal.contact }}
            </div>
            <div>{{ getActivityDate(deal) }}</div>
            <div>{{ deal.product }}</div>
            <div>{{ deal.action }}</div>
          </div>
        </router-link>
      </div>
    </kanban-board>
    <!-- Kanban end -->
    <div>List deals</div>
    <div v-for="(deal, index) in sortDeals(deals)" :key="index">
      <li>
        {{ deal.company }} - {{ deal.id }} - {{ deal.activityDate }} -
        {{ deal.status }}
      </li>
    </div>
  </div>
</template>

<script>
//Get all vuex store states in one mapState array
import { mapState } from "vuex";
//Get moment component for time and date calculations
var moment = require("moment");
moment().format("YYYY-MM-DD, h:mm:ss");

export default {
  name: "KanBan",
  data() {
    return {
      // getActionColor: "rgb(173, 68, 68)"
    };
  },
  //Get data of deals from global Vuex store
  computed: {
    //Set this.$store.state.stages to stages and deals to deals
    ...mapState(["stages", "deals", "isSortDealsAuto"])
  },

  methods: {
    // TODO: remove this method prior public
    sortDeals: function(deals) {
      var newDeals = deals.slice();
      return newDeals.sort(function(a, b) {
        return (
          Number(new Date(a.activityDate)) - Number(new Date(b.activityDate))
        );
      });
    },

    //Count deals number in current stage
    getDealsCountString: function(stage) {
      const deals = this.$store.state.deals;
      const count = deals.filter(x => x.status === stage).length;

      let dealText = "";
      if (count === 1) {
        dealText = count + " deal";
      } else if (count > 1) {
        dealText = count + " deals";
      }
      return dealText;
    },

    updateDeal(id, status) {
      const updatedDeal = { id: id, status: status };
      this.$store.commit("updateDealsList", updatedDeal);
    },

    //Get date and time of current deal in local time format YYYY-MM-DD HH:MM
    getActivityDate: function(deal) {
      const date = new Date(deal.activityDate).toLocaleString();
      return deal.exactTime ? date.slice(0, 19) : date.slice(0, 10);
    },

    //TODO: add icon method
    getActionColor: function(deal) {
      var now = moment();
      const startToday = moment().startOf("day");
      const endToday = moment().endOf("day");
      const dealTime = moment(deal.activityDate);
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
        //Yellow if deal time do not defined
      } else if (!dealTime.isValid()) {
        color = "rgb(255, 255, 0)";
        //Grey if deal in the future from today
      } else {
        color = "rgb(136, 136, 136)";
      }

      console.log("Now: " + now.toString());
      console.log("startToday: " + startToday.toString());
      console.log("endToday: " + endToday.toString());
      console.log("dealTime: " + dealTime.toString());
      let dabar = moment();
      console.log("Dabar :" + dabar.toLocaleString());
      return color;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/kanban.scss";
#kanban {
  color: rgb(27, 27, 27);
  height: auto;
}

img {
  height: 14px;
  margin: -5px 0px 0px 0px;
}

.link-to-deal:link,
.link-to-deal:visited {
  color: black;
  text-decoration: none;
}

.fa-arrow-alt-circle-right {
  position: absolute;
  top: calc(50% - 8px);
  right: 8px;
  font-size: 20px;
  // color: rgb(173, 68, 68);
}
</style>
