
var root = document.getElementById("root");
var firstPara = document.createElement("div");
firstPara.setAttribute("id", "first_para");
firstPara.setAttribute("class", "container");
root.appendChild(firstPara);


var firstParaRow = document.createElement("div");
var firstParaImageColumn = document.createElement("div");
var firstParaDescriptionColumn = document.createElement("div");
var firstParaImage = document.createElement("img");
var firstParaDescription = document.createElement("div");
var firstParaDescriptionHeader = document.createElement("h4");
var firstParaDescriptionHeaderText = document.createTextNode("Hello I am Naruto !!!");
var firstParaDescriptionPara = document.createElement("p");
var firstParaDescriptionParaText = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum dicta molestiae quasi repellendus, eius maiores recusandae, laudantium possimus expedita tempora obcaecati nobis, debitis culpa sapiente ipsum optio! Ipsa, suscipit quo.");
firstPara.append(firstParaRow);

firstParaRow.append(firstParaImageColumn);
firstParaRow.append(firstParaDescriptionColumn);
firstParaImageColumn.append(firstParaImage);
firstParaDescriptionColumn.append(firstParaDescription);
firstParaDescription.append(firstParaDescriptionHeader);
firstParaDescriptionHeader.append(firstParaDescriptionHeaderText);
firstParaDescription.append(firstParaDescriptionPara);
firstParaDescriptionPara.append(firstParaDescriptionParaText);

firstParaRow.setAttribute("class", "row");
firstParaImageColumn.setAttribute("class", "col-xlg-3 col-lg-3 col-md-3");
firstParaDescriptionColumn.setAttribute("class", "col-xlg-9 col-lg-9 col-md-9");
firstParaImage.setAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/71U1nBOAwpL._SY679_.jpg");
// firstParaImage.setAttribute("width", "100");
// firstParaImage.setAttribute("height", "100");
firstParaDescription.setAttribute("class", "d-block  text-dark");
firstParaDescriptionHeader.setAttribute("class", "bg-light text-dark");
for (i = 0; i < 3; i++) {
       var firstParaRow = document.createElement("div");
       var firstParaImageColumn = document.createElement("div");
       var firstParaDescriptionColumn = document.createElement("div");

       var firstParaDescription = document.createElement("div");
       var firstParaDescriptionHeader = document.createElement("h4");
       var firstParaDescriptionHeaderText = document.createTextNode("Hello I am Naruto !!!");
       var firstParaDescriptionPara = document.createElement("p");
       var firstParaDescriptionParaText = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum dicta molestiae quasi repellendus, eius maiores recusandae, laudantium possimus expedita tempora obcaecati nobis, debitis culpa sapiente ipsum optio! Ipsa, suscipit quo.");
       firstPara.append(firstParaRow);

       firstParaRow.append(firstParaImageColumn);
       firstParaRow.append(firstParaDescriptionColumn);

       firstParaDescriptionColumn.append(firstParaDescription);
       firstParaDescription.append(firstParaDescriptionHeader);
       firstParaDescriptionHeader.append(firstParaDescriptionHeaderText);
       firstParaDescription.append(firstParaDescriptionPara);
       firstParaDescriptionPara.append(firstParaDescriptionParaText);

       firstParaRow.setAttribute("class", "row");

       firstParaDescriptionColumn.setAttribute("class", "offset-xlg-3 offset-lg-3 offset-md-3");

       // firstParaImage.setAttribute("width", "100");
       // firstParaImage.setAttribute("height", "100");
       firstParaDescription.setAttribute("class", "d-block  text-dark");
       firstParaDescriptionHeader.setAttribute("class", "bg-light text-dark");
}


