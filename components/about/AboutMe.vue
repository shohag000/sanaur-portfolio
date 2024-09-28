<script>
import { mapActions,mapState } from 'pinia';
import { useFakeStore } from '../../store/fake';
export default {
  data: () => {
    return {
      // @todo
    };
  },
  computed: {
    ...mapState(useFakeStore,["aboutMe"]),
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="https://plus.unsplash.com/premium_photo-1727266867745-0927e5ebd6fe?q=80&w=1632&auto=format" class="rounded-lg w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in aboutMe"
        :key="bio.id"
        class="
          font-general-regular
          mb-4
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        "
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
