//your code here
document.addEventListener("DOMContentLoaded",function(){
	let draggedElement=null;

	let images=document.querySelectorAll(".image");
	images.forEach(image=>{
		image.addEventListener("dragstart",function(e)
		{
			draggedElement=this;
		})

		image.addEventListener("dragover",function(e){
			e.preventDefault();
		})
		image.addEventListener("drop",function(e){
			e.preventDefault(); 
			if (draggedElement!==this) {
				let temp= this.innerHTML
				this.innerHTML= draggedElement.innerHTML
				draggedElement.innerHTML=temp
			}
		})
		image.addEventListener("dragend", function () {
            this.classList.remove("selected"); // Remove highlight
        });
	})
})