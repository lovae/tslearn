// 布尔类型
let bool: boolean = false
let bool2: boolean
bool2 = true
// bool2 = 3

// 数值类型
let num: number = 123
// num="123"
num = 0b111011
num = 0o173
num = 0x7b

// 字符串类型
let str: string
str = 'abc'
str = `数值是${num}`
console.log(str)

// 数组类型
// [1, 2, 3]
// 写法1
let arr: number[]
let arr2: (string | number)[]
arr = [1, 2, 3]
arr2 = [1, '2', str]
// 写法2
let arr3: Array<number>
let arr4: Array<number | string>
arr3 = [3, 4, 5]
arr4 = [3, '4', str]

// 元祖类型
// 长度位置固定的数组
let tuple: [string, number, boolean]
tuple = ['string', 123, true]

// 枚举类型
// 索引和值相互映射的对象，索引可自定义，默认从0开始
enum Roles {
  SUPER_ADMIN,
  ADMIN = 4,
  USER
}
console.log(Roles)

// any类型
let value: any
value = 'abc'
value = 123
value = false
let arrAny: any[] = [1, '2', true]

// void类型
let conText = (text: string): void => {
  console.log(text)
}
conText('abc')
let v: void
v = undefined
v = null

// null和undefined
// 既是值又是类型，是其他类型的子类型
let u: undefined
u = undefined
u = null
let n: null
n = null
n = undefined

// never类型
// let errFun = (msg: string): never => {
//   throw new Error(msg)
// }
// errFun(str)
// let infiniteFun = ((): never => {
//   while (true) { }
// })()
// num = infiniteFun

// object类型
let obj = {
  name: 'wzd'
}
function getObj(object: object) {
  console.log(object)
}
getObj(obj)

// 类型断言
// 两种写法：<类型> 、(变量 as 类型)，jsx中只能用as
const getLength = (target: string | number) => {
  if ((<string>target).length || (target as string).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length
  }
}
console.log(getLength(1))