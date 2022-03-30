function clear_all(val){
  document.getElementById("d").value = val;
}

function action(val){
  document.getElementById("d").value += val;
}

function equal(){
  try{
    clear_all(eval(document.getElementById("d").value))
  }
  catch(equal){
    clear_all("Error")
  }
}
