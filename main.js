let todoListItem = document.getElementsByTagName("li");
let userName = document.getElementById("userName");
let todoTitle = document.getElementById("todoTitle");
let todoList = document.getElementById("todoList");
 
userName.innerHTML = "Ameir";
todoTitle.setAttribute('class','newColor');

for (let i = 0; i < todoListItem.length; i++) {
todoListItem[i].setAttribute('class','listItem');

if (i == 0){
    todoListItem[i].style.color = "red";
   }
}


todoList.addEventListener('click', function (event) {
if (event.target.tagname === "LI") {        
    event.target.remove();
    }
})
