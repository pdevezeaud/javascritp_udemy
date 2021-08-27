//<i class="bi bi-check"></i>V"
const icone = `<span class="check"><i class="fa fa-check"></i></span>`;

let tabLi = document.querySelectorAll('li');

for(let li of tabLi){

    li.addEventListener('click', () => {
        li.classList.toggle('active');  //ajout de la class active
        // je teste si le li contient active
        if(li.classList.contains('active')){
            // je modifie le html
            li.innerHTML = li.innerText + icone;
        }else {
            li.innerHTML = li.innerText
        }
    })
}
