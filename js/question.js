document.querySelectorAll('.questions-item_question').forEach(question => {
  question.addEventListener('click', () => {
    const thisItem = question.closest('.questions_item');
    const thisAnswer = question.nextElementSibling;
    const isActive = question.classList.contains('active');

    document.querySelectorAll('.questions_item').forEach(item => {
      const q = item.querySelector('.questions-item_question');
      const a = item.querySelector('.questions-item_answer');

      q.classList.remove('active');
      a.style.maxHeight = "0";
      a.style.padding = "0";
    });

    if (!isActive) {
      question.classList.add('active');
      thisAnswer.style.maxHeight = thisAnswer.scrollHeight + "px";
      thisAnswer.style.padding = "10px 0";

      setTimeout(() => {
        thisAnswer.style.maxHeight = "none";
      }, 400);
    }
  });
});