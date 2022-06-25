window.onscroll = function(){
    if(window.pageYOffset>100){
        document.getElementById("gotop").classList.add("op1");
        document.getElementById("gotop").classList.remove("op0");
    }else{
        document.getElementById("gotop").classList.add("op0");
        document.getElementById("gotop").classList.remove("op1");
    } 
    // if (window.pageYOffset > 100 || window.pageYOffset> 100){
    // $("#navbar").animate({"position":"fixed"});
    // }

    if (window.pageYOffset > 100 || window.pageYOffset> 100) {
         document.getElementById("navbar").style.position = 'fixed';
        document.getElementById("navbar").style.width = '100%';
        document.getElementById("navbar").style.zIndex = '3';
      } else {
        document.getElementById("navbar").style.position = 'relative';
        document.getElementById("navbar").style.width = '100%';
    }
}
//     window.onscroll= function scrollFunction() {
//         if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//           document.getElementById("navbar").style.position = 'fixed';
//           document.getElementById("navbar").style.width = '100%';
//           document.getElementById("navbar").style.zIndex = '3';
//         } else {
//           document.getElementById("navbar").style.position = 'relative';
//           document.getElementById("navbar").style.width = '100%';
//       }
// }
// // window.onscroll = function(){
//     if(window.pageYOffset>100){
//         document.getElementById("navbar").style.position.fixed;
//     }else{

//     } 
// }         
// window.onscroll = function() {scrollFunction()};

// // function scrollFunction() {
// //   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
// //     document.getElementById("navbar").style.position = 'fixed';
// //     document.getElementById("navbar").style.width = '100%';
// //     document.getElementById("navbar").style.zIndex = '1';
// //   } else {
// //     document.getElementById("navbar").style.position = 'absolute';
// //     document.getElementById("navbar").style.width = '100%';
// // }
// // }