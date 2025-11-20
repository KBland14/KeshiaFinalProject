function upDate(previewPic){
    document.getElementById("image").innerHTML=previewPic.alt
    document.getElementById("image").style.background="url("+previewPic.src+")" ;

}

function unDo(){
    document.getElementById("image").style.background="#8e68ff";
    document.getElementById('image').innerHTML= "Hover over an image below to display here."
 
}

function myPic () {
   myImages = document.querySelectorAll (".preview")
    for (var i = 0; i < myImages.length; i++) {

        console.log (myImages[i])

       myImages[i].setAttribute("tabindex", "0");

        
    }
}
