// Calls the api endpoint
async function fetchUserData() {
    try {
        const response = await fetch(`http://localhost:8080/user`);

        if (!response.ok) {
            throw new Error('Network response failed: ' + response.statusText);
        }

        const data = await response.json();

        displayUserData(data);
    } catch (error) {
        console.error('Fetch Operation Error:', error);
    }
}

// Creates user table to display information from user api
function displayUserData(user) {

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
    user.forEach(user => {
        const dataRow = document.createElement('tr');

        const uidData = document.createElement('td');
        uidData.textContent = user.uid;
        dataRow.appendChild(uidData);
    
        const nameData = document.createElement('td');
        nameData.textContent = user.name;
        dataRow.appendChild(nameData);

        const creditScoreData = document.createElement('td');
        if (user.creditScore === -1) {
            creditScoreData.textContent = 'DNE';
        } else {
            creditScoreData.textContent = user.creditScore;
        }
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
window.onload = fetchUserData;
