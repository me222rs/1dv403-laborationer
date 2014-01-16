"use strict";
var pwd = {
    open: false,
    //globalImagesArray: [],
    //globalCount:0,
    init: function(){
        
        var galleryIcon = document.getElementById("bilder");
        
        galleryIcon.onclick = function () {
            if (pwd.open === false)
            {
                pwd.galleryWindow();
                pwd.open = true;
                console.log(pwd.open);
            }
        }

      
        var gameIcon = document.getElementById("gameon");
        gameIcon.onclick = pwd.gameWindow;
        
    },
    


    galleryWindow: function(){
        console.log("Inne i funktionen galleriFönster");
        

        //var pics = document.getElementById("bilder");
        ////pics.disabled = true;
        //pics.setAttribute("disabled", "true");
        //console.log(pics.disabled);
        
        //Skapar fönstret som gallerit ska ligga i
        var desktop = document.getElementById("skrivbord");
        var divTag = document.createElement("div");
        divTag.id = "window1";
        desktop.appendChild(divTag);
        
        //Skapar toppen i fönstret som sedan ska innehålla en stängknapp
        var topBar = document.createElement("div");
        topBar.id = "topBar";
        divTag.appendChild(topBar);
        
        //Detta skapar ikonen uppe i vänstra hörnet i topbar
        var galleryIconSmall = document.createElement("img");
        galleryIconSmall.id = "galleryIconSmall";
        galleryIconSmall.setAttribute("src", "pics/Images-icon.png");
        galleryIconSmall.setAttribute("width", "24px");
        topBar.appendChild(galleryIconSmall);
        
        //Detta skapar en p tagg i topbar som skriver ut fotogalleri
        var pTag = document.createElement("p");
        pTag.id = "title";
        topBar.appendChild(pTag);
        document.getElementById("title").innerHTML = "Fotogalleri";
        
        
        //Här skapas fältet som bilderna ska ligga i
        var imagesBox = document.createElement("div");
        imagesBox.id = "imagesBox";
        divTag.appendChild(imagesBox);
        
        //Här läggs ajax-loadern in
        var imgTag = document.createElement("img");
        imgTag.src = "pics/ajax-loader.gif"
        imgTag.id = "loader";
        imagesBox.appendChild(imgTag);

        //var pTagTitle = document.createElement("p");
        //pTagTitle.id = "pTagTitle";
        //imagesBox.appendChild(pTagTitle);
        //document.getElementById("pTagTitle").innerHTML = "Fotogalleri";
        
        //Detta skapar footern
        var footBar = document.createElement("div");
        footBar.id = "footer";
        divTag.appendChild(footBar);
        
        //Här läggs stängknappen till i fönstret
        var CloseButton = document.createElement("img");
        CloseButton.id = "close";
        CloseButton.setAttribute("src", "pics/Windows-Close-Program-icon.png");
        CloseButton.setAttribute("width", "24px");
        topBar.appendChild(CloseButton);
        
        //var ajaxLoadIcon = document.createElement("div");
        //ajaxLoadIcon.id = "ajaxLoad";
        //imagesBox.appendChild(ajaxLoadIcon);

        //url som ska skickas in i ajaxcon
        var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";

     
        var myCallBack = function(data){

            //Lägger datan från servern i en array och json parsar den
            var imagesArray = [];
            imagesArray = JSON.parse(data);

            //Ropar på getimages som ska skapa tumnagelboxarna och lägga bilderna i fönstret
            pwd.getImages(imagesArray);
            
        };
        new AjaxCon(url, myCallBack);  //skickar med url och mycallback till ajaxcon
        


        CloseButton.onclick = function () {
           
            pwd.closeWindow();
        };
        
    },
    
    closeWindow: function(){        //Funktion som stänger fönstret
        console.log("Inne i closeWindowfunktionen");
        
        var div = document.getElementById("window1");
        div.parentNode.removeChild(div);
        //var pics = document.getElementById("bilder");
        //pics.setAttribute("disabled", "false");
        pwd.open = false;
    },
    
    gameWindow: function(){
        console.log("Inne i gameWindow funktionen");
        
        //Ritar upp lite element så att memoryspelet känner sig som hemma
        
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
        
        
        
    },

    getImages: function (imagesArray) {         //funktion som tar emot en array och sätter attribut
        console.log("imagesArray test", imagesArray);
        var container = document.getElementById("imagesBox");
        console.log(imagesArray.length);
        console.log(imagesArray);
        //pwd.globalImagesArray = imagesArray;

        //Variabler som innehåller info om hur stor tumnagelboxen ska vara
        var thumbSize = pwd.calculate(imagesArray);     //Skickar med arrayen till calculate
        var thumbHeight = thumbSize.height;
        var thumbWidth = thumbSize.width;

        for (var i = 0; i < imagesArray.length; i++) {
            
            pwd.loadImages(i, imagesArray, thumbWidth, thumbHeight);

        }

        var loader = document.getElementById("loader");
        loader.parentNode.removeChild(loader);

        
    },

    setBackgroundImage: function (imageID, imagesArray) {
        console.log("Testning", imagesArray);
        var desktop = document.getElementById("skrivbord");
        desktop.style.backgroundImage = "url(" + imagesArray[imageID].URL + ")";
    },

    loadImages: function (i, imagesArray, thumbWidth,thumbHeight) {

        //var thumbSize = pwd.calculate(imagesArray);
        //var thumbHeight = thumbSize.height;
        //var thumbWidth = thumbSize.width;
        
        console.log("test2", thumbWidth);


        var container = document.getElementById("imagesBox");

        var thumbNail = document.createElement("a"); 
        thumbNail.setAttribute("href", "#");
        thumbNail.className = "thumb";
        //Sätter attribut
        thumbNail.style.height = thumbHeight + "px";
        thumbNail.style.width = thumbWidth + "px";

        //thumbNail.setAttribute("width", thumbWidth + "px");
        //thumbNail.setAttribute("height", thumbHeight + "px");

        container.appendChild(thumbNail);


        var bild = document.createElement("img");
        bild.className = "bild";
        bild.setAttribute("src", imagesArray[i].thumbURL);
        bild.setAttribute("width", imagesArray[i].thumbWidth);
        bild.setAttribute("height", imagesArray[i].thumbHeight);
     
        thumbNail.appendChild(bild);

        thumbNail.onclick = function () {

            pwd.setBackgroundImage(i, imagesArray);
        };
    },

    calculate: function (imagesArray) {

        var height = 0;
        var width = 0;

        for (var i = 0; i < imagesArray.length; i++) {
            if (imagesArray[i].thumbHeight > height) {
                height = imagesArray[i].thumbHeight;
            }

            if (imagesArray[i].thumbWidth > width) {
                width = imagesArray[i].thumbWidth;
            }
        }
            console.log("höjd", height);
            console.log("bredd", width);
            return {
                height: height,
                width: width
            }
        
    },

    

    
}
window.onload = pwd.init;