import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { Provider } from 'react-redux'
import App from '../../containers/App'
import configureStore from '../../store/configureStore'
import { findDOMNode } from "react-dom"
function setup(initialState) {
  const store = configureStore(initialState)
  const app = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <App />
    </Provider>
  )
  return {
    app: app,
    heart: TestUtils.scryRenderedDOMComponentsWithClass(app, 'heart'),
    heartNum: TestUtils.scryRenderedDOMComponentsWithClass(app, 'heart')
  }
}

describe('containers', () => {
  describe('App', () => {
    it('should display initial heart', () => {
      const { heartNum } = setup()
      expect(heartNum[0].textContent).toMatch(/^0/)
    })

    it('should display updated pinglun1 after pinglun1 button click', () => {
      const { buttons, p,app } = setup()
      const realDom=findDOMNode(app);
 	  const plbtn=realDom.querySelectorAll('.plbtn');
      TestUtils.Simulate.click(plbtn[0]);//点击评论
  	  const plInput=realDom.querySelectorAll(".pl-input")[0];
  	  plInput.value="any111";
  	  TestUtils.Simulate.change(plInput);//input输入any111
  	  const pingl=TestUtils.scryRenderedDOMComponentsWithClass(app, 'pingl');
   	  TestUtils.Simulate.click(pingl[0]);//点击提交
   	  const text=realDom.querySelectorAll('.body-text p');
      expect(text[text.length-1].textContent).toMatch(/^any111/)
    })

	it('should display updated hf2 after hf2 button click', () => {
      const { buttons, p,app } = setup()
      const realDom=findDOMNode(app);
 	  const plbtn=realDom.querySelectorAll('.plbtn');
      TestUtils.Simulate.click(plbtn[1]);//点击评论
      const hf=TestUtils.scryRenderedDOMComponentsWithClass(app, 'hf');
	  TestUtils.Simulate.click(hf[0]);//点击回复
  	  const hfInput=realDom.querySelectorAll(".hf-input")[0];
  	  hfInput.value="any222";
  	  TestUtils.Simulate.change(hfInput);//input输入any222
  	  const hfBtn=realDom.querySelectorAll('.hf-btn');
   	  TestUtils.Simulate.click(hfBtn[0]);//点击提交
   	  const text=realDom.querySelectorAll('.body-text div p');//选取回复text
      expect(text[text.length-1].textContent).toMatch(/^any222/)
    })
  })
})
