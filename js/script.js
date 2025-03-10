const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// dichiarazioni delle variabili e cattura degli elementi html

const rowElement = document.querySelector('.row');
console.log(rowElement);

// inserimento in pagina del html
htmlElements(rowElement, teamMembers);




// funzioni

function htmlElements(colElement, team) {

  // inserimento in pagina del html
  let items = '';

  for (let i = 0; i < team.length; i++) {
    let teamElement = team[i]
    items += createHtmlElement(teamElement);
  }
  colElement.innerHTML = items

}

function createHtmlElement(data){
  //creazione del html
  const element = `<div class="col">
            <div class="container-card">
              <div class="row-card">
                <div class="col-img">
                  <img src="${data.img}" alt="foto di ${data.name}">
                </div>
                <div class="col-card">
                  <h5 class="name">${data.name}</h5>
                  <p class="text-role">${data.role}</p>
                  <p class="text-mail">${data.email}</p>
                </div>
              </div>
            </div>
          </div>`
  return element
}


