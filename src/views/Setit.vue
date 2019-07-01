<template>
  <div class="setit">
    <h1>This is an about page</h1>
    <span>Logged in as {{ user.displayName }}</span>
    <img :src="user.photoURL" />
  </div>
</template>

<script>
export default {
  name: "setIt",
  data() {
    return {
      user: this.$store.state.user.user
    }
  },
  mounted() {
  }
}
</script>
