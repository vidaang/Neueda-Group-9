window.onload = () => {
    const uid = new URLSearchParams(window.location.search).get('uid');
    const name = new URLSearchParams(window.location.search).get('name');
    const cardID = new URLSearchParams(window.location.search).get('cardID');
    const isCreditCard = new URLSearchParams(window.location.search).get('isCreditCard')

    updateLink(uid, name);

    if (cardID !== null) {
        fetchTransactionData(cardID, isCreditCard);
    } else {
        console.error('UID not found in URL');
    }
};

// Calls the api endpoint for transactions
async function fetchTransactionData(cardID, isCreditCard) {
    const transactions = [];

    if (isCreditCard === "true") {
        // Get credit card transactions
        try {
            const response = await fetch(`http://localhost:8080/transaction/creditCard/${cardID}`);
            if (!response.ok) {
                throw new Error('Network response failed: ' + response.statusText);
            }

            const creditCardData = await response.json();
            transactions.push(...creditCardData);
        } catch (error) {
            console.error('Fetch Operation Error (Credit Card):', error);
        }
    }
    if (isCreditCard === "false") {
        // Get debit card transactions
        try {
            const response = await fetch(`http://localhost:8080/transaction/debitCard/${cardID}`);
        
            if (!response.ok) {
                throw new Error('Network response failed: ' + response.statusText);
            }

            const debitCardData = await response.json();
            transactions.push(...debitCardData);
        } catch (error) {
            console.error('Fetch Operation Error (Debit Card):', error);
        }
    }

    displayTransactionData(isCreditCard, transactions);
    
}

// Creates transactions table to display information from transactions api
function displayTransactionData(isCreditCard, transactions) {

    const transactionsInfoDiv = document.getElementById('transactions-info');

    const table = document.createElement('table');
    table.classList.add('table', 'table-hover', 'table-light');

    const headerRow = document.createElement('tr');

    // Create table headers for the transactions table
    const uidHeader = document.createElement('th');
    uidHeader.textContent = 'User ID';
    headerRow.appendChild(uidHeader);

    if (isCreditCard === "true") {
        const creditCardHeader = document.createElement('th');
        creditCardHeader.textContent = 'Credit Card ID';
        headerRow.appendChild(creditCardHeader);
    }
    else {
        const debitCardHeader = document.createElement('th');
        debitCardHeader.textContent = 'Debit Card ID';
        headerRow.appendChild(debitCardHeader);
    }
    
    const amountHeader = document.createElement('th');
    amountHeader.textContent = 'Amount';
    headerRow.appendChild(amountHeader);

    const dateHeader = document.createElement('th');
    dateHeader.textContent = 'Date';
    headerRow.appendChild(dateHeader);

    table.appendChild(headerRow);

    // Loop through the data and populate the table using the data
    transactions.forEach(transactions => {
        const dataRow = document.createElement('tr');

        const uidData = document.createElement('td');
        uidData.textContent = transactions.uid;
        dataRow.appendChild(uidData);
    
        if (isCreditCard === "true") {
            const creditCardData = document.createElement('td');
            creditCardData.textContent = transactions.creditCardId;
            dataRow.appendChild(creditCardData);
        } ""
        if (isCreditCard === "false") {

            const debitCardData = document.createElement('td');
            debitCardData.textContent = transactions.debitCardId;
            dataRow.appendChild(debitCardData);
        }
        const amountData = document.createElement('td');
        amountData.textContent = transactions.amount;
        dataRow.appendChild(amountData);

        const dateData = document.createElement('td');
        dateData.textContent = transactions.date;
        dataRow.appendChild(dateData);
    
        table.appendChild(dataRow);
    })

    transactionsInfoDiv.innerHTML = '';
    transactionsInfoDiv.appendChild(table);
}

// Updates the link to include user UID
function updateLink(uid,name) {
    const linkElement = document.querySelector('a[href="all-cards.html"]');
    if (linkElement) {
        linkElement.href = `all-cards.html?uid=${uid}&name=${name}`;
    }
}