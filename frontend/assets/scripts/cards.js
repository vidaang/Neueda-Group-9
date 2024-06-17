// Fetch data from the API
fetch('https://api.example.com/cards')
    .then(response => response.json())
    .then(data => {
        // Select the table
        const table = document.querySelector('table');

        // Loop through the data
        data.forEach(item => {
            // Create a new row
            const row = document.createElement('tr');

            // Loop through each property in the item
            for (let key in item) {
                // Create a new cell
                const cell = document.createElement('td');

                // Set the cell text
                cell.textContent = item[key];

                // Add the cell to the row
                row.appendChild(cell);
            }

            // Add the row to the table
            table.appendChild(row);
        });
    })
    .catch(error => console.error('Error:', error));