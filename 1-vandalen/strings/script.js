"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	
    
/*   
	if(str.length < 1){
	    return "Fel, du måste mata in något!";
	}
	
	
	if(str = str.replace(/a/gi, "#")){
	    console.log(str);
	}
   
    
	for(var i=0;i<str.length;i++){
 
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            
            return (str.toLowerCase(i));
}
        else
            return (str.toUpperCase(i));
            
}
*/

    var mickeäger = "";


    //Ett dåligt anti-fula ord filter haha
    if (str === "fitta" || str === "kuk" || str === "anus" || str === "iphone" || str === "apple"){
        return "Inga fula ord din jävel!";
    }

    if(str.length < 1){
	    return "Fel, du måste mata in något!";
	}
	
    for (var char in str){
        
        if (str[char] === "A" || str[char] === "a"){
            mickeäger += "#";
        }
        
        else if (str[char] === str[char].toLowerCase()){
            mickeäger += str[char].toUpperCase();
        }
        
        else if (str[char] === str[char].toUpperCase()){
            mickeäger += str[char].toLowerCase();
        }
        
        
        console.log(mickeäger);
        
    }
    return mickeäger;
    
 
 
    
 
 
 
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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};