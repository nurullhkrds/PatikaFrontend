const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
const ulList=document.getElementById("listul")



function addTodoList(){
    const inputText=document.getElementById("input").value
    const inputtextt=document.querySelector("#input")
    if(inputText===""){

    }
    else{
        itemsArray.push(inputText)
        localStorage.setItem('items',JSON.stringify(itemsArray))
        var liDOM=document.createElement("li")
        liDOM.innerHTML=inputText;
        var butonClose=document.createElement("button")
        butonClose.classList.add("btn-close")
        liDOM.appendChild(butonClose)
        ulList.appendChild(liDOM)
        inputtextt.value=""


    }
    

}



function getData(){

    data.forEach(element => {
        var li=document.createElement("li")
        li.textContent = element;
        ulList.appendChild(li)
        var butonClose=document.createElement("button")
        butonClose.classList.add("btn-close")
        li.appendChild(butonClose)
        butonClose.addEventListener("click",function(){
           
                // toDoList ls'sini array'a çevirip olarak çağırdık
                let toDoList = JSON.parse(localStorage.getItem("items"))
            
                // toDoList array'i listeye yazdığımız metini içeriyorsa
                if ( toDoList.includes( erase.firstChild.textContent ) === true ) {
                    let indexbul = toDoList.findIndex ( e =>
                        e == erase.firstChild.textContent )
                    
                    // index nosundan kendisini bulup array'den siliyoruz
                    toDoList.splice(indexbul, 1) 
                    
                    // toDoList'i tekrar string'e çevirip ls'ye yolladık.
                    localStorage.setItem("toDoList", JSON.stringify(toDoList))
                
            }
        })
      
      
    });
}

getData();

