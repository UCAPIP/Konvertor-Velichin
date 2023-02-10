

document.getElementById('kmInput').addEventListener('input', function(e) {
	let km = e.target.value;
	console.log(km);
	document.getElementById('mOutput').innerHTML = km*1000;
	document.getElementById('smOutput').innerHTML = km*1000000;
	document.getElementById('mmOutput').innerHTML = km*1000000000;
});

document.getElementById('kgInput').addEventListener('input', function(f) {
	let kg = f.target.value;
	console.log(kg);
	document.getElementById('gOutput').innerHTML = kg*1000;
	document.getElementById('mgOutput').innerHTML = kg*1000000;
});