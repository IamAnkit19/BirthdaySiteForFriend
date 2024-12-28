document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('loadingScreen').style.display = 'none'; // Hide the loading screen
    const mainContent = document.getElementById('mainContent');
    mainContent.classList.remove('hidden');
    mainContent.classList.add('fade-in'); // Add fade-in animation
});