"use strict";
var count = 0;
var MessageBoard = {        // Statiskt objekt
    
    messages: [],           // Array som egenskap kommer att hålla alla meddelanden
    
    init:function(e){  
        count += 1;
        var messageButton = document.getElementById("button");          //Denna kod letar reda på knappen i html dokumentet
        messageButton.onclick = MessageBoard.addNewMessage;             //Denna kod kopplar ett event till skriv-knappen
        
        //Gör att man kan skicka meddelanden genom att trycka på enter. Ny rad får man genom att hålla in shift samtidigt som man trycker på enter.
        document.getElementById("messageboard").onkeydown = function(e){
            if(!e) {
                e = window.event;
            }
            
            if(e.keyCode === 13 && e.shiftKey === false){ 
                MessageBoard.addNewMessage();                   
                return false;
            }
        };
    },
    
    addNewMessage: function(){
        var text = document.getElementById("messageboard").value;       //Hämtar värdet på messageboardet i html koden, alltså det man skrivit i fältet
        var mess = new Message(text, new Date());                       //Skapar ett nytt meddelande med datum    //Verkar vara en bugg i c9 som visar att Message inte hittas
        MessageBoard.messages.push(mess);                               //Lägger det nya arrayobjektet sist i arrayen
        MessageBoard.renderMessage();
        console.log(text);
        
    },
    
    renderMessages: function(messageID){
        
        var divTag = document.getElementById("messages");
        
        //Skapar en p tagg
        
        var pTag = document.createElement("p");                         //Denna kod skapar en p tagg för texten som matas in i textfältet
        pTag.className = "postedMessages";
        pTag.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            
            
        //Skapar en ny div tagg
        
        var text = document.createElement("div");
        console.log(text);
        
        
        //Lägger in texten i p taggen
        
        text.appendChild(pTag);
        text.className = "addANewMessage";
        
        
        //Detta borde lägga p taggen i div taggen
        
        divTag.appendChild(text);
        
        
        
        //Detta ska visa klockslaget meddelande postades i meddelanderutan
        
        var time = document.createElement("p");
        pTag.appendChild(time);
        time.className = "timeStamp";
        time.innerHTML = MessageBoard.messages[messageID].getDateText();
        
        
        //Div tagg skapas som ska innehålla de två knapparna
        var deleteAndClockButton = document.createElement("div");
        deleteAndClockButton.className = "buttons";
        
        // Här skapas knappen för att ta bort ett meddelande
        var CloseButton = document.createElement("img");            //Skapar en img-tagg
        CloseButton.setAttribute("src", "icons/Close-icon.png");    //och ger sökvägen till bilden
        
        CloseButton.onclick = function(){
            MessageBoard.deleteMessage(messageID);
        };
        deleteAndClockButton.appendChild(CloseButton);          //Lägger in länkten i div-taggen
		text.appendChild(deleteAndClockButton);
        
        //Lägger till knapp för tid då meddlenadet skapades
        var ClockButton = document.createElement("img");
        ClockButton.setAttribute("src", "icons/Time-Clock-icon.png");
        
        //kopplar ett event till knappen som anropar funktionen deletemessage
        deleteAndClockButton.appendChild(ClockButton);
        ClockButton.onclick = function(){
            MessageBoard.showTime(messageID);
            

        };

        
    },
        
        //funktion för att ta bort meddelande
        deleteMessage: function(messageID){
            console.log("test");
            console.log(MessageBoard.messages.length);
            
            
            var x;
            var remove=confirm("Vill du ta bort meddelandet?");
                if (remove === true){
                    x="Meddelandet togs bort!";
                    MessageBoard.messages.splice(messageID, 1);
                }
                
                
            console.log(MessageBoard.messages.length);
            MessageBoard.renderMessage();
        },
        
        //funktion för att visa tiden då meddelandet skapades
        showTime: function(messageID){
            alert("Ditt meddelande skapades den " + MessageBoard.messages[messageID].getDate().toLocaleDateString() + " klockan " + MessageBoard.messages[messageID].getDate().toLocaleTimeString());
        },
        
        renderMessage : function(messageID){                     //funktionen rensar div taggen och skriver ut på nytt
        document.getElementById("messages").innerHTML = "";
        
        for (var i = 0; i < MessageBoard.messages.length; ++i) {
            MessageBoard.renderMessages(i);
        }
        console.log(MessageBoard.messages.length);
        var counter = document.getElementById("messagecount");
        counter.innerHTML = ("Antal meddelanden: " + MessageBoard.messages.length);
        }
        
        
        
};



window.onload = MessageBoard.init;             //Denna metod kommer att köras när sidan har laddats klart