<template>
  <div>
    <header>
      <h2>{{queryTitle}}</h2>
      <button class="btn-back" @click="goPage('campaign')">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span class="blind">뒤로가기</span>
      </button>
    </header>
    <section :class="'badge-type'+(currentBadgeIndex+1)">
      <article class="badge-slide">
        <div class="slide">
          <flicking
            id="flicker-habit-badge"
            ref="flicker_habit_badge"
            :tag="'div'"
            :plugins="plugins"
            :options="flickingOptions"
            @move-end="e => {
              this.moveEndBadge(e)
            }"
          >
            <div>
              <div class="badge-wrap">
                <div class="medal"></div>
                <img :src="'/assets/img/badge/badge_sincerity'+((grpCnt[0])/2)+'.png'" class="badge">
              </div>
            </div>
            <div>
              <div class="badge-wrap">
                <div class="medal"></div>
                <img :src="'/assets/img/badge/badge_concentration'+((grpCnt[1])/2)+'.png'" class="badge">
              </div>
            </div>
            <div>
              <div class="badge-wrap">
                <div class="medal"></div>
                <img :src="'/assets/img/badge/badge_challenge'+((grpCnt[2])/2)+'.png'" class="badge">
              </div>
            </div>
          </flicking>
          <div class="count-wrap">
            <div class="count">{{grpCnt[currentBadgeIndex]}}</div>
            <div class="next-level" @click="goBadgeGrade(currentDetailIndex)">다음 단계까지 <span>{{grpNextCnt[currentBadgeIndex]}}</span></div>
          </div>
        </div>
      </article>
      <article class="tab">
        <div class="tab-menu">
          <flicking
            id="flicker-habit-tab"
            ref="flicker_habit_tab"
            :tag="'div'"
            :options="flickingOptions"
            @move-end="e => {
              this.moveEndTab(e)
            }"
          >
            <div>
              <button :class=" currentDetailIndex == 0 ?'active':''" @click="selectHabitTab(0)">약속을 지키는<br>습관</button>
              <button :class=" currentDetailIndex == 1 ?'active':''" @click="selectHabitTab(1)">계획을 실천하는<br>습관</button>
            </div>
            <div>
              <button :class=" currentDetailIndex == 2 ?'active':''" @click="selectHabitTab(2)">오답노트 확인하는<br>습관</button>
              <button :class=" currentDetailIndex == 3 ?'active':''" @click="selectHabitTab(3)">집중하는<br>습관</button>
            </div>
            <div>
              <button :class=" currentDetailIndex == 4 ?'active':''" @click="selectHabitTab(4)">목표를 설정하는<br>습관</button>
              <button :class=" currentDetailIndex == 5 ?'active':''" @click="selectHabitTab(5)">스스로 찾아 학습하는<br>습관</button>
            </div>
          </flicking>
        </div>
        <div class="tab-content">
          <flicking
            id="flicker-habit-detail"
            ref="flicker_habit_detail"
            :tag="'div'"
            :options="flickingOptions"
            @move-end="e => {
              this.moveEndContent(e)
            }"
          >
            <div>
              <img src="@/assets/img/detail_goal_bg1.png" alt="">
              <ul class="check-list">
                <li 
                  v-for="(item, index) in weeksSuccess[0]" 
                  :key="index"
                  :class="{'on':index < ord}"
                >
                  <span class="week" :class="{'on':index+1==ord}">{{index+1}}주</span>
                  <span class="result" :class="{'on':item=='1'}">{{weeksRate[0][index]}}%</span>
                </li>
                <!-- <li class="on">
                  <span class="week">1주</span>
                  <span class="result">0%</span>
                </li>
                <li class="on">
                  <span class="week">2주</span>
                  <span class="result">0%</span>
                </li>
                <li class="on">
                  <span class="week">3주</span>
                  <span class="result">0%</span>
                </li>
                <li class="on">
                  <span class="week">4주</span>
                  <span class="result">0%</span>
                </li>
                <li class="on">
                  <span class="week">5주</span>
                  <span class="result">0%</span>
                </li>
                <li class="on">
                  <span class="week on">6주</span>
                  <span class="result on">0%</span>
                </li>
                <li>
                  <span class="week">7주</span>
                  <span class="result">0%</span>
                </li>
                <li>
                  <span class="week">8주</span>
                  <span class="result">0%</span>
                </li>
                <li>
                  <span class="week">9주</span>
                  <span class="result">0%</span>
                </li>
                <li>
                  <span class="week">10주</span>
                  <span class="result">0%</span>
                </li> -->
              </ul>
            </div>
            <div>
              <img src="@/assets/img/detail_goal_bg2.png" alt="">
              <ul class="check-list">
                <li 
                  v-for="(item, index) in weeksSuccess[1]" 
                  :key="index"
                  :class="{'on':index < ord}"
                >
                  <span class="week" :class="{'on':index+1==ord}">{{index+1}}주</span>
                  <span class="result" :class="{'on':item=='1'}">{{weeksRate[1][index]}}%</span>
                </li>
                <!-- <li class="on">
                  <span class="week">1주</span>
                  <span class="result">0%</span>
                </li>
                <li class="on">
                  <span class="week">2주</span>
                  <span class="result">0%</span>
                </li>
                <li class="on">
                  <span class="week">3주</span>
                  <span class="result">0%</span>
                </li>
                <li class="on">
                  <span class="week">4주</span>
                  <span class="result">0%</span>
                </li>
                <li class="on">
                  <span class="week">5주</span>
                  <span class="result">0%</span>
                </li>
                <li class="on">
                  <span class="week on">6주</span>
                  <span class="result on">0%</span>
                </li>
                <li>
                  <span class="week">7주</span>
                  <span class="result">0%</span>
                </li>
                <li>
                  <span class="week">8주</span>
                  <span class="result">0%</span>
                </li>
                <li>
                  <span class="week">9주</span>
                  <span class="result">0%</span>
                </li>
                <li>
                  <span class="week">10주</span>
                  <span class="result">0%</span>
                </li> -->
              </ul>
            </div>
            <div>
              <img src="@/assets/img/detail_goal_bg3.png" alt="">
              <ul class="check-list">
                <li 
                  v-for="(item, index) in weeksSuccess[2]" 
                  :key="index"
                  :class="{'on':index < ord}"
                >
                  <span class="week" :class="{'on':index+1==ord}">{{index+1}}주</span>
                  <span class="result" :class="{'on':item=='1'}">{{weeksRate[2][index]}}건</span>
                </li>
                <!-- <li class="on">
                  <span class="week">1주</span>
                  <span class="result">0건</span>
                </li>
                <li class="on">
                  <span class="week">2주</span>
                  <span class="result">0건</span>
                </li>
                <li class="on">
                  <span class="week">3주</span>
                  <span class="result">0건</span>
                </li>
                <li class="on">
                  <span class="week">4주</span>
                  <span class="result">0건</span>
                </li>
                <li class="on">
                  <span class="week">5주</span>
                  <span class="result">0건</span>
                </li>
                <li class="on">
                  <span class="week on">6주</span>
                  <span class="result on">0건</span>
                </li>
                <li>
                  <span class="week">7주</span>
                  <span class="result">0건</span>
                </li>
                <li>
                  <span class="week">8주</span>
                  <span class="result">0건</span>
                </li>
                <li>
                  <span class="week">9주</span>
                  <span class="result">0건</span>
                </li>
                <li>
                  <span class="week">10주</span>
                  <span class="result">0건</span>
                </li> -->
              </ul>
            </div>
            <div>
              <img :src="setHabit4Img()" alt="">
              <ul class="check-list">
                <li 
                  v-for="(item, index) in weeksSuccess[3]" 
                  :key="index"
                  :class="{'on':index < ord}"
                >
                  <span class="week" :class="{'on':index+1==ord}">{{index+1}}주</span>
                  <span class="result" :class="{'on':item=='1'}">{{weeksRate[3][index]}}분</span>
                </li>
                <!-- <li class="on">
                  <span class="week">1주</span>
                  <span class="result">0분</span>
                </li>
                <li class="on">
                  <span class="week">2주</span>
                  <span class="result">0분</span>
                </li>
                <li class="on">
                  <span class="week">3주</span>
                  <span class="result">0분</span>
                </li>
                <li class="on">
                  <span class="week">4주</span>
                  <span class="result">0분</span>
                </li>
                <li class="on">
                  <span class="week">5주</span>
                  <span class="result">0분</span>
                </li>
                <li class="on">
                  <span class="week on">6주</span>
                  <span class="result on">0분</span>
                </li>
                <li>
                  <span class="week">7주</span>
                  <span class="result">0분</span>
                </li>
                <li>
                  <span class="week">8주</span>
                  <span class="result">0분</span>
                </li>
                <li>
                  <span class="week">9주</span>
                  <span class="result">0분</span>
                </li>
                <li>
                  <span class="week">10주</span>
                  <span class="result">0분</span>
                </li> -->
              </ul>
            </div>
            <div>
              <img src="@/assets/img/detail_goal_bg5.png" alt="">
              <ul class="check-list">
                <li 
                  v-for="(item, index) in weeksSuccess[4]" 
                  :key="index"
                  :class="{'on':index < ord}"
                >
                  <span class="week" :class="{'on':index+1==ord}">{{index+1}}주</span>
                  <span class="result" :class="{'on':item=='1'}">{{weeksRate[4][index]}}</span>
                </li>
                <!-- <li class="on">
                  <span class="week">1주</span>
                  <span class="result">미입력</span>
                </li>
                <li class="on">
                  <span class="week">2주</span>
                  <span class="result">미입력</span>
                </li>
                <li class="on">
                  <span class="week">3주</span>
                  <span class="result">미입력</span>
                </li>
                <li class="on">
                  <span class="week">4주</span>
                  <span class="result">미입력</span>
                </li>
                <li class="on">
                  <span class="week">5주</span>
                  <span class="result">미입력</span>
                </li>
                <li class="on">
                  <span class="week on">6주</span>
                  <span class="result on">목표 입력</span>
                </li>
                <li>
                  <span class="week">7주</span>
                  <span class="result">미입력</span>
                </li>
                <li>
                  <span class="week">8주</span>
                  <span class="result">미입력</span>
                </li>
                <li>
                  <span class="week">9주</span>
                  <span class="result">미입력</span>
                </li>
                <li>
                  <span class="week">10주</span>
                  <span class="result">미입력</span>
                </li> -->
              </ul>
            </div>
            <div>
              <img src="@/assets/img/detail_goal_bg6.png" alt=""> 
              <ul class="check-list">
                <li 
                  v-for="(item, index) in weeksSuccess[5]" 
                  :key="index"
                  :class="{'on':index < ord}"
                >
                  <span class="week" :class="{'on':index+1==ord}">{{index+1}}주</span>
                  <span class="result" :class="{'on':item=='1'}">{{weeksRate[5][index]}}건</span>
                </li>
                <!-- <li class="on">
                  <span class="week">1주</span>
                  <span class="result">0건</span>
                </li>
                <li class="on">
                  <span class="week">2주</span>
                  <span class="result">0건</span>
                </li>
                <li class="on">
                  <span class="week">3주</span>
                  <span class="result">0건</span>
                </li>
                <li class="on">
                  <span class="week">4주</span>
                  <span class="result">0건</span>
                </li>
                <li class="on">
                  <span class="week">5주</span>
                  <span class="result">0건</span>
                </li>
                <li class="on">
                  <span class="week on">6주</span>
                  <span class="result on">0건</span>
                </li>
                <li>
                  <span class="week">7주</span>
                  <span class="result">0건</span>
                </li>
                <li>
                  <span class="week">8주</span>
                  <span class="result">0건</span>
                </li>
                <li>
                  <span class="week">9주</span>
                  <span class="result">0건</span>
                </li>
                <li>
                  <span class="week">10주</span>
                  <span class="result">0건</span>
                </li> -->
              </ul>
            </div>
          </flicking>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { Fade } from "@egjs/flicking-plugins"
import { mapState, mapActions } from "vuex";

export default{
  data() {
    return {
      //애니메이션 속도
      animationSpeed: {
        MILLIE_SECONDS: 1000,
        SECONDS: 1
      },
      //플리커 플러그인
      plugins: [
        new Fade()
      ],
      //플리커 옵션
      flickingOptions: { 
        autoResize:true,
        gap: 0,
        zIndex: 0,
        useOffset: true
      },
      //플리커
      badgeFlicker: {},
      detailTabFlicker: {},
      detailContentFlicker: {},
      //뱃지 플리커 인덱스
      currentBadgeIndex:0,
      //상세 내용 인덱스(*탭은 뱃지 인덱스와 함께 사용 중)
      currentDetailIndex:0,
      //쿼리 파라미터
      queryTitle: "",
      queryBadgeIndex: 0,
      queryHabitIndex: 0,
      queryBadgeList: [],
      queryDetailData: {},
    }
  },
  computed: {
    ...mapState([
      'grpCnt',
      'grpNextCnt',
      'weeksSuccess',
      'weeksRate',
      'ord',
      'grade'
    ]),
  },
  methods: {
    ...mapActions(['loadCampaign2Status','loadCampaign2GoalData']),
    getQueryData() {
      this.queryTitle='성실'
    },
    //플리커 설정
    setFlicker() {
        this.badgeFlicker = this.$refs.flicker_habit_badge
        this.detailTabFlicker = this.$refs.flicker_habit_tab
        this.detailContentFlicker = this.$refs.flicker_habit_detail

        this.badgeFlicker.resize()
        this.detailContentFlicker.resize()

        this.syncFlickerIndex('ALL')
    },
    //화면 맞추기
    syncFlickerIndex(div) {
      switch(div) {
        case 'ALL' :
          this.currentDetailIndex = this.queryHabitIndex
          this.badgeFlicker.moveTo(this.currentBadgeIndex, 0)
          this.detailTabFlicker.moveTo(this.currentBadgeIndex, 0)
          this.detailContentFlicker.moveTo(this.currentDetailIndex, 0)
          //다음 승급 FadeIn
          this.nextWrapFadeIn()
          break
        case 'BADGE' :
          if (this.chkMoveTab()) {
              this.currentDetailIndex = this.currentBadgeIndex*2
              this.detailTabFlicker.moveTo(this.currentBadgeIndex, 0)
              this.detailContentFlicker.moveTo(this.currentDetailIndex, 0)
              //다음 승급 FadeIn
              this.nextWrapFadeIn()
          }
          break;
        case 'TAB' :
          if (this.currentDetailIndex != this.detailContentFlicker.getIndex()) {
              this.detailContentFlicker.moveTo(this.currentDetailIndex, 0)
          }
          if (this.chkMoveBadge()) {
              this.badgeFlicker.moveTo(this.currentBadgeIndex, 0)
              //다음 승급 FadeIn
              this.nextWrapFadeIn()
          }
          break
        case 'CONTENT' :
          if (this.chkMoveBadge()) {
              this.detailTabFlicker.moveTo(this.currentBadgeIndex, 0)
              this.badgeFlicker.moveTo(this.currentBadgeIndex, 0)
              //다음 승급 FadeIn
              this.nextWrapFadeIn()
          }
          break
      }
    },
    //다음 승급 FadeIn
    nextWrapFadeIn() {
        $('.next_wrap').hide()
        setTimeout(() => {
            $('.next_wrap').fadeIn(this.animationSpeed.MILLIE_SECONDS)
        }, 110)
    },
    //탭 이동 여부
    chkMoveTab() {
        let result = true
        switch(this.currentDetailIndex) {
            //성실
            case 0: case 1:
                if (this.currentBadgeIndex == 0) {
                    result = false
                }
                break;

            //집중
            case 2: case 3:
                if (this.currentBadgeIndex == 1) {
                    result = false
                }

                break;

            //도전
            case 4: case 5:
                if (this.currentBadgeIndex == 2) {
                    result = false
                }

                break;
        }
        return result
    },
    //이동할 뱃지 인덱스
    chkMoveBadge() {
        let result = true
        switch(this.currentDetailIndex) {
            //성실
            case 0: case 1:
                if (this.currentBadgeIndex == 0) {
                    result = false
                } else {
                    this.currentBadgeIndex = 0
                }
                break;
            //집중
            case 2: case 3:
                if (this.currentBadgeIndex == 1) {
                    result = false
                } else {
                    this.currentBadgeIndex = 1
                }
                break;
            //도전
            case 4: case 5:
                if (this.currentBadgeIndex == 2) {
                    result = false
                } else {
                    this.currentBadgeIndex = 2
                }
                break;
        }
        return result
    },
    //뱃지 플리커 이동완료
    moveEndBadge(e) {
      if (e.index === 0) {
          //성실
          this.queryTitle = '성실';

      } else if (e.index === 1) {
          //집중
          this.queryTitle = '집중'
      } else if (e.index === 2) {
          //도전
          this.queryTitle = '도전'
      }

      //뱃지 인덱스 값
      this.currentBadgeIndex = e.index

      //뱃지 배경 컬러
      this.badgeWrapBgColor(e.index)

      //탭 화면 맞추기
      this.syncFlickerIndex('BADGE')
    },
    //상세 탭 플리커 이동완료
    moveEndTab(e){
      let isMove = true

      switch (e.index) {
          case 0:
              if (this.currentDetailIndex == 0 || this.currentDetailIndex == 1) {
                  isMove = false
              }
              break;

          case 1:
              if (this.currentDetailIndex == 2 || this.currentDetailIndex == 3) {
                  isMove = false
              }
              break;

          case 2:
              if (this.currentDetailIndex == 4 || this.currentDetailIndex == 5) {
                  isMove = false
              }
              break;
      }

      if (isMove) {
          this.selectHabitTab(e.index * 2)
      }
    },
    //상세 내용 플리커 이동완료
    moveEndContent(e) {
        if(e.index == this.currentDetailIndex) {
            return
        }
        this.currentDetailIndex = e.index
        //탭 화면 맞추기
        this.syncFlickerIndex('CONTENT')
    },
    //탭 선택
    selectHabitTab(index) {
        this.currentDetailIndex = index
        this.syncFlickerIndex('TAB')
    },
    //습관 4번째 집중시간 학년별 구분
    setHabit4Img() {
        //기준 : 1~2학년: 20분 이상, 3~4학년: 30분 이상, 5~6학년: 40분 이상
        let resultImg = "/assets/img/detail_goal_bg4_1.png"

        if(this.grade >= 5) {
            resultImg = "/assets/img/detail_goal_bg4_3.png"
        } else if(this.grade >= 3) {
            resultImg = '/assets/img/detail_goal_bg4_2.png'
        }

        return resultImg
    },
    //뱃지 정보 배경
    badgeWrapBgColor(idx) {
        //현재 다음 단계 습관 성공수
        // this.currentCnt = this.queryBadgeList[idx].cnt === null ? 0 : this.queryBadgeList[idx].cnt
        // this.nextCnt = this.queryBadgeList[idx].nextCnt === null ? 0 : this.queryBadgeList[idx].nextCnt
    },
    //뱃지 이미지
    loadBadgeImg(idx) {
        let resultUrl = ""
        let currentLv = this.queryBadgeList[idx].currentLv

        switch(idx) {
            case 0 :
                resultUrl = "@/assets/img/badge/badge_sincerity" + currentLv + ".png"
                break

            case 1 :
                resultUrl = "@/assets/img/badge/badge_concentration" + currentLv + ".png"
                break

            case 2 :
                resultUrl = "@/assets/img/badge/badge_challenge" + currentLv + ".png"
                break
        }

        return resultUrl
    },
    //뱃지 등급 설명 페이지 이동
    goBadgeGrade(index) {
      this.$router.push({name:'campaignBadge', params:{index}}) 
    },
  },
  created () {
    this.getQueryData()
    this.loadCampaign2Status()
    this.loadCampaign2GoalData()
  },
  mounted() {
    this.setFlicker()
    let index=this.$route.params.index;
    console.log('index',index);
    this.moveEndContent({index})
    this.selectHabitTab(index)
  }
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
  padding:50px 0 35px;
  text-align: center;
}
.slide{
  padding: 30px 0;
  .count-wrap{
    .count{
      padding: 10px 0;
      color: #fff;
      font-size: 35px;
      font-weight: bold;
      &::before{
        content:'';
        display: inline-block;
        width: 34px;
        height: 25px;
        margin-right:10px;
        background-image:url(~@/assets/img/white_v_mark.png);
        background-size: 34px;
      }
    }
    .next-level{
      font-size: 20px;
      font-weight: 700;
      span::before{
        content:'';
        display: inline-block;
        width: 18px;
        height: 13px;
        margin:0 5px;
        background-image:url(~@/assets/img/badge_v_mark1.png);
        background-size: 18px;
      }
      &::after{
        content:'';
        display: inline-block;
        width: 27px;
        height: 28px;
        margin-left:10px;
        background-image:url(~@/assets/img/badge_i_mark1.png);
        background-size: 27px;
        vertical-align: middle;
      }
    }
  }
}
#flicker-habit-badge .eg-flick-panel{
  width: 50%;
  height: 170px;
  img{
    width: 142px;
  }
}
#flicker-habit-tab .eg-flick-panel{
  width: 100%;
}
#flicker-habit-detail .eg-flick-panel{
  width: 100%;
}
.tab-menu{
  overflow: hidden;
  border-bottom: solid 1px #eeeeee;
  button{
    width: 50%;
    height: 70px;
    color:#999999;
    font-size: 18px;
    font-weight: 700;
    border-bottom: solid 3px $white;
    &.active{
      color:#333;
      border-bottom: solid 3px #ff7800;
    }
  }
}
.tab-content{
  margin-top: 20px;
  img{
    width: 100%;
  }
}
.check-list{
  li{
    width: calc(100% - 40px);
    height: 56px;
    margin: 0 auto;
    border-bottom: solid 1px #eeeeee;
    padding: 15px 15px 10px;
    .week{
      float: left;
      color:#cccccc;
      font-size: 20px;
      font-weight: 800;
      &.on{
        color:$primary !important;
      }
    }
    .result{
      display: none;
      position: relative;
      float: right;
      padding-right:30px;
      color:#cccccc;
      font-size: 20px;
      font-weight: 800;
      &::after{
        content:'';
        @include position($xy:'y', $right:0);
        width: 23px;
        height: 18px;
        background-image:url(~@/assets/img/disable_detail_v_mark.png);
        background-size: 23px;
      }
    }
    &.on{
      .week{
        color:$black;
      }
      .result{
        display: block;
      }
    }
  }
}
.badge-type1{
  .slide{
    background: #47d4e5;
  }
  .slide .count-wrap .next-level{
    color:#0e8f9e;
    span::before{
      background-image:url(~@/assets/img/badge_v_mark1.png);
    }
    &::after{
      background-image:url(~@/assets/img/badge_i_mark1.png);
    }
  }
  li.on .result.on{
    color:#00cae2;
    &::after{
      background-image:url(~@/assets/img/detail_v_mark1.png);
    }
  }
}
.badge-type2{
  .slide{
    background: #55b0ff;
  }
  .slide .count-wrap .next-level{
    color:#0068c1;
    span::before{
      background-image:url(~@/assets/img/badge_v_mark2.png);
    }
    &::after{
      background-image:url(~@/assets/img/badge_i_mark2.png);
    }
  }
  li.on .result.on{
    color:#0088ff;
    &::after{
      background-image:url(~@/assets/img/detail_v_mark2.png);
    }
  }
}
.badge-type3{
  .slide{
    background: #c39fff;
  }
  .slide .count-wrap .next-level{
    color:#871fca;
    span::before{
      background-image:url(~@/assets/img/badge_v_mark3.png);
    }
    &::after{
      background-image:url(~@/assets/img/badge_i_mark3.png);
    }
  }
  li.on .result.on{
    color:#a136e6;
    &::after{
      background-image:url(~@/assets/img/detail_v_mark3.png);
    }
  }
}
</style>