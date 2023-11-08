import Decimal from "decimal.js";

function decimalJS(
    x: number,
    y: number,
    operation: "+" | "-" | "/" | "*"
): Decimal {
    switch (operation) {
        case "+":
            return new Decimal(x).plus(y);
        case "-":
            return new Decimal(x).minus(y);
        case "*":
            return new Decimal(x).times(y);
        case "/":
            return new Decimal(x).dividedBy(y);
        default:
            return new Decimal(0);
    }
}

export function ex4() {
    console.log(`NativeJS 0.01 + 0.05 = ${0.01 + 0.05}`);
    console.log(`DecimalJS 0.01 + 0.05 = ${decimalJS(0.01, 0.05, "+")}`);
    console.log();
    console.log(`NativeJS 0.007 * 100 = ${0.007 * 100}`);
    console.log(`DecimalJS 0.007 * 100 = ${decimalJS(0.007, 100, "*")}`);
}
