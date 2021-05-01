var lists = document.querySelectorAll(".container .container__text .informations .info");

lists.forEach((list)=>{
    list.querySelector('.info__heading').addEventListener('click',()=>{
        lists.forEach((list)=>{
            list.querySelector(".info__heading .heading").classList.remove('add')
            list.querySelector(".info__heading .arrow").classList.remove('add');
            list.querySelector(".info__text").classList.remove('add');
        })
        list.querySelector(".info__heading .heading").classList.add('add');
        list.querySelector('.info__heading .arrow').classList.add('add');
        list.querySelector('.info__text').classList.add('add');
    })
});