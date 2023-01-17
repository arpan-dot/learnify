const params = new URLSearchParams(window.location.search);

        
        if(params.get("name") == ("")){
            
            document.getElementById('tt').innerHTML=("Learner 👋,");
            
            
        }else{
            
            const name = params.get("name");
            if(name == ("")) {
               
                 document.getElementById('tt').innerHTML=("Learner 👋,");
                 
            }else{
           
                  document.getElementById('tt').innerHTML=name+("👋,");
                  
            }
        }  


function search() {
    const c = document.getElementById('c').value;
    const a = document.getElementById('a').value;
    const s = document.getElementById('s').value;
    const n = document.getElementById('tt').textContent;

    const link = ("property-list.html?name="+ n +"&class="+ c + "&academy=" + a)
    window.open(link)
} 