const BASE_API_URL = 'https://expressjs-backend-yzkc.onrender.com/api/datetime';
const localeSelector = document.getElementById('locale');
const currentDateElement = document.getElementById('current-date');
const currentTimeElement = document.getElementById('current-time');
const statusMessage = document.getElementById('status-message');

// Atualiza o relógio com dados diretamente do JSON
async function updateClockFromServer() {
    try {
        const locale = localeSelector.value;
        const url = `${BASE_API_URL}/${encodeURIComponent(locale)}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();

        // Usa diretamente os campos `date` e `time` da resposta
        currentDateElement.textContent = data.date || '-';
        currentTimeElement.textContent = data.time || '-';

        statusMessage.textContent = 'Sincronizado com sucesso';
        setTimeout(() => {
            statusMessage.textContent = '';
        }, 3000);
    } catch (error) {
        console.error('Erro ao buscar hora do servidor:', error);
        statusMessage.textContent = 'Erro ao sincronizar com o servidor';
    }
}

localeSelector.addEventListener('change', () => {
    updateClockFromServer();
});

document.addEventListener('DOMContentLoaded', () => {
    updateClockFromServer();
    setInterval(updateClockFromServer, 1000);
});
