"use strict";

window.onload = function(){

	
	var birthday = function(date){


    date = new Date();
    

var today = new Date();     //dagens datum
console.log("Today date: ", today);

var birthdays = new Date(input.value);      //det inmatade datumet
console.log("Birthday date: ", birthdays);

if (birthdays.getTime() < today.getTime()){         //Om födelsedatumet redan varit
    birthdays.setFullYear(today.getFullYear() + 1); 
}
else{
    birthdays.setFullYear(today.getFullYear());
}

var msPerDay = 24 * 60 * 60 * 1000 ;        //millisekunder per dag
console.log("Milliseconds per day: ", msPerDay);

var timeLeft = (birthdays.getTime() - today.getTime());     //räknar ut tid kvar till födelsedagen. födelsedag - dagens datum.
console.log("Time Left: ",timeLeft);

var e_daysLeft = timeLeft / msPerDay;       // tid kvar / millisekunder per dag
console.log("Estimated days left: ", e_daysLeft);

var daysLeft = Math.floor(e_daysLeft);
console.log("Days Left: ", daysLeft + 1);


    daysLeft = daysLeft + 1;
    
    if (daysLeft >= 365){
        daysLeft = 0;
    }

    if (daysLeft === 0){
        return daysLeft;
    }
    if(daysLeft > 0){
        return Math.abs(daysLeft);
    }
    else{
        return Math.abs(daysLeft + 365);
     }
    
    
    return daysLeft;



        
    
    
			// Din kod här.




	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};