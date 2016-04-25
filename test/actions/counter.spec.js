import expect from 'expect'
import * as actions from '../../actions/counter'

describe('actions', () => {
  it('increment1 should create increment1 action', () => {
    expect(actions.increment1()).toEqual({ type: actions.LOVE_COUNTER_ONE })
  })
  it('increment2 should create increment1 action', () => {
    expect(actions.increment2()).toEqual({ type: actions.LOVE_COUNTER_TWO })
  })
  it('increment3 should create increment1 action', () => {
    expect(actions.increment3()).toEqual({ type: actions.LOVE_COUNTER_THREE })
  })

  it('text1 should create text1 action', () => {
    expect(actions.text1("any1")).toEqual({ type: actions.TXST_COUNTER_ONE,text:"any1" })
  })
  it('text2 should create text1 action', () => {
    expect(actions.text2("any2")).toEqual({ type: actions.TXST_COUNTER_TWO,text:"any2" })
  })
  it('text3 should create text1 action', () => {
    expect(actions.text3("any3")).toEqual({ type: actions.TXST_COUNTER_THREE,text:"any3" })
  })

  it('hf1 should create hf1 action', () => {
    expect(actions.hf1(1,"any1")).toEqual({ type: actions.HF_COUNTER_ONE,id:1,hf:"any1" })
  })
  it('hf2 should create hf1 action', () => {
    expect(actions.hf2(2,"any2")).toEqual({ type: actions.HF_COUNTER_TWO,id:2,hf:"any2" })
  })
  it('hf3 should create hf1 action', () => {
    expect(actions.hf3(3,"any3")).toEqual({ type: actions.HF_COUNTER_THREE,id:3,hf:"any3"})
  })
})
