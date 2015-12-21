# vue-drag-reorder
## demo
[demo](https://rawgit.com/1ta/vue-drag-reorder/master/example/index.html) using
rawgit.com

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
Use this is as easy as follows:
```
<ul v-droper="list">
  <li v-dragable v-for="item in list">{{item}}</li>
</ul>
```

### Draging style
We use these `.yita-draging` `.yita-draging-zone` two class name If not specified.
```
.yita-draging {
  background-color: grey
}
.yita-draging-zone {
  background-color: orange
}
```

### Use another class name (Optional)
If you not want to use these stupid default className, you can specify one to html.
```
<ul v-droper="list" drag-class="droper">
  <li v-dragable drag-class="draging" v-for="item in list">{{item}}</li>
</ul>
```
