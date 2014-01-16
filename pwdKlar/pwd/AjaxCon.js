"use strict";
function AjaxCon(url, callback) {   
    
    var READY_STATE_UNINITIALIZED = 0;
    var READY_STATE_OPENED = 1;
    var READY_STATE_SENT = 2;
    var READY_STATE_LOADING = 3;
    var READY_STATE_COMPLETE = 4;       //Betyder att man fått ett svar
    
    var xhr = this.getXHR();
    
    xhr.onreadystatechange = function(){
        
        if(xhr.readyState === READY_STATE_COMPLETE){
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){    //Allt mellan 200-300 är okej
                callback(xhr.responseText);     //datan från servern
            }
            else{
                console.log("Läsfel, status: "+xhr.status);     //Är något fel så skrivs statuskoden ut i loggen
            }
        }

        
    };
    
    xhr.open("get", url, true);     //Get hämtar från servern, url som det ska hämtas ifrån (måste vara från samma domän)
    xhr.send(null);                 //null ska skrivas när man inte har någon data att skicka pga browserinkompabilitet
}    
    AjaxCon.prototype.getXHR = function(){  
        var xhr = null;
        try{
            xhr = new XMLHttpRequest(); //Testar i första hand att göra ett xmlhttprequest
        } 
        catch(error){
            try{
                xhr = new ActiveXObject("Microsoft.XMLHTTP"); //
            }
            catch(error){
                throw new Error("No XHR object available");
            }
        }
        return xhr;
    };
