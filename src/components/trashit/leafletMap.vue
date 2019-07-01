<template>
  <div class="map-container">
    <!-- <loading
      :active.sync="isGettingData"
      :can-cancel="false"
      :is-full-page="false"
      :color="'#052de0'"
    />-->
    <!-- <div class="overlay" :class="{hidden: !isGettingData}"></div> -->
    <div id="map"></div>
  </div>
</template>

<script>
// components
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import L, { Map, TileLayer } from "leaflet";
import {
  currentUserLocationIcon,
  mapLayers,
  defaultMapPositionSettings
} from "@/utils/leafletElements";
import { setInterval } from 'timers';

export default {
  name: "leafletMap",
  components: {
    Loading
  },
  data() {
    return {
      leafletMap: null,
      trash: this.$store.state.map.trashes,
      currentPosition: null,
      positionInterval: null
    };
  },
  methods: {
    handleMapClick(e) {
      console.info(e.latlng);
    },
    handleError(message) {
      console.info(message);
    },
    handleLocationFound(e) {
      if (this.currentPosition) {
        this.leafletMap.removeLayer(this.currentPosition);
      }

      this.currentPosition = L.marker(e.latlng, { icon: currentUserLocationIcon }).addTo(
        this.leafletMap
      ); 
    },
    handleContextMenu(e) {
      let newTrash = {
        latLng: e.latlng,
        trashTypes: [1, 2, 3],
      };

      this.$store.dispatch('addTrash', newTrash);
    }
  },
  mounted() {
    let map = new Map("map", {
      center: defaultMapPositionSettings.center,
      zoom: defaultMapPositionSettings.zoom,
      layers: mapLayers
    });

    this.leafletMap = map;

    this.$nextTick(() => {
      this.leafletMap.locate({ setView: true, watch: false, maxZoom: 18 });

      this.positionInterval = setInterval(() => {
        this.leafletMap.locate({ setView: false, watch: true, maxZoom: 18 });
      }, 3000);

      this.leafletMap.on("click", this.handleMapClick);
      this.leafletMap.on("locationfound", this.handleLocationFound);
      this.leafletMap.on("contextmenu", this.handleContextMenu);
    });
  },
  destroyed() {
    this.positionInterval = null;
  }
};
</script>

<style lang="scss">
.map-container {
  width: 100%;
  height: 100%;

  & > #map {
    height: 100%;
    width: 100%;
  }
}
</style>