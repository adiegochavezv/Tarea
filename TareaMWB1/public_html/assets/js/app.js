// app.js (mínimo)
(() => {
    'use strict';
    
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', e => {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            } else {

                e.preventDefault(); 
                form.style.display = 'none'; 
                document.getElementById('mensaje-exito').style.display = 'block';
            }
            
            form.classList.add('was-validated');
        }, false);
    });
})();