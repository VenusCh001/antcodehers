// frontend/app.js
const moodForm = document.getElementById('moodForm');
const moodSelect = document.getElementById('mood');
const moodChartCtx = document.getElementById('moodChart').getContext('2d');

// Function to log mood
moodForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mood = moodSelect.value;

    const response = await fetch('http://localhost:5001/api/moods/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood }),
    });

    if (response.ok) {
        alert('Mood logged successfully!');
        fetchMoodHistory();
    }
});

// Function to fetch mood history and render chart
async function fetchMoodHistory() {
    const response = await fetch('http://localhost:5001/api/moods/history');
    const moods = await response.json();
    
    const moodCounts = moods.reduce((counts, mood) => {
        counts[mood.mood] = (counts[mood.mood] || 0) + 1;
        return counts;
    }, {});

    const labels = Object.keys(moodCounts);
    const data = Object.values(moodCounts);

    new Chart(moodChartCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Mood Count',
                data: data,
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Fetch mood history on page load
fetchMoodHistory();
