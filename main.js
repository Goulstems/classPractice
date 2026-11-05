import {Patty} from "./Patty.js";



const burger = new Patty();
const burger2 = new Patty();
const burger3 = new Patty();


console.log(
    "The first burger is cooked: "
    +burger.isCooked
);

for (let i = 1; i <= 10; i += .05) {
    setTimeout(() => {
        burger.cook(i);
    }, i * 100);
}