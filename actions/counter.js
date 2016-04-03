export const LOVE_COUNTER_ONE = 'LOVE_COUNTER_ONE'
export const LOVE_COUNTER_TWO = 'LOVE_COUNTER_TWO'
export const LOVE_COUNTER_THREE = 'LOVE_COUNTER_THREE'

export const TXST_COUNTER_ONE = 'TXST_COUNTER_ONE'
export const TXST_COUNTER_TWO = 'TXST_COUNTER_TWO'
export const TXST_COUNTER_THREE = 'TXST_COUNTER_THREE'


export const HF_COUNTER_ONE = 'HF_COUNTER_ONE'
export const HF_COUNTER_TWO = 'HF_COUNTER_TWO'
export const HF_COUNTER_THREE = 'HF_COUNTER_THREE'
export function increment1() {
  return {
    type: LOVE_COUNTER_ONE
  }
}
export function increment2() {
  return {
    type: LOVE_COUNTER_TWO
  }
}
export function increment3() {
  return {
    type: LOVE_COUNTER_THREE
  }
}

export function text1(text) {
  return {
    type: TXST_COUNTER_ONE,
    text:text
  }
}
export function text2(text) {
  return {
    type: TXST_COUNTER_TWO,
    text:text
  }
}
export function text3(text) {
  return {
    type: TXST_COUNTER_THREE,
    text:text
  }
}

export function hf1(id,text) {
  return {
    type: HF_COUNTER_ONE,
    id:id,
    hf:text
  }
}
export function hf2(id,text) {
  return {
    type: HF_COUNTER_TWO,
    id:id,
    hf:text
  }
}
export function hf3(id,text) {
  return {
    type: HF_COUNTER_THREE,
    id:id,
    hf:text
  }
}
