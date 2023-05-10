/*la recuperation des elements*/

// document.getElementById('email').addEventlistener('change', function (){alert('hello')});
       


function changeEmail() {
      var email=document.getElementById('email').value;
       var text=document.getElementById('f');
       var pattern =/^[^]+@[^]+\.[a-z]{2,3}$/;
        if (email.match(pattern)){
         // text.innerhtml="votre adresse est valide";
         text.style.display='none'
           // return true
        } else{
          text.innerHTML='votre adresse mail est invalide';
           text.style.display= 'block';
          text.style.color ='red'
           //return false
        } if (email==""){
           text.innerHTML="";
        }
    }

       
function changemdp() {
  var mdp=document.getElementById('mdp').value;
   var text=document.getElementById('passtext');
   var fr =/(?=,*\d)(?=,*[a-z])(?=,*[A-Z]).{3,}/;
    if (mdp.match(fr)){
     text.style.display='none'
    } else{   

       text.innerHTML='votre mot de passe est invalide';
        text.style.display= 'block';
      text.style.color ='red'
       //return false
    } if (mdp==""){
       text.innerHTML="";
    }
}
     
       
        
    
