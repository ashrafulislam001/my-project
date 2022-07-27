      const iPhonePrice = 1219
      const coverPrice = 59
               
            //------------- This code for Quantity plus 1----------------------
      let plusBtn=  document.getElementById('plus')
      plusBtn.addEventListener('click', function(){
         plusOneByclick('quantity-input')
         
      })
      // -------- this code for Quantity Minus 1 ------------
      let minusBtn = document.getElementById('minus')
      minusBtn.addEventListener('click', function(){
         minusOneByClick('quantity-input')
      })
      // this Code for second quantity plus 1---------------
      document.getElementById('sec-plus').addEventListener('click' , function(){
         plusOneByclick('sec-quantity-input')
      })
      //this code for second quantity minus 1------------------
      document.getElementById('sec-minus').addEventListener('click', function(){
         minusOneByClick('sec-quantity-input')
      })
      

      document.getElementById('plus').addEventListener('click', function(){
         updateSpanTagPlus('sub-total')
         updateSpanTagPlus('main-total')
         
      })

      document.getElementById('minus').addEventListener('click', function(){
         updateSpanTagMinus('sub-total')
         updateSpanTagMinus('main-total')
         
      })

      document.getElementById('sec-plus').addEventListener('click', function(){
         updateSpanTagPlusCover('sub-total')
         updateSpanTagPlusCover('main-total')
      })

      document.getElementById('sec-minus').addEventListener('click', function(){
         updateSpanTagMinusCover('sub-total')
         updateSpanTagMinusCover('main-total')
         
      })

      document.getElementById('plus').addEventListener('click', function(){
         updateSpanTagPlus('phonePrice')
      })

      document.getElementById('minus').addEventListener('click',  function(){
         updateSpanTagMinus('phonePrice')
      })

      document.getElementById('sec-plus').addEventListener('click', function(){
         updateSpanTagPlusCover('coverPrice')
      })
      document.getElementById('sec-minus').addEventListener('click', function(){
         updateSpanTagMinusCover('coverPrice')
      })






function plusOneByclick(id){
   let quantity = document.getElementById(id)
   let quantityNew = parseFloat(quantity)
   let quantityValue = quantity.value
   let newNumber= parseFloat(quantityValue)
   quantity.value = 1 + newNumber 
}


function minusOneByClick(id){
   let quantity = document.getElementById(id)
   let quantityNew = parseFloat(quantity)
   let quantityValue = quantity.value
   let newNumber = parseFloat(quantityValue)
   quantity.value = newNumber -1
}



 function updateSpanTagMinusCover(id, Number){
   const current = document.getElementById(id).innerText
   const currentNumber = parseFloat(current)
   const totoal = currentNumber + Number
   document.getElementById(id).innerText = currentNumber - coverPrice
}

 function updateSpanTagPlusCover(id, Number){
   const current = document.getElementById(id).innerText
   const currentNumber = parseFloat(current)
   const totoal = currentNumber + Number
   document.getElementById(id).innerText = currentNumber + coverPrice
}

 function updateSpanTagMinus(id, Number){
   const current = document.getElementById(id).innerText
   const currentNumber = parseFloat(current)
   const totoal = currentNumber + Number
   document.getElementById(id).innerText = currentNumber - iPhonePrice
}

  function updateSpanTagPlus(id, Number){
   const current = document.getElementById(id).innerText
   const currentNumber = parseFloat(current)
   const totoal = currentNumber + Number
   document.getElementById(id).innerText = currentNumber + iPhonePrice
}