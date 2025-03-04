<!-- Calc Math + update text -->
<script>
document.querySelectorAll('.range_slider').forEach(slider => {
    const display = document.querySelector(`#${slider.id}-display`);

    function updateProgress() {
        let percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.setProperty('--progress', percent + '%');
    }

    function updateValue() {
        if (display) display.textContent = parseInt(slider.value).toLocaleString('da-DK'); // Format number with locale
    }

    function calculateEquity() {
        const propertyValue = parseFloat(document.querySelector('#property-value').value) || 0;
        const debt = parseFloat(document.querySelector('#debt').value) || 0;
        const equityOutput = document.querySelector('#equity');

        if (equityOutput) {
            equityOutput.textContent = (propertyValue - debt).toLocaleString('da-DK'); // Format number
        }
    }

    // Live update value as slider moves
    slider.addEventListener('input', () => {
        updateProgress();
        updateValue();
    });

    // Perform calculation only when thumb is released
    slider.addEventListener('change', calculateEquity);

    // Initialize on page load
    updateProgress();
    updateValue();
});

// Ensure initial calculation runs once on load
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.range_slider').forEach(slider => slider.dispatchEvent(new Event('change')));
});


// Calc - update thumb position on load //
document.querySelectorAll('.range_slider').forEach(slider => {
    function updateProgress() {
        let percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.setProperty('--progress', percent + '%');
    }

    slider.addEventListener('input', updateProgress)
    updateProgress();
});

</script>
