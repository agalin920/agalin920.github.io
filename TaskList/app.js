function newTask(){
	let task = document.getElementById('input').value; //Gets value of user's input
	let ul = document.getElementById("list");
	let li = document.createElement('li');		

	li.appendChild(document.createTextNode ("- "+task)); //Appends to the newly created child the Text Node
	ul.appendChild(li);								   //Appends the new li task to the list
	document.getElementById('input').value="";		   //Reset input value
	li.onclick = removeItem;												   
}


document.body.onkeyup = function(e){
	if(e.keyCode == 13){						       //If enter is pressed then call newItem()
		newTask();
	}
}


function removeItem(e){								   //Function to remove the child
	e.target.parentElement.removeChild(e.target);
}