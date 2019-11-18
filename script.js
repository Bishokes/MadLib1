 function start(){
 
 let Superhero = document.getElementById("superhero").value;
   let Superpower = document.getElementById("superpower").value; 
	 let Age = document.getElementById("age").value;
   let Height = document.getElementById("height").value;
	  let Adj1 = document.getElementById("adjective1").value;
   let Villain = document.getElementById("villain").value;
	  let Adj2 = document.getElementById("adjective2").value;

		document.getElementById("myForm").innerHTML = "<h3>The best hero is <span class='word'>" + Superhero + "</span>. " + Superhero + "'s super power is <span class='word'>" + Superpower +"</span>. " + Superhero + " is <span class='word'>" + Age + "</span> years old and <span class='word'>" + Height+ "</span> feet tall. " + Superhero + " is <span class='word'>" + Adj1 + "</span>. " + Superhero +"'s enemy is <span class='word'>" + Villain +"</span>. " + Villain + " is <span class='word'>" + Adj2 + "</span>. </h3>"  
		}