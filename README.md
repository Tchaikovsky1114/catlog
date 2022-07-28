# Code And Text Editor (https://www.npmjs.com/package/cat-editor)
### 자바스크립트 코드와 markdown을 함께 사용할 수 있는 에디터입니다.
### 코드를 작성하고, 실행 결과를 나타내고, 마크다운을 사용하여 포괄적인 문서를 작성할 수 있습니다.

- 편집하려면 텍스트 셀을 클릭하세요. markDown 문법으로 작성 가능합니다. ☺
- 각 코드 편집기의 코드는 모두 하나의 파일로 결합됩니다. 첫번째 CodeCell에서 변수를 정의하면 다른 셀에서 해당 변수를 참조할 수 있습니다! 😄
- 에디터만의 함수 `show`를 호출하여 모든 React 구성 요소, 문자열 또는 기타 항목을 표시할 수 있습니다.
- 오른쪽 상단의 버튼을 사용하여 셀 재정렬 또는 삭제할 수 있습니다. 🛠
- 각 셀 사이의 구분선에 마우스를 올리시면 새로운 셀을 추가할 수 있는 기능이 나타납니다.


___


## Get started

`npx cat-editor serve [-p port]`

![](https://velog.velcdn.com/images/tchaikovsky/post/4edc800c-3048-4a0c-8a0a-e7d55ff43f29/image.png)


## How it works ?

- react v18이 내장되어 있습니다.(react와 reac-dom을 불러오지 않아도 바로 작성 가능합니다.)
- 모든 코드는 react-persist에 의해 3초마다 저장되고 있습니다.
- react 패키지 뿐만 아니라 npmjs에 등록 된 모든 패키지를 가져올 수 있습니다.
- CodeCell 작성칸에 마우스가 Hover되면, Prettier를 적용할 수 있는 top-right 방향에 코드정리 버튼이 활성화됩니다.

___
### Example
```tsx


import {useState,useEffect} from 'react'
import axios from 'axios'
const Counter = () => {
  const [count,setCount] = useState(0);


  useEffect(()=>{
    //... axios.get()
  },[])
  return (
    <>
    <div>{count}</div>
    <button onClick={() => setCount(prev => prev += 1)}>click me</button>
    </>
  )
}
```

```tsx
show(<Counter/>)
```


![](https://velog.velcdn.com/images/tchaikovsky/post/e87dd443-7da5-4575-b27b-540649e970c1/image.gif)



## Add-ons

![](https://velog.velcdn.com/images/tchaikovsky/post/c696fb10-c5af-418a-8bd1-d5a44b087e0b/image.gif)
