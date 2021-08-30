let displays=document.getElementById("display");

let calculators = Array.from(document.getElementsByClassName( "js"));

calculators.map( calculator => {
		calculator.addEventListener("click",(e) => {
		switch(e.target.innerText){
			case 'AC':
				displays.innerText = " ";
				break;
			case '⌦':
				if(displays.innerText){
					
					displays.innerText = displays.innerText.slice(0, -1);	
				}
				break;
			case '=':
				try{
					displays.innerText = eval(displays.innerText);
				}catch{
					displays.innerText = 'Error';	
				}
				break;
			case '%':
					
			default:
				displays.innerText += e.target.innerText;
		}
	});
});