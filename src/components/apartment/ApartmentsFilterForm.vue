<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model="city" class="form__select" />
    <CustomInput v-model="price" placeholder="Цена, от" />
    <StandartButton class="form__submit" type="submit"> Вибір житла </StandartButton>
  </form>
</template>

<script>
import CustomSelect from "../shared/CustomSelect";
import CustomInput from "../shared/CustomInput";
import StandartButton from "../shared/StandartButton";

export default {
  components: {
    CustomSelect,
    CustomInput,
    StandartButton,
  },
  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    cities() {
      return [
        { value: "All", label: "Місто", selected: true },
        "Kyiv",
        "Odesa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Lviv",
        "Kherson",
        "Mariupol",
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
