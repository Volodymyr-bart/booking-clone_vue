<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__head">
      <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating" />
    </div>
    <img class="apartment-main-info__photo" :src="apartment.imgUrl" :alt="apartment.title" />
    <p class="apartment-main-info__description">{{ apartment.descr }}</p>
  </article>
</template>

<script>
import StarRating from "./../shared/StarRating.vue";
export default {
  name: "ApartmentsMainInfo",
  components: { StarRating },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-main-info {
  &__head {
    display: flex;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
  }

  &__photo {
    max-width: 100%;
  }

  &__description {
    line-height: 1.3;
    margin-top: 30px;
  }
}
</style>
