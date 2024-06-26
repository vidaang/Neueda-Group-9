window.onload = () => {
    // const uid = new URLSearchParams(window.location.search).get('uid');
    const uid = 1; // REMOVE THIS LINE LATER WHEN all-cards.html IS FINISHED

    if (uid) {
        fetchCardData(uid);
    } else {
        console.error('UID not found in URL');
    }
};

// Calls the api endpoint for transactions
async function displayCardData(card) {
    const transactions = [];

    // Get credit card transactions
    try {
        const response = await fetch(`http://localhost:8080/all-cards/creditCard/${uid}`);
        if (!response.ok) {
            throw new Error('Network response failed: ' + response.statusText);
        }

        const creditCardData = await response.json();
    } catch (error) {
        console.error('Fetch Operation Error (Credit Card):', error);
    }

    // Get debit card transactions
    try {
        const response = await fetch(`http://localhost:8080/all-cards/debitCard/${uid}`);
      
        if (!response.ok) {
            throw new Error('Network response failed: ' + response.statusText);
        }

        const debitCardData = await response.json();
    } catch (error) {
        console.error('Fetch Operation Error (Debit Card):', error);
    }

    displayTransactionData(transactions);
}

// Creates transactions table to display information from transactions api
function displayCardData(card) {

    const cardInfoDiv = document.getElementById('transactions-info');

    const table = document.createElement('table');
    table.classList.add('table', 'table-hover', 'table-light');

    const headerRow = document.createElement('tr');

    // Create table headers for the transactions table
    const uidHeader = document.createElement('th');
    uidHeader.textContent = 'User ID';
    headerRow.appendChild(uidHeader);

    const creditCardHeader = document.createElement('th');
    creditCardHeader.textContent = 'Credit Card ID';
    headerRow.appendChild(creditCardHeader);

    const debitCardHeader = document.createElement('th');
    debitCardHeader.textContent = 'Debit Card ID';
    headerRow.appendChild(debitCardHeader);

    const amountHeader = document.createElement('th');
    amountHeader.textContent = 'Amount';
    headerRow.appendChild(amountHeader);

    const dateHeader = document.createElement('th');
    dateHeader.textContent = 'Date';
    headerRow.appendChild(dateHeader);

    table.appendChild(headerRow);

    // Loop through the data and populate the table using the data
    card.forEach(card => {
        const dataRow = document.createElement('tr');

        const uidData = document.createElement('td');
        uidData.textContent = card.uid;
        dataRow.appendChild(uidData);
    
        const creditCardData = document.createElement('td');
        creditCardData.textContent = card.creditCardId;
        dataRow.appendChild(creditCardData);

        const debitCardData = document.createElement('td');
        debitCardData.textContent = card.debitCardId;
        dataRow.appendChild(debitCardData);

        const amountData = document.createElement('td');
        amountData.textContent = card.amount;
        dataRow.appendChild(amountData);

        const dateData = document.createElement('td');
        dateData.textContent = card.date;
        dataRow.appendChild(dateData);
    
        table.appendChild(dataRow);
    })

    cardInfoDiv.innerHTML = '';
    cardInfoDiv.appendChild(table);
}

//Backup of original code first attempt
/*
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
        deditCard.forEach(debitCard => {
            if (user.uid === debitCard.uid) {
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
*/

//Second attempt

// Calls the api endpoint
/*
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
/*
















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
*/