function MessageBoard(){
    var messages = [];          //Array som ska hålla alla meddelande
}

var mess = new Message("Testmeddelande", new Date());
alert(mess);
alert(mess.getText());
mess.setText("En annan text");
alert(mess);


window.onload = function(){     
    new MessageBoard();         //Denna metod kommer att köras när sidan har laddats klart
};
