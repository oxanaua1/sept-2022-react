////name:string тип змінної. :void ф-я нічого не повертає
// const x = (name:string):void => {
// }
////name:string тип змінної. :number|string ф-я повертає "number" або "string array"
// const x = (name: string): number | string[] => {
//     return ['2', 'clone', 'name']
// }
////name:string тип змінної. :number|string ф-я повертає "number" або "string array"
// const test = (name: string): number | string[] => {
//     return [name]
// }
// console.log(test('Max'));
//______________________________________________________________________________________________________________________
////створювати власні типи type з назвою довільною - MyType
// type MyType = number | string[] | boolean;
//
// const test = (name: string): MyType => {
//     return [name]
// }
//______________________________________________________________________________________________________________________
// //масив чисел
// const arr: number[] = [1, 2, 3, 45, 56];
//
// //масив де перше число, друге стрічка
// const arr1: [number, string] = [1, '2'];
//______________________________________________________________________________________________________________________
////інтерфейси (interface) - опис якогось ОБ'ЄКТУ. краще почитати назву з 'I' - IUser
// interface IUser {
//     name?: string; //?: не обов'язкове для заповнення в майбутньому об'єкті
//     surname: string;
//     age: number;
//     status: boolean;
// }
//
// const user: IUser = {name: 'Ann', surname: 'Black', age: 20, status: true};
//
// const getName = (user: IUser): string => {
//     return user.name;
// }

//______________________________________________________________________________________________________________________
// interface IUser {
//     name: string;
//     surname: string;
//     age: number;
//     status: boolean;
// }
////використання Частково інтерфейсу IUser, <> - generic. Тоді можна або нічого не писати в юзері, або лише декілька полів
// const  user: Partial <IUser> = {name: 'Ann', surname: 'Black'};

//______________________________________________________________________________________________________________________
////власний дженеріс для юзера <DATA>, коли створюватиму юзера можу замість дати прописати будь-який йому тип
// interface IUser<DATA> {
//     name: string;
//     surname: string;
//     age: number;
//     status: boolean;
//     data: DATA;
// }
//
// const user: IUser<number[]> = {name: 'Ann', surname: 'Black', age: 20, status: true, data: [1, 2, 3]};
// const user1: IUser<string[]> = {name: 'Ann', surname: 'Black', age: 20, status: true, data: ['1', '2', 'apple']};
//
// interface IUser1<DATA, DATA2> {
//     name: string;
//     surname: string;
//     age: number;
//     status: boolean;
//     data: DATA;
//     data2: DATA2;
// }
//
// const user3: IUser1<number[], string[]> = {name: 'Ann', surname: 'Black', age: 20, status: true, data: [1, 2, 3], data2:['1','2']};
//______________________________________________________________________________________________________________________
////Класи, типи полів(string, number...) і модифікатори доступу (private - змінна буде доступна в середині класу,
//// protected- дост. всередині цього класу і в класах наслідниках, public - змінна доступна всюди )
//
//
// class User {
//     constructor(private name: string, private age: number) {
//
//     }
//
// }

//// інтнерфейс IShape з ключами (area, perimeter) та значенням ф-ями що повертають число
// interface IShape {
//     area: () => number;
//     perimeter: () => number
// }
//
// interface IGreeting {
//     greeting: (name: string) => void;
// }
//
// ////implements зобов'язує мене виконати в ф-ї Rectangle то що я прописала в ф-ях Greeting, IShape.
// // в ф-ях Greeting, IShape ніби прописаний шаблон для ф-ї Rectangle
//
// class Rectangle implements IGreeting, IShape {
//     constructor(private a: number, private b: number) {
//     }
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     perimeter(): number {
//         return this.a * 2 + this.b * 2;
//     }
//
//     greeting(): void {
//         console.log('hello');
//     }
// }
//
// const rectangle = new Rectangle(1, 2);
// rectangle.greeting()
// console.log(rectangle.area());
// console.log(rectangle.perimeter());
//
//
// class Triangle implements IShape {
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     area(): number {
//         return this.a * this.b * this.c;
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
//
// }
// ////Поліморфізм - представляти одну сутність за іншу. створивши const shapes типу IShape, що буде масивом і створити
// ////в масиві нові Rectangle та Triangle з різними даними
//
// const shapes: IShape[] = [new Rectangle(1, 2), new Triangle(1, 2, 3), new Rectangle(4, 5)]
//
// ////можу звертатися до свого масиву shapes і перебирати їх (for of)
// for (let shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }
//______________________________________________________________________________________________________________________
////Визначення типу ф-ї
// const x = () => {
//     return 15
// }
//
// type Mytype = ReturnType<typeof x>;
//
// const a:Mytype = 'sss'
//______________________________________________________________________________________________________________________
////ф-я що повертає ф-ю ???
// const x1 = (): Function => {
//     const f2 = (a:number):number => {
//         return 2
//     }
//     return f2
// }
//______________________________________________________________________________________________________________________
//                                              interfaces + services
//______________________________________________________________________________________________________________________

import {userService} from "./services/userService";

userService.getAll().then(({data})=>{
    console.log(data[0].name);
    const {email, name,username} = data[3];
})