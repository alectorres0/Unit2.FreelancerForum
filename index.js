const randomFreelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  const freelancers =[
    {name: "Jared", price: 30, occupation: "writer"},
    {name: "Julie", price: 600, occupation: "gamer girlfriend"},
    {name: "Bryan", price: 200, occupation: "hot dog eater"},
    {name: "Austin", price: 1, occupation: "clown"},
    {name: "Tobi", price: 50, occupation: "sleeper"}
]

let table = document.querySelector("table");
let tableData = [];

freelancers.forEach(addFreelancer);
setInterval(pickRandomFreelancer, 5000);
let avgPrice = document.getElementById("avgPrice");
avgPrice.textContent = (getAvgStartingPrice())
setInterval(function(){avgPrice.textContent = (getAvgStartingPrice())}, 5001);

function addFreelancer(person){
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let occupation = document.createElement("td");
    let price = document.createElement("td");
    name.textContent = person.name;
    occupation.textContent = person.occupation;
    price.textContent = "$" + person.price;
    row.append(name);
    row.append(occupation);
    row.append(price);
    table.append(row);
    tableData.push(person);
}

function getAvgStartingPrice(){
    let price = tableData.reduce((acc, curr)=>{
        return acc + curr.price;
    }
,0)
let average = Math.floor(price/tableData.length);
return average}

function pickRandomFreelancer(){
    let random ={};
    let rName=randomFreelancers[Math.floor(Math.random()*(randomFreelancers.length + 1))].name;
    let rOcc=randomFreelancers[Math.floor(Math.random()*(randomFreelancers.length + 1))].occupation;
    let rPrice=randomFreelancers[Math.floor(Math.random()*(randomFreelancers.length + 1))].price;
    random.name=rName;
    random.occupation=rOcc;
    random.price=rPrice;
    addFreelancer(random);
}