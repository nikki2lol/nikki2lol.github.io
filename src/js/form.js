export const makeFormValidation = () => {
    const form = document.querySelector('.form');
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');

    const toggleError = function (isValid) {
        isValid ? this.classList.remove('error') : this.classList.add('error');
    }

    nameInput.addEventListener('focus', function () {
        toggleError.call(this, true);
    });

    emailInput.addEventListener('focus', function () {
        toggleError.call(this, true);
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const actionUrl = form.getAttribute('action');
        const emailPattern = /^[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*@(?:([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,7})$/;

        if (nameInput.value.trim() === '') {
            nameInput.classList.add('error');
        }

        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add('error');
        }

        fetch(actionUrl, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    form.classList.add('success');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    });
}