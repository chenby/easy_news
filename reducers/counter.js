import { LOVE_COUNTER_ONE,LOVE_COUNTER_TWO,LOVE_COUNTER_THREE } from '../actions/counter'
import { TXST_COUNTER_ONE,TXST_COUNTER_TWO,TXST_COUNTER_THREE } from '../actions/counter'
import { HF_COUNTER_ONE,HF_COUNTER_TWO,HF_COUNTER_THREE } from '../actions/counter'
export function counter(state = {one:{id:1,counter:0,title:"好险，库里将到手的锅一脚踢飞！",time:1 },two:{id:2,counter:0,title:"中国男足赔率1：501！",time:42},three:{id:3,counter:0,title:"为什么要善待高洪波和宫鲁鸣",time:1}}, action) {
  switch (action.type) {
    case LOVE_COUNTER_ONE:
      return Object.assign({},state,{one:{id:1,counter:++state.one.counter,title:state.one.title,time:state.one.time }})
    case LOVE_COUNTER_TWO:
	 return Object.assign({},state,{two:{id:2,counter:++state.two.counter,title:state.two.title,time:state.two.time  }})
    case LOVE_COUNTER_THREE:
	 return Object.assign({},state,{three:{id:3,counter:++state.three.counter,title:state.three.title,time:state.three.time }})
    default:
      return state
  }
}
export function content(state = [ [{text:"这里是评论1",huifu: ["huifuxxxxxxxxxxxxx"] },{text:"这里是评论1.2",huifu:[]}],[{text:"这里是评论2",huifu:["huifuxxxxxxxxxxxxx"]}],[{text:"这里是评论3",huifu:["huifuxxxxxxxxxxxxx"]} ]], action){
    switch (action.type) {
    case TXST_COUNTER_ONE:
      const newState=state.concat();
      newState[0].push({text:action.text,huifu:[]})
      return newState;
    case TXST_COUNTER_TWO:
      const newState1=state.concat();
       newState1[1].push({text:action.text,huifu:[]})
      return newState1;
    case TXST_COUNTER_THREE:
       const newState2=state.concat();
       newState2[2].push({text:action.text,huifu:[]})
       return newState2;
    case HF_COUNTER_ONE:
        const HfState=state.concat();
        HfState[0][action.id].huifu.push(action.hf);
        return HfState;
    case HF_COUNTER_TWO:
        const HfState1=state.concat();
       HfState1[1][action.id].huifu.push(action.hf);
       return HfState1
    case HF_COUNTER_THREE:
        const HfState2=state.concat();
        HfState2[2][action.id].huifu.push(action.hf);
         return HfState2
    default:
      return state
  }
}

 // var data=[
 //      [
 //         {
 //            text:"这里是评论1",
 //            huifu:["huifuxxxxxxxxxxxxx",'2xxxxxxxxxxxxxxxxxxxx','3xxxxxxxxxxxxxxxxx']
 //          },
 //         {
 //            text:"这里是评论1.2",
 //            huifu:["huifuxxxxxxxxxxxxx"]
 //          }
 //      ],[
 //          {
 //            text:"这里是评论2",
 //            huifu:["huifuxxxxxxxxxxxxx",'2xxxxxxxxxxxxxxxxxxxx','3xxxxxxxxxxxxxxxxx']
 //          }
 //      ],[
 //          {
 //            text:"这里是评论3",
 //            huifu:["huifuxxxxxxxxxxxxx",'2xxxxxxxxxxxxxxxxxxxx','3xxxxxxxxxxxxxxxxx']
 //          }
 //        ]  
 //    ]
/*
 state={
  counter:{
    one:{id:1,counter:0,title:"xxxx" ,time:1},
    two:{id:2,counter:0,title:"xxxx", time:1},
    three:{id:3,counter:0,title:"xxxx",time:1}
  }
	
}
*/