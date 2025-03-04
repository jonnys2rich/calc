<script>  
	document.querySelectorAll('.range_slider').forEach(slider => {
    function updateProgress() {
        let percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.setProperty('--progress', percent + '%');
    }

    // Update progress on input change
    slider.addEventListener('input', updateProgress);

    // Initialize progress on page load
    updateProgress();
});
</script>
