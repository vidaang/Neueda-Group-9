// Calls the api endpoint
async function fetchCards() {
    try {
        const response = await fetch('http://localhost:8080/user');

        if (!response.ok) {
            throw new Error('Network response failed: ' + response.statusText);
        }

        const data = await response.json();

        displayCards(data);
    } catch (error) {
        console.error('Fetch Operation Error:', error);
    }
}
function displayCards(user) {
    const userInfoDiv = document.getElementById('user-info');

    const table = document.createElement('table');
    table.classList.add('table', 'table-hover', 'table-light');

    const headerRow = document.createElement('tr');

    // Create table headers for the user table
    const uidHeader = document.createElement('th');
    uidHeader.textContent = 'UID';
    headerRow.appendChild(uidHeader);

    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Name';
    headerRow.appendChild(nameHeader);

    const creditScoreHeader = document.createElement('th');
    creditScoreHeader.textContent = 'Credit Score';
    headerRow.appendChild(creditScoreHeader);

    table.appendChild(headerRow);

    // Loop through the data and populate the table using the data
    //
    user.forEach(user => {
        // make a nested loop to match
        creditCard.forEach(creditCard => {
            if (user.uid === creditCard.uid) {
                const dataRow = document.createElement('tr');

                const uidData = document.createElement('td');
                uidData.textContent = user.uid;
                dataRow.appendChild(uidData);
            
                const nameData = document.createElement('td');
                nameData.textContent = user.name;
                dataRow.appendChild(nameData);

                const creditScoreData = document.createElement('td');
                creditScoreData.textContent = user.creditScore;
                dataRow.appendChild(creditScoreData);

                // redirects to user's card accounts when row is clicked
                dataRow.addEventListener('click', () => {
                    window.location.href = `pages/all-cards.html?uid=${user.uid}`;
                });
            
                table.appendChild(dataRow);
            }
        })
        const dataRow = document.createElement('tr');

        const uidData = document.createElement('td');
        uidData.textContent = user.uid;
        dataRow.appendChild(uidData);
    
        const nameData = document.createElement('td');
        nameData.textContent = user.name;
        dataRow.appendChild(nameData);

        const creditScoreData = document.createElement('td');
        creditScoreData.textContent = user.creditScore;
        dataRow.appendChild(creditScoreData);

        // redirects to user's card accounts when row is clicked
        dataRow.addEventListener('click', () => {
            window.location.href = `pages/all-cards.html?uid=${user.uid}`;
        });
    
        table.appendChild(dataRow);
    })

    userInfoDiv.innerHTML = '';
    userInfoDiv.appendChild(table);
    
}

// creates the table when the page loads
window.onload = fetchCards;

















// // Fetch data from the API
// fetch('https://api.example.com/cards')
//     .then(response => response.json())
//     .then(data => {
//         // Select the table
//         const table = document.querySelector('table');

//         // Loop through the data
//         data.forEach(item => {
//             // Create a new row
//             const row = document.createElement('tr');

//             // Loop through each property in the item
//             for (let key in item) {
//                 // Create a new cell
//                 const cell = document.createElement('td');

//                 // Set the cell text
//                 cell.textContent = item[key];

//                 // Add the cell to the row
//                 row.appendChild(cell);
//             }

//             // Add the row to the table
//             table.appendChild(row);
//         });
//     })
//     .catch(error => console.error('Error:', error));