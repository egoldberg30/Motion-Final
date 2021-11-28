import { gsap } from "gsap";
import {GSDevTools} from "gsap/GSDevTools";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
import {CustomEase} from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, CustomEase);
const mainTL = gsap.timeline();




function LogoAnimation(){
    const tl = gsap.timeline();

    tl.from ("#book",{duration: 1, y:"-=1000"});

    return tl;
}





mainTL.add(LogoAnimation());

GSDevTools.create();