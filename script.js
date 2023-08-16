
const tl = gsap.timeline();

tl.from('.logo ,.nav1 h2, .nav2 , button',{
    y:-100,
    opacity:0,
    duration:1,
    daley:0.5,
    stagger:0.4,

})




tl.from('#main h1',{
    y:100,
    opacity:0,
    duration:1,
    daley:0.5,
    stagger:0.5


})

tl.from('#main img',{
    scale:0,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.6

})