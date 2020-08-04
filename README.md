# React


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