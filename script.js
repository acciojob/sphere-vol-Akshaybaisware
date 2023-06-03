function volume_sphere() {
    //Write your code here
  event.preventDefault(); // for form submit t
	const radius = document.getElementById("radius").value;
	const volume = (4 / 3 * Math.PI * radius ** 3);
	document.getElementById("volume") = volume.toFixed(4); // for decimal 4hidigit tak
} 

window.onload =function() // for time loading
	{
		document.getElementById('MyForm').addEventListener('submit' , volume_sphere);
	}