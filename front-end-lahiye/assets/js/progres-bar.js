$(document).ready(function(){

    $(document).scroll(function(){
        $("#secondheader").hide()
        
        let scrol=$(document).scrollTop()
       
        
        if (scrol>510) {
            $("#secondheader").show()
            
        }else{
            $("#secondheader").hide()
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

    let Thirdanimate=$("div[data-id='animate-third']")
    let Firstanimate=$("div[data-id='animate-first']")
    let Secondanimate=$("div[data-id='animate-second']")
    $(document).scroll(function(){
        
        console.log(Secondanimate);
        
        let scroll=$(document).scrollTop()
        if(scroll>200){
        Thirdanimate.css("animation-name","third")
        Firstanimate.css("animation-name","first")
        Secondanimate.css("animation-name","second")
        }
       

        
           
            
       
        
        
        
        
        
     

        
    })
        
    })