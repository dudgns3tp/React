import React from 'react';

class App extends React.Component{
  state = {
    isLoading: true,
    movie : []
  };

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false});
    }, 6000)
  }

  render(){
    const {isLoading} = this.state;
    return <div>{isLoading ? 'Loading...' : 'we are ready'} </div>;
  }
}

export default App;


/*
class App extends React.Component {
  constructor(props){
    super(props);
    console.log('hello');
  }

  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate(){
    console.log(`I'm updated`);
  }

  state = {
    count : 0,
  };

  add = () =>{
    this.setState(current =>({
      count : current.count + 1
    }))
  }

  minus = () =>{
    this.setState(current =>({
      count : current.count - 1
    }))
  }

  render(){
    console.log("i'm rendering");
    return (
      <div>
        <h1> I'm a class Component {this.state.count} </h1>
        <button onClick = {this.add}> Add </button>
        <button onClick = {this.minus}> Minus</button>
    </div>
    );
  }
}


import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  console.log(foodLike.map(renderFood))
  return (
  <div>
    <h1> I like {name}</h1>
    <h4> {rating}/5.0</h4>
    <img src = {picture} alt = {name} />
  </div>
  )
}

const renderFood = dish => <Food key = {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating} />

function App() {
  return (
  <div> 
    <h1> Hello </h1> 
    {foodLike.map(renderFood)}
  </div>
  )
}

const foodLike  = [
  {
    id:1,
    name:'kimchi',
    image:"https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png",
    rating : 5
  },
  {
    id:2,
    name:'pizza',
    image:"https://post-phinf.pstatic.net/MjAxODAzMTNfMjEx/MDAxNTIwOTA4ODU0OTE5.WtZJXpkGz4HkkQ3cKfb5q3je4EDAzzL_mtNEICGYIbog.ddY72F-n8VJd3EusCa7CfW4Ds37PJoR23Qx1SXpF9xcg.JPEG/image_9931661511520908830333.jpg?type=w800_q75",
    rating : 4.9
  },
  {
    id:3,
    name:'chicken',
    image:"https://economychosun.com/query/upload/303/20190608214338_gubchoja.jpg",
    rating : 3.9
  },
];

Food.prototype = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
};
*/
