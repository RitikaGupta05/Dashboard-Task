<template>
  <div class="w_65">
    <table>
      <tr>
        <th>AWB NUMBER</th>
        <th>TRANSPORTER</th>
        <th>SOURCE</th>
        <th>DESTINATION</th>
        <th>BRAND</th>
        <th>START DATE</th>
        <th>ETD</th>
        <th>STATUS</th>
      </tr>
      <tr
        v-for="(item, index) in orderList"
        :key="index"
        @click="emitDeliveryStatus(item)"
      >
        <td>#{{ item.awbno }}</td>
        <td>{{ item.carrier }}</td>
        <td>{{ item.from }}</td>
        <td>{{ item.to }}</td>
        <td>{{ item.carrier }}</td>
        <td>{{ item.pickup_date }}</td>
        <td>{{ item.extra_fields.expected_delivery_date }}</td>
        <td class="deliver_text">{{ item.current_status }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "ShipmentDataList",
  props: {
    orderList: Array
  },
  methods: {
    emitDeliveryStatus(index) {
      this.$emit("selectItem", index);
    }
  }
};
</script>
