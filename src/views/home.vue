<template>
  <div class="home-page">
    <header>
      <div class="container">
        <div class="logo">
          <img src="../assets/images/logo.svg" />
          <h1>Intugine</h1>
        </div>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Brands</a></li>
            <li><a href="">Transporters</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="counter-area">
      <div class="container">
        <div class="coutner">
          <ul>
            <!-- key means array and value means 'DEL' -->
            <li
              :class="{ active: currentStatusCode == value }"
              v-for="(key, value) in filteredObject"
              @click="
                (currentStatusCode = value), (deliveryStatusObject = key[0])
              "
            >
              {{ value }} <span>{{ key.length }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="table-data">
      <div class="container">
        <div v-if="currentStatusCode !== null">
          <ShipmentDataList
            @selectItem="selectItem"
            :orderList="filteredObject[currentStatusCode]"
          />
        </div>
          <deliveryStatus :deliveryStatusTimeline="deliveryStatusObject" />
      </div>
    </div>
  </div>
</template>
<script>
import ShipmentDataList from "../components/ShipmentDataList";
import deliveryStatus from "../components/deliveryStatus";
import Vue from "vue";
import ApiCaller from "../utils/apicaller";
import axios from "axios";
export default {
  name: "home",
  components: {
    ShipmentDataList,
    deliveryStatus
  },
  data() {
    return {
      email: "ritika.jyoti@gmail.com",
      orderList: [],
      currentStatusCode: null,
      filteredObject: null,
      deliveryStatusObject: null
    };
  },
  methods: {
    orderLists() {
      const obj = {
        email: this.email
      };
      ApiCaller(
        "https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank",
        "post",
        obj
      )
        .then(data => {
          this.orderList = data.data;
          let resultObject = {};
          for (let i in this.orderList) {
            if (
              resultObject[this.orderList[i].current_status_code] === undefined
            )
              resultObject[this.orderList[i].current_status_code] = [];
            resultObject[this.orderList[i].current_status_code].push(
              this.orderList[i]
            );
          }
          this.filteredObject = resultObject;
        })
        .catch(function(error) {
          console.log("====error===", error);
        });
    },
    selectItem(index) {
      this.deliveryStatusObject = index;
      
    }
  },
  mounted() {
    this.orderLists();
  }
};
</script>
