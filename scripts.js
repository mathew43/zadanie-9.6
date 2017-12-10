var list = document.getElementById("list");
var add = document.getElementById("addElem");

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var listItem = document.getElementsByTagName('LI');
	var numberOfList = listItem.length;
	element.innerHTML = 'item' + ' ' + numberOfList;
	list.appendChild(element);
});