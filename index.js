'use strict'

const moveTo = function(list, fromIndex, toIndex){
  let arr = []
  toIndex = ~~toIndex
  fromIndex = ~~fromIndex
  if(toIndex >= fromIndex){
    arr = arr.concat(list.slice(0,fromIndex))
      .concat(list.slice(fromIndex+1, toIndex+1))
      .concat(list.slice(fromIndex,fromIndex+1))
      .concat(list.slice(toIndex+1))
  }else {
    arr = arr.concat(list.slice(0,toIndex))
      .concat(list.slice(fromIndex,fromIndex+1))
      .concat(list.slice(toIndex, fromIndex))
      .concat(list.slice(fromIndex+1))
  }
  return arr
}

const workWithClass = function (element, newClass, defaultClassName, doWhat) {
  if(!element.classList) return
  let className = defaultClassName
  if(newClass) className = newClass
  if(doWhat === 'add'){
    element.classList.add(className)
  }else if (doWhat === 'remove') {
    element.classList.remove(className)
  }
}

exports.install = function(Vue){
  Vue.directive('dragable', {
    params:['drag-class'],
    bind: function () {
      let self = this
      let element = this.el
      element.draggable = true
      element.ondragstart = function (event) {
        workWithClass(element, self.params['dragClass'], 'yita-draging', 'add')
        event.dataTransfer.setData('text', self._scope['$index'])
      }
      element.ondragend = function (event) {
        workWithClass(element, self.params['dragClass'], 'yita-draging', 'remove')
      }
      element.ondrag = function (event) {}
    },
    update: function (newValue, oldValue) {},
    unbind: function () {}
  })
  Vue.directive('droper',{
    params:['drag-class'],
    twoWay: true,
    bind: function(){
      let self = this
      let expr = this.expression
      let element = this.el
      element.ondragenter = function (event) {
        let target = event.target
        // let index = Array.from(this.children).indexOf(target)
        workWithClass(target, self.params['dragClass'], 'yita-draging-zone', 'add')
      }
      element.ondragleave = function (event) {
        let target = event.target
        workWithClass(target, self.params['dragClass'], 'yita-draging-zone', 'remove')
      }
      element.ondragover = function(event){
        event.preventDefault();
      }
      element.ondrop = function(event){
        event.preventDefault();
        event.stopPropagation();
        let fromIndex = event.dataTransfer.getData('text')
        let target = event.target
        let toIndex = Array.from(this.children).indexOf(target)
        let out = moveTo(self.vm[expr], fromIndex, toIndex)
        self.vm.$set(expr, out)
        workWithClass(target, self.params['dragClass'], 'yita-draging-zone', 'remove')
      }
    },
    update: function(value, oldValue){
    },
    unbind: function(){}
  })
}
