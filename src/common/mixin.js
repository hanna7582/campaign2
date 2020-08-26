import Vue from 'vue';

Vue.mixin({
  methods: {
    goPage(path, index) {
      this.$router.push({name:path, params:{index}}) 
    }
  },
})