import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Counter from '../../components/Counter'
import {findDOMNode} from 'react-dom'
function setup() {
  const actions = {
    increment1: expect.createSpy(),
    increment2: expect.createSpy(),
    increment3: expect.createSpy(),

    text1: expect.createSpy(),
    text2: expect.createSpy(),
    text3: expect.createSpy(),

    hf1: expect.createSpy(),
    hf2: expect.createSpy(),
    hf3: expect.createSpy()
  }
  const initailCounter={
    one:{id:1,counter:0,title:"xxxx" ,time:1},
    two:{id:2,counter:0,title:"xxxx", time:1},
    three:{id:3,counter:0,title:"xxxx",time:1}
  }
  const initailContent=[ 
       [{text:"这里是评论1",huifu: ["huifuxxxxxxxxxxxxx"] },{text:"这里是评论1.2",huifu:[]}],
       [{text:"这里是评论2",huifu:["huifuxxxxxxxxxxxxx"]}],
       [{text:"这里是评论3",huifu:["huifuxxxxxxxxxxxxx"]} ]
   ];
  const component = TestUtils.renderIntoDocument(<Counter content={initailContent} counter={initailCounter} {...actions} />)
  return {
    component: component,
    actions: actions,
    heart:TestUtils.scryRenderedDOMComponentsWithClass(component,"heart"),
    heartNum: TestUtils.scryRenderedDOMComponentsWithClass(component, 'heart')
  }
}

describe('Counter component', () => {
  it('should display heart number', () => {
    const { heartNum } = setup()
    expect(heartNum[0].textContent).toMatch(/^0/g)
  })

  it('click first heart should call increment1', () => {
    const { heart, actions } = setup()
    TestUtils.Simulate.click(heart[0])
    expect(actions.increment1).toHaveBeenCalled()
  })

  it('pinglun2 buttons should call text2', () => {
    const {actions,component } = setup()
 	const realDom=findDOMNode(component);
 	const plbtn=realDom.querySelectorAll('.plbtn');
    TestUtils.Simulate.click(plbtn[1])
    const pingl=TestUtils.scryRenderedDOMComponentsWithClass(component, 'pingl');
    TestUtils.Simulate.click(pingl[0]);
    expect(actions.text2).toHaveBeenCalled()
  })

  it('huifu3 button should call hf3', () => {
    const { actions,component } = setup()
    const realDom=findDOMNode(component);
 	const plbtn=realDom.querySelectorAll('.plbtn');
    TestUtils.Simulate.click(plbtn[2]);//点击评论
  	const hf=TestUtils.scryRenderedDOMComponentsWithClass(component, 'hf');
    TestUtils.Simulate.click(hf[0]);//点击回复
    const hfBtn=TestUtils.scryRenderedDOMComponentsWithClass(component, 'hf-btn');
    TestUtils.Simulate.click(hfBtn[0]);//点击回复
    expect(actions.hf3).toHaveBeenCalled()
  })
})
