let btn=document.querySelector("#btn");
let com= document.querySelector("#com");
let p1 = document.querySelector("#p1")
let option = document.querySelectorAll(".icon");
let shadow=document.querySelector(".shadow");


// s.disabled=true;

btn.addEventListener("click",()=>{
    
   com.classList.add("ani");
   p1.classList.add("anim");
   document.querySelector('#result').innerHTML="";
   // document.querySelector("").disabled=false;
})
let stop=()=>{
   com.classList.remove("ani");
   p1.classList.remove("anim");
}

let computer=()=>{
   const arr=["rock","paper","scissor"]
   const idx=Math.floor(Math.random()*3);

   if(idx===0){
      document.querySelector("#com").innerHTML='<img src="Rock(l).png">';
   }
   if(idx===1){
      document.querySelector("#com").innerHTML='<img src="paper(l).png">';
   }
   if(idx===2){
      document.querySelector("#com").innerHTML='<img src="scissor(l).png">';
   }
   
   return arr[idx];
}



option.forEach ((icon) =>{
  
   icon.addEventListener("click",()=>{
      stop();
      let comp =computer();
      let id= icon.getAttribute("Id")
      // console.log(`user choice=${id}`)
      {
      if (id==="rock_icon"){
         document.querySelector("#p1").innerHTML='<img src="Rock(r).png">';
      }
      if (id==="scissor_icon"){
         document.querySelector("#p1").innerHTML='<img src="Scissor(r).png">';
      }
      if (id==="paper_icon"){
         document.querySelector("#p1").innerHTML='<img src="Paper(r).png">';
      }
      }
      {
         if(comp==="paper" && id==="scissor_icon" || comp==="scissor" && id==="rock_icon" || comp==="rock" && id==="paper_icon"){
            document.querySelector("#result").innerHTML="<p>Congratularions... You win !! &#128512</p>";
            document.querySelector("#result").style.color="green";
         }
         if(comp==="paper" && id==="rock_icon" || comp==="scissor" && id==="paper_icon" || comp==="rock" && id==="scissor_icon"){
            document.querySelector("#result").innerHTML="<p> Opps...Computer Win !! &#128524 </p>";
            document.querySelector("#result").style.color="red";
            
            
         }
         if(comp==="paper" && id==="paper_icon" || comp==="scissor" && id==="scissor_icon" || comp==="rock" && id==="rock_icon"){
            document.querySelector("#result").innerHTML="<p> Match Draw &#128517 <p>";
            document.querySelector("#result").style.color="black";
         }

      }
      
      
   })

})

