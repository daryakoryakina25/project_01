function my_fun(){

    console.log("Мой скрипт работает1")
    
    if (document.getElementsByTagName("div")[2].innerHTML==="Корякина"){

        document.getElementsByTagName("div")[2].innerHTML="Koryakina"
        document.getElementsByTagName("div")[3].innerHTML="Darya"
        document.body.style.backgroundImage = 'url("../img/eng_pas.jpg")'
        document.getElementsByTagName("div")[0].innerHTML="&nbsp;"
        document.getElementsByTagName("div")[1].innerHTML="&nbsp;"
        document.getElementsByTagName("div")[2].style.marginTop="200px"
        document.getElementsByTagName("div")[3].style.marginTop="15px"
        document.getElementsByTagName("div")[4].innerHTML="&nbsp;"
        document.getElementsByTagName("div")[5].innerHTML="F"
        document.getElementsByTagName("div")[5].style.marginTop="25px"
        document.getElementsByTagName("div")[6].style.marginTop="-38px"
        document.getElementsByTagName("div")[6].style.marginLeft="150px"
    }
else{
    if (document.getElementsByTagName("div")[2].innerHTML==="Koryakina"){

        document.getElementsByTagName("div")[2].innerHTML="Корякина"
        document.getElementsByTagName("div")[3].innerHTML="Дарья"
        document.getElementsByTagName("div")[4].innerHTML="Денисовна"
        document.getElementsByTagName("div")[5].innerHTML="Ж"
        document.body.style.backgroundImage = 'url("../img/passpotr_shablon.png")'
        document.getElementsByTagName("div")[0].innerHTML="Выдан МВД России по Нижегородской области"
        document.getElementsByTagName("div")[1].innerHTML="20/05/2021 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 434-234"
        document.getElementsByTagName("div")[2].style.marginTop="180px"
        document.getElementsByTagName("div")[3].style.marginTop="30px"
        document.getElementsByTagName("div")[5].style.marginTop="5px"
        document.getElementsByTagName("div")[6].style.marginTop="-25px"
        document.getElementsByTagName("div")[6].style.marginLeft="250px"
    }
    }

}

console.log("Мой скрипт")
const change = document.getElementById("change")
change.addEventListener("click",my_fun)
