#! /usr/bin/env node

import inquiere from "inquirer";

const Quiz:{
    quistion_1: string;
    quistion_2: string;
    quistion_3: string;
    quistion_4: string;
    quistion_5: string;
}= await inquiere.prompt([{
     name: "quistion_1",
     type:"list",
     message:"Q1: What is the largest desert in the world???",
     choices:["Kalahari Desert","Arabian Desert","Sahara Desert","Gobi Desert","None of these"]
},
{   name: "quistion_2",
    type:"list",
    message:"Q2: Which country is known as the Land of the Rising Sun???",
    choices:["China","Vietnam","Japan","South Korea"]
    
},
{
    name: "quistion_3",
    type:"list",
    message:"Q3: Which US state is famous for its theme parks, including Disneyland and Universal Studios???",
    choices:["Florida","Texas","California","Nevada"]
    
},
{
    name: "quistion_4",
    type:"list",
    message:"Q4: Which city is known as the City of Lights? ",
    choices:["London","Paris","Rome","Barcelona","None of these"]
}

]);

let score:number=0;

switch(Quiz.quistion_1){
    case "Sahara Desert":
    console.log("Ans1: Correct Answer.");
    ++score;
break;
default:console.log("Ans1: Incorrect Answer.")

}

switch(Quiz.quistion_2){
    case "Japan":
    console.log("Ans2: Correct Answer.");
    ++score;
break;
default:console.log("Ans2: Incorrect Answer.")

}

switch(Quiz.quistion_3){
    case "California":
    console.log("Ans3: Correct Answer.");
    ++score;
break;
default:console.log("Ans3: Incorrect Answer.")

}

switch(Quiz.quistion_4){
    case "Paris":
    console.log("Ans4 Correct Answer.");
    ++score;
break;
default:console.log("Ans4: Incorrect Answer.")

}

console.log(`total Score: ${score}`);