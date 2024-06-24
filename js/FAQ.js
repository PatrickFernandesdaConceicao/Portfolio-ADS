document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            question.classList.toggle('active');
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
            } else {
                document.querySelectorAll('.faq-answer.show').forEach(openAnswer => {
                    openAnswer.classList.remove('show');
                });
                answer.classList.add('show');
            }
        });
    });
});
