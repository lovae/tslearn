// 定义接口为对象类型
interface NameInfo {
  firstName: string,
  lastName: string
}

const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`
}
console.log(getFullName({
  firstName: 'haha',
  lastName: 'wa'
}))

interface Vegetables {
  color?: string,
  type: string
}
const getVegetables = ({ color, type }: Vegetables): string => {
  return `A ${color ? (color + ' ') : ''}${type}`
}
console.log(getVegetables({
  color: 'red',
  type: "tomato"
}))
console.log(getVegetables({
  type: "banna1"
}))
// as类型断言
console.log(getVegetables({
  type: "banna2",
  size: 2
} as Vegetables))
// 新增变量，类型兼容性
const vegetables =
{
  type: "banna3",
  size: 3
}
console.log(getVegetables(vegetables))
// 修改接口
interface Vegetables {
  color?: string,
  type: string,
  [prop: string]: any
}
console.log(getVegetables({
  type: "banna4",
  size: 4
}))
// 只读
interface Vegetables {
  color?: string,
  type: string,
  readonly num?: number
}
let veteObj: Vegetables = {
  type: "tomato",
  num: 22
}
// veteObj.num = 34

// 定义接口为函数
// interface AddFun {
//   (num1: number, num2: number): number
// }
type AddFun = (num1: number, num2: number) => number
const add: AddFun = (n1, n2) => n1 + n2

// 定义接口索引
interface RoleDic {
  [id: number]: string
}
const role1: RoleDic = {
  1: 'super_admin'
}

// 接口继承
interface Shop extends Vegetables {
  name: string
}
let shop1: Shop = {
  color: "red",
  type: "tomato",
  num: 12,
  name: "myShop"
}

// 混合类型接口
interface Counter {
  (): void,
  count: number
}
const getCounter = (): Counter => {
  const c = () => { c.count++ }
  c.count = 0
  return c
}
const counter = getCounter()
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)
