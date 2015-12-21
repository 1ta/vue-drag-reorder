# vue-drag-reorder

## Usage
### Install
```
npm install vue-drag-reorder
```  

### Install in Vue

```
var drapPlugin = require('vue-drag-reorder')
drapPlugin.install(Vue)
```

### HTML
```
<ul v-droper="list">
  <li v-dragable v-for="item in list">{{item}}</li>
</ul>
```

### draging style

```
.yita-draging {
  background-color: grey
}
.yita-draging-zone {
  background-color: orange
}
```

### use another class name
```
<ul v-droper="list" drag-class="droper">
  <li v-dragable drag-class="draging" v-for="item in list">{{item}}</li>
</ul>
```
