import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, CustomEase, DrawSVGPlugin);




const mainTL = gsap.timeline();

function LogoAnimation(){
    const tl = gsap.timeline();

    tl.from ("#book",{duration: 1.3, y:"-=1000", ease: CustomEase.create("custom", "M0,0 C0.136,0.078 0.382,0.263 0.578,0.448 0.78,0.638 0.932,0.802 1,1 ")});
    tl.to("#book", {morphSVG:"#book_squashed", duration: .35})
    .to("#book", {morphSVG:"#book", duration: .27})
    .to("#book_mask_1", {morphSVG:"#book_mask_2", duration: .01})
    .to("#book",{duration: .5, y:"-=200"}, "logo_fill")

    tl.from("#Path_R_Page6", {drawSVG: "0%", transformOrigin:"0%", duration: .5}, "logo_fill")
    .from("#Path_R_Page5", {drawSVG: "0%", duration: .5}, "logo_fill")
    .from("#Path_R_Page4", {drawSVG: "0%", duration: .5}, "logo_fill")
    .from("#Path_R_Page3", {drawSVG: "0%", duration: .5}, "logo_fill")
    .from("#Path_R_Page2", {drawSVG: "0%", duration: .5}, "logo_fill")
    .from("#Path_R_Page1", {drawSVG: "0%", duration: .5}, "logo_fill")

    .from("#Path_L_Page6", {drawSVG: "0%", duration: .5}, "logo_fill")
    .from("#Path_L_Page5", {drawSVG: "0%", duration: .5}, "logo_fill")
    .from("#Path_L_Page4", {drawSVG: "0%", duration: .5}, "logo_fill")
    .from("#Path_L_Page3", {drawSVG: "0%", duration: .5}, "logo_fill")
    .from("#Path_L_Page2", {drawSVG: "0%", duration: .5}, "logo_fill")
    .from("#Path_L_Page1", {drawSVG: "0%", duration: .5}, "logo_fill")
    
    .from ("#type", {duration: 1.3, alpha: 1, y:"-=100", ease: "none"});

    return tl;
}

mainTL.add(LogoAnimation());

GSDevTools.create();