<template>
  <v-container>
    <v-card max-width="344" class="mx-auto">
      <v-card-title>Add new deal</v-card-title>
      <v-card-text>
        <v-text-field
          id="dealName"
          label="Deal name"
          prepend-icon="fas fa-briefcase"
          clearable="clearable"
          required
          autofocus
        ></v-text-field>
        <v-text-field
          id="organizationName"
          label="Organization name"
          prepend-icon="fas fa-building"
          clearable="clearable"
          required
        ></v-text-field>
        <v-text-field
          id="contactName"
          label="Contact name"
          prepend-icon="fas fa-address-card"
          clearable="clearable"
          required
        ></v-text-field>
        <v-text-field
          id="contactPhone"
          label="Phone"
          prepend-icon="fas fa-phone"
          clearable="clearable"
        ></v-text-field>
        <v-text-field
          id="contactEmail"
          label="Email"
          prepend-icon="fas fa-envelope"
          clearable="clearable"
        ></v-text-field>

        <v-list>
          <!--  -->
          <!--  -->
          <v-list-item v-for="deal in deals" :key="deal.id">
            <v-list-item-content>
              <v-list-item-title>
                {{ deal.name }}
                {{ deal.contact.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-btn depressed class="success">Save</v-btn>
          <v-btn depressed class="warning">Cancel</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
// import VueGridLayout from "vue-grid-layout";

export default {
  name: "AddDealForm",
  data() {
    return {
      deals: [
        {
          id: 1,
          name: "Vyniotuvo pardavimas",
          contact: {
            name: "Jonas Jonaitis",
            phone: "8-123-12345",
            email: "jonas@gmail.com"
          },
          organizationName: "Kompanija UAB"
        },
        {
          id: 2,
          name: "Reikia stelažų",
          contact: {
            name: "Petras Petraitis",
            phone: "8-235-12345",
            email: "petras@gmail.com"
          },
          organizationName: "Kirvis UAB"
        }
      ]
    };
  },

  methods: {}

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
};
</script>
<style scoped lang="scss"></style>
