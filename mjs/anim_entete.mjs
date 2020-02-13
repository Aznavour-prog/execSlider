export class anim_entete{
    constructor(elmEntete){
        this.elmTitre = elmEntete;
        this.anim();
    }

    anim(){
        console.log(this.elmTitre.children[0]);
        this.elmTitre.children[0].classList.add("animEntete");
    }
}