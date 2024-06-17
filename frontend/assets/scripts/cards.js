// Fetch data from the API
fetch('http://localhost:8080/user')
    .then(response => response.json())
    .then(data => {
        // Select the tables
        const creditCardTable = document.querySelector('#creditCardTable');
        const debitCardTable = document.querySelector('#debitCardTable');

        // Function to populate table
        const populateTable = (table, list) => {
            list.forEach(item => {
                const row = document.createElement('tr');
                for (let key in item) {
                    const cell = document.createElement('td');
                    cell.textContent = item[key];
                    row.appendChild(cell);
                }
                table.appendChild(row);
            });
        }

        // Populate tables
        populateTable(creditCardTable, data.creditCardList);
        populateTable(debitCardTable, data.debitCardList);
    })
    .catch(error => console.error('Error:', error));