# Path Library with easylogic


# How to use 

```js
import path from '@easylogic/path'

const d = "M20 20 L 30 30";
const pathObject = new path.PathParser(d);

pathObject.translate(100, 200)

pathObject.scale(1.2, 1.3)

pathObject.reflectionOrigin()

pathObject.flipX()

pathObject.flipY()

pathObject.skewX(10)

pathObject.skewY(10)

pathObject.rotate(90)

pathObject.rotate(90, 10, 10)   

pathObject.getBBox()

pathObject.reverse()
```

# Development 

```
git clone https://github.com/easylogic/path.git
cd path
npm install 
npm run dev 
``` 

# build 

```
npm run build 
```

# License : MIT
