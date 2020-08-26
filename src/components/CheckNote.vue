<template>
  <div class="check-note">
    <h2 class="blind">학습습관 체크노트</h2>
    <div v-for="(obj, index) in learningHabits" :key="index">
      <h3>{{obj.name}}</h3>
      <ul :class="'badge-type'+(index+1)">
        <li 
          v-for="(sub, subIndex) in obj.sub" 
          :key="subIndex"
          :class="{'success':currSuccess[index*2+subIndex]==1}"
          @click="goPage('campaignDetail', index*2+subIndex)" 
        >
          <div class="title">{{sub}}</div>
          <ul class="mark">
            <li
              v-for="(item, weeksSuccessIndex) in weeksSuccess[index*2+subIndex]"
              :key="weeksSuccessIndex"
              :class="[
              {'on':item=='1'},
              {'off':item==''},
              ]"
            >
              <span class="blind">{{successMessage(item)}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>  
    <!-- <h3>성실</h3>
    <ul class="badge-type1">
      <li 
        @click="goPage('campaignDetail')" 
        :class="{'success':currSuccess[0]==1}"
      >
        <div class="title">약속을 지키는 습관</div>
        <ul class="mark">
          <li
            v-for="(item, index) in weeksSuccess[0]"
            :key="index"
            :class="[
            {'on':item=='1'},
            {'off':item==''},
            ]"
          >

            <span class="blind">{{successMessage(item)}}</span>
          </li>
        </ul>
      </li>
    </ul> -->

    <!-- <h3>성실</h3>
    <ul class="badge-type1">
      <li class="success" @click="goPage('campaignDetail')">
        <div class="title">약속을 지키는 습관</div>
        <ul class="mark">
          <li class="on"><span class="blind">성공</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
        </ul>
      </li>
      <li @click="goPage('campaignDetail')">
        <div class="title">계획을 실천하는 습관</div>
        <ul class="mark">
          <li class="on"><span class="blind">성공</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
        </ul>
      </li>
    </ul>

    <h3>집중</h3>
    <ul class="badge-type2">
      <li class="success" @click="goPage('campaignDetail')">
        <div class="title">오답노트 확인하는 습관</div>
        <ul class="mark">
          <li class="on"><span class="blind">성공</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
        </ul>
      </li>
      <li @click="goPage('campaignDetail')">
        <div class="title">집중하는 습관</div>
        <ul class="mark">
          <li class="on"><span class="blind">성공</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
        </ul>
      </li>
    </ul>

    <h3>도전</h3>
    <ul class="badge-type3">
      <li class="success" @click="goPage('campaignDetail')">
        <div class="title">목표를 설정하는 습관</div>
        <ul class="mark">
          <li class="on"><span class="blind">성공</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
        </ul>
      </li>
      <li @click="goPage('campaignDetail')">
        <div class="title">스스로 찾아 학습하는 습관</div>
        <ul class="mark">
          <li class="on"><span class="blind">성공</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
          <li><span class="blind">실패</span></li>
        </ul>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      learningHabits: [
        {
          name:'성실',
          sub:[
            '약속을 지키는 습관',
            '계획을 실천하는 습관'
          ]
        },
        {
          name:'집중',
          sub:[
            '오답노트 확인하는 습관',
            '집중하는 습관'
          ]
        },
        {
          name:'도전',
          sub:[
            '목표를 설정하는 습관',
            '스스로 찾아 학습하는 습관'
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'currSuccess',
      'weeksSuccess',
      'weeksRate'
    ]),
  },
  methods: {
    ...mapActions(['loadCampaign2Status']),
    successMessage(num){
      return num=='1'?'성공':(num=='0'?'실패':'');
    }
  },
  created () {
    this.loadCampaign2Status()
  },
}
</script>

<style lang="scss" scoped>
.check-note{
  padding: 15px;
  h3{
    padding: 5px;
    font-family: NotoSans;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.1em;
  }
  ul[class^="badge-"] > li{
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 75px;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #eeeeee;
    text-align: center;
    margin-bottom: 9px;
    background: #f5f5f5;
    .title{
      position: relative;
      padding-right:20px;
      font-family: NotoSans;
      &::after{
        content:'';
        @include position($top:5px, $right:0);
        width: 16px;
        height: 17px;
        background:url(~@/assets/img/default_info.png);
        background-size: 16px;
      }
    }
    .mark{
      margin-top:10px;
      li{
        width: 12px;
        height: 12px;
        background: #cccccc;
        float: left;
        margin-right: 2px;
        border-radius: 2px;
        &.off{
          display: none;
        }
      }
    }
    &::after{
      content:'';
      @include position($xy:'y', $right:50px);
      width: 36px;
      height: 27px;
      background-image:url(~@/assets/img/incomplete_mark.png);
      background-size: 36px;
    }
    &.success{
      .title{
        color:$white;
      } 
      .mark li{
        background: #000000;
        opacity: 0.15;
        &.on{
          background: $white;
          opacity: 1;
        }
      }
      &::after{
        background-image:url(~@/assets/img/complete_mark.png);
      }
    }
  }
  ul.badge-type1 {
    > li.success{ background: #00c5dd; }
    .mark li.on{ background: #00c5dd; }
  }
  ul.badge-type2 {
    > li.success{ background: #55b1ff; }
    .mark li.on{ background: #55b1ff; }
  }
  ul.badge-type3 {
    > li.success{ background: #a472f8; }
    .mark li.on{ background: #a472f8; }
  }
}
</style>