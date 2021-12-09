import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, CustomEase, DrawSVGPlugin);


const mainTL = gsap.timeline();

function BookBounce(){
    const tl = gsap.timeline();
    tl.from("#book",{duration: 1.3, y:"-=1000", ease: CustomEase.create("custom", "M0,0 C0.136,0.078 0.382,0.263 0.578,0.448 0.78,0.638 0.932,0.802 1,1 ")});
    tl.to("#book", {morphSVG:"#book_squashed", duration: .32})
    .to("#book", {morphSVG:"#book", duration: .22, ease: "none"})
    .to("#book_mask_1", {morphSVG:"#book_mask_2", duration: .01})
    .to("#R_Page6", {autoAlpha:1, duration: 0.01})
    .to("#book",{duration: .6, y:"-=200"}, "-=0.03");
    return tl;
}

function LogoFill(){
    const tl = gsap.timeline();
    tl.from("#Path_R_Page6", {drawSVG: "0%", duration: .25, ease: "none"}, "logo_fill")
    .from("#Path_R_Page5", {drawSVG: "0%", duration: .25, ease: "none"}, "logo_fill")
    .from("#Path_R_Page4", {drawSVG: "0%", duration: .25, ease: "none"}, "logo_fill")
    .from("#Path_R_Page3", {drawSVG: "0%", duration: .25, ease: "none"}, "logo_fill")
    .from("#Path_R_Page2", {drawSVG: "0%", duration: .25, ease: "none"}, "logo_fill")
    .from("#Path_R_Page1", {drawSVG: "0%", duration: .25, ease: "none"}, "logo_fill")
    .from("#Path_L_Page6", {drawSVG: "0%", duration: .25, ease: "none"}, "logo_fill")
    .from("#Path_L_Page5", {drawSVG: "0%", duration: .25, ease: "none"}, "logo_fill")
    .from("#Path_L_Page4", {drawSVG: "0%", duration: .25, ease: "none"}, "logo_fill")
    .from("#Path_L_Page3", {drawSVG: "0%", duration: .25, ease: "none"}, "logo_fill")
    .from("#Path_L_Page2", {drawSVG: "0%", duration: .25, ease: "none"}, "logo_fill")
    .from("#Path_L_Page1", {drawSVG: "0%", duration: .25, ease: "none"}, "logo_fill");
    return tl;
}

function PagesSettle(){
    const tl = gsap.timeline();
    tl.to("#logo_spreadout_solid", {autoAlpha:1, duration: 0.01}, "vectorswitcharoo")
    .to("#logo_spreadout_masks", {autoAlpha:0, duration: 0.01}, "vectorswitcharoo");

    tl.from("#type_1_with_typecover", {duration: 1.1, autoAlpha:0, y:"+=15"}, "pagessettle");
    tl.to("#Solid_R_Page6", {morphSVG:"#regular_R_Page6", duration: 1.1}, "pagessettle")
    .to("#Solid_R_Page5", {morphSVG:"#regular_R_Page5", duration: 1.1}, "pagessettle")
    .to("#Solid_R_Page4", {morphSVG:"#regular_R_Page4", duration: 1.1}, "pagessettle")
    .to("#Solid_R_Page3", {morphSVG:"#regular_R_Page3", duration: 1.1}, "pagessettle")
    .to("#Solid_R_Page2", {morphSVG:"#regular_R_Page2", duration: 1.1}, "pagessettle")
    .to("#Solid_R_Page1", {morphSVG:"#regular_R_Page1", duration: 1.1}, "pagessettle")
    .to("#Solid_L_Page6", {morphSVG:"#regular_L_Page6", duration: 1.1}, "pagessettle")
    .to("#Solid_L_Page5", {morphSVG:"#regular_L_Page5", duration: 1.1}, "pagessettle")
    .to("#Solid_L_Page4", {morphSVG:"#regular_L_Page4", duration: 1.1}, "pagessettle")
    .to("#Solid_L_Page3", {morphSVG:"#regular_L_Page3", duration: 1.1}, "pagessettle")
    .to("#Solid_L_Page2", {morphSVG:"#regular_L_Page2", duration: 1.1}, "pagessettle")
    .to("#Solid_L_Page1", {morphSVG:"#regular_L_Page1", duration: 1.1}, "pagessettle");
    
    // tl.from("#type_1_with_typecover", {duration: 1.1, autoAlpha:0, y:"+=15"}, "pagessettle");
    // tl.to("#R_Page6", {morphSVG:"#regular_R_Page6", duration: 1.1}, "pagessettle")
    // .to("#R_Page5", {morphSVG:"#regular_R_Page5", duration: 1.1}, "pagessettle")
    // .to("#R_Page4", {morphSVG:"#regular_R_Page4", duration: 1.1}, "pagessettle")
    // .to("#R_Page3", {morphSVG:"#regular_R_Page3", duration: 1.1}, "pagessettle")
    // .to("#R_Page2", {morphSVG:"#regular_R_Page2", duration: 1.1}, "pagessettle")
    // .to("#R_Page1", {morphSVG:"#regular_R_Page1", duration: 1.1}, "pagessettle")
    // .to("#L_Page6", {morphSVG:"#regular_L_Page6", duration: 1.1}, "pagessettle")
    // .to("#L_Page5", {morphSVG:"#regular_L_Page5", duration: 1.1}, "pagessettle")
    // .to("#L_Page4", {morphSVG:"#regular_L_Page4", duration: 1.1}, "pagessettle")
    // .to("#L_Page3", {morphSVG:"#regular_L_Page3", duration: 1.1}, "pagessettle")
    // .to("#L_Page2", {morphSVG:"#regular_L_Page2", duration: 1.1}, "pagessettle")
    // .to("#L_Page1", {morphSVG:"#regular_L_Page1", duration: 1.1}, "pagessettle");
    return tl;
}

function Typography(){
    const tl = gsap.timeline();
    tl.to("#typecover_0C, #typecover_0D, #typecover_0E, #typecover_0F, #typecover_0G, #typecover_1A, #typecover_1B, #typecover_1C, #typecover_1D, #typecover_1E", {autoAlpha:1, duration:0.01}, "simultaneous1")
    .to("#typecover_0A", {autoAlpha:0, duration:0.01}, "simultaneous1")

    .to("#typecover_0C", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_0D", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_0E", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_0F", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_0G", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_1A", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_1B", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_1C", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_1D", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_1E", {autoAlpha:0, duration:0.01}, "+=.1")

    .to("#typecover_1D", {autoAlpha:1, duration:0.01}, "+=.07")
    .to("#typecover_1C", {autoAlpha:1, duration:0.01}, "+=.07")
    .to("#typecover_1B", {autoAlpha:1, duration:0.01}, "+=.07")
    .to("#typecover_1A", {autoAlpha:1, duration:0.01}, "+=.07")

    .to("#type_1", {autoAlpha:0, duration:0.01}, "simultaneous2")
    .to("#type_2", {autoAlpha:1, duration:0.01}, "simultaneous2")
    .to("#typecover_1A, #typecover_1B, #typecover_1C, #typecover_1D", {autoAlpha:0, duration:0.01}, "simultaneous2")
    .to("#typecover_2A, #typecover_2B, #typecover_2C, #typecover_2D, #typecover_2E, #typecover_2F, #typecover_2G", {autoAlpha:1, duration:0.01}, "simultaneous2")

    .to("#typecover_2A", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_2B", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_2C", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_2D", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_2E", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_2F", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_2G", {autoAlpha:0, duration:0.01}, "+=.1")

    .to("#typecover_1E", {autoAlpha:1, duration:0.01}, "+=.07")
    .to("#typecover_1D", {autoAlpha:1, duration:0.01}, "+=.07")
    .to("#typecover_1C", {autoAlpha:1, duration:0.01}, "+=.07")
    .to("#typecover_1B", {autoAlpha:1, duration:0.01}, "+=.07")
    .to("#typecover_1A", {autoAlpha:1, duration:0.01}, "+=.07")

    .to("#type_2", {autoAlpha:0, duration:0.01}, "simultaneous3")
    .to("#type_3", {autoAlpha:1, duration:0.01}, "simultaneous3")
    .to("#typecover_2A, #typecover_2B, #typecover_2C, #typecover_2D, #typecover_2E, #typecover_2F, #typecover_2G", {autoAlpha:0, duration:0.01}, "simultaneous3")
    .to("#typecover_1A, #typecover_1B, #typecover_1C, #typecover_1D, #typecover_1E", {autoAlpha:0, duration:0.01}, "simultaneous3")
    .to("#typecover_3A, #typecover_3B, #typecover_3C, #typecover_3D, #typecover_3E", {autoAlpha:1, duration:0.01}, "simultaneous3")

    .to("#typecover_3A", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_3B", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_3C", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_3D", {autoAlpha:0, duration:0.01}, "+=.1")
    .to("#typecover_3E", {autoAlpha:0, duration:0.01}, "+=.1");
    return tl;
}

mainTL.add(BookBounce())
.add(LogoFill(), "-=.5")
.add(PagesSettle(), "+=.4")
.add(Typography());

// GSDevTools.create();