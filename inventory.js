const HomeInventoryDatabase = JSON.parse(localStorage.getItem("homeInventory"))
const inventoryElement = document.getElementsByClassName("inventory")[0]

for (let key in HomeInventoryDatabase){
    const CurrentType = HomeInventoryDatabase[key]

    for (let i = 0; i < CurrentType.length; i++) {
        let item = CurrentType[i];

        inventoryElement.innerHTML += `
        <section class="${item.type}_type">
        <h2>${item.name}</h2>
        <div class="${item.location}_location">${item.location}</div>
        <div class="${item.description}_description">${item.description}</div>
        </section>`
        
    }
}