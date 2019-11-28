let getId = id => document.getElementById(id);
getId('edit').addEventListener('click', () => {
	getId('textStyle').style.display = 'none';
	getId('textArea').style.display = 'block';
	getId('textArea2').style.display = 'block';
	getId('add').style.display = 'block';
	getId('save').style.display = 'block';
	getId('textArea2').value = getId('big').innerHTML;

})
getId('save').addEventListener('click', () => {
	getId('textArea2').style.display = 'none';
	getId('big').innerHTML = getId('textArea2').value;
	getId('add').style.display = 'none';
	getId('save').style.display = 'none';
})

getId('style').addEventListener('click', () => {
	getId('textArea').style.display = 'none';
	getId('textStyle').style.display = 'block';

})
getId('add').addEventListener('click', () => {
	getId('big').style.display = 'none';
	getId('inputs').style.display = 'none';
	getId('textArea').style.display = 'none';
	getId('choose').style.display = 'block';

})
getId('table1').addEventListener('click', () => {
	getId('createList').style.display = 'none';
	getId('createTable').style.display = 'block';

})
getId('list1').addEventListener('click', () => {
	getId('createList').style.display = 'block';
	getId('createTable').style.display = 'none';

})


getId('12px').addEventListener('click', () => {
	document.getElementById("big").style.fontSize = '12px';
})
getId('14px').addEventListener('click', () => {
	document.getElementById("big").style.fontSize = '14px';
})
getId('16px').addEventListener('click', () => {
	document.getElementById("big").style.fontSize = '16px';
})
getId('18px').addEventListener('click', () => {
	document.getElementById("big").style.fontSize = '18px';
})
getId('20px').addEventListener('click', () => {
	document.getElementById("big").style.fontSize = '20px';
})

function ChangeFont(selectTag) {
	var whichSelected = selectTag.selectedIndex;
	var selectState = selectTag.options[whichSelected].text;
	var big = document.getElementById("big");
	big.style.fontFamily = selectState;
}

let check = true;
getId('bold').addEventListener('click', () => {
	if (check) {
		document.getElementById("big").style.fontWeight = 'bold';
		check = false;
	} else {
		document.getElementById("big").style.fontWeight = 'normal';
		check = true;
	}
})
let checktwo = true;
getId('italic').addEventListener('click', () => {
	if (checktwo) {
		document.getElementById("big").style.fontStyle = 'italic';
		checktwo = false;
	} else {
		document.getElementById("big").style.fontStyle = 'normal';
		checktwo = true;
	}
})
getId('textColor').addEventListener('click', () => {
	document.getElementById("colorPick").style.display = 'flex';
})
getId('one').addEventListener('click', () => {
	document.getElementById("big").style.color = 'aqua';
	document.getElementById("colorPick").style.display = 'none';
})
getId('two').addEventListener('click', () => {
	document.getElementById("big").style.color = 'red';
	document.getElementById("colorPick").style.display = 'none';
})
getId('three').addEventListener('click', () => {
	document.getElementById("big").style.color = 'green';
	document.getElementById("colorPick").style.display = 'none';
})
getId('four').addEventListener('click', () => {
	document.getElementById("big").style.color = 'gray';
	document.getElementById("colorPick").style.display = 'none';
})
getId('five').addEventListener('click', () => {
	document.getElementById("big").style.color = 'orange';
	document.getElementById("colorPick").style.display = 'none';
})
getId('six').addEventListener('click', () => {
	document.getElementById("big").style.color = 'violet';
	document.getElementById("colorPick").style.display = 'none';
})
getId('seven').addEventListener('click', () => {
	document.getElementById("big").style.color = 'brown';
	document.getElementById("colorPick").style.display = 'none';
})
getId('eight').addEventListener('click', () => {
	document.getElementById("big").style.color = 'yellow';
	document.getElementById("colorPick").style.display = 'none';
})
getId('nine').addEventListener('click', () => {
	document.getElementById("big").style.color = 'blue';
	document.getElementById("colorPick").style.display = 'none';
})


getId('backgroundColor').addEventListener('click', () => {
	document.getElementById("colorPick2").style.display = 'flex';
})
getId('one2').addEventListener('click', () => {
	document.getElementById("big").style.backgroundColor = 'aqua';
	document.getElementById("colorPick2").style.display = 'none';
})
getId('two2').addEventListener('click', () => {
	document.getElementById("big").style.backgroundColor = 'red';
	document.getElementById("colorPick2").style.display = 'none';
})
getId('three2').addEventListener('click', () => {
	document.getElementById("big").style.backgroundColor = 'green';
	document.getElementById("colorPick2").style.display = 'none';
})
getId('four2').addEventListener('click', () => {
	document.getElementById("big").style.backgroundColor = 'gray';
	document.getElementById("colorPick2").style.display = 'none';
})
getId('five2').addEventListener('click', () => {
	document.getElementById("big").style.backgroundColor = 'orange';
	document.getElementById("colorPick2").style.display = 'none';
})
getId('six2').addEventListener('click', () => {
	document.getElementById("big").style.backgroundColor = 'violet';
	document.getElementById("colorPick2").style.display = 'none';
})
getId('seven2').addEventListener('click', () => {
	document.getElementById("big").style.backgroundColor = 'brown';
	document.getElementById("colorPick2").style.display = 'none';
})
getId('eight2').addEventListener('click', () => {
	document.getElementById("big").style.backgroundColor = 'yellow';
	document.getElementById("colorPick2").style.display = 'none';
})
getId('nine2').addEventListener('click', () => {
	document.getElementById("big").style.backgroundColor = 'blue';
	document.getElementById("colorPick2").style.display = 'none';
})



let createTable = document.getElementById('submit');
createTable.addEventListener('click', function () {
	let countTR = document.forms['f1'].children[1].value;
	let countTD = document.forms['f1'].children[4].value;

	let tdWidth = document.forms['f2'].children[1].value;
	let tdHeight = document.forms['f2'].children[4].value;
	let borderWidth = document.forms['f2'].children[7].value;
	let typeOfBorder;
	let colorOfBorder;
	for (let i = 0; i < typeOfBorder2.length; i++) {
		if (typeOfBorder2.children[i].selected == true) {
			typeOfBorder = typeOfBorder2.children[i].value;
		}
	}
	for (let j = 0; j < colorOfBorder2.length; j++) {
		if (colorOfBorder2.children[j].selected == true) {
			colorOfBorder = colorOfBorder2.children[j].value;
		}
	}
	let table = document.createElement('table');
	table.setAttribute("id", "table");
	getId('buffer').appendChild(table);
	for (let i = 0; i < countTR; i++) {
		let tr = document.createElement('tr');
		table.appendChild(tr);
		for (let j = 0; j < countTD; j++) {
			let td = document.createElement('td');
			td.style.width = tdWidth + 'px';
			td.style.height = tdHeight + 'px';
			td.style.borderWidth = borderWidth + 'px';
			td.style.borderStyle = typeOfBorder;
			td.style.borderColor = colorOfBorder;
			td.appendChild(document.createTextNode("TD"));
			tr.appendChild(td);
		}
	}
	getId('textArea2').value += getId('buffer').innerHTML;
	getId('buffer').innerHTML = '';
	getId('big').style.display = 'block';
	getId('inputs').style.display = 'flex';
	getId('edit').style.display = 'block';
	getId('style').style.display = 'block';
	getId('textArea').style.display = 'block';
	getId('choose').style.display = 'none';
})




let listCreate = document.getElementById('submit2');

listCreate.addEventListener('click', function () {
	let typeOfMarks;
	let countLi = countLi2.value;
	typeOfMarks = typeOfMarks2.value;

	let list = document.createElement('ul');

	for (let j = 0; j < countLi; j++) {
		let li = document.createElement('li');
		li.style.listStyleType = typeOfMarks;
		li.appendChild(document.createTextNode(`item ${[j+1]}`));
		list.appendChild(li);

	}
	getId('buffer').appendChild(list);
	getId('textArea2').value += getId('buffer').innerHTML;
	getId('buffer').innerHTML = '';
	getId('big').style.display = 'block';
	getId('inputs').style.display = 'flex';
	getId('edit').style.display = 'block';
	getId('style').style.display = 'block';
	getId('textArea').style.display = 'block';
	getId('textArea2').style.display = 'block';
	getId('inputs2').style.display = 'flex';
	getId('choose').style.display = 'none';
})









/*let creator = document.forms['creator'];
for (let k = 0; k < creator.length; k++) {
	creator.children[k].addEventListener('click', function () {
		if (creator.children[0].checked) {
			getId('createTable').style.display = 'block';
			getId('choose').style.display = 'block';
			getId('createList').style.display = 'none';
		}
		else if (creator.children[1].checked) {
			getId('createTable').style.display = 'none';
			getId('choose').style.display = 'block';
			getId('createList').style.display = 'block';
		}
	})
}
let inputs2 = document.getElementById('inputs2');
inputs2.add.addEventListener('click', function () {
	getId('big').style.display = 'none';
	getId('inputs').style.display = 'none';
	getId('textArea').style.display = 'none';
	getId('choose').style.display = 'block';
	
	
	if (creator.children[0].checked) {
			getId('createTable').style.display = 'block';
			getId('choose').style.display = 'block';
			getId('createList').style.display = 'none';
		}
		else if (creator.children[1].checked) {
			getId('createTable').style.display = 'none';
			getId('choose').style.display = 'block';
			getId('createList').style.display = 'block';
		}
})*/
