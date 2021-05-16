<template>
  <div class="min-h-screen flex justify-center items-center">
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
        @enter="enterApp"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <div class="fixed bottom-0 right-0 px-8 py-4">
    <div id="nav" class="bg-white rounded shadow-lg px-4 py-2">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>


<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      enterApp() {
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
    },
  }
</script>
