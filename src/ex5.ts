const AVAILABLE_FRUITS = new Map([
    ["banana", "🍌"],
    ["peach", "🍑"],
    ["pineapple", "🍍"],
    ["orange", "🍊"],
    ["strawberry", "🍓"]
]);

async function mix(arg0: string[]): Promise<string[]> {
    const resultArray = new Array<string>();
    const promiseArray = arg0.map((x) => selectFruit(x));
    const resolvedPromises = await Promise.allSettled(promiseArray);
    for (const result of resolvedPromises) {
        if (result.status === "fulfilled") resultArray.push(result.value);
        else console.log(result.reason);
    }
    return resultArray;
}

function selectFruit(fruit: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = AVAILABLE_FRUITS.get(fruit);
            res === undefined
                ? reject(`Fruit ${fruit} not available`)
                : resolve(res);
        }, 500);
    });
}

export async function ex5() {
    console.time("fruit-shake");
    const res = await mix(["strawberry", "oranges", "banana"]);
    console.log(res); //[ '🍓', '🍊', '🍌' ]
    console.timeEnd("fruit-shake");
}
