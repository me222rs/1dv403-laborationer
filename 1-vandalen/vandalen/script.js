"use strict";
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var makePerson = function(persArr){
    

var result = {};

//Ny array för namnen


var sum = 0;
//var name = [persArr[0].name, persArr[1].name, persArr[2].name];
var name = [];
var age = [];


for (var i = 0; i < persArr.length; i++){
    name.push(persArr[i].name);
    age.push(persArr[i].age);
    sum += parseInt(persArr[i].age);
    
}



//Sorterar skiten i bokstavsordning, localeCompare sorterar även svenska tecken
name.sort(function(a,b){
    return a.localeCompare(b);
});

result.names = name.join(", ");

//Ny array för ålder
//var age = [data[0].age, data[1].age, data[2].age];
age.sort();


//Räknar ut största och minsta värdet
result.minAge = Math.min.apply(Math,age);
result.maxAge = Math.max.apply(Math,age);





//Medelvärde räknas ut
result.averageAge = Math.ceil(sum / persArr.length);



        return result;
};


var result = makePerson(data);
    console.log(result);
    



	// Din kod här...



