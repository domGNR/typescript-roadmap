function sortObject(
    obj: Record<string, number>
): { name: string; value: number }[] {
    return Object.entries(obj)
        .sort((a, b) => {
            return a[1] - b[1];
        })
        .map((el) => {
            return {
                name: el[0],
                value: el[1]
            };
        });
}

export function ex3() {
    let obj = { LY: 43, US: 19, IN: 395, IR: 32, EG: 12, SA: 17 };
    console.log(sortObject(obj));
}
