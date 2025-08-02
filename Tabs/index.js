let tabs = document.querySelectorAll(".tab")
let tabcontent = document.querySelectorAll(".content")

for (let i =0; i< tabs.length; i++)
{
    tabs[i].addEventListener("click" , function () 
    {
       for(let j =0; j< tabs.length; j++)
        {
            tabs[j].classList.remove("active")
            tabcontent[j].classList.remove ("active")
        }        
        this.classList.add("active");
        let target= this.dataset.target;
        let targetcontent = document.getElementById("" + target)
        targetcontent.classList.add("active")
    })
}