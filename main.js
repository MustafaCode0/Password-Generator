const numBok = document.getElementById("numChek");	
const lettBok = document.getElementById("lettChek");
const symBok = document.getElementById("symboChek");

const passEl = document.getElementById("pwd");

const arryLis = ["1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","&","*","(",")","-","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var password=[];

const btn = document.getElementById("geneButton");


function generatePass(){
	
		btn.onclick = (btn) => {

				
			
				for(var i=0; i<9; i++){
					
					pass = Math.floor(Math.random()*arryLis.length);
					password.push(arryLis[pass]);
				}
				
				passEl.innerHTML = password.join("");
			
			
		}
	}

generatePass();