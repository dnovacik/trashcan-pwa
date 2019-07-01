<template>
  <div id="app">
    <navbar v-if="!['splash'].includes($route.name)" />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar";

export default {
  name: "app",
  components: {
    navbar
  }
};
</script>
