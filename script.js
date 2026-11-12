    let studentInfo = []
 
function add () {
    const input = document.getElementById("input").value
    if (!input){
        alert("Add the your todo")

    }
    
   else{
    studentInfo.push(input)
    display()
    document.getElementById("input").value = ""


   }
}
function display() {
    const displays = document.getElementById("show")
    displays.innerHTML = ""
   for( let i=0; i<studentInfo.length; i++){
    const show =  displays.innerHTML += `<p> ${studentInfo[i]} <br> <br> <button onclick="edit()" class="btn btn-styled btn-solid bg-warning ">Edit</button>  <button onclick="deleteItems()" class="btn-styled btn-solid bg-danger fg-white ">Delete</button></p>`
      console.log(show);
      
   }

}   
function edit (item) {
   const edit = prompt('Edit this item')
   
   if (edit.trim() === "") {
    alert("please enter the new input ")

   }
  else if(edit === null){
    alert("propmt canceled")
   }
   else{
    studentInfo.splice(item,1 ,edit)
    display()

   }

 
}
function deleteItems (item){
    console.log(item);
    
  const confirmMsg = window.confirm("Are you sure want to delete")
  if (confirmMsg){
    studentInfo.splice(item, 1)
    display()
  }
  else{
  display()
  }
}