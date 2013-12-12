"use strict";

var Memory = {
    pictures: [],
    count: 0,
    imagesToCompare: [],
    numberOfTries:0,
    init:function(){
        
        Memory.pictures = RandomGenerator.getPictureArray(4,4); //Slumpar ordningen på arrayen, ändra siffrorna för att ändra spelets storlek

        var instructionButton = document.getElementById("manual");
        instructionButton.onclick = Memory.instructions;
        
        var playAgainButton = document.getElementById("button");
        playAgainButton.onclick = Memory.restart;
        
        
        Memory.playingField();                               //Kallar på funktionen playingField
        console.log(Memory.pictures);
    },
    
    
    instructions:function(){
        console.log("Inne i instruktionsmetoden");
        
        var helpText = document.getElementById("help");                                     
        helpText.innerHTML = "Klicka på bilderna för att vända dom! Du kan vända två åt gången. Är de likadana så förblir de uppvända, annars vänds de tillbaka igen. Du vinner när alla bilder är vända!";                               
        
        
    },
    
    restart:function(){
        console.log("Inne i omstartsfunktionen");
        window.location.reload();
    },
    
    playingField:function(){                                //Funktion som ritar upp spelfältet med hjälp    av en tabell
        var theGame = document.getElementById("theGame");   //Hämtar theGame taggen i htmlkoden
        var table = document.createElement("table");        //Skapar en tabell
        theGame.appendChild(table);                         //Lägger tabellen i theGame
        var imageNumber = 0;

        console.log(imageNumber);

        for (var cols = 0; cols < Memory.pictures.length/cols; cols++) {              //For loop som skapar raderna
            var trTag = document.createElement("tr");       //Skapar tr taggar
            trTag.className = "tr";                         //Ger tr taggarna ett klassnamn
            table.appendChild(trTag);                       //Lägger in tr taggarna i tabellen
            
            for(var rows = 0; rows < Memory.pictures.length/rows; rows++){            //Forloop som skapar kolumnerna
                var tdTag = document.createElement("td");   //Skapar td taggar
                tdTag.className = "td";                     //Ger td taggarna ett klassnamn
                trTag.appendChild(tdTag);                   //Lägger in td taggarna i tr taggarna
                
            var image = document.createElement("img");      //Skapar en img tagg
                image.setAttribute("src", "pics/0.png");    //Länkar in en bild i img taggen
				image.className = "image";                  //Ger img taggen ett klassnamn
				
			var aTag = document.createElement("a");         //Skapar en a tagg
                aTag.setAttribute("href", "#");             //Gör a taggen till en länk
                
                tdTag.appendChild(aTag);                    //Lägger a taggen i td taggen
                aTag.appendChild(image);                    //Lägger bilden i a taggen som gör bilden till en länk
                Memory.turnImages(aTag, image, imageNumber);//Ropar på metoden turnImages som ska vända bilderna när man klickar på dom
                
                imageNumber+=1;                             //Plussar på i så att alla bilder kommer att finnas med istället för att alla brickor innehåller samma
            }

                
				
        }
    },
    
    
    
    turnImages: function(aTag, image, imageNumber){                                                 //Skapar en funtion som ska vända bilderna
        aTag.onclick = function(){                                                                  
            
            if(image.getAttribute("src") === "pics/0.png"){                                         //Hämtar bildens src attribut som jämförs med pics/0.png. Vilket är länken till bilden med ?
                
                Memory.imagesToCompare.push(aTag);                                                  //Ett ny objekt läggs till i jämförelsearrayen
                
                console.log("Visar imagesarrayen", Memory.imagesToCompare);                         
                console.log("Längd på imagesToCompare[]", Memory.imagesToCompare.length);
                
                
                if(Memory.imagesToCompare.length === 1 || Memory.imagesToCompare.length === 2){     //Om jämförelsearrayen är 1 eller 2 lång så 
                    image.setAttribute("src", "pics/" + Memory.pictures[imageNumber] + ".png");     //
                }    
                    console.log("Uppräkning", imageNumber);
                
                 
                
                    if (Memory.imagesToCompare.length === 2) {                                      //Om längden på jämförelsearrayen är 2, så anropas metoden compareImages och gör en timeout på 1s
                        setTimeout(function(){
                            console.log("Kört timeout på 1000ms");
                            Memory.compareImages();
                        },1000);
                
                
                    }
                    
            }     
        }; 
    },
    
    compareImages: function(){                                                                      //Funktion för att jämföre 2 bilder med varandra
        
        console.log("Gått in i funktionen compareImages");
        if(Memory.imagesToCompare[0].getElementsByTagName("img")[0].getAttribute("src") === Memory.imagesToCompare[1].getElementsByTagName("img")[0].getAttribute("src")){
            console.log("Bilderna är lika!");
            Memory.count +=1;                                                                       //Räknar upp antalet par
            Memory.numberOfTries +=1;
            console.log(Memory.count);
            Memory.imagesToCompare = [];                                                            //Tömmer jämförelsearrayen
            
            if(Memory.count === Memory.pictures.length/2){                                                                 //Om man har 8 par
                console.log("Grattis du klarade spelet");
                var winnerText = document.getElementById("gz");                                     //Letar upp ett id med namnet gz i html-dokumentet
                winnerText.innerHTML = "Grattis, du klarade spelet på " +Memory.numberOfTries+" försök!";                               //Skriver ett meddelande i gz
                
        //var playAgainButton = document.getElementById("button");
        //playAgainButton.onclick = window.location.reload();
            }
        }
        
        else{                                                                                       //Vänder på bilderna om de är olika
            Memory.numberOfTries +=1;
            console.log("Bilderna inte likadana");
            Memory.imagesToCompare[0].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");     //Sätter tillbaka bildens src attribut till bilden med ?, med andra ord så vänder den på bilden
            Memory.imagesToCompare[1].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
            Memory.imagesToCompare = [];                                                                    //Tömmer arrayen
        }
        
    }
};

window.onload = Memory.init;

/*
Ett möjligt upplägg kan vara detta:

[check]1. Skapa ett HTML-dokument och länka in det bifogade skriptet random.js
[check]2. Skapa en egen .js-fil (T.ex. memory.js) och skapa ett statiskt objekt i detta, t.ex. Memory.
[check]3. Skapa en init-metod i objektet Memory och koppla denna till sidans onload-event. (Testa!)
[check]4. Skapa en egenskap på ditt objekt som senare kommer att referera till den utslumpade arrayen. (jmfr. messages-arrayen i Laboration 2)
[check]5. I init-metoden anropar du arrayslumpsmetoden och sparar resultatet i egenskapen du skapade i 4an.
[check]6. Testa att skriv ut arrayen. Verkar det fungera?
[check]7. Generera upp tabellen som kommer att innehålla bilderna. Bry dig i detta läge inte om att göra bilderna klickbara. (Testa, och nu är du van vid att testa hela tiden ;))
[check]8. Modifiera koden du precis skrev så att varje bild kapslas in i en a-länk och koppla ett onclick-event till a-taggen.
[check]9. Skapa metoden som onclickeventet anropar och se där till att vända brickan.
[check]10. Gör så att det enbart går att vända upp två brickor samtidigt och koppla en timer så att brickorna vänds ned efter cirka en sekund.
[check]11. Gör ett test så att om brickorna är lika så stannar de uppvända och en räknare räknas upp med ett.
[check]12. Kontrollera räknaren så att du vet när spelaren vunnit.
*/

//Bra länkar som jag använde mig av i denna labb
//http://www.w3schools.com/jsref/dom_obj_all.asp