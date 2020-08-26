<template>
  <div>
    <header>
      <h2>캠페인 뱃지</h2>
      <button class="btn-back" @click="goPage('campaignDetail', currIndex)">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span class="blind">뒤로가기</span>
      </button>
    </header>
    <section>
      <p>캠페인에 꾸준히 참여하고<br>3가지 뱃지를 최고 등급으로 높여봐요!</p>
      <div class="box">
        <img src="@/assets/img/habit_top_badge.png" alt="성실, 집중, 도전">
      </div>
      <p>3가지 뱃지를 모두 최고 등급으로 달성하고<br>'습관왕' 뱃지를 획득하세요!</p>
      <div class="box">
        <img src="@/assets/img/habit_king.png" alt="습관왕" class="habit-king">
      </div>
      <div :class="'badge-type'+index">
        <img :src="'/assets/img/badge_grp'+index+'.png'" alt="">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      currIndex: 0
    }
  },
  mounted () {
    this.index=parseInt(this.$route.params.index/2+1);
    this.currIndex=this.$route.params.index;

    console.log('this.currIndex',this.currIndex);
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
    h2{
      font-size: 17px;
    }
    .btn-back{
       @include position($xy:'y', $left:20px);
       font-size: 20px;
    }
  }
  section{
    background: #f6f6f6;
    padding:80px 20px 35px;
    text-align: center;
  }
  p{
    font-family: NotoSans;
    font-size:17px;
  }
  .box{
    position: relative;
    background: #fff;
    border: solid 1px #dddddd;
    border-radius: 10px;
    padding: 8% 0;
    margin-top: 8px;
    margin-bottom: 24px;
    img{
      width: 90%;
    }
    .habit-king{
      width: 40%;
    }
  }
  [class*=badge-type]{
    width: 100%;
    position: relative;
    background: #fff;
    border: solid 1px #dddddd;
    border-radius: 10px;
    text-align: center;
    padding: 6% 0;
    img{
      width: 90%;
    }
  }
  .badge-type1{background: #5ad8e7;}
  .badge-type2{background: #7dc3ff;}
  .badge-type3{background: #caabff;}
</style>