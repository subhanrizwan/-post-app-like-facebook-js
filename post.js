// function text(){
//     event.preventDefault()
//     var res =document.getElementById('input')
//     if(res.value){
//       console.log(res.value);
//     }else{
//         alert("required")
//     }
    
// }

function text() {
  // event.preventDefault();
  var x = document.getElementById('input').value
var y = document.getElementById('posted');
y.append(x);
  
}