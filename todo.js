var list =document.getElementById("ullist");



function addtodo(){
    var todoItem =document.getElementById("todo-item");
    var li= document.createElement('li');
    var litxt= document.createTextNode(todoItem.value);
        li.appendChild(litxt);
    list.appendChild(li);
    var delbtn=document.createElement("button");
    var deltxt =document.createTextNode("Delete");
    delbtn.setAttribute("class","btn");
  
    delbtn.setAttribute("onclick","delItem(this)");
    delbtn.appendChild(deltxt);
    li.appendChild(delbtn);
    var editbtn =document.createElement("button");
    var editbtntxt=document.createTextNode("Edit");
    editbtn.appendChild(editbtntxt);
    editbtn.setAttribute("class","btn");
    editbtn.setAttribute("onclick","edititem(this)");

    li.appendChild(editbtn);
    todoItem.value="";

console.log(li);
}


function delItem(e){
    e.parentNode.remove();
}
function delall(){
    list.innerHTML="";
}
function edititem(e){
    e.parentNode.firstChild.nodeValue=prompt("Enter Edit value",e.parentNode.firstChild.nodeValue);
console.log(e.parentNode.firstChild);
}