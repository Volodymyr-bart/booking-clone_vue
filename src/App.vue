<template>
  <div id="app">
    <ApartmentsItem
      :price="1000"
      imgSrc="https://thumbs.dreamstime.com/b/hotel-13341433.jpg"
      :descr="apartment.descr"
      :rating="apartment.rating" />
  </div>
</template>
<script>
import ApartmentsItem from "./components/apartment/ApatmentsItem.vue";
export default {
  name: "App",
  components: { ApartmentsItem },
  data() {
    return {
      apartment: {
        id: "1234",
        title: "Item",
        descr: "lorem",
        price: 2032,
        rating: 4.7,
        location: {
          city: "Zhytomyr",
        },
        owner: {
          name: "Elen",
          phone: "063-55-55-666",
          email: "qwerty@gmail.com",
        },
      },
    };
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
