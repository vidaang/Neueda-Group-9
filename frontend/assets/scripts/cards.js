window.onload = () => {
    const uid = new URLSearchParams(window.location.search).get('uid'); // get uid

    if (uid) {
        fetchCardData(uid);
    } else {
        console.error('UID not found in URL');
    }
};

// Calls the api endpoint for cards
async function fetchCardData(uid) {
    const cards = [];

    // Get credit card cards
    try {
        const response = await fetch(`http://localhost:8080/creditcard/userId/${uid}`);
        if (!response.ok) {
            throw new Error('Network response failed: ' + response.statusText);
        }

        const creditCardData = await response.json();
        cards.push(...creditCardData);
    } catch (error) {
        console.error('Fetch Operation Error (Credit Card):', error);
    }

    // Get debit card cards
    try {
        const response = await fetch(`http://localhost:8080/debitcard/userId/${uid}`);
      
        if (!response.ok) {
            throw new Error('Network response failed: ' + response.statusText);
        
        }

        const debitCardData = await response.json();
        cards.push(...debitCardData);
    } catch (error) {
        console.error('Fetch Operation Error (Debit Card):', error);
    }
    console.log(cards);
    displayCardData(cards);
}

// Creates cards table to display information from cards api
function displayCardData(card) {

    const cardInfoDiv = document.getElementById('cards-info');

    const table = document.createElement('table');
    table.classList.add('table', 'table-hover', 'table-light');

    const headerRow = document.createElement('tr');

    // Create table headers for the cards table
    const uidHeader = document.createElement('th');
    uidHeader.textContent = 'User ID';
    headerRow.appendChild(uidHeader);

    const creditCardHeader = document.createElement('th');
    creditCardHeader.textContent = 'Credit Card ID';
    headerRow.appendChild(creditCardHeader);

    const debitCardHeader = document.createElement('th');
    debitCardHeader.textContent = 'Debit Card ID';
    headerRow.appendChild(debitCardHeader);

    const cardLimitHeader = document.createElement('th');
    cardLimitHeader.textContent = 'Card Limit';
    headerRow.appendChild(cardLimitHeader);

    const balanceHeader = document.createElement('th');
    balanceHeader.textContent = 'Balance';
    headerRow.appendChild(balanceHeader);

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