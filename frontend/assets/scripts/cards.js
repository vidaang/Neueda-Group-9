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
    const debitCards = [];

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
    displayCreditCardData(cards);

    // Get debit card cards
    try {
        const response = await fetch(`http://localhost:8080/debitcard/userId/${uid}`);
      
        if (!response.ok) {
            throw new Error('Network response failed: ' + response.statusText);
        
        }

        const debitCardData = await response.json();
        debitCards.push(...debitCardData);
    } catch (error) {
        console.error('Fetch Operation Error (Debit Card):', error);
    }

    displayDebitCardData(debitCards);
}

// Creates cards table to display information from cards api
function displayCreditCardData(card) {

    const cardInfoDiv = document.getElementById('credit-cards-info');

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

        const cardLimitData = document.createElement('td');
        cardLimitData.textContent = card.cardLimit;
        dataRow.appendChild(cardLimitData);

        const balanceData = document.createElement('td');
        balanceData.textContent = card.balance;
        dataRow.appendChild(balanceData);

        // redirects to user's card accounts when row is clicked
        dataRow.addEventListener('click', () => {

            if (card.creditCardId === card.uid) {
                window.location.href = `transactions.html?uid=${card.creditCardId}&isCreditCard=${true}`;
            } else {
                window.location.href = `transactions.html?uid=${card.debitCardId}&isCreditCard=${false}`;
            }
        });
    
        table.appendChild(dataRow);
    })

    cardInfoDiv.innerHTML = '';
    cardInfoDiv.appendChild(table);
}

// Creates cards table to display information from cards api
function displayDebitCardData(card) {

    const cardInfoDiv = document.getElementById('debit-cards-info');

    const table = document.createElement('table');
    table.classList.add('table', 'table-hover', 'table-light');

    const headerRow = document.createElement('tr');

    // Create table headers for the cards table
    const uidHeader = document.createElement('th');
    uidHeader.textContent = 'User ID';
    headerRow.appendChild(uidHeader);

    const debitCardHeader = document.createElement('th');
    debitCardHeader.textContent = 'Debit Card ID';
    headerRow.appendChild(debitCardHeader);

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

        const debitCardData = document.createElement('td');
        debitCardData.textContent = card.debitCardId;
        dataRow.appendChild(debitCardData);

        const balanceData = document.createElement('td');
        balanceData.textContent = card.balance;
        dataRow.appendChild(balanceData);

        // redirects to user's card accounts when row is clicked
        dataRow.addEventListener('click', () => {

            if (card.creditCardId === card.uid) {
                window.location.href = `transactions.html?uid=${card.creditCardId}&isCreditCard=${true}`;
            } else {
                window.location.href = `transactions.html?uid=${card.debitCardId}&isCreditCard=${false}`;
            }
        });
    
        table.appendChild(dataRow);
    })

    cardInfoDiv.innerHTML = '';
    cardInfoDiv.appendChild(table);
}