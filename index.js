'use strict'

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const currentRole = document.querySelector('#dropdown');
const formControl = document.querySelectorAll('.form-control');
const favouriteFeature = document.querySelector('#most-like');
const comment = document.querySelector('#bio');
const checkbox = document.querySelector('.inline');
const box = document.querySelector('.box');
const container = document.querySelector('.container');
const form = document.querySelector('#survey-form');

const nametext = document.querySelector('.name-text');
const emailtext = document.querySelector('.email-text');
const agetext = document.querySelector('.age-text');
const currentRoletext = document.querySelector('.currentrole-text');
const recommendedtext = document.querySelector('.recommended-text');
const favouritetext = document.querySelector('.favourite-text');
const commenttext = document.querySelector('.comment-text');
const improvementtext = document.querySelector('.improvement-text');

function handleName(){
   console.log({name: name.value});
}

function handleEmail(){
    console.log({email: email.value});
 }

 function handleNumber(){
    console.log({number: number.value});
 }

function handleCurrentRole(){
    console.log({currentRole: currentRole.value});
}

function handlefavouriteFeature(){
    console.log({favouriteFeature: favouriteFeature.value});
}

function handlecomment(){
    console.log({comment : comment.value});
}

function handleCheckbox(){
    console.log({checkbox: checkbox.value});
}

function handlebox(){
    console.log({box: box.value});
}

function handlecontainer(){
    console.log({container: container.value});
}
// let checkbox = [];
// checkbox.append()

 function handleformControl(){
    for(let i = 0; i < 3; i++){
        if (formControl[i].checked){
            console.log({formControl: formControl[i].value})
            return formControl[i].value
        }
    }

 }


 
 handleName();
 handleEmail();
 handleNumber();
 handleCurrentRole();
 handleformControl();
 handlefavouriteFeature();
 handlecomment();
 handleCheckbox();
 handlebox();
 handlecontainer();

function submitForm(e){
   e.preventDefault();

    nametext.innerHTML = name.value;
    emailtext.innerHTML = email.value;
    agetext.innerHTML = number.value;
    currentRoletext.innerHTML = currentRole.value;
    recommendedtext.innerHTML = handleformControl();
    favouritetext.innerHTML = favouriteFeature.value;
    commenttext.innerHTML = comment.value;
    improvementtext.innerHTML = checkbox.value;
    improvementtext.innerHTML = box.value;
    improvementtext.innerHTML = container.value;h
    /*let div = document.createElement('div');
    let pName = document.createElement('p');
    pName.innerHTML = name.value;
    let pEmail = document.createElement('p');
    pEmail.innerHTML = email.value;
    let pAge = document.createElement('p');
    pAge.innerHTML = number.value;

    div.append(pName);
    div.append(pEmail);
    div.append(pAge)

    document.body.append(div);*/
}
form.addEventListener('submit', submitForm);
    

 









/*const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const email = document.querySelector('.email');
const form = document.querySelector('#form');

const firstnameText = document.querySelector('.firstname-text');
const lastnameText = document.querySelector('.lastname-text');
const emailText = document.querySelector('.email-text');

function handleFirstname() {
    console.log({firstname: firstname.value})
}

function handleLastname() {
    console.log({lastname: lastname.value})
}

function handleEmail() {
    console.log({email: email.value})
}

function submitForm(e) {
    e.preventDefault();

    firstnameText.innerHTML = firstname.value;
    lastnameText.innerHTML = lastname.value;
    emailText.innerHTML = email.value;

    let div = document.createElement('div');
    let pFirstname = document.createElement('p');
    pFirstname.innerHTML = firstname.value;
    let pLastname = document.createElement('p');
    pLastname.innerHTML = lastname.value;
    let pEmail = document.createElement('p');
    pEmail.innerHTML = email.value;

    div.append(pFirstname);
    div.append(pLastname);
    div.append(pEmail)

    document.body.append(div);
}

form.addEventListener('submit', submitForm)

*/