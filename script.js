function createTable() {
    //Write your code here
	// Get the table element
  const table = document.getElementById("myTable");
  
  // Clear any existing table
  table.innerHTML = '';

  // Get the number of rows and columns from the user
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  // Create the table rows and columns
  for (let r = 0; r < rn; r++) {
    const row = table.insertRow(r);
    for (let c = 0; c < cn; c++) {
      const cell = row.insertCell(c);
      cell.innerHTML = `Row-${r} Column-${c}`;
    }
  }
  
}
