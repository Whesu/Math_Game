

  let score=0;

  let time=0;
// Update the count down every 1 second


    function howTo(){
        document.querySelector('.mytxt').style.display='block';
  
       
       
    }
    let final_check;
   
    function select(){
        let max=document.querySelector('.max').value;
    var myDisplay=document.querySelector('.myDisplay');
    max_num=max;
    num=Math.floor(Math.random()*max_num)
    let my_check1=(num+50)*35;
    let my_check2=(num*50)*2;
    final_check=my_check1+my_check2;
  
  
        myDisplay.innerHTML=Math.floor(Math.random()*max_num);
        document.querySelector('.myDisplay').innerHTML= "What is the sum of "+ my_check1 + " and " + my_check2 + "?";
  
       
       
    }
    function reStart(){
        document.querySelector('.start').style.display='none';
       
       location.reload();
    }
    window.addEventListener("load",()=>{

        guess_count=0;
    const number=document.querySelector('input');
  
        
    number.addEventListener('change', (e)=>{
        document.querySelector('.mytxt').style.display='none';
        document.querySelector('.how').style.display='none';
        
    document.querySelector('.mySelect').style.display='none';
//while(guess=8){
        let number_of_guesses=3;
         
        
        let num=document.querySelector('input').value;
      
       
      
        let guess=final_check;
       
    try {
        if(isNaN(num)){
            document.querySelector('input').value='Invalid input!';
            document.querySelector('.start').style.display='block';
        }
        else if(num==' '){
            document.querySelector('input').value='Enter a valid number!';
            document.querySelector('.start').style.display='block';
        }
        else{
           
           
            if((guess_count!=number_of_guesses) && (num!=final_check)){
                guess_count++;
               
                //alert(guess_count)
                div=document.createElement("div");
            div.innerHTML="<h1 class='myDis'> Your answer " + num + " was wrong! Try again. <span style='display:block;color:red'>NUMBER OF TRIALS LEFT:</span>"+ (number_of_guesses-guess_count)+"</h1>";
            document.querySelector(".content").appendChild(div);
           
            document.querySelector('input').value='';
            score+=0;
            document.querySelector('.score').innerHTML=score;
           
                const play=document.querySelector('.oh');
              play.play();
            
             
            }else if((guess_count!=number_of_guesses) && (num==final_check)){
                
                div=document.createElement("div");
           // div.innerHTML="<h1  class='myDis'> Your answer " + num + " was correct! </h1>";
           //div.innerHTML="<h1  class='myDis'> Your answer " + num + " was correct! </h1>";
            document.querySelector(".content").appendChild(div);
           
            document.querySelector('input').value='';
            document.querySelector('input').style.display='block';
            //document.querySelector('.start').style.display='block';

           
            score+=5;
            document.querySelector('.score').innerHTML=score;
      
            my_check1=(num-750);
            my_check2=Math.floor((num-500)/2);
            final_check=(my_check1+my_check2);
            document.querySelector('.myDisplay').innerHTML= "What is the sum of "+ my_check1 + " and " + my_check2 + "?";
           
            const clap=document.querySelector('.clap');
            clap.play();
  
   
            }
            else if((guess_count==number_of_guesses) && (num!=final_check)){
                
                div=document.createElement("div");
            div.innerHTML="<h1  class='myDis'> You have guessed wrong " + guess_count + " times. <span style='display:block;color:red'>.....GAME OVER.....! </span></h1>";

            document.querySelector(".content").appendChild(div);
           
            document.querySelector('input').value='';
           
            document.querySelector('input').style.display='none';
            document.querySelector('.start').style.display='block';
           
       
            }
           
        }
    } catch (error) {
        alert("An error has occured!")
    }
 


   
//}
})
   


var x = setInterval(function() {
   
  
    time++;
   // document.querySelector('.time').innerHTML = time+" " +seconds;
   document.querySelector('.time').innerHTML = time + " Secs";
   
},1000)

})  

