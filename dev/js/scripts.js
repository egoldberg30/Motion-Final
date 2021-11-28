import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import {CustomEase} from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, CustomEase);
const mainTL = gsap.timeline();




function LogoAnimation(){
    const tl = gsap.timeline();

    tl.from ("#bookshape",{duration: 1, y:"-=1000"});
}





mainTL.add(LogoAnimation());