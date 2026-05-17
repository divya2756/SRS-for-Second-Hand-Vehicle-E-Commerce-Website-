function addVehicle() {

    let name = document.getElementById("vehicleName").value;

    let price = document.getElementById("vehiclePrice").value;

    let image = document.getElementById("vehicleImage").value;


    // VALIDATION

    if(name === "" || price === "" || image === "") {

        alert("Please fill all fields");

        return;
    }


    // SELECT GRID

    let grid = document.getElementById("vehicleGrid");


    // CREATE CARD

    let card = document.createElement("div");

    card.className = "vehicle-card";


    // CARD HTML

    card.innerHTML = `

        <img src="${image}" alt="${name}">

        <div class="info">

            <span class="badge car">New Vehicle</span>

            <h3>${name}</h3>

            <h4>${price}</h4>

            <button onclick="viewVehicle(
                '${name}',
                '${price}',
                '${image}'
            )">
                View
            </button>

        </div>
    `;


    // ADD CARD

    grid.appendChild(card);


    // CLEAR INPUTS

    document.getElementById("vehicleName").value = "";

    document.getElementById("vehiclePrice").value = "";

    document.getElementById("vehicleImage").value = "";
}



// VIEW PAGE FUNCTION

function viewVehicle(name, price, image) {

    localStorage.setItem("vehicleName", name);

    localStorage.setItem("vehiclePrice", price);

    localStorage.setItem("vehicleImage", image);
}