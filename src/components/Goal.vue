<template>
  <article class="content" v-show="show">
    <div class="content-header">
      <div class="tab-menu">
        <button :class="{active:currentTab=='my'}" @click="changeGoal('my')">우리아이의</button>
        <span class="line"></span>
        <button :class="{active:currentTab=='friends'}" @click="changeGoal('friends')">또래들의</button>
      </div>
    </div>
    <div class="content-body">
      <div class="control">
        <span>{{currentWeek}}주차 목표</span>
        <button class="btn-prev-week" :class="{active:btnPrevWeek}" :disabled="!btnPrevWeek" @click="changeWeek('prev')">
          <span class="blind">이전 주차</span>
        </button>
        <button class="btn-next-week" :class="{active:btnNextWeek}" :disabled="!btnNextWeek" @click="changeWeek('next')">
          <span class="blind">다음 주차</span>
        </button>
      </div>
      <div class="tab-content">
        <div id="my-goal" style="display:block;" v-show="currentTab=='my'">
          <ul class="horizontal">
            <li v-for="(item, index) in wkGoal" :key="index"><p>"{{item.goal==''?'입력된 목표가 없습니다.':item.goal}}"</p></li>
          </ul>
        </div>
        <div id="friends-goal" v-show="currentTab=='friends'">
          <ul class="horizontal">
            <li v-for="(item, index) in wkGoalGrp" :key="index">
              <ul class="vertical">
                <li v-for="(goalGrpItem, index) in item.goalGrp" :key="index">
                  <p>{{goalGrpItem}}</p> 
                  <span class="name">{{item.studNmGrp[index]==''?'입력된 목표가 없습니다.':item.studNmGrp[index]}}</span>
                </li>
              </ul>
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
  data() {
    return {
      slideWdith:0,
      //자동 슬라이드 배열
      slideMoves:[],
      currentTab:'my',
      currentWeek:0,
      btnPrevWeek:true,
      btnNextWeek:false,
      show:false
    }
  },
  computed: {
    ...mapState([
      'ord',
      'wkGoal',
      'wkGoalGrp'
    ]),
  },
  methods: {
    ...mapActions(['loadCampaign2Status','loadCampaign2GoalData']),
    verticalSlide(){
      const vm=this;
      let slideHeight = 80;
      $('.vertical').each(function(){
        vm.slideMoves.push(setInterval(() => {
          $(this).stop(true, true).animate({
            marginTop: -slideHeight
          }, 1000, function() {
            $(this).find('li').eq(0).appendTo($(this));
            $(this).css('marginTop', 0);
          })
        }, 5000))
      })
    },
    horizontalSlide(){
      const vm=this;
      $('.horizontal').each(function(){
        let $slideItem = $(this).children('li');
        $slideItem.width(vm.slideWdith)
        $(this).width(vm.slideWdith * $slideItem.length);
        $(this).css('marginLeft', -($(this).width()-vm.slideWdith));
      })
      
    },
    changeWeek(arrow) {
      const vm=this;
      if(arrow=='prev'){
        this.currentWeek--;
        if(this.currentWeek<=1) {
          this.currentWeek=1;
          this.btnPrevWeek=false; 
        }else{
          this.btnPrevWeek=true; 
          this.btnNextWeek=true;
        }
        $('.horizontal').each(function(){
          $(this).stop(true, true).animate({
            marginLeft: -($(this).width()-vm.slideWdith*2)
          }, 500, function(){
            $(this).children('li').last().prependTo($(this));
            $(this).css('marginLeft', -($(this).width()-vm.slideWdith));
          })
        })
      }else{
        this.currentWeek++;
        if(this.currentWeek>=this.ord) {
          this.currentWeek=this.ord;
          this.btnNextWeek=false; 
        }else{
          this.btnPrevWeek=true; 
          this.btnNextWeek=true; 
        }
        $('.horizontal').each(function(){
          $(this).children('li').eq(0).appendTo($(this));
          $(this).css('marginLeft', -($(this).width()-vm.slideWdith*2));
          $(this).stop(true, true).animate({
            marginLeft: -($(this).width()-vm.slideWdith)
          }, 500)
        })
      }
    },
    changeGoal(name){
      this.currentTab=name;
      if(name=='friends'){
        this.verticalSlide();
      }else{
        for (let i=0; i < this.slideMoves.length; i++) {
          clearInterval(this.slideMoves[i]);
        }
      }
    },
    slideWidth(){
      let deviceW=$('body').width();
      if(deviceW > 500){
        this.slideWdith=400;
      }else{
        this.slideWdith=$('body').width()-60;
      }
      this.horizontalSlide()
    }
  },
  created () {
    window.addEventListener('resize', () => {
      this.slideWidth();
    });
    
    this.loadCampaign2Status().then(()=>{
      this.currentWeek=this.ord;
      this.slideWidth();
      this.show=true;
    })
    this.loadCampaign2GoalData()
  },
  mounted () {
  },
}
</script>

<style lang="scss" scoped>

.tab-menu{
  button{
    color: #b7a95b;
    font-family: NotoSans;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.1em;
    &.active{
      color: #333;
      font-size: 18px;
    }
  }
  .line{
    display: inline-block;
    width: 1px;
    height: 11px;
    background: #b7a95b;
    margin: 3px 11px 0;
  }
}

.control{
  position: relative;
  width: 170px;
  height: 50px;
  line-height: 50px;
  margin:auto;
  text-align: center;
  span{
    font-family: NotoSans;
    font-weight: 400;
    &::before{
      content: '';
      display: inline-block;
      width: 31px;
      height: 31px;
      margin-right:10px;
      background: url(~@/assets/img/goal_mark.png);
      background-size: 31px;
      vertical-align: middle;
    }
  }
  button{
    width: 12px;
    height: 19px;
    background-size: 12px;
    &.btn-prev-week{
      @include position($xy:'y', $left:0);
      background-image:url(~@/assets/img/disable_pre_arrow.png);
      &.active{
        background-image:url(~@/assets/img/enable_pre_arrow.png);
      }
    }
    &.btn-next-week{
      @include position($xy:'y', $right:0);
      background-image:url(~@/assets/img/disable_next_arrow.png);
      &.active{
        background-image:url(~@/assets/img/enable_next_arrow.png);
      }
    }
  }
}

.tab-content{
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  &>div{
    max-width: 400px;
    overflow: hidden;
  }

  ul{
    li{
      font-size: 18px;
      font-weight: 700;
      text-align: center;
      .name{
        font-size: 14px;
      }
    }
  }
  .horizontal{
    li{
      float: left;
    }
  }
  #friends-goal .horizontal{
    height: 80px;
    overflow: hidden;
  }
  .vertical{
    li{
      float: none;
      height: 80px;
    }
  }
}

</style>