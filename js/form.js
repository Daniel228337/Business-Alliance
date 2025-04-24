const steps         = document.querySelectorAll('.step');
const nextBtn       = document.getElementById('nextBtn');
const prevBtn       = document.getElementById('prevBtn');
const progress      = document.querySelector('.progress-fill');
const questionText  = document.querySelector('.question-text');
const currentStepEl = document.querySelector('.current-step');
const totalStepEl   = document.querySelector('.request-form-right-title_text');

let currentStep = 0;

function updateStep() {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === currentStep);
  });

  const percent = ((currentStep + 1) / steps.length) * 100;
  progress.style.width = percent + '%';

  questionText.textContent = steps[currentStep].dataset.question;

  const curr  = String(currentStep + 1).padStart(2, '0');
  const total = String(steps.length).padStart(2, '0');
  currentStepEl.textContent = curr;
  totalStepEl.textContent   = '/' + total;

  prevBtn.disabled = currentStep === 0;

  if (currentStep === steps.length - 1) {
    nextBtn.textContent = 'Отправить';
  } else {
    nextBtn.textContent = 'Далее';
  }
}

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateStep();
  } else {
    alert('Форма отправлена!');
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    updateStep();
  }
});

updateStep();
