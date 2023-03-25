<template>
  <section class="reviews">
    <ReviewsItem v-for="review in reviews" :key="review.author" :review="review" />
  </section>
</template>

<script>
import ReviewsItem from "./reviews-item";
export default {
  name: "ReviewsSection",
  components: { ReviewsItem },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log(this.reviews);
  },
};
</script>

<style lang="scss" scoped></style>
