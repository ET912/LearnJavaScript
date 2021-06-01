/**
 * 
 * @param {Function} constructor 
 * @returns {Object}
 */
function myNew(constructor, ...args) {
  const o =  Object.create(constructor.prototype)
  const co = constructor.apply(o, args)
  return typeof co === 'object' ? co : o
}

// 另一种实现

function objectFactory() {

  var obj = new Object(),//从Object.prototype上克隆一个对象

  Constructor = [].shift.call(arguments);//取得外部传入的构造器

  var F=function(){};
  F.prototype= Constructor.prototype;
  obj=new F();//指向正确的原型

  var ret = Constructor.apply(obj, arguments);//借用外部传入的构造器给obj设置属性

  return typeof ret === 'object' ? ret : obj;//确保构造器总是返回一个对象

};

function A(a, b) {
  this.a = a
  this.b = b
}
A.prototype.getA = function() {
  return this.a
}

const a = myNew(A, 1, 1)
const b = objectFactory(A, 2, 2)
console.log(a)
console.log(b)