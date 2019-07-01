<template>
  <div class="trashit-wrapper">
    <leaflet-map />
  </div>
</template>

<script>
import leafletMap from '@/components/trashit/leafletMap';

export default {
  name: 'trashit',
  components: {
    leafletMap
  },
};
</script>

<style lang="scss" scoped>
.trashit-wrapper {
  position: absolute;
  top: 0;
  bottom: 70px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
}
</style>
