let usercontainer = document.querySelector(".usercontainer");
let body = document.querySelector("body");
let container = document.querySelector(".container");
let search = document.querySelector(".search");
const arr = [
  {
    profileUrl: "images/dog.jpg",
    Name: "hey",
    email: "hey@gmail.com",
  },
  {
    profileUrl: "images/model2.jpg",
    Name: "Hello world",
    email: "hey1234@gmail.com",
  },
  {
    profileUrl: "images/model5.jpg",
    Name: "hello",
    email: "what@gmail.com",
  },
  {
    profileUrl: "images/model4.jpg",
    Name: "Say hii",
    email: "hello@gmail.com",
  },
  {
    profileUrl: "images/model6.webp",
    Name: "say",
    email: "say@gmail.com",
  },
  {
    profileUrl: "images/model8.webp",
    Name: "byy",
    email: "byy@gmail.com",
  },
];

function renderuser(ar) {
  usercontainer.innerHTML = "";
  ar.map((obj) => {
    console.log(obj);
    let { profileUrl, Name, email } = obj;
    let elem = document.createElement("div");
    elem.className = "user";
    elem.innerHTML = ` <div class="image">
            <img
              src=${profileUrl}
              alt="error loading an image"
            />
          </div>
          <div class="details">
            <h3>${Name}</h3>
            <p>${email}</p>
          </div>`;
    usercontainer.append(elem);
  });
}
renderuser(arr); //it is important to show all the users profile in container
function handlesearch(e) {
  console.log(search.value);
  let searchvalue = e.target.value;
  let filtervalue = arr.filter((obj) => {
    return (
      obj.Name.toLowerCase().includes(searchvalue.toLowerCase()) ||
      obj.email.toLowerCase().includes(searchvalue.toLowerCase())
    );
  });
  renderuser(filtervalue); //its important to show filtered profile
}
search.addEventListener("input", handlesearch);
