import { ex1 } from "./ex1";
import { ex2 } from "./ex2";
import { ex3 } from "./ex3";
import { ex4 } from "./ex4";
import { ex5 } from "./ex5";
import { ex6 } from "./ex6";
import { ex7 } from "./ex7";

(async () => {
    console.log("Ex1");
    ex1();

    console.log();

    console.log("Ex2");
    ex2();

    console.log();

    console.log("Ex3");
    ex3();

    console.log();

    console.log("Ex4");
    ex4();

    console.log();

    console.log("Ex5");
    await ex5();

    console.log();

    console.log("Ex6");
    await ex6();

    console.log();

    console.log("Ex7");
    await ex7();
})();
