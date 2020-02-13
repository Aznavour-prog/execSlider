function genereSlider(){
    var tableauImage = ["1.jpeg", "2.jpg","3.jpg","4.jpg","5.jpg"];
    var boutonsSlider = document.querySelectorAll(".boutonSlider");
    let sectionSlider = document.querySelector(".slides");
    console.log(boutonsSlider);
    for(let i = 0;i<boutonsSlider.length;i++){
        console.log(boutonsSlider[i]);
        let divSlider = document.createElement("div");
        let imageSlider = document.createElement("img");
        imageSlider.src ="../img/"+ tableauImage[i];
        divSlider.appendChild(imageSlider);
        divSlider.id = "slide-" + (i + 1);
        sectionSlider.appendChild(divSlider);
    }
}