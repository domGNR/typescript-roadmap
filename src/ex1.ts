function leftShift(arr: number[]): number[] {
    const first: number = arr.shift() ?? 0;
    arr.push(first);
    return arr;
}

function rightShift(arr: number[]): number[] {
    const last: number = arr.pop() ?? 0;
    arr.unshift(last);
    return arr;
}

export function ex1() {
    console.log(rightShift([1, 2, 3]));
    console.log(leftShift([1, 2, 3]));
}
