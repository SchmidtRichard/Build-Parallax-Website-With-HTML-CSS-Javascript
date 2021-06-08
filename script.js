/*
ScrollMagic allows us to trigger specific animations when we scroll
we initialize it by creating a controller
*/
let controller = new ScrollMagic.Controller();

/*
GSAP allows us to do simple animations but with Timeline
we can chain together multiple animations, basically create a timeline for the different parts of the animations
*/
let timeline = new TimelineMax();

timeline
	.to(".rock", 3, { y: -200 })
	.to(".panda", 3, { y: -200 }, "-=3")
	.fromTo(".bg1", { y: -50 }, { y: 0, duration: 3 }, "-=3")
	.to(".content", 3, { top: "0%" }, "-=3")
	.fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 });

/*the first parameter is the element, the second one is the duration, and the third what we want to do

The commented out codes below is just an example of what we can do with it
*/
// timeline.to(".text", 2, { x: 500 }).to(".content-images", 2, { opacity: 0 }, "-=2");

// timeline.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

//Set the animations to work only when we scroll the page
let scene = new ScrollMagic.Scene({
	triggerElement: "section",
	duration: "300%",
	triggerHook: 0
})
	//hook the animation to the scene
	.setTween(timeline)
	//Pin the first part of the page (the panda e mountains) so the other part of the website can come on top of it when the page is scrolled
	.setPin("section")
	//then add it to the controller
	.addTo(controller);
