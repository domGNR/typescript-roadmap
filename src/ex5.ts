const AVAILABLE_FRUITS = new Map([
    ["banana", "🍌"],
    ["peach", "🍑"],
    ["pineapple", "🍍"],
    ["orange", "🍊"],
    ["strawberry", "🍓"]
]);

async function mix(arg0: string[]): Promise<string[]> {
    const result: string[] = new Array();
    for (const key in arg0) {
        if (Object.prototype.hasOwnProperty.call(arg0, key)) {
            await selectFruit(arg0[key])
                .then((data) => {
                    result.push(data);
                })
                .catch((err) => {
                    // result.push(err);
                    console.log(err);
                });
        }
    }
    return result;
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
