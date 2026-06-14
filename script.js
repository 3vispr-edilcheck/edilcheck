document.addEventListener('DOMContentLoaded', function() {

    // Navigazione pulsanti home
    const verificaBtn = document.getElementById('verifica-btn');
    const preventivoBtn = document.getElementById('preventivo-btn');

    if(verificaBtn) {
        verificaBtn.addEventListener('click', function() {
            window.location.href = 'verifica-preventivo.html';
        });
    }

    if(preventivoBtn) {
        preventivoBtn.addEventListener('click', function() {
            window.location.href = 'preventivo-massima.html';
        });
    }

    // Form verifica preventivo
    const formVerifica = document.getElementById('form-verifica');
    if(formVerifica) {
        formVerifica.addEventListener('submit', function(e) {
            e.preventDefault();
            localStorage.setItem('servizio', 'Verifica Preventivo');
            localStorage.setItem('prezzo', '29.90');
            window.location.href = 'pagamento.html';
        });
    }

    // Form preventivo di massima
    const formPreventivo = document.getElementById('form-preventivo');
    if(formPreventivo) {
        formPreventivo.addEventListener('submit', function(e) {
            e.preventDefault();
            localStorage.setItem('servizio', 'Preventivo di Massima');
            localStorage.setItem('prezzo', '45.90');
            window.location.href = 'pagamento.html';
        });
    }

    // Pagina pagamento - mostra dati servizio
    const nomeServizio = document.getElementById('nome-servizio');
    const prezzoTotale = document.getElementById('prezzo-totale');

    if(nomeServizio && prezzoTotale) {
        const servizio = localStorage.getItem('servizio') || 'Verifica Preventivo';
        const prezzo = localStorage.getItem('prezzo') || '29.90';
        nomeServizio.textContent = servizio;
        prezzoTotale.textContent = '€ ' + prezzo;
    }

});