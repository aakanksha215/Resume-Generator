// alert("loading");
function addNewWEField(){
    console.log("Adding new Field");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewEField(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let eOb = document.getElementById("e");
    let eAddButtonOb = document.getElementById("eAddButton");

    eOb.insertBefore(newNode,eAddButtonOb);
}
function addNewPField(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let pOb = document.getElementById("p");
    let pAddButtonOb = document.getElementById("pAddButton");

    pOb.insertBefore(newNode,pAddButtonOb);
}
function addNewAField(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let aOb = document.getElementById("ac");
    let aAddButtonOb = document.getElementById("aAddButton");

    aOb.insertBefore(newNode,aAddButtonOb);
}
function addNewSField(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillsField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let sOb = document.getElementById("s");
    let skillsAddButtonOb = document.getElementById("skillsAddButton");

    sOb.insertBefore(newNode,skillsAddButtonOb);

}

// generating CV

function generateCV(){
   
    let namefield = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = namefield;
    document.getElementById("nameT2").innerHTML = namefield;
    //contact
    document.getElementById("numT").innerHTML = document.getElementById("contactField").value;
    //email
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
    //address
    document.getElementById("addT").innerHTML = document.getElementById("addressField").value;
    //
    document.getElementById("gitT").innerHTML = document.getElementById("linkdinField").value;
    document.getElementById("linkT").innerHTML = document.getElementById("githubField").value;
    document.getElementById("cp1T").innerHTML = document.getElementById("cp1Field").value;
    document.getElementById("cp2T").innerHTML = document.getElementById("cp2Field").value;

    //skills
    let sks = document.getElementsByClassName("skillsField");
    let str = "";

    for(let i of sks){
        str = str + `<li> ${i.value} </li>`;
    }
    document.getElementById("sT").innerHTML = str;


    //work experience

    let wes = document.getElementsByClassName("weField");
    let str1 = "";

    for(let i of wes){
        str1 = str1 + `<li> ${i.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str1;

    // Education
    let ees = document.getElementsByClassName("eField");
    let str2 = "";

    for(let i of ees){
        str2 = str2 + `<li> ${i.value} </li>`;
    }
    document.getElementById("eT").innerHTML = str2;

    //Projects
    let pes = document.getElementsByClassName("pField");
    let str3 = "";

    for(let i of pes){
        str3 = str3 + `<li> ${i.value} </li>`;
    }
    document.getElementById("pT").innerHTML = str3;

    //Achievements
    let aes = document.getElementsByClassName("aField");
    let str4 = "";

    for(let i of aes){
        str4 = str4 + `<li> ${i.value} </li>`;
    }
    document.getElementById("aT").innerHTML = str4;

    //code for setting image
    let file =document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);

    //set image to template
    reader.onloadend = function(){
        document.getElementById("imgT").src = reader.result;
    }

    //cvform -> cvtemplate
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

}