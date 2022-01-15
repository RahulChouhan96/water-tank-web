// Listen for button click to get the array as input
document.getElementById("arr-btn").addEventListener("click", storeArr);

// Get array input
// Get max water stored result
// And finally display on HTML
function storeArr() {
    let arr = document.getElementById("arr");
    arr = arr.value.split(",");
    let maxStored = maxWaterStored(arr);
    createTable(arr, maxStored);
}

function createTable(arr, maxStored) {
    const tableElem = document.createElement("table");
    let tableRow, tableData;

    // Maximum rows and columns to construct table
    // Max rows are going to be as big as max number in the array
    let totalRows = Math.max(...arr);
    let totalCol = arr.length;

    // Create rows
    for (let rowNo = 1; rowNo <= totalRows; rowNo++) {
        tableRow = document.createElement("tr");

        // Create cells in the row
        for (let cellNo = 1; cellNo <= totalCol; cellNo++) {
            tableData = document.createElement("td");
            tableData.classList.add("border");
            tableData.innerText = rowNo + ":" + cellNo;

            // Fill existing blocks
            if (totalRows - rowNo < arr[cellNo - 1]) {
                tableData.classList.add("fill-block");
            }

            // Fill water by data coming from result
            else if (totalRows - arr[cellNo - 1] - rowNo < maxStored.waterArr[cellNo - 1]) {
                tableData.classList.add("fill-water");
            }

            // Append cell into row
            tableRow.appendChild(tableData);
        }

        // Append row into table
        tableElem.appendChild(tableRow);
    }

    const divElem = document.getElementById("table");

    // Append the entire table into div
    divElem.appendChild(tableElem);

    // Display the max water stored result on page
    const resElem = document.createElement("h2");
    resElem.innerText = "Max Water Stored is: " + maxStored.stored;
    divElem.appendChild(resElem);
}