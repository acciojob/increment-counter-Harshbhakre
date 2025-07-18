let count = 0;
document.querySelector("#incrementBtn").addEventListener("click",()=>{
  count++
	document.querySelector("#counter").innerText = count
	alert(count-1)
})