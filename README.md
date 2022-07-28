# Code And Text Editor (https://www.npmjs.com/package/cat-editor)
### This is an interactive coding environment.
### You can write Javascript, see it excuted, and write comprehensive documentation using markdown.

- Click any text cell (including this one) to edit it
- The code in each code editor is all joined together into one file. if you define a variable in cell #1, you can refer to it in any following cell
- you can show any React component, string, or anithing else by calling the `show` function. this is a function build in to this environment.
- Call show multiple times to show multiple values
- Re-order or delete cells using the buttons on the top right
- Add new cells by hovering on the divider between each cell


## Get started

`npx cat-editor serve [-p port]`

![](https://velog.velcdn.com/images/tchaikovsky/post/2456268a-a13e-4e22-877a-452d0a7ff0dc/image.png)


## How it works ?


### Example
```tsx
// react v 18.0이 내장되어 있습니다.
// react 패키지 뿐만 아니라 npmjs에 등록 된 모든 패키지를 가져올 수 있습니다.
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
