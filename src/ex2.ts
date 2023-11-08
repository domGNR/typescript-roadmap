// Fix this code and add types

// function doSomething(arr: any) {
//     return arr.reduce((a: any, b: any) => a + b);
// }

// const input = [[1, 2, 3], [1, "2", 3], "123"];
// input.forEach((x) => console.log(doSomething(x)));

function doSomething(arr: (number | string)[] | string) {
    if (Array.isArray(arr)) {
        const newArray: number[] = arr.map((el) => {
            const num: number = Number(el);
            return isNaN(num) ? 0 : num;
        });
        return newArray.reduce((a, b) => a + b);
    }
    const num: number = Number(arr);
    return isNaN(num) ? 0 : num;
}
export function ex2() {
    const input = [[1, 2, 3], [1, "2", 3], "123"];
    input.forEach((x) => console.log(doSomething(x)));
}
