import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //캠페인시즌
    campaignNo:2,
    //학생 시퀀스ID
    studId:1804582,
    //캠페인 주차 
    ord:0,
    //학년 
    studGrade:4,
    //누적 습관 성공 수 
    totalSuccessCnt:0,
    //권장 습관 성공 수
    maxSuccessCnt:0,
    //습관 성공 일시 [습관 성공 수:6,30,42,60]
    successDttm:[],
    //지급 완료한 콘 총합
    totalCon:0,
    //다음 단계 지급되는 콘
    nextCon:0,
    //현재 주차 습관 성공 여부
    currSuccess:[],
   
    //누적 성공수 
    grpCnt:[],
    //다음 승급시 필요한 성공 수
    grpNextCnt:[],
    //주차별 성공여부 조합
    weeksSuccess:[],
    //주차별 달성률 조합
    weeksRate:[],

    //우리아이 목표리스트
    wkGoal:[],
    //또래 목표 리스트
    wkGoalGrp:[],
  },
  mutations: {
    getCampaign2Status(state, payload){
      state.ord = payload.ord;
      state.totalSuccessCnt = payload.totalSuccessCnt;
      state.maxSuccessCnt = payload.maxSuccessCnt;
      state.successDttm = payload.successDttm;
      state.currSuccess = [];
      state.weeksSuccess = [];
      state.weeksRate = [];
      for(let i=1; i<=6; i++){
        state.currSuccess.push(payload['currSuccess'+i+'Fnsh']);
        state.weeksSuccess.push(payload['success'+i+'FnshSp']);
        state.weeksRate.push(payload['success'+i+'ResultSp']);
      }
      state.grpCnt=[
        payload.grp1Cnt,
        payload.grp2Cnt,
        payload.grp3Cnt
      ]
      state.grpNextCnt=[
        payload.grp1NextCnt,
        payload.grp2NextCnt,
        payload.grp3NextCnt
      ]
    },
    getCampaign2GoalData(state, payload){
      state.wkGoal = payload.wkGoal;
      state.wkGoalGrp = payload.wkGoalGrp;
      state.grade = payload.grade;
    }
  },
  actions: {
    /**
     * @description 캠페인 현황
     * 
     */
    async loadCampaign2Status({state, commit}, payload){
      await axios.get('/ai/dev/parent/getCampaign2Status',{
        params:{
          campaignNo:state.campaignNo,
          studId:state.studId
        }
      }).then( res => {
        if(res.data.msg.resultCode=='0000'){
          commit('getCampaign2Status', res.data.data)
        }
      })
    },
    /**
     * @description 우리아이 및 또래 목표 데이터
     * 
     */
    loadCampaign2GoalData({state, commit}, payload){
      axios.get('/ai/dev/parent/getCampaign2GoalData',{
        params:{
          campaignNo:state.campaignNo,
          studId:state.studId,
          studGrade:state.studGrade
        }
      }).then( res => {
        if(res.data.msg.resultCode=='0000'){
          commit('getCampaign2GoalData', res.data.data)
        }
      })
    }
  },
  modules: {

  }
})
