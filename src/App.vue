<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: '',
    }
  },
  watch: {
    // depth별 transition https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition
    '$route' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : ''
    }
  },
}
</script>

<style>
  body{
    overflow-x: hidden;
    padding: 0;
    margin: 0;
  }
  .slide-right-enter-active,
  .slide-left-enter-active  {
    transition: all .3s ease;
  }
  .slide-right-leave-active{
    transition: all .5s ease-out;
  }
  .slide-left-leave-active {
    transition: all .5s ease;
  }
  .slide-right-enter, .slide-right-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(100%);
    opacity: 0;
  }
  .slide-left-enter, .slide-left-leave-to{
    transform: translateX(-100%);
    opacity: 0;
  }
</style>
