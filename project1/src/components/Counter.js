import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) { // 컴포넌트에 state를 설정할때는 constructor 메서드를 작성하여 설정함!
    super(props);
    //state의 초깃값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 1
    };
  }
  render() {
    const { number, fixedNumber } = this.state;
    return(
      <div>
        <h1>{number}</h1>
        <h2> 바뀌지 않는값 : {fixedNumber} </h2>
        <button
        onClick={() => {
          this.setState({number: number + 1},
            () => { 
              console.log('방금 setState가 호출 되었습니다.');
              console.log(this.state);
            })
          console.log(`Click ${number}`)
        }}
        >
          +1
        </button>

        <button
        onClick={() => { this.setState({fixedNumber: fixedNumber * 2})}}
        > 제곱 </button>
      </div>
    )
  }
}

export default Counter;