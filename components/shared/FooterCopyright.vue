<script>
import { mapActions,mapState } from 'pinia';
import { useFakeStore } from '../../store/fake';

export default {
  data: () => {
    return {
      projectName: "Nuxt.js & Tailwind CSS Portfolio",
      author: "Sanaur Rahman",
    };
  },
  computed: {
    ...mapState(useFakeStore,["copyrightDate"]),
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="
        font-general-regular
        text-lg text-ternary-dark
        dark:text-ternary-light
      "
    >
      &copy; {{ copyrightDate }}.
      <a
        href="https://github.com/shohag001/sanaur-portfolio"
        target="__blank"
        class="
          font-general-medium
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >{{ projectName }}</a
      >
      . Developed by
      <a
        href="https://sanaur.me"
        target="__blank"
        class="
          font-general-medium
          text-secondary-dark
          dark:text-secondary-light
          uppercase
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
