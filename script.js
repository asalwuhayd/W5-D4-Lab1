let divContinar = document.getElementById("continar")

for (let i = 0; i <= 100; i++) {
    let divAll = document.createElement("div")
    divAll.innerText = i;
    divContinar.appendChild(divAll);
    
   if (i%2==0) {
    divAll.style.cssText="background-color: green; width:200px;height: 100px;display: flex;align-items: center; justify-content: center;"
   } else if (i%2==1) {
    divAll.style.cssText="background-color: red; width:200px;height: 100px;display: flex;align-items: center;justify-content: center;"
    
   } 


   if (i==1)
   {
    divAll.style.cssText="background-color: yellow; width:200px;height: 100px;display: flex;align-items: center;justify-content: center;"
   }
   else if(i == 2)
   {
    divAll.style.cssText="background-color: red; width:200px;height: 100px;display: flex;align-items: center;justify-content: center;"
   }
   else
   {
     for(var x = 2; x < i; x++)
     {
       if( i%2 ==1 && i % x == 0)
       {
        divAll.style.cssText="background-color: yellow; width:200px;height: 100px;display: flex;align-items: center;justify-content: center;"
       }
       
     }
     
    }

   
   
 
    
}

/* if (i==1)
   {
     return false;
   }
   else if(i == 2)
   {
     return true;
   }else
   {
     for(var x = 2; x < n; x++)
     {
       if(i % x == 0)
       {
         return false;
       }
     }
     return true;  
   }*/


