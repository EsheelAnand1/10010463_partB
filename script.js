// will have 3 lets one for user input 2x conversion
// Switch cases so user chooses what they convert using dropbox
// will have 5 document.querySelector to get called out from html
//User choose what they want to convert
// user inputs numbers 
// user hits convert
// website outouts convertion

let temp = document.querySelector('#temp') //allows js to call out an ID from html file 
let anwser = document.querySelector('#anwser');
let enter = document.querySelector('#enter').value;
//  let reset = document.querySelector('#reset')
//  let Fahrenheit = document.querySelector('#Fahrenheit').value
//  let Celsius = document.querySelector('#Celsius').value


let fah = () => { //this is the function where everything will stay

 let userinput = temp.value; //
 let  Fahrenheit = (userinput - 32) * 5 / 9 + " " + "degrees Celsius"; // Fahrenheit to Celsius colloects data from userinput and then does the calculatation and stores it
 let Celsius = userinput * 9 / 5 + 32 + ' ' + " degrees Fahrenheit";// stores what user has entered
//  let Empty = "0";
 let enter = document.getElementById("enter").value;

  switch (enter) //switch to 
  {
    case "Fahrenheit to Celsius": //if user chooses Fahrenheit to Celsius
      //Fahrenheit
      anwser.innerHTML = Fahrenheit //The answer will show on the website after being converted from the variable 
      break; // breaks of after checking if user selected their choice


    case "Celsius to Fahrenheit":

      anwser.innerHTML = Celsius
      break;

     
    default:
      // alert("enter corret details");
      break; //
     
  }

   
  }



let convert = document.querySelector('#convert')
convert.addEventListener('click', (e) => { //this allows user to click convert and it will run fah function 
  fah();
  e.preventDefault()
})