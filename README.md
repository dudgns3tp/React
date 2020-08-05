# React


## React 기초

### 선언형
React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다. 애플리케이션의 각 사태에 대한 간단한 뷰먄 설계하세요. 그러면 React는 데이터가 변경됨에 다라 적절한 컴포넌트만 효율적으로 갱신하고 렌더링합니다. 선언형 뷰는 코드를 예측 가능하고 디버그하기 쉽게 만들어 줍니다.  - 리엑트는 오직 뷰에만 신경쓰는 라이브러리다!

<br /><br />
### 컴포넌트 기반

스스로 상태를 관리하는 캡슐화된 컴포넌트를 만드세요. 그리고 이를 조합해 복잡한 UI를 만들어 보세요. 
컴포넌트 로직은 템플릿이 아닌 JavaScript로 작성됩니다. 따라서 다양한 형식의 데이터를 앱안에서손쉽게 전달할 수 있고, DOM과는 별개로 상태를 관리할 수 있습니다.
<br /><br />

### 간단한 Component

React 컴포넌트는 ```render()``` 라는 메서드를 구현하는데, 이것은 데이터를 입력받아화면에 표시할 내용을 반환하는 역할을 합니다. 이 예제에서는 JSX를 사용합니다. 컴포넌트로 전달된 데이터는 ```render()``` 안에서 ```this.props```를 통해 접큰할 수 있습니다.

```Javascript
class HelloMessage extends React.component {
    render(){
        return(
            <div>
              Hello {this.props.name}
            </div>
        );
    }
}

ReactDom.render(
    <HelloMessage name="Younghoon" />,
    document.getElementById('hello-example');
)
```

Result : Hello Younghoon
<br /><br />
### 상태를 가지는 Component

this.props를 이용해 입력 데이터를 다루는 것 외에도 내부적인 상태 데이터를 가질 수 있습니다. 이는 this.state로 접근할 수 있습니다. 컴포넌트의 상태 데이터가 바뀌면 render()가 다시 호출되어 마크업이 갱신됩니다.
<br /><br />

```Javascript
class Timer extends React.component{
    constructor(props){
        super(props);
        this.state = {second: 0};
    }

    tick(){
        this.setState(state =>({
            seconds: state.seconds * 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(()=> this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return(
            <div>
             Seconds: {this.state.seconds}
            </div>
        );
    }

    ReactDom.render(
        <Timer />,
        document.getElementById('timer-example')
    );
}
```
React에서 Component를 생성할 때 state 값을 초기화하거나 메서드를 바인딩할 때 constructor()를 사용합니다. React의 Component의 생성자는 해당 Component가 마운트 되기 전 호출됩니다. React.Component를 상속한 컴포넌트의 생성자를 구현할 때는 super(props)를 선언을 권고하고 있습니다. 이유는 this.props 사용 시 생성자 내에서 정의되지 않아 버그 발생 가능성이 생기기 때문입니다.

```Javascript
constructor(props){
    super(props);
    this.state = {second: 0} // ( O )
    this.setState({second: 0}) // (X)
}
```
props와 state를 사용해서 간단한 Todo 애플리케이션을 만들 수 있습니다. 이 예제에서는 state를 사용해 사용자가 입력한 텍스트와 투두리스트를 관리합니다. 이벤트 핸들러들이 인라인으로 각각 존재하는것처럼 보이지만, 실제로는 이벤트 위임을 통해 하나로 구현됩니다. constructor()를 사용할때 **주의해야할점이** 생성자 내에서는 꼭 **this.state**로 초기값을 할당해 줘야 합니다. 생성자는 ```this.state```를 직접 할당시킬수 있는곳으로 그 이외에는 ```this.setState()```를 사용하세요!
또한 생성자 내에서는 구독 작업이나 외부 API 호출을 하면 안 됩니다. 안 됩니다. 외부 API 호출이 필요하다면 componentDidMount()를 사용하세요!

### 애플리케이션

```Javascript
class TodoApp extends React.
```




##props
 ```props```는 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소입니다. props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있습니다.


## prop-types
prop-types는 전달받은 데이터의 유효성을 검사하기에 좋은 라이브러리다.

```javascript
import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, title, year, summary, poster}){
    return <h4>{title}</h4>;
}

Movie.propTypes = { 
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;
```

## return
return () 
return 의 차이를 알아보자


## route props
route-props