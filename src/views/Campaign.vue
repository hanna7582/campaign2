<template>
  <div class="campaign-main">
    <header>
      <h1>학습습관 캠페인</h1>
    </header>
    <!-- progress, goal -->
    <section class="sec1">
      <Progress />
      <Goal />
    </section>
    <!-- /progress, goal -->
    
    <!-- 체크노트 -->
    <CheckNote/>
    <!-- /체크노트 -->
  </div>
</template>

<script>
import Progress from '@/components/Progress.vue';
import Goal from '@/components/Goal.vue';
import CheckNote from '@/components/CheckNote.vue';
export default {
  components: {
    Progress,
    Goal,
    CheckNote,
  },
}
</script>

<style lang="scss" scoped>
header{
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  background: #fff;
  h1{
    font-size: 17px;
  }
}

.sec1{
  padding: 50px 15px 0;
  &::before{
  content:'';
    z-index: -1;
    @include position($left:0, $right:0);
    height: 390px;
    background: #ffeb7f;
  }
}
</style>