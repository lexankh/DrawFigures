import './style.css';
import { Request } from "./JS/Request.js";
import { Draw } from "./JS/Draw.js";

 
const form = document.querySelector('.drawer');
const example = document.querySelector('.example');
const advice = document.querySelector('.advice');
const resButton = document.querySelector('.drawer__reset');




function setExample() {
    form.querySelector('.drawer__request').value = example.textContent;
}



form.addEventListener('input', () => {
    advice.style.display = "block";
    example.style.display = "block";
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const requestHandler = new Request(form);
    const drawer = new Draw(requestHandler.operateFigure());
    advice.style.display = "none";
    example.style.display = "none";
    resButton.style.display = "inline-block";


    
  

})

example.addEventListener('click', setExample);









