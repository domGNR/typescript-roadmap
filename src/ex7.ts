import { setInterval } from "timers";

async function myFetch(): Promise<void> {
    let counter = 0;
    let sum = 0;
    const interval = setInterval(async () => {
        await fetch("http://ielpo.net:3000/rate")
            .then((res) => res.json())
            .then((data) => {
                const newRate: number = Number(data.rate);
                if (!isNaN(newRate)) sum += newRate;
            })
            .catch((err) => console.error(err));
        counter++;
        if (counter === 3) {
            clearInterval(interval);
            console.log(sum);
        }
    }, 2000);
}

export async function ex7() {
    await myFetch();
}
