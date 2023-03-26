<template>
  <header class="header">
    <ContainerPage>
      <router-link to="/">
        <AppLogo />
      </router-link>
    </ContainerPage>
  </header>
</template>

<script>
import AppLogo from "./AppLogo.vue";
import ContainerPage from "./shared/ContainerPage.vue";
export default {
  name: "AppHeader",
  components: {
    AppLogo,
    ContainerPage,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: $secondary-color;
  padding: 16px 0;
}
</style>
