const modify = document.querySelectorAll('.modify');
const modifyArray = Array.from(modify);

modifyArray.map((element) =>{
    element.addEventListener('click',() =>{
        element.innerText = "Taken";
        element.style.backgroundColor = "green";
    });
})