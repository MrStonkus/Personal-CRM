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
      <div v-for="deal in sortDeals(deals)" :slot="deal.id" :key="deal.id">
        <router-link
          class="link-to-deal"
          :to="{ name: 'deal-show', params: { id: deal.id } }"
        >
          <!-- <div>id: {{ deal.id }}</div> -->
          <div>
            <!-- //Action icon ------------------------------------------------------->
            <span v-bind:style="{ color: actionColor }">
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

export default {
  name: "KanBan",
  data() {
    return {
      //TODO: add icon method
      actionColor: "rgb(173, 68, 68)"
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
      return deal.isActivityDateAllDay ? date.slice(0, 10) : date.slice(0, 19);
    },
    getIconColor: function() {
      return {
        iconColor: "rgb(173, 68, 68)"
      };
    }
  }
};
</script>

<style lang="scss">
@import "../assets/kanban.scss";
#kanban {
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
