// varibles 
let total = 0 ;
let summary =""
/////////////////////////////////
///// selectors
const selects = document.querySelectorAll(".parts select");
const selectedParts = document.querySelector("#selectedParts");
const totalPrice = document.querySelector("#total");
/////////////// functions 
function updateSummary(){
    total =0;
    summary="";

    selects.forEach((select)=>{
        const option = select.selectedOptions[0];
        if (option.value !==""){
            total +=Number(option.dataset.price)
             summary += `<p>${option.textContent.trim()}</p>`;
        }
    });
    selectedParts.innerHTML = summary ;
    totalPrice.textContent = total.toFixed(2);
}


///// lisitner 
selects.forEach((select)=>{
select.addEventListener("change" , updateSummary);
});
updateSummary();

console.log("JavaScript is working");