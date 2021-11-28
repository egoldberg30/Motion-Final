import { gsap } from "gsap";
// import {GSDevTools} from "gsap/GSDevTools";
// import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
// import {CustomEase} from "gsap/CustomEase";

// gsap.registerPlugin(GSDevTools, MorphSVGPlugin, CustomEase);
// gsap.registerPlugin(MorphSVGPlugin, CustomEase);
// gsap.registerPlugin(CustomEase);
const mainTL = gsap.timeline();




function LogoAnimation(){
    const tl = gsap.timeline();

    // tl.from ("#book",{duration: 1, y:"-=1000", ease: CustomEase.create("custom", "M0,0 C0.136,0.078 0.382,0.263 0.578,0.448 0.78,0.638 0.932,0.802 1,1 ")})
    tl.from ("#book",{duration: 1, y:"-=1000"});
    // .to ("#book",{duration: 1, scaleX:2})
    // .to ("#book",{duration: 1, scaleY:.5});

    return tl;
}





mainTL.add(LogoAnimation());

// GSDevTools.create();