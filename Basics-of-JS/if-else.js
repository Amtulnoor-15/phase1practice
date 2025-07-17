// check if a number is even or odd

var num = 9;

if (num % 2 == 0){
    console.log('even');
} else{console.log('odd');}

// if the voter is above 18 approve, if not then reject

var age = 10;

if(age>=18){
    console.log('approve');
}else{console.log('reject');}

// check if a given number is positive

var num = -9;

if(num>0){
    console.log('positive');
}else{console.log('negative')};

// check if it is raining or not
// if it's raining print 'happy'
// if not print 'sad'

let weather = 'Rainy';

if(weather == 'rainy' || 'Rainy'){
    console.log('happy');
}else{console.log('sad');}


// Login page 
//

let email = true;
let cardinfo = false;
let loginstatus = true;
if(email | loginstatus | cardinfo){
    console.log('you are allowed to make a purchase');
} else{console.log('verify your credentials');}

//check if temperature is <20, it's cold, winter;
// if it is >20, it's hot;
// temp between 20 and 40 normal;

let temp = 40;
if(temp>20){
    console.log('hot');
}else if(temp<20){
    console.log('winter');
}else{console.log('normal');}

//