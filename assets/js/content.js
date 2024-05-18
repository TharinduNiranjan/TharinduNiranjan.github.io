// Fetch content.html using fetch API
fetch('../../skills.html')
.then(response => response.text())
.then(html => {
    // Insert the fetched HTML into the specified div
    document.getElementById('includedContent').innerHTML = html;
})
.catch(error => console.error('Error fetching content:', error));