let input  = document.querySelector("input");
let button = document.querySelector("button");
let body = document.querySelector("body");

button.addEventListener("click", (event) =>{
  let city = input.value; //

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d60f525cd75dd81b166855758cb0334`)
  .then((res) =>res.json())
  .then((data) =>{

    let box = document.createElement("div");
    let city = document.createElement("h1");
    let desc = document.createElement("h2");
    let temp = document.createElement("p");
    let wind = document.createElement("p");

    city.textContent = data.name;
    desc.textContent = data.weather[0].description;
    temp.textContent = Math.follor(data.main.temp - 273);
     wind.textContent = data.wind.speed;
     
    box.appendChild(city);
    box.appendChild(desc);
    box.appendChild(temp);
    box.appendChild(wind);
    
    box.appendChild(body)
    
  })

})