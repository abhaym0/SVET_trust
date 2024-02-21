gsap.to(".p",{
    x:100
})


// setInterval(function(){

//     gsap.to(".navigater",{
//         x:200
//     })

// },5000)

// document.addEventListener('scrollend',function(e){
//     console.log(e)
// })

// Shery.mouseFollower({
//     //Parameters are optional.
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: .2,
//   });

//   Shery.textAnimate(".headers" /* Element to target.*/, {
//     //Parameters are optional.
//     style: 1,
//     y: 10,
//     delay: 0.07,
//     duration: 2.5,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.1,
//   });

// Shery.imageEffect(".hero-images", {
//     style: 3,
//     /*optional parameters
//     these parameter dose not applies to custom scroll trigger callback */
//     scrollSnapping: true,
//     scrollSpeed: 6,
//     touchSpeed: 6,
//     damping: 7,
//   });

// Shery.hoverWithMediaCircle(".hero-images" /* Element to target.*/, {
//   images: ["./hero_1.jpg", "./hero_2.jpg",] /*OR*/,
//   //videos: ["video1.mp4", "video2.mp4"],
// });

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('.notmain'),
//   smooth: true
// });

$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});
