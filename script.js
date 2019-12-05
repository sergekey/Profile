let answers = [];
let intro = confirm('Could you answer a couple of questions?')
if (intro == false) {
    alert('Sorry for interrution.');
} else if (intro == true) {
    let questions = ['color', 'brand', 'size'];
    for (i=0; i < questions.length; i++) {
        let ask = prompt('What '+ questions[i] + ' of car would you buy?');
        answers[i] = ask;
    }
    let outro = alert('Thank you for your cooperation')
    console.log(answers);
}
