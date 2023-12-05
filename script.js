document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const name = document.getElementById('name');

    // Simulate loading process
    function simulateLoading() {
        let width = 0;
        const interval = setInterval(() => {
            width++;
            loader.style.width = width + '%';

            if (width === 80) {
                clearInterval(interval);
                setTimeout(() => {
                    name.style.opacity = '1';
                }, 1);
            }
        }, 2);
    }

    simulateLoading();
});
