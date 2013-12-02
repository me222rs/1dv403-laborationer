var MessageBoard = {        // Statiskt objekt
    
    messages: [],           // Array som egenskap kommer att hålla alla meddelanden
    
    init:function(e){  
        
        var messageButton = document.getElementById("button");      //Denna kod letar reda på knappen i html dokumentet
        var inputMessage = document.getElementById("messageboard"); //Denna kod letar reda på den inmatade texten
        messageButton.onclick = MessageBoard.addNewMessage;            //Denna kod kopplar ett event till skriv-knappen
        console.log(inputMessage);
        
    },
    
    addNewMessage: function(){
        //Skapa ett nytt meddelandeobjekt med datum och meddelande typ?
    }
};


window.onload = MessageBoard.init;             //Denna metod kommer att köras när sidan har laddats klart
