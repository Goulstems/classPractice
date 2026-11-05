import {tweenColors} from "./tweenModules/tweenColors.js";

//CODE reperesentation of a Patty object !
export class Patty {
    //Constructor???? --> The thing that makes new objects.
    constructor(){
        //Attributes?? 
        this.isCooked = false;
        //Other attributes?
        this.size = [3,1,3];
        this.rawColor = "#f07482"
        this.cookedColor = "#622107"
        this.color = this.rawColor;
        this.gameObject = null;//THREEJS patty
        this.timeUntilCooked = 10 //takes 10 seconds to cook
    }

    //NEXT: METHODS: Actions. 

    //'cook' function, to cook objects!
    //@param `t` <number> : TIME ELAPSED (seconds)
    cook(t){
         // [COOKING TEST !]
         if (t >= this.timeUntilCooked){
            this.isCooked = true;
            return;
        }
        tweenColors(this.rawColor,this.cookedColor,t/this.timeUntilCooked);
    }
}








