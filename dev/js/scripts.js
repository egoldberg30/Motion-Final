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
    tl.to("#book", {morphSVG:"#book_squashed", duration: .32})
    .to("#book", {morphSVG:"#book", duration: .2}, "sametime")
    .to("#book_mask_1", {morphSVG:"#book_mask_2", duration: .01}, "sametime")
    .to("#book",{duration: .4, y:"-=200"}, "logo_fill");

    tl.from("#Path_R_Page6", {drawSVG: "0%", duration: .3}, "logo_fill")
    .from("#Path_R_Page5", {drawSVG: "0%", duration: .3}, "logo_fill")
    .from("#Path_R_Page4", {drawSVG: "0%", duration: .3}, "logo_fill")
    .from("#Path_R_Page3", {drawSVG: "0%", duration: .3}, "logo_fill")
    .from("#Path_R_Page2", {drawSVG: "0%", duration: .3}, "logo_fill")
    .from("#Path_R_Page1", {drawSVG: "0%", duration: .3}, "logo_fill")
    .from("#Path_L_Page6", {drawSVG: "0%", duration: .3}, "logo_fill")
    .from("#Path_L_Page5", {drawSVG: "0%", duration: .3}, "logo_fill")
    .from("#Path_L_Page4", {drawSVG: "0%", duration: .3}, "logo_fill")
    .from("#Path_L_Page3", {drawSVG: "0%", duration: .3}, "logo_fill")
    .from("#Path_L_Page2", {drawSVG: "0%", duration: .3}, "logo_fill")
    .from("#Path_L_Page1", {drawSVG: "0%", duration: .3}, "logo_fill");

    tl.to("logo_spreadout_solid", {alpha:1, duration: 0.01}, "vectorswitcharoo")
    .to("logo_spreadout_masks", {alpha:0, duration: 0.01}, "vectorswitcharoo");

    tl.from ("#type", {duration: 1.3, alpha: 1, y:"-=100", ease: "none"}, "pages-settle");
    tl.to("#Solid_R_Page6", {morphSVG:"#R_Page6_2", duration: 0.9}, "pages-settle")
    .to("#Solid_R_Page5", {morphSVG:"#R_Page5_2", duration: 0.9}, "pages-settle")
    .to("#Solid_R_Page4", {morphSVG:"#R_Page4_2", duration: 0.9}, "pages-settle")
    .to("#Solid_R_Page3", {morphSVG:"#R_Page3_2", duration: 0.9}, "pages-settle")
    .to("#Solid_R_Page2", {morphSVG:"#R_Page2_2", duration: 0.9}, "pages-settle")
    .to("#Solid_R_Page1", {morphSVG:"#R_Page1_2", duration: 0.9}, "pages-settle")
    .to("#Solid_L_Page6", {morphSVG:"#L_Page6_2", duration: 0.9}, "pages-settle")
    .to("#Solid_L_Page5", {morphSVG:"#L_Page5_2", duration: 0.9}, "pages-settle")
    .to("#Solid_L_Page4", {morphSVG:"#L_Page4_2", duration: 0.9}, "pages-settle")
    .to("#Solid_L_Page3", {morphSVG:"#L_Page3_2", duration: 0.9}, "pages-settle")
    .to("#Solid_L_Page2", {morphSVG:"#L_Page2_2", duration: 0.9}, "pages-settle")
    .to("#Solid_L_Page1", {morphSVG:"#L_Page1_2", duration: 0.9}, "pages-settle");
    return tl;
}


// tl.from ("#book",{duration: 1.3, y:"-=1000", ease: CustomEase.create("custom", "M0,0 C0.136,0.078 0.382,0.263 0.578,0.448 0.78,0.638 0.932,0.802 1,1 ")});


mainTL.add(LogoAnimation());

GSDevTools.create();