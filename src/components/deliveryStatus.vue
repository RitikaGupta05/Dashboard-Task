<template>
  <div class="w_35">
    <div class="stepprogress-main">
      <ul class="StepProgress">
        <li
          class="StepProgress-item "
          v-for="(item, index) in deliveryStatusTimeline.scan"
          :key="index"
        >
          <span class="status delivered">{{ item.location }}</span>
          <span class="dt">{{ item.time }}</span>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "deliveryStatus",
  props: {
    deliveryStatusTimeline: Object
  }
};
</script>
