document.addEventListener('DOMContentLoaded', () => {
    // 1. Navegación pegajosa (Sticky Header)
    const header = document.getElementById('header');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
            header.style.padding = '10px 0';
        } else {
            header.style.backgroundColor = 'var(--secondary-color)';
            header.style.padding = '20px 0';
        }
    });

    // 2. Manejo del Formulario de Reserva
    const reservationForm = document.getElementById('reservation-form');
    const modal = document.getElementById('success-modal');
    const closeModal = document.querySelector('.close-modal');
    const closeBtn = document.getElementById('close-btn');

    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulación de procesamiento
            const submitBtn = reservationForm.querySelector('button');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Procesando...';

            setTimeout(() => {
                // Mostrar Modal de Éxito
                modal.style.display = 'block';
                
                // Resetear Formulario
                reservationForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1500);
        });
    }

    // 3. Cerrar Modal
    const hideModal = () => {
        modal.style.display = 'none';
    };

    if (closeModal) closeModal.addEventListener('click', hideModal);
    if (closeBtn) closeBtn.addEventListener('click', hideModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });

    // 4. Validación básica de fechas
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');

    if (checkinInput && checkoutInput) {
        // Establecer fecha mínima como hoy
        const today = new Date().toISOString().split('T')[0];
        checkinInput.setAttribute('min', today);

        checkinInput.addEventListener('change', () => {
            checkoutInput.setAttribute('min', checkinInput.value);
        });
    }
});
