
const units = 
[{title: "Length (Meter/Feet)", conversionValue: 3.281, metric: "meters", imperial: "feet"}, 
{title: "Volume (Liters/Gallons)", conversionValue: 0.264, metric: "liters", imperial: "gallons"}, 
{title: "Mass (Kilograms/Pounds)", conversionValue: 2.204, metric: "kilos", imperial: "pounds"}]
const input = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const convertedUnitsContainer = document.getElementById("converted-units-container")

convertBtn.addEventListener("click", function() {
    if(input.value === ""){
        return
    }
    else{
        createUnitBoxes(units)
    }
})

function createUnitBoxes(arr) {
    let boxes = ""
    for(let i = 0; i < arr.length; i++){
        boxes += `                
        <div class="unit-container">
            <h2 class="unit-title">${arr[i].title}</h2>
            <p class="unit-conversions">
            ${input.value || 0} ${arr[i].metric} = 
            ${(Number(input.value) * arr[i].conversionValue).toFixed(3)} ${arr[i].imperial} |
             ${input.value || 0} ${arr[i].imperial} 
             = ${(Number(input.value) / arr[i].conversionValue).toFixed(3)} ${arr[i].metric}
            </p>
        </div>`
    }
    convertedUnitsContainer.innerHTML = boxes
}

createUnitBoxes(units)