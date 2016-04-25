import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    const { increment1,increment2,increment3, counter,content} = this.props
    const {text1,text2,text3,hf1,hf2,hf3} =this.props;
    const one=counter.one.counter;
    const two=counter.two.counter;
    const three=counter.three.counter;     
    var that=this;
    const _sortBy=function(obj,val){
       var temp=[];
       for(var k in obj){
        temp.push(obj[k])
       }
       temp.sort(function(p,c){
        return c[val]-p[val]
       })
       return temp;
    }
    var children= _sortBy(counter,"counter");

    return (
      <div >
         {
          children.map(function (items) {
            var arr=[increment1,increment2,increment3]
            var arr1=[text1,text2,text3]
            var arr2=[hf1,hf2,hf3]
            return <Box ince={arr[items.id-1]} text={arr1[items.id-1]}  hf={arr2[items.id-1] } data={content} id={items.id} counter={items.counter} key={items.id} src={items.id} title={items.title} time={items.time} />;
          })
        }
          
      </div>
    )
  }
} 
var Box = React.createClass({

  getInitialState:function() {
    return {
      display: false
    }
  },
  handleClick:function(){
    console.log(this.props);
  },
  displayContent:function(){
    if ( !this.state.display) {
      this.setState({display: true})
    }else{
       this.setState({display: false})
    }
   
  },
 render: function(){
    // const { ince,counter,src,title,time } = this.props
    return (
      <section refs="">
          <div className="pull-left" >
            <img className="img" src={"./public/img/"+this.props.src+".jpg" } onClick={this.handleClick} />
          </div>
          <div className="section-text  ">
            <h4 style={{color:'black'}}>{this.props.title}</h4>
            <div className="clearfix">
              <span className="time pull-left" style={{color:'gray'}}  >
                {this.props.time}小时前
              </span>
              <span className="pull-right heart"   style={{color:'red'}} onClick={this.props.ince}>
                <i className="glyphicon glyphicon-heart"></i>
                 {this.props.counter}
              </span>
              <a className="pull-right plbtn" onClick={this.displayContent}  style={{marginRight:'20px'}} >评论</a>
            </div>
          </div> 
          {
              this.state.display ?<TextContent id={this.props.id} text={this.props.text} hf={this.props.hf}  data={this.props.data} />:null
          }
      </section>
    )
  }
})
class TextContent extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      display: false
    }
  }
  handleClick(keys){
    if ( !this.state.display) {
      this.setState({display: keys+1})
    }else{
       this.setState({display: false})
    }
  }
  handleAddHf(){
    const {hf} =this.props;
    hf(this.state.display-1,this.refs.addHf.value );
    this.setState({display: false})
  }
  AddContent(){
    const {text} =this.props;
    text(this.refs.add.value )
    
  }
  render() {
    var that=this;
    const {data,id} =  this.props;
    const newId=id-1;
    return (
      <div className="pinglun form-horizontal">
        <div className="form-group add_pl" >
          <div className="pl-wrap pull-left"  >
            <input className="form-control pl-input" ref="add" name="pinglun" type="text" placeholder="这里可以添加评论的哦~" />
          </div>
          <input className="btn btn-primary pingl"  type="submit" onClick={this.AddContent.bind(this)} value="提交" />
        </div>
        <div className="body-main">
        {
          data[newId].map(function (items,keys) {
            return (
              <div key={keys} className="body-text">
                <h5>游客: <a className="hf" onClick={that.handleClick.bind(that,keys)}>回复</a> <a href="">转发</a></h5>
                <p>{items.text}</p>
                  {
                    items.huifu.map(function (item,keyss) {
                    return ( <div key={keyss}>
                                <h5 className="huifu-user">游客回复：<a onClick={that.handleClick.bind(that,keys)} >回复</a> <a href="">转发</a></h5>
                                <p className="huifu">{item}</p>
                            </div>
                      )
                  }) 
                  } 
                  
              </div>
            )
          })
        }  
        </div>
            {
              that.state.display ?<div className="form-group add_pl" >
                                <div className="pl-wrap pull-left"  >
                                  <input className="form-control hf-input" ref="addHf" name="pinglun" type="text" placeholder="这里可以添加评论的哦~" />
                                </div>
                                <input className="btn btn-warning hf-btn"  type="submit" onClick={that.handleAddHf.bind(that)} value="提交" />
                              </div>:null
                   }      
    </div>
    )
  }
} 
export default Counter
