





document.getElementsByTagName("button")[0].onclick = sumar ;

function sumar (){
  let x = parseInt(document.getElementById("campo1").value);
  let y = parseInt(document.getElementById("campo2").value);
  document.getElementsByTagName("div")[1].innerHTML = x + y;
   
}