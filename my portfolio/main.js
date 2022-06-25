let whoBut = document.getElementById("who-but")
let whoIAm = document.getElementById("who-i-am")

let profSkill = document.getElementById("prof-skill")
let profBut = document.getElementById("prof-but")

let whoBut2 = document.getElementById("who-but2")
let profBut2 = document.getElementById("prof-but2")


let workHistory = document.getElementById("work-history")
let workBut = document.getElementById("work-but")

let navBut = document.getElementById("nav")
let naviBar = document.getElementById("navi")
let cancelBurg = document.getElementById("cancel-burguer")

let month = document.getElementById("monthly")
let year = document.getElementById("yearly")

let basicPlan = document.getElementById("basic-plan")
let smartPlan = document.getElementById("smart-plan")
let goldPlan = document.getElementById("gold-plan")

let layout1 = document.getElementById("layout1")
let layoutImg1 = document.getElementById("layout-img1")
let layout2 = document.getElementById("layout2")
let layoutImg2 = document.getElementById("layout-img2")
let layout3 = document.getElementById("layout3")
let layoutImg3 = document.getElementById("layout-img3")
let layout4 = document.getElementById("layout4")
let layoutImg4 = document.getElementById("layout-img4")
let layout5 = document.getElementById("layout5")
let layoutImg5 = document.getElementById("layout-img5")
let layout6 = document.getElementById("layout6")
let layoutImg6 = document.getElementById("layout-img6")


let comment1 = document.getElementById("comment-1")
let comment2 = document.getElementById("comment-2")
let comment3 = document.getElementById("comment-3")
let comment4 = document.getElementById("comment-4")
let groupCom1 = document.getElementById("group-com1")
let groupCom2 = document.getElementById("group-com2")
let extending1 = document.getElementById("extend")
let extending2 = document.getElementById("extend2")
let extending3 = document.getElementById("extend3")
let closing = document.getElementById("clients")
let clientImg = document.getElementById("client-img")


let headArrow = document.getElementById("head-arrow")
let headButtonArrow2 = document.getElementById("head-button-arrow2")
let monthly = document.getElementById("monthly")
let mont = document.getElementById("month")
let yea = document.getElementById("year")
let priceBut = document.getElementsByClassName("price-but")
let priceImg = document.getElementsByClassName("price-img")


let video = document.getElementById("meet-us-img")
let pupUp = document.getElementById("pup-up")
let pupClose = document.getElementById("pup-close")
let show = document.getElementById("show")


// navigation start
navBut.addEventListener("click", function(){
    naviBar.style.display="block"
})

// cancel-burguer start
cancelBurg.addEventListener("click", function(){
    naviBar.style.display="none"
})
function list(){
    if(screen.width <= 760){
        naviBar.style.display="none"
    }else{
        naviBar.style.display="flex"
    }
}

// cancel-burguer end
// navigation end

whoBut.addEventListener("click", function(){
    whoIAm.style.display="flex"
    workHistory.style.display="none"
    profSkill.style.display="none"
})
whoBut2.addEventListener("click", function(){
    whoIAm.style.display="flex"
    workHistory.style.display="none"
    profSkill.style.display="none"
})

workBut.addEventListener("click", function(){
    workHistory.style.display="flex"
    whoIAm.style.display="none"
    profSkill.style.display="none"
})

profBut.addEventListener("click", function() {
    profSkill.style.display="flex"
    workHistory.style.display="none"
    whoIAm.style.display="none"

})
profBut2.addEventListener("click", function() {
    profSkill.style.display="flex"
    workHistory.style.display="none"
    whoIAm.style.display="none"

})


month.addEventListener("focus", function(){

    if( month.style.backgroundColor="#fff"){
        month.style.backgroundColor="rgb(0, 123, 255)"
        month.style.border="2px solid rgb(0, 123, 255)"
        month.style.color="#fff"

        year.style.backgroundColor="#fff"
        year.style.border="2px solid #fff"
        year.style.color="rgb(0, 123, 255)"
    }else{
        year.style.backgroundColor="#fff"
        year.style.border="2px solid #fff"
        year.style.color="rgb(0, 123, 255)"

        month.style.backgroundColor="rgb(0, 123, 255)"
        month.style.border="2px solid rgb(0, 123, 255)"
        month.style.color="#fff"
    }
    basicPlan.innerHTML="130.99"
    smartPlan.innerHTML="180.99"
    goldPlan.innerHTML="680.99"

})

year.addEventListener("focus", function(){

    if( year.style.backgroundColor="#fff"){
        year.style.backgroundColor="rgb(0, 123, 255)"
        year.style.border="2px solid rgb(0, 123, 255)"
        year.style.color="#fff"
        yea.setAttribute("src", "icons/arrow-color.png")

        month.style.backgroundColor="#fff"
        month.style.border="2px solid #fff"
        month.style.color="rgb(0, 123, 255)"
        mont.setAttribute("src", "icons/arrow-white.png")
    }else{
        month.style.backgroundColor="#fff"
        month.style.border="2px solid #fff"
        month.style.color="rgb(0, 123, 255)"
        mont.setAttribute("src", "icons/arrow-color.png")

        year.style.backgroundColor="rgb(0, 123, 255)"
        year.style.border="2px solid rgb(0, 123, 255)"
        year.style.color="#fff"
        yea.setAttribute("src", "icons/arrow-white.png")
    }
    basicPlan.innerHTML="1571.99"
    smartPlan.innerHTML="2171.99"
    goldPlan.innerHTML="8171.99"

})

layout1.addEventListener("mouseover", function(){
    layoutImg1.setAttribute("src", "icons/graphics-white.png")
    layoutImg1.style.zoom="110%"
    layout1.style.backgroundColor="rgb(0, 123, 255"
    layout1.style.color="#fff"
})
layout1.addEventListener("mouseleave", function(){
    layoutImg1.setAttribute("src", "icons/graphics-color.png")
    layoutImg1.style.zoom="100%"
    layout1.style.backgroundColor="#fff"
    layout1.style.color="#000"
})
layout2.addEventListener("mouseover", function(){
    layoutImg2.setAttribute("src", "icons/developer-white.png")
    layoutImg2.style.zoom="110%"
    layout2.style.backgroundColor="rgb(0, 123, 255"
    layout2.style.color="#fff"
})
layout2.addEventListener("mouseleave", function(){
    layoutImg2.setAttribute("src", "icons/developer-color.png")
    layoutImg2.style.zoom="100%"
    layout2.style.backgroundColor="#fff"
    layout2.style.color="#000"
})
layout3.addEventListener("mouseover", function(){
    layoutImg3.setAttribute("src", "icons/IT-white.png")
    layoutImg3.style.zoom="110%"
    layout3.style.backgroundColor="rgb(0, 123, 255"
    layout3.style.color="#fff"
})
layout3.addEventListener("mouseleave", function(){
    layoutImg3.setAttribute("src", "icons/IT-color.png")
    layoutImg3.style.zoom="100%"
    layout3.style.backgroundColor="#fff"
    layout3.style.color="#000"
})
layout4.addEventListener("mouseover", function(){
    layoutImg4.setAttribute("src", "icons/creative-white.png")
    layoutImg4.style.zoom="110%"
    layout4.style.backgroundColor="rgb(0, 123, 255"
    layout4.style.color="#fff"
})
layout4.addEventListener("mouseleave", function(){
    layoutImg4.setAttribute("src", "icons/creative-color.png")
    layoutImg4.style.zoom="100%"
    layout4.style.backgroundColor="#fff"
    layout4.style.color="#000"
})
layout5.addEventListener("mouseover", function(){
    layoutImg5.setAttribute("src", "icons/market-white.png")
    layoutImg5.style.zoom="110%"
    layout5.style.backgroundColor="rgb(0, 123, 255"
    layout5.style.color="#fff"
})
layout5.addEventListener("mouseleave", function(){
    layoutImg5.setAttribute("src", "icons/market-color.png")
    layoutImg5.style.zoom="100%"
    layout5.style.backgroundColor="#fff"
    layout5.style.color="#000"
})
layout6.addEventListener("mouseover", function(){
    layoutImg6.setAttribute("src", "icons/illustrator-white.png")
    layoutImg6.style.zoom="110%"
    layout6.style.backgroundColor="rgb(0, 123, 255"
    layout6.style.color="#fff"
})
layout6.addEventListener("mouseleave", function(){
    layoutImg6.setAttribute("src", "icons/illustrator-color.png")
    layoutImg6.style.zoom="100%"
    layout6.style.backgroundColor="#fff"
    layout6.style.color="#000"
})

// let comment1 = document.getElementById("comment-1")
// let comment2 = document.getElementById("comment-2")
// let comment3 = document.getElementById("comment-3")
// let comment4 = document.getElementById("comment-4")
// let groupCom1 = document.getElementById("group-com1")
// let groupCom2 = document.getElementById("group-com2")
// let extending = document.getElementById("extend")
// let closing = document.getElementById("close")

comment1.addEventListener("click", function(){
    clientImg.setAttribute("src", "img/my portfolio frame-2.png")
    comment1.style.width="80%"
    comment1.style.height="100%"
    closing.style.display="flex"


    comment2.style.display="none"
    comment3.style.display="none"
    comment4.style.display="none"
    groupCom1.style.width="100%"
    groupCom1.style.display="flex"
    groupCom2.style.display="none"
    extending1.style.display="block"
})
comment2.addEventListener("click", function(){
    clientImg.setAttribute("src", "img/my portfolio frame-2.png")
    comment2.style.width="80%"
    comment2.style.height="100%"
    closing.style.display="flex"

    comment1.style.display="none"
    comment3.style.display="none"
    comment4.style.display="none"
    groupCom1.style.width="100%"
    groupCom1.style.display="flex"
    groupCom2.style.display="none"
    extending2.style.display="block"
})
comment4.addEventListener("click", function(){
    clientImg.setAttribute("src", "img/my portfolio frame-2.png")
    comment4.style.width="80%"
    comment4.style.height="100%"
    closing.style.display="flex"

    comment1.style.display="none"
    comment2.style.display="none"
    comment3.style.display="none"

    groupCom2.style.width="100%"
    groupCom2.style.display="flex"
    groupCom1.style.display="none"
    extending3.style.display="block"
})
closing.addEventListener("click", function(){
    comment1.style.display="flex"
    comment1.style.width="100%"
    comment1.style.height="150px"
    comment2.style.width="90%"
    comment2.style.height="150px"
    comment2.style.display="block"
    comment3.style.display="flex"
    comment4.style.display="block"
    comment4.style.width="100%"
    comment4.style.height="200px"
    closing.style.display="none"

    groupCom1.style.width="50%"
    groupCom2.style.width="50%"
    groupCom1.style.display="block"
    groupCom2.style.display="block"
    extending1.style.display="none"
    extending2.style.display="none"
    extending3.style.display="none"
    clientImg.setAttribute("src", "img/my portfolio frame-2.png")

})






headButtonArrow2.addEventListener("mouseover", function(){
    headArrow.setAttribute("src", "icons/arrow-white.png")
})
headButtonArrow2.addEventListener("mouseleave", function(){
    headArrow.setAttribute("src", "icons/arrow-color.png")
})

// priceBut.addEventListener("mouseover", function(){
//     priceImg.setAttribute("src", "icons/arrow-color.png")
// })



video.addEventListener("click", function(){
    pupUp.style.display="flex"
    show.play()
})
pupClose.addEventListener("click", function(){
    pupUp.style.display="none"
    show.pause()
})