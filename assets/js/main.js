// ****새로고침
history.scrollRestoration = "manual";


// ** Main Title Text
intro = gsap.timeline({})
intro.from('.sc-main [data-scroll-text] span',{
  delay:0.2,
  yPercent:100,
  opacity:0,
  stagger:0.1,
  
},'a')





$('[data-scroll-content]').each(function(i,el){
  gsap.from($(this).find('span'),{
    scrollTrigger:{
        trigger:el,
        start:"0% 80%",
        end:"100% 100%",
        // markers:true,
        scrub:1,
      },
      yPercent:100,
      opacity:0,
      stagger:0.1
  })
})




