let currentStep = 1;

function showStep(step) {
    document.querySelectorAll('.form-step').forEach((stepDiv) => {
        stepDiv.classList.remove('active');
    });
    document.getElementById('step' + step).classList.add('active');
}

function nextStep(step) {
    if (validateStep(step)) {
        currentStep++;
        showStep(currentStep);
        highlightButton(currentStep);
    }
}

function previousStep(step) {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
        highlightButton(currentStep);
    }
}

function highlightButton(step) {
    document.querySelectorAll('.step-button').forEach(button => button.classList.remove('active', 'inactive'));
    document.getElementById('button' + step).classList.add('active');
    if (step > 1) {
        document.getElementById('button' + (step - 1)).classList.remove('inactive');
    }
}

function validateStep(step) {
    let isValid = true;
    document.querySelectorAll('#step' + step + ' [required]').forEach((input) => {
        if (!input.value) {
            document.getElementById(input.id + 'Error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById(input.id + 'Error').style.display = 'none';
        }
    });
    return isValid;
}

function submitForm() {
    // Show success popup
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    
    document.getElementById('id1').style.display='none';
    document.getElementById('id2').style.display='none';
    document.getElementById('id3').style.display='none';
    // setTimeout(() => {
    //     popup.style.display = 'none';
    // }, 3000);
    
    // Reset the form and navigation
    currentStep = 1;
    showStep(currentStep);
    highlightButton(currentStep);
    document.getElementById('formStep1').reset(); // Reset form values
}

// Initialize the first step
document.addEventListener('DOMContentLoaded', () => {
    highlightButton(currentStep);
    showStep(currentStep);
});
