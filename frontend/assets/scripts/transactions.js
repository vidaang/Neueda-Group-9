window.onload = () => {
    const uid = new URLSearchParams(window.location.search).get('uid');
    const isCreditCard = new URLSearchParams(window.location.search).get('isCreditCard')

    if (uid) {
        fetchTransactionData(uid, isCreditCard);
    } else {
        console.error('UID not found in URL');
    }
};

// Calls the api endpoint for transactions
async function fetchTransactionData(uid, isCreditCard) {
    const transactions = [];

    console.log("This is the value of:", isCreditCard);

    if (isCreditCard === true) {
        // Get credit card transactions
        try {
            const response = await fetch(`http://localhost:8080/transaction/creditCard/${uid}`);
            if (!response.ok) {
                throw new Error('Network response failed: ' + response.statusText);
            }

            const creditCardData = await response.json();
            transactions.push(...creditCardData);
        } catch (error) {
            console.error('Fetch Operation Error (Credit Card):', error);
        }
    }
    else {
        // Get debit card transactions
        try {
            const response = await fetch(`http://localhost:8080/transaction/debitCard/${uid}`);
        
            if (!response.ok) {
                throw new Error('Network response failed: ' + response.statusText);
            }

            const debitCardData = await response.json();
            transactions.push(...debitCardData);
        } catch (error) {
            console.error('Fetch Operation Error (Debit Card):', error);
        }
    }

    displayTransactionData(transactions, isCreditCard);
}

// Creates transactions table to display information from transactions api
function displayTransactionData(transactions, isCreditCard) {

    const transactionsInfoDiv = document.getElementById('transactions-info');

    const table = document.createElement('table');
    table.classList.add('table', 'table-hover', 'table-light');

    const headerRow = document.createElement('tr');

    // Create table headers for the transactions table
    const uidHeader = document.createElement('th');
    uidHeader.textContent = 'User ID';
    headerRow.appendChild(uidHeader);

    if (isCreditCard === true) {
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
    
        if (isCreditCard === true) {
            const creditCardData = document.createElement('td');
            creditCardData.textContent = transactions.creditCardId;
            dataRow.appendChild(creditCardData);
        } else {

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
