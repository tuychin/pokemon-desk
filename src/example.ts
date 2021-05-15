// Работа с простыми типами
type TypeConcat = (first: string, second: string) => string;
const concat: TypeConcat = (first, second) => first + second;

console.log(concat('Hello ', 'World'));

// Работа с интерфейсами
interface IMyHometask {
  howIDoIt: string;
  simeArray: (string | number)[];
}

interface IMyHometaskWithData extends IMyHometask {
  withData: IMyHometask[];
}

const myHometask: IMyHometaskWithData = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

console.log(myHometask);

// Типизация функций, используя Generic
interface IMyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (accum: U, current: T) => T, initAccum?: string | number | [] | {}): U;
}

const myArray: IMyArray<number> = [1, 2, 3, 4, 5];

console.log(
  myArray.reduce((accum, current) => {
    accum.unshift(current);
    return accum;
  }, []),
);

console.log(myArray.reduce((a, b) => a + b));
