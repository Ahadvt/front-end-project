$(document).ready(function(){

let btns=document.querySelectorAll(".butns .butn")
btns.forEach(btn=>{
    let id= $(btn).attr("data-id")
         let card=document.getElementById(id)
         let cards=$(card).parent()
         cards.children().hide()
         $(card).show()
    $(btn).click(function(){
        cards.children().hide()
         $(card).show()
         
     })
})



    $(document).scroll(function(){
        $("#secondheader").hide()
        
        let scrol=$(document).scrollTop()
        if (scrol>610) {
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
        
    })
    
    
    
    
    
    
    
    
    