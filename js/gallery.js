function upDate(previewPic){
    document.getElementById("image").innerHTML=previewPic.alt
    document.getElementById("image").style.background="url("+previewPic.src+")" ;

  
	}

function unDo(){
     document.getElementById("image").style.background="#8e68ff";
     document.getElementById('image').innerHTML= "Hover over an image below to display here."

	}

function noMouse(){
  
    currentImages = document.querySelectorAll(".preview" "img")
    for (var i = 0; i < currentImages.length; i++) { 
        console.log("Image "+ i)

        currentImages[i].setAttribute("tabindex", "0")
    }
}  
