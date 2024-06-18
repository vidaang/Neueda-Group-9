// Calls the api endpoint
async function fetchUserData() {
    try {
        const response = await fetch('http://localhost:8080/user');

        if (!response.ok) {
            throw new Error('Network response failed: ' + response.statusText);
        }

        const data = await response.json();

        displayUserData(data);
    } catch (error) {
        console.error('Fetch Operation Error:', error);
    }
}

// creates the table when the page loads
window.onload = fetchUserData;