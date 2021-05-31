var checkbox = document.getElementById('custom-checkbox');
var header = document.querySelector('.header-title');
var label = document.getElementsByTagName('label');
var contact = document.getElementsByTagName('h3');
var links = document.querySelectorAll('h3 a');

checkbox.addEventListener('click', (e) => {
    if(checkbox.checked){
        document.body.style.backgroundColor = 'black';
        header.style.color = '#62e40be0';
        label[0].style.color = 'white';
        for(let h3 of contact){
            h3.style.color = '#FFF9';
        }
        for(let link of links){
            link.style.color = '#FFF9';
        }
    } else{
        document.body.style.backgroundColor = 'white';
        header.style.color = '#3AF';
        label[0].style.color = 'black';
        for(let h3 of contact){
            h3.style.color = 'black';
        }
        for(let link of links){
            link.style.color = '#000';
        }
    }
});