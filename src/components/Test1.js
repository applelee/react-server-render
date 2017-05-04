import React,{ Component } from 'react'

// export default () => {
//   return (
//     <div>react server render Test1生阿萨德发生地方</div>
//   )
// }

export default class Test1 extends Component {
  static defaultProps = {
    type:false,
  }

  constructor(props){
    super()

    this.state = {
      type:props.type,
    }
  }

  compnentDidMount(){
    setTimeout(() => {
      // 异步处理
    },2000)
  }

  render(){
    return(
      <div>
        {
          this.state.type === false
          && <div>react server render Test1啊当时发阿发送短发方</div>
          || <div>react server render Test1生asdfasdf地</div>
        }
      </div>
    )
  }
}
