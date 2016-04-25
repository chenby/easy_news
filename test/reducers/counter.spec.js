import expect from 'expect'
import {counter} from '../../reducers/counter'
import {content} from '../../reducers/counter'
import { LOVE_COUNTER_ONE,LOVE_COUNTER_TWO,LOVE_COUNTER_THREE } from '../../actions/counter'
import { TXST_COUNTER_ONE,TXST_COUNTER_TWO,TXST_COUNTER_THREE } from '../../actions/counter'
import { HF_COUNTER_ONE,HF_COUNTER_TWO,HF_COUNTER_THREE } from '../../actions/counter'

describe('reducers', () => {
  describe('counter', () => {
    const initailState={
      one:{id:1,counter:0,title:"好险，库里将到手的锅一脚踢飞！",time:1 },
      two:{id:2,counter:0,title:"中国男足赔率1：501！",time:42},
      three:{id:3,counter:0,title:"为什么要善待高洪波和宫鲁鸣",time:1}
    };
    it('should handle initial state', () => {
      expect(counter(undefined, {})).toEqual(initailState);
    })

    it('should handle LOVE_COUNTER_ONE', () => {
      const state={
        one:{id:1,counter:1,title:"好险，库里将到手的锅一脚踢飞！",time:1 },
        two:{id:2,counter:0,title:"中国男足赔率1：501！",time:42},
        three:{id:3,counter:0,title:"为什么要善待高洪波和宫鲁鸣",time:1}
      };
      expect(counter(initailState, { type: LOVE_COUNTER_ONE })).toEqual(state);
    })

    it('should handle LOVE_COUNTER_TWO', () => {
      const state={
        one:{id:1,counter:0,title:"好险，库里将到手的锅一脚踢飞！",time:1 },
        two:{id:2,counter:1,title:"中国男足赔率1：501！",time:42},
        three:{id:3,counter:0,title:"为什么要善待高洪波和宫鲁鸣",time:1}
      };
      expect(counter(initailState, { type: LOVE_COUNTER_TWO })).toEqual(state);
    })

    it('should handle LOVE_COUNTER_THREE', () => {
      const state={
        one:{id:1,counter:0,title:"好险，库里将到手的锅一脚踢飞！",time:1 },
        two:{id:2,counter:0,title:"中国男足赔率1：501！",time:42},
        three:{id:3,counter:1,title:"为什么要善待高洪波和宫鲁鸣",time:1}
      };
      expect(counter(initailState, { type: LOVE_COUNTER_THREE })).toEqual(state);
    })
    it('should handle unknown action type', () => {
      expect(counter(initailState, { type: 'unknown' })).toEqual(initailState);
    })
  })
  describe('content', () => {
    const initailState=[ 
      [{text:"这里是评论1",huifu: ["huifuxxxxxxxxxxxxx"] },{text:"这里是评论1.2",huifu:[]}],
      [{text:"这里是评论2",huifu:["huifuxxxxxxxxxxxxx"]}],
      [{text:"这里是评论3",huifu:["huifuxxxxxxxxxxxxx"]} ]
    ];
    it('should handle initial state', () => {
      expect(content(undefined, {})).toEqual(initailState);
    })

    it('should handle TXST_COUNTER_ONE', () => {
      const state=[
         [{text:"这里是评论1",huifu: ["huifuxxxxxxxxxxxxx"] },{text:"这里是评论1.2",huifu:[]},{text:"any1",huifu:[]}],
         [{text:"这里是评论2",huifu:["huifuxxxxxxxxxxxxx"]}],
         [{text:"这里是评论3",huifu:["huifuxxxxxxxxxxxxx"]} ]
      ];
      expect(content(initailState, { type: TXST_COUNTER_ONE,text:"any1" })).toEqual(state)
    })

    it('should handle TXST_COUNTER_TWO', () => {
      const state=[
         [{text:"这里是评论1",huifu: ["huifuxxxxxxxxxxxxx"] },{text:"这里是评论1.2",huifu:[]}],
         [{text:"这里是评论2",huifu:["huifuxxxxxxxxxxxxx"]},{text:"any2",huifu:[]}],
         [{text:"这里是评论3",huifu:["huifuxxxxxxxxxxxxx"]} ]
      ];
      expect(content(initailState, { type: TXST_COUNTER_TWO,text:"any2" })).toEqual(state)
    })

    it('should handle TXST_COUNTER_THREE', () => {
      const state=[
         [{text:"这里是评论1",huifu: ["huifuxxxxxxxxxxxxx"] },{text:"这里是评论1.2",huifu:[]}],
         [{text:"这里是评论2",huifu:["huifuxxxxxxxxxxxxx"]}],
         [{text:"这里是评论3",huifu:["huifuxxxxxxxxxxxxx"]},{text:"any3",huifu:[]} ]
      ];
      expect(content(initailState, { type: TXST_COUNTER_THREE,text:"any3" })).toEqual(state)
    })
    

    it('should handle HF_COUNTER_ONE', () => {
      const state=[
         [{text:"这里是评论1",huifu: ["huifuxxxxxxxxxxxxx"] },{text:"这里是评论1.2",huifu:["hf1"]}],
         [{text:"这里是评论2",huifu:["huifuxxxxxxxxxxxxx"]}],
         [{text:"这里是评论3",huifu:["huifuxxxxxxxxxxxxx"]}]
      ];
      expect(content(initailState, { type: HF_COUNTER_ONE,id:1,hf:"hf1" })).toEqual(state)
    })

   it('should handle HF_COUNTER_TWO', () => {
      const state=[
         [{text:"这里是评论1",huifu: ["huifuxxxxxxxxxxxxx"] },{text:"这里是评论1.2",huifu:[]}],
         [{text:"这里是评论2",huifu:["huifuxxxxxxxxxxxxx","hf2"]}],
         [{text:"这里是评论3",huifu:["huifuxxxxxxxxxxxxx"]}]
      ];
      expect(content(initailState, { type: HF_COUNTER_TWO,id:0,hf:"hf2" })).toEqual(state)
    })

   it('should handle HF_COUNTER_THREE', () => {
      const state=[
         [{text:"这里是评论1",huifu: ["huifuxxxxxxxxxxxxx"] },{text:"这里是评论1.2",huifu:[]}],
         [{text:"这里是评论2",huifu:["huifuxxxxxxxxxxxxx"]}],
         [{text:"这里是评论3",huifu:["huifuxxxxxxxxxxxxx","hf3"]}]
      ];
      expect(content(initailState, { type: HF_COUNTER_THREE,id:0,hf:"hf3" })).toEqual(state)
    })

    it('should handle unknown action type', () => {
      expect(content(initailState, { type: 'unknown' })).toEqual(initailState)
    })
  })
})
