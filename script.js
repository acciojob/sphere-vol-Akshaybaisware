function volume_sphere() {
    //Write your code here
  event.preventDefault(); // for form submit jab hi submit krte hai refresh krte hai to data hudd na na chahiyee save rehna chahiye
	const radius = document.getElementById("radius").value;
	const volume = (4 / 3 * Math.PI * radius ** 3);
	document.getElementById("volume").value = volume.toFixed(4); // for decimal 4 hi digit tak
} 

window.onload =function() // for time loading
	{
		document.getElementById('MyForm').addEventListener('submit' , volume_sphere); //add event listener se sumit dabate hi volume ko show krdena
	}