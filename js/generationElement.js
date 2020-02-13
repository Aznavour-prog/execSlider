function genereSlider(){
    var boutonsSlider = document.querySelectorAll(".boutonSlider");
    let sectionSlider = document.querySelector(".slides");
    console.log(boutonsSlider);
    for(let i = 0;i<boutonsSlider.length;i++){
        console.log(boutonsSlider[i]);
        let imageSlider = document.createElement("div");
        imageSlider.id = "slide-" + (i + 1);
        sectionSlider.appendChild(imageSlider);
    }
}