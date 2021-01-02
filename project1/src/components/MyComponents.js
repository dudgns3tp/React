import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
  console.log(props)
  return (<div> 안녕하세요 제 이름은 {props.name} 입니다. <br/>
         children 값은 {props.children} 입니다.  </div> );
}

//props 의 디폴트 를 정의
MyComponent.defaultProps = {
  name: '기본 이름',
}

// props validation
MyComponent.propTypes = {
  name: PropTypes.string
}

export default MyComponent;