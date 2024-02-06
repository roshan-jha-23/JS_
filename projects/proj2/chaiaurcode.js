const form = document.querySelector("form");

form.addEventListener('submit',(e)=>{
   e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = (document.querySelector("#results"));
  console.log(result);
  if(height===""||height<0||isNaN(height)){
   result.innerHTML="please give a valid height"
  }else if(weight===""||weight<0||isNaN(weight)){
   result.innerHTML="please give a valid weight"
  }else{
   let bmi=Math.round((weight / Math.pow(height/100,2))*10)/10;
   
   //BMI categories: underweight, normal weight, overweight
   if(bmi < 18.5){
    result.innerHTML="Your BMI is "+bmi+". You are Underweight.";
   } else if(bmi >= 18.5 && bmi <= 24.9) {
    result.innerHTML="Your BMI is "+bmi+" .You have Normal Weight.";
   }else{
    result.innerHTML="Your BMI is " + bmi + ". You have Obesity.";
   }
  }
  
})




