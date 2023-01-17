const params = new URLSearchParams(window.location.search);

const n = params.get("name");
const c = params.get("class");
const a = params.get("academy");

if(params.get("name") == ("")){
            
            document.getElementById('cl').innerHTML=("Learner 👋, This is Your Course List");
            
            
        }else{
            
            const name = params.get("name");
            if(name == ("")) {
               
                 document.getElementById('cl').innerHTML=("Learner 👋, This is Your Course List");
                 
            }else{
           
                  document.getElementById('cl').innerHTML= n +(" This is Your ")+ a +(" Course List for Class ")+ c;
                  
            }
        }  
