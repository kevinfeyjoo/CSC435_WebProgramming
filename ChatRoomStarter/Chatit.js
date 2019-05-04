/*global fetch*/
'use strict';
(function(){
    
    window.onload = function(){
        setInterval(refreshMessages, 5000);
        refreshMessages();
        document.getElementById("send").onclick = sendMessage;
    };
    
    //include this code, based on: https://developers.google.com/web/updates/2015/03/introduction-to-fetch
    function checkStatus(response) {  
        if (response.status >= 200 && response.status < 300) {  
            return response.text();
        } else {  
            return Promise.reject(new Error(response.status+": "+response.statusText)); 
        } 
    }
        
    function refreshMessages(){
        let url = "https://webster.cs.washington.edu/cse154/sections/9/chatit/chatit.php";
        fetch(url,{method: 'GET'}) 
           .then(checkStatus)
           .then(function(text){
            document.getElementById("messages").innerHTML = text;
        })

        .catch(function(Error){
            alert(Error);
         });
    }
    
    function sendMessage(){
        let message = document.getElementById("message").value;
        let data =  new FormData();
        data.append("msg", message);
        //post to php
        let url = "https://webster.cs.washington.edu/cse154/sections/9/chatit/chatit.php";
        fetch(url, {method: "POST", body: data})
            .then(checkStatus)
            .then(function(text){
            refreshMessages() 

        })

        .catch(function(Error){
            alert(Error);
        
        })
    }
        
})();