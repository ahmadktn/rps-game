var pos = 0;
const rules = () =>{
	let rulebar = document.getElementById('rule');
	let r = ['Rock beats scissors', 'Scissors beats paper', 'Paper beats rock'];
	pos ++;
	if (pos >= r.length) {
		pos = 0;
	}
	rulebar.innerHTML = r[pos];
}
setInterval(rules, 2000);

var arr = ['icn03.png', 'icn04.png', 'icn05.png'];

var you = document.getElementById('you');

function r(){
	you.src = arr[1];
	let d = arr[Math.floor(Math.random()*arr.length)];

	let cpu = document.getElementById('cpu');
	cpu.src = d;
}
function p(){
	you.src = arr[2];
	let d = arr[Math.floor(Math.random()*arr.length)];

	let cpu = document.getElementById('cpu');
	cpu.src = d;
}
function s(){
	you.src = arr[0];
	let d = arr[Math.floor(Math.random()*arr.length)];

	let cpu = document.getElementById('cpu');
	cpu.src = d;
}
