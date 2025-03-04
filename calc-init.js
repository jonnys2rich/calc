<script>
document.querySelectorAll('.range_slider').forEach(slider => {
    const display = document.querySelector(`#${slider.id}-display`);
    const equityOutput = document.querySelector('#equity');

    // Update progress and text display
    function updateProgress() {
        let percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.setProperty('--progress', percent + '%');
    }

    function updateValue() {
        if (display) {
            display.textContent = parseInt(slider.value).toLocaleString('da-DK'); // Format number with locale
        }
    }

    // Perform calculation of equity
    function calculateEquity() {
        const propertyValue = parseFloat(document.querySelector('#property-value').value) || 0;
        const debt = parseFloat(document.querySelector('#debt').value) || 0;

        if (equityOutput) {
            equityOutput.textContent = (propertyValue - debt).toLocaleString('da-DK'); // Format number
        }
    }

    // Live update of value as slider moves
    slider.addEventListener('input', () => {
        updateProgress();
        updateValue();
    });

    // Perform calculation only when the thumb is released
    slider.addEventListener('change', calculateEquity);

    // Initialize progress and display on page load
    updateProgress();
    updateValue();
});

// Ensure initial calculation runs once on load
window.addEventListener('DOMContentLoaded', () => {
    // Dispatch a 'change' event to trigger the initial calculation for all sliders
    document.querySelectorAll('.range_slider').forEach(slider => slider.dispatchEvent(new Event('change')));
});
</script>
