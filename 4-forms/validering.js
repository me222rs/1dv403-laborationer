var validate = {
    pcDisplay:null,
    init: function(){
        
        validate.form = document.getElementById("theForm");
        console.log(validate.form);
        validate.button = document.getElementById("button");
        validate.aTag = document.createElement("a");
        
        
        var divTag = validate.button.parentNode;      
        divTag.removeChild(validate.button);
        
                
        validate.aTag.setAttribute("href", "#");  
        var text = document.createTextNode("Nästa");
        validate.aTag.appendChild(text);
        validate.aTag.className = "aTag";
        divTag.appendChild(validate.aTag);
        
        var firstName = document.getElementById("firstName");
        var lastName = document.getElementById("lastName");
        var postalCode = document.getElementById("postalCode");
        var telephone = document.getElementById("telephone");
        var eMail = document.getElementById("e-mail");
    


        // När värdet ändras så körs onchange och returnerar false om det inte stämmer med regex
        firstName.onchange = function () {
            if (!document.getElementById("firstName").value.match(/^[a-zåäö]+$/i)) {
                
                document.getElementById("firstName").className = "red";                 //Skapar en klass som heter red som ska ändra bakgrundsfärgen på textfältet
                document.getElementById("error1Hidden").setAttribute("id", "error1Show");

            }

            else {
                document.getElementById("firstName").className = "green";               //Skapar en klass som heter green som ska ändra bakgrundsfärgen på textfältet
                document.getElementById("error1Show").setAttribute("id", "error1Hidden");
            }
        };
        
        lastName.onchange = function (){
            if(!document.getElementById("lastName").value.match(/^[a-zåäö]+$/i)){
                document.getElementById("lastName").className = "red";
                document.getElementById("error2Hidden").setAttribute("id", "error2Show");
                
            }
            
            else{
                document.getElementById("lastName").className = "green";
                document.getElementById("error2Show").setAttribute("id", "error2Hidden");
            }
        };
        
        
//De format som ska  hanteras är:

//XXXXX     [check]
//XXX-XX    [check]
//XXX XX    [check]
//SEXXXXX   [check]
//SEXXX-XX  [check]
//SEXXX XX  [check]
//SE XXXXX  [check]
//SE XXX-XX [check]
//SE XXX XX [check]
        //  /^([SE]*)\s*(\d{3}[\s\-]*(\d\d)$/
        postalCode.onchange = function (){
            var format = /^([SE]*)\s*(\d{3})[\s\-]*(\d\d)$/;
            if(!document.getElementById("postalCode").value.match(format)){ 
                
                document.getElementById("postalCode").className = "red";
                document.getElementById("error3Hidden").setAttribute("id", "error3Show");
               // /^[0-9]{3}-[0-9]{2}$|^[0-9]{5}$|^[0-9]{3}\s[0-9]{2}$|^\bSE\b [0-9]{5}$|^\bSE\b\s[0-9]{3}\s[0-9]{2}$|^\bSE\b\s[0-9]{3}-[0-9]{2}$|^SE\d{5}$|^SE\d{3}-[0-9]{2}$|^SE\d{3}\s[0-9]{2}$/
            }
            
            
            else{
                var pc = document.getElementById("postalCode").value;
                pc = pc.replace(format, "$2$3");
                validate.pcDisplay = pc;
                console.log(pc);
                document.getElementById("postalCode").className = "green";
                document.getElementById("error3Show").setAttribute("id", "error3Hidden");
            }
                
                
        };
            
        
        telephone.onchange = function (){
            if(!document.getElementById("telephone").value.match(/^[0-9]+$/)){
                document.getElementById("telephone").className = "red";
                document.getElementById("error4Hidden").setAttribute("id", "error4Show");
                
            }
            
            else{
                document.getElementById("telephone").className = "green";
                document.getElementById("error4Show").setAttribute("id", "error4Hidden");
            }
        };
        
        eMail.onchange = function (){
            if(!document.getElementById("e-mail").value.match(/^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i)){
                document.getElementById("e-mail").className = "red";
                document.getElementById("error5Hidden").setAttribute("id", "error5Show");
                
            }
            
            else{
                document.getElementById("e-mail").className = "green";
                document.getElementById("error5Show").setAttribute("id", "error5Hidden");
            }
        };
        
        

        
        
        validate.aTag.onclick = validate.confirmBox;
    },
    

    
    confirmBox:function(pc){      //Körs när man trycker på nästa
    
        if(!document.getElementById("firstName").value.match(/^[a-zåäö]+$/i)) {    //visar felmeddelande om man försöker skicka något när fältet lyser rött
            alert("Förnamnet är inte korrekt");
            return false;
        }
            
        if(!document.getElementById("lastName").value.match(/^[a-zåäö]+$/i)){
            alert("Efternamnet är inte korrekt");
            return false;
        }
        
        if(!document.getElementById("postalCode").value.match(/^[0-9]{3}-[0-9]{2}$|^[0-9]{5}$|^[0-9]{3}\s[0-9]{2}$|^\bSE\b [0-9]{5}$|^\bSE\b\s[0-9]{3}\s[0-9]{2}$|^\bSE\b\s[0-9]{3}-[0-9]{2}$|^SE\d{5}$|^SE\d{3}-[0-9]{2}$|^SE\d{3}\s[0-9]{2}$/)){
            alert("Postnumret är inte korrekt");
            return false;
        }
        
        if(!document.getElementById("telephone").value.match(/^[0-9]+$/)){
            alert("Telefonnumret är inte korrekt");
            return false;
        }
        
        if(!document.getElementById("e-mail").value.match(/^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i)){
            alert("E-post adressem är inte korrekt");
            return false;
        }
        
        
        

        
        var divTag2 = document.createElement("div");
        divTag2.className = "divTag2";
        
        var popUp = document.createElement("div");
        popUp.className = "popUp";
        
        document.body.appendChild(popUp);
        document.body.appendChild(divTag2);
        
        var question = document.createTextNode("Stämmer uppgifterna?");
        popUp.appendChild(question);
        
        var firstNameText = document.createTextNode("Förnamn:   " + document.getElementById("firstName").value);
        var pTag = document.createElement("p");
        pTag.appendChild(firstNameText);
        popUp.appendChild(pTag);
        
        var lastNameText = document.createTextNode("Efternamn:  " + document.getElementById("lastName").value);
        pTag = document.createElement("p");
        pTag.appendChild(lastNameText);
        popUp.appendChild(pTag);
        
        var postalCodeText = document.createTextNode("Postnummer:   " + validate.pcDisplay);
        pTag = document.createElement("p");
        pTag.appendChild(postalCodeText);
        popUp.appendChild(pTag);
        
        var telephoneText = document.createTextNode("Telefon:   " + document.getElementById("telephone").value);
        pTag = document.createElement("p");
        pTag.appendChild(telephoneText);
        popUp.appendChild(pTag);
        
        var emailText = document.createTextNode("E-post:    " + document.getElementById("e-mail").value);
        pTag = document.createElement("p");
        pTag.appendChild(emailText);
        popUp.appendChild(pTag);
        
        var priceModel = document.createTextNode("Prismodell: " + document.getElementById("priceModel").value);
        pTag = document.createElement("p");
        pTag.appendChild(priceModel);
        popUp.appendChild(pTag);
        
        
        //Gör så att fälten inte går att klicka på när popup fönstret visas
        document.getElementById("firstName").disabled = true;
        document.getElementById("lastName").disabled = true;
        document.getElementById("postalCode").disabled = true;
        document.getElementById("telephone").disabled = true;
        document.getElementById("e-mail").disabled = true;
        document.getElementById("priceModel").disabled = true;
        
        document.body.style.backgroundColor="#454244";
        
        
        
        
        
        //Lägger in knappar i popup fönstret
        var sendButton = document.createElement("input");
        sendButton.type = "submit";
        sendButton.value = "Skicka!";
        sendButton.className = "sendButton";
        popUp.appendChild(sendButton);
        sendButton.onclick = validate.send;
        
        
        var cancelButton = document.createElement("input");
        cancelButton.type = "button";
        cancelButton.value = "Ändra";
        cancelButton.className = "cancelButton";
        popUp.appendChild(cancelButton);
        cancelButton.onclick = validate.cancel;
    },
    
    
    
        send:function(){
        document.getElementById("firstName").disabled = false;
        document.getElementById("lastName").disabled = false;
        document.getElementById("postalCode").disabled = false;
        document.getElementById("telephone").disabled = false;
        document.getElementById("e-mail").disabled = false;
        document.getElementById("priceModel").disabled = false;
            validate.form.submit();
            },
            
            
            
        cancel: function(){
            console.log("Inne i cancel");
        document.getElementById("firstName").disabled = false;
        document.getElementById("lastName").disabled = false;
        document.getElementById("postalCode").disabled = false;
        document.getElementById("telephone").disabled = false;
        document.getElementById("e-mail").disabled = false;
        document.getElementById("priceModel").disabled = false;
        document.body.style.backgroundColor="white";
        
        var removePopUp = document.querySelector(".popUp");
        removePopUp.parentNode.removeChild(removePopUp);
        }
            
        
    };
    

window.onload = validate.init;

//http://www.w3schools.com/jsref/prop_html_disabled.asp
