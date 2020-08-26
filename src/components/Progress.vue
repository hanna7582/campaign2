<template>
  <article class="content">
    <div class="content-header">
      <h2>캠페인 {{ord}}주차</h2>
      <button class="btn-mission" @click="goPage('campaignReward')">미션 달성 혜택</button>
    </div>
    <div class="content-body">
      <div class="progress">
        <div class="count-result">
          <span class="reward-count">{{totalSuccessCnt}}</span>
          <span class="recommend">(권장 : {{maxSuccessCnt}})</span>
        </div>
        <div class="progress-bar">
          <div class="bar"></div>
          <ul>
            <li :class="{on:totalSuccessCnt>=6}">
              <span class="count">6</span>
              <span class="con">+100콘</span>
            </li>
            <li :class="{on:totalSuccessCnt>=30}">
              <span class="count">30</span>
              <span class="con">+500콘</span>
            </li>
            <li :class="{on:totalSuccessCnt>=42}">
              <span class="count">42</span>
              <span class="con">+1000콘</span>
            </li>
            <li :class="{on:totalSuccessCnt==60}">
              <span class="count">60</span>
              <span class="con">+3000콘</span>
            </li>
          </ul>
        </div>
      </div>
    </div>  
  </article>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState([
      'totalSuccessCnt',
      'maxSuccessCnt',
      'successDttm',
      'totalCon',
      'nextCon',
      'currSuccess',
      'grpCnt',
      'grpNextCnt',
      'weeksSuccess',
      'weeksRate',
      'ord'
    ])
  },
  methods: {
    ...mapActions(['loadCampaign2Status','loadCampaign2GoalData'])
  },
  created () {
    this.loadCampaign2Status()
    this.loadCampaign2GoalData()
  },
  mounted () {
    
  },
  watch: {
    totalSuccessCnt(cnt) {
      let percent=cnt/60*100+'%';
      $('.bar').animate({width:percent})
    }
  },
}
</script>

<style lang="scss" scoped>
.progress{
  max-width: 500px;
  margin: auto;
  padding: 15px 30px 40px;
  .count-result{
    margin-bottom:40px;
    .reward-count{
      position: relative;
      color: $primary;
      font-size: 43px;
      font-weight: 800;
      padding: 0 5px 0 35px;
      &::before{
        content:'';
        @include position($bottom:6px, $left:0);
        width: 30px;
        height: 25px;
        margin-right:5px;
        background:url(~@/assets/img/main_v_mark.png);
        background-size: 30px;
      }
    }
    .recommend{
      color: #aaaaaa;
      font-size: 15px;
      font-weight: 700;
    }
  }
  .progress-bar{
    position: relative;
    height: 15px;
    border-radius: 7.5px;
    background: #dfdfdf;
    .bar{
      width:0%;
      height: 100%;
      border-radius: 7.5px;
      background: $primary;
    }
    ul{
      @include position($xy:'y', $left:0);
      width: 100%;
      height: 15px;
      li{
        height: 100%;
        @include position($xy:'y');
        &:nth-child(1){
          left:10%;
          .con{right:-30px;}
        }
        &:nth-child(2){left:50%}
        &:nth-child(3){left:70%}
        &:nth-child(4){left:100%}
        &.on .count,
        &.on .con{
          color:#333333;
        }
        .count{
          @include position($right:0px, $top:-22px);
          width: 20px;
          color: #aaaaaa;
          font-size: 13px;
          font-weight: 800;
          text-align:center;
          &::after{
            content: '';
            display: block;
            width: 1px;
            height: 5px;
            margin: auto;
            background: #aaaaaa;
          }
        }
        .con{
          @include position($right:0px, $bottom:-20px);
          white-space: nowrap;
          color: #aaaaaa;
          font-size: 14px;
          font-weight: 800;
        }
      }
    }
  }
}
</style>