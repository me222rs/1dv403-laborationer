function Message(message, date){
    
    this.getText = function() {
        return message;
    };
    
    this.setText = function(_text){
        message = text;
    };
    
    this.getDate = function(){
        return date;
    }
    
    this.setDate = function(){
        return date;
    }
    
    
    Message.prototype.toString = function(){
        return this.getText() + ")";
    }
    
    Message.prototype.getHTMLText = function(){}
    
    Message.prototype.getDateText = function(){}
}
