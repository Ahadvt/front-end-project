$(document).ready(function(){

  
    $(document).scroll(function(){
        $("#secondheader").hide()
        let scrol=$(document).scrollTop()
        if (scrol>610) {
            $("#secondheader").show()
        }
    })
    
        let search=$(".search-icon")
        search.click(function(){
           let searchInput= $(this).next("div")
           searchInput.slideToggle(200)
           console.log(searchInput);
           
           
        })
    
        $(".icon-close").click(function(){
            
            let menu=document.querySelector(".menuresponsive")
            
            menu.style.display="none"
            console.log(menu);
           
        })
        $(".icon-menu").click(function(){
            
            let menu=$(this).next()
            menu.slideToggle()
            
           
        })
       
    let resp=$(".li")
    $(resp).click(function(){
        let u=$(this).children("ul")
        u.slideToggle()
        
    })
    
    
    
    $(".text-filter p").hover(function(){
        $(".Filters").slideToggle()
        
    })
     
    
        
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    
    
    })
    
    
    
    
    
    
    
    