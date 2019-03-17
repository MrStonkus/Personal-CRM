<template>
  <div>
    <div>This is about page</div>

    <div>List of deals</div>
    <div v-for="(deal, index) in deals" :key="index">
      <li>{{ deal }}</li>
    </div>
    <!-- <div>{{ stiklas }}</div> -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      deals: [
        {
          id: "fhgfbgf",
          status: "Įvesta",
          title: "Antras",
          activityDate: "2019-03-17T16:00:00.957Z",
          isActivityDateAllDay: false
        },
        {
          id: "fhgfbgf2",
          status: "Įvesta",
          title: "Pirmas",
          activityDate: "2018-03-17T08:58:09.957Z",
          isActivityDateAllDay: false
        },
        {
          id: "sdgdfg",
          status: "Bendraujama",
          title: "Buy coffee machine",
          activityDate: "2017-03-17T09:58:09.957Z",
          isActivityDateAllDay: true
        }
      ]

      // stiklas: this.deals.sort()
    };
  },
  methods: {
    sortDeals: function() {
      return "sss";
    }
  }
};

var items = [
  {
    id: "2",
    status: "Įvesta",
    title: "Antras",
    activityDate: "2019-03-17T16:00:00.957Z",
    isActivityDateAllDay: false
  },
  {
    id: "1",
    status: "Įvesta",
    title: "Pirmas",
    activityDate: "2018-03-17T08:58:09.957Z",
    isActivityDateAllDay: false
  },
  {
    id: "sdgdfg",
    status: "Bendraujama",
    title: "Buy coffee machine",
    activityDate: "2017-03-17T09:58:09.957Z",
    isActivityDateAllDay: true
  }
];

items.sort(function(a, b) {
  return Number(new Date(a.activityDate)) - Number(new Date(b.activityDate));
});
// console.log(items);
</script>

<style scoped></style>
