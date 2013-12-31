"use strict";
var pwd = {
    
    init: function(){
        
        var galleryIcon = document.getElementById("bilder");
        galleryIcon.onclick = pwd.galleryWindow;
        
        var gameIcon = document.getElementById("gameon");
        gameIcon.onclick = pwd.gameWindow;
        
        
    },
    
    galleryWindow: function(){
        console.log("Inne i funktionen galleriFönster");
        
        
        //Skapar fönstret som gallerit ska ligga i
        var desktop = document.getElementById("skrivbord");
        var divTag = document.createElement("div");
        divTag.id = "window1";
        desktop.appendChild(divTag);
        
        //Skapar toppen i fönstret som sedan ska innehålla en stängknapp
        var topBar = document.createElement("div");
        topBar.id = "topBar";
        divTag.appendChild(topBar);
        
        //var pTag = document.createElement("p");
        //pTag.id = "title";
        //topBar.appendChild(pTag);
        //document.getElementById("title").innerHTML = "Fotogalleri";
        
        var imagesBox = document.createElement("div");
        imagesBox.id = "imagesBox";
        divTag.appendChild(imagesBox);
        
        var pTagTitle = document.createElement("p");
        pTagTitle.id = "pTagTitle";
        imagesBox.appendChild(pTagTitle);
        document.getElementById("pTagTitle").innerHTML = "Fotogalleri";
        
        var footBar = document.createElement("div");
        footBar.id = "footer";
        divTag.appendChild(footBar);
        
        var CloseButton = document.createElement("img");
        CloseButton.id = "close";
        CloseButton.setAttribute("src", "pics/Windows-Close-Program-icon.png");
        CloseButton.setAttribute("width", "24px");
        topBar.appendChild(CloseButton);
        
        CloseButton.onclick = function(){
            pwd.closeWindow();
        };
        
    },
    
    closeWindow: function(){
        console.log("Inne i closeWindowfunktionen");
        
        var div = document.getElementById("window1");
           div.parentNode.removeChild(div);
    },
    
    gameWindow: function(){
        console.log("Inne i gameWindow funktionen");
        
        var desktop = document.getElementById("skrivbord");
        var divTag = document.createElement("div");
        divTag.id = "container";
        desktop.appendChild(divTag);
        
        var h2 = document.createElement("h2");
        divTag.appendChild(h2);
        
        var theGame = document.createElement("div");
        theGame.id = "theGame";
        divTag.appendChild(theGame);
        
        var h3 = document.createElement("h3");
        h3.id = "gz";
        divTag.appendChild(h3);
        
        var pTag = document.createElement("p");
        pTag.id = "help";
        divTag.appendChild(pTag);
        
        var omstart = document.createElement("input");
        omstart.id = "button";
        omstart.type = "submit";
        omstart.value = "Omstart";
        divTag.appendChild(omstart);
        
        var instruktioner = document.createElement("input");
        instruktioner.id = "manual";
        instruktioner.type = "submit";
        instruktioner.value = "Instruktioner";
        divTag.appendChild(instruktioner);
        
        
    }
    
}
window.onload = pwd.init;