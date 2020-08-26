<template>
  <div>
    <header>
      <h2>미션 달성 혜택</h2>
      <button class="btn-back" @click="goPage('campaign')">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span class="blind">뒤로가기</span>
      </button>
    </header>
    <section>
      <article>
        <div class="title">하나</div>
        <img src="@/assets/img/reward_big_icon.png" alt="" class="img-con">
        <dl>
          <dt>습관 누적 성공 시 콘 지급</dt>
          <dd>하나의 습관을 성공할 때마다<br>습관 1번이 누적됩니다.</dd>
        </dl>
        <ul>
          <li>
            <span class="count">6번 성공</span>
            <span class="con">100콘</span>
          </li>
          <li>
            <span class="count">24번 성공</span>
            <span class="con">500콘</span>
          </li>
          <li>
            <span class="count">42번 성공</span>
            <span class="con">1000콘</span>
          </li>
          <li>
            <span class="count">60번 성공</span>
            <span class="con">3000콘</span>
          </li>
        </ul>
      </article>

      <article>
        <div class="title">둘</div>
        <img src="@/assets/img/best_icon.png" alt="best" class="img-best">
        <dl>
          <dt>최고의 습관왕을 찾아라</dt>
          <dd>습관 60번 모두 성공시<br>'습관왕' 홈런북 온라인 뱃지 증정</dd>
        </dl>
        <img src="@/assets/img/habit_king2.png" alt="습관왕" class="img-habit-king">
      </article>

      <article>
        <div class="title">셋</div>
        <img src="@/assets/img/mission_icon.png" alt="mission" class="img-mission">
        <dl>
          <dt>깜짝 미션</dt>
          <dd>캠페인 기간 중!<br>
              학습습관 캠페인 시즌2 성공을 위해<br>
              깜짝 미션이 공개 될 예정이니<br>
              우리 아이들의 바른 맞춤 학습습관 향상을 위해<br>
              부모님들의 응원과 독려 부탁드립니다.
          </dd>
        </dl>
      </article>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header{
  position: fixed;
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
  background-image: url(~@/assets/img/reward_bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  text-align: center;
  padding: 90px 30px 0;
}
article{
  padding-bottom:40px;
}
.title{
  width: 140px;
  margin: 0 auto 30px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background: #ff8819;
  padding: 9px 0;
  border: solid 1px #ff7d03;
  border-radius: 20px;
}
.img-con{ width: 42px; }
.img-best{ width: 71px;}
.img-habit-king{ width: 100%; margin-top:25px; }
.img-mission{ width: 54px; }
dl{
  dt{  
    margin: 15px 0;
    color: #000000;
    font-size: 23px;
    font-weight: bold;
  }
  dd{
    line-height: 24px;
  }
}
ul{
    padding: 0 15px;
    border: solid 1px #e8d957;
    border-radius: 5px;
    margin-top: 25px;
    background: #fff;
    text-align: center;
  li{
    height: 49px;
    line-height: 49px;
    border-bottom: dotted 1px #dddddd;
    &:last-child{
      border-bottom:0;
    }
    .count{
      position: relative;
      float: left;
      margin-left:50px;
      padding-left:30px;
      color: #ff7800;
      font-size: 18px;
      font-weight: 700;
      &::before{
        content:'';
        @include position($xy:'y', $left:0);
        width: 22px;
        height: 18px;
        background:url(~@/assets/img/main_v_mark.png);
        background-size: 22px;
      }
    }
    .con{
      position: relative;
      float: right;
      width: 90px;
      margin-right:50px;
      padding-left:30px;
      color: #000000;
      font-size: 18px;
      font-weight: 700;
      text-align: left;
      &::before{
        content:'';
        @include position($xy:'y', $left:0);
        width: 18px;
        height: 30px;
        background:url(~@/assets/img/reward_big_icon.png);
        background-size: 18px;
      }
    }
  }
}
</style>