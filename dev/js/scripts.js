import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, CustomEase);




const mainTL = gsap.timeline();

function LogoAnimation(){
    const tl = gsap.timeline();

    tl.from ("#book",{duration: 1.3, y:"-=1000", ease: CustomEase.create("custom", "M0,0 C0.136,0.078 0.382,0.263 0.578,0.448 0.78,0.638 0.932,0.802 1,1 ")});
    // tl.from ("#book",{duration: 1, y:"-=1000"});
    tl.to("#book", {morphSVG:"#book_squashed", duration: .25})
    .to("#book", {morphSVG:"#book", duration: .1})
    .to("#book_mask_1", {morphSVG:"#book_mask_2", duration: .01})
    .to("#book",{duration: .5, y:"-=200"}, "logo_fill")

    .to("#Path_R_Page6", {drawSVG: "100%", duration: .5}, "logo_fill")
    .to("#Path_R_Page5", {drawSVG: "100%", duration: .5}, "logo_fill")
    .to("#Path_R_Page4", {drawSVG: "100%", duration: .5}, "logo_fill")
    .to("#Path_R_Page3", {drawSVG: "100%", duration: .5}, "logo_fill")
    .to("#Path_R_Page2", {drawSVG: "100%", duration: .5}, "logo_fill")
    .to("#Path_R_Page1", {drawSVG: "100%", duration: .5}, "logo_fill")

    .to("#Path_L_Page6", {drawSVG: "100%", duration: .5}, "logo_fill")
    .to("#Path_L_Page5", {drawSVG: "100%", duration: .5}, "logo_fill")
    .to("#Path_L_Page4", {drawSVG: "100%", duration: .5}, "logo_fill")
    .to("#Path_L_Page3", {drawSVG: "100%", duration: .5}, "logo_fill")
    .to("#Path_L_Page2", {drawSVG: "100%", duration: .5}, "logo_fill")
    .to("#Path_L_Page1", {drawSVG: "100%", duration: .5}, "logo_fill");

    return tl;
}

mainTL.add(LogoAnimation());

GSDevTools.create();



{/* <g id="book_elements">
            <mask id="mask0_0_1" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="251" y="187" width="58" height="58">
              <path id="book_mask_2" fill="#FC0202" d="M251.345 187.038h57.58v57.581h-57.58z"/>
            </mask>
            <g mask="url(#mask0_0_1)" fill="#351000">
              <path id="book_squashed" d="M269 208.62h22v36h-22z"/>
              <path id="book" d="M274 188.62h12v56h-12z"/>
            </g> */}