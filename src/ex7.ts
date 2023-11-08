import Decimal from "decimal.js";
import { setInterval } from "timers";

async function myFetch(): Promise<void> {
    let counter = 0;
    let sum = new Decimal(0);
    const interval = setInterval(async () => {
        try {
            const response = await fetch("http://ielpo.net:3000/rate");
            const rate = await response.json();
            const newRate: number = Number(rate.rate);
            if (!isNaN(newRate)) sum = sum.plus(newRate);
            counter++;
            if (counter === 3) {
                clearInterval(interval);
                console.log(sum);
            }
        } catch (err) {
            console.error(err);
        }
    }, 1000);
}

export async function ex7() {
    await myFetch();
}
