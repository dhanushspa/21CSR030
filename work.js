document.getElementById('fetchButton').addEventListener('click', fetchApiResponse);

function fetchApiResponse() {
    fetch('http://20.244.56.144/test/rand', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkyNTc4LCJpYXQiOjE3MTg2OTIyNzgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijg4OGQxZDMxLTljYTctNGI1My1iMDIyLTgwY2NkZDc4MTAzMyIsInN1YiI6ImRoYW51c2hzcGExQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6InNwTWFydCIsImNsaWVudElEIjoiODg4ZDFkMzEtOWNhNy00YjUzLWIwMjItODBjY2RkNzgxMDMzIiwiY2xpZW50U2VjcmV0IjoiWHB6WEtucXVzd0Rzb2pMUyIsIm93bmVyTmFtZSI6IkRoYW51c2giLCJvd25lckVtYWlsIjoiZGhhbnVzaHNwYTFAZ21haWwuY29tIiwicm9sbE5vIjoiMjFDU1IwMzAifQ.hPNY2QyB80bIN5tzvCpNAmlYo1Eql3Nwn9TaucJ_uBA ' // if needed
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('responseDisplay').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
        document.getElementById('responseDisplay').innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
