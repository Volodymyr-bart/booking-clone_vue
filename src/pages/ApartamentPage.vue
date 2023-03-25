<template>
  <main class="apartment-page">
    <ContainerPage>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner class="apartment-page__owner" :owner="apartment.owner" />
          <ReviewsSection :reviews="reviewsList" />
        </div>
      </div>
    </ContainerPage>
  </main>
</template>

<script>
import ContainerPage from "./../components/shared/ContainerPage.vue";
import apartments from "./../components/apartment/apartments";
import ApartmentsMainInfo from "./../components/apartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "./../components/apartment/ApartmentsOwner.vue";
import ReviewsSection from "./../components/reviews";
import reviewsList from "./../components/reviews/reviews.json";

export default {
  name: "ApartamentPage",
  components: { ContainerPage, ApartmentsMainInfo, ApartmentsOwner, ReviewsSection },
  computed: {
    reviewsList() {
      return reviewsList;
    },
    apartment() {
      return apartments.find((apartment) => apartment.id === this.$route.params.id);
    },
  },
  mounted() {
    console.log(this.apartment);
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;
  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__owner {
    min-width: 350px;
    margin-left: 30px;
  }
}
</style>
