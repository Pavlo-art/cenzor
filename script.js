 let form = document.forms['form'];
 let span = document.querySelector(".badWords");
 console.log(span);
 let arr =[];
form.add.onclick = function(){
  if(form.badWordsInput.value.length>0){
    let newWord = form.badWordsInput.value;
    arr.push(newWord);
    form.badWordsInput.value = "";
    span.textContent = arr.join(",");
  }
  else{
    form.badWordsInput.style.borderColor ="red";
  }
 
}

form.reset.onclick = function(){
 span.textContent = "";
 arr =[];
}


form.cenzor.addEventListener("click", function(){
  let area = form.area.value;
  let arrArea = area.split(" ");
  console.log(arrArea);
  for(i=0; i<arr.length; i++){
    for(j=0; j<arrArea.length; j++){
      if(arr[i] == arrArea[j]){
        arrArea[j] = "*".repeat(arrArea[j].length);
        form.area.value = arrArea.join(" ");
      }
    }
  }
})


  








