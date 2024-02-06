const buttons=document.querySelectorAll('.button');

const body=document.querySelector( 'body' );



buttons.forEach((btn)=>{
//    console.log(btn);
   btn.addEventListener('click',(event)=>{
    //   console.log(event);
      if(event.target==='grey'){
        body.style.backgroundColor=e.target.value;
      }
      if(event.target==='white'){
        body.style.backgroundColor=e.target.value;
      }
      if(event.target==='blue'){
        body.style.backgroundColor=e.target.value;
      }
      if(event.target==='yellow'){
        body.style.backgroundColor=e.target.value;
      }
      if(event.target==='purple'){
        body.style.backgroundColor=e.target.value;
      }
   })
})