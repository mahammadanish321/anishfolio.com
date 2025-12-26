export const view = async () => {
    const counterDisplay = document.getElementById('viewCountDisplay');
    const counterContainer = document.getElementById('viewCounter');

    if (!counterDisplay || !counterContainer) return;

    try {
        // Using counterapi.dev - Free, no auth, JSON response
        const response = await fetch('https://api.counterapi.dev/v1/anishfolio/view/up');

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        // Update display with formatted number
        counterDisplay.innerText = data.count;

        // Show the counter (it starts with opacity 0)
        counterContainer.style.opacity = '1';

    } catch (error) {
        console.warn('View counter failed to load:', error);
        // Hide the counter if API fails so it doesn't look broken
        counterContainer.style.display = 'none';
    }
};