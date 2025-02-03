let scores = { 
    inocente: 0, explorador: 0, sabio: 0, heroi: 0, 
    fora_da_lei: 0, mago: 0, cara_comum: 0, amante: 0, 
    bufon: 0, cuidador: 0, criador: 0, governante: 0 
};

let questions = [
    "Qual a maior prioridade da sua marca?",
    "Qual a sensação que sua marca deseja transmitir?",
    "Como a marca se posiciona no mercado?"
];

let options = [
    ["<i class='fas fa-shield-alt'></i> Segurança e estabilidade", "<i class='fas fa-hiking'></i> Liberdade e aventura", "<i class='fas fa-book'></i> Conhecimento e aprendizado", "<i class='fas fa-fist-raised'></i> Força e coragem", "<i class='fas fa-bolt'></i> Revolução e mudança", "<i class='fas fa-magic'></i> Mistério e transformação", "<i class='fas fa-hand-holding-heart'></i> Empatia e conexão", "<i class='fas fa-heart'></i> Paixão e desejo", "<i class='fas fa-smile'></i> Alegria e humor", "<i class='fas fa-handshake'></i> Cuidado e proteção", "<i class='fas fa-paint-brush'></i> Criatividade e inovação", "<i class='fas fa-crown'></i> Autoridade e liderança"]
];

let archetypes = Object.keys(scores);
let currentQuestion = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.querySelector('.question').textContent = questions[currentQuestion];
        let optionsContainer = document.querySelector('.options');
        optionsContainer.innerHTML = "";
        
        for (let i = 0; i < archetypes.length; i++) {
            let button = document.createElement('button');
            button.innerHTML = options[0][i];
            button.onclick = function () { answer(archetypes[i]); };
            optionsContainer.appendChild(button);
        }
    } else {
        showResult();
    }
}

function answer(arquetipo) {
    scores[arquetipo]++;
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    let topArchetype = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    let descriptions = {
        inocente: "Seu arquétipo é o Inocente! Sua marca preza pela honestidade e simplicidade.",
        explorador: "Seu arquétipo é o Explorador! Sua marca busca inovação e aventura.",
        sabio: "Seu arquétipo é o Sábio! Sua marca valoriza conhecimento e aprendizado.",
        heroi: "Seu arquétipo é o Herói! Sua marca inspira força e superação.",
        fora_da_lei: "Seu arquétipo é o Fora da Lei! Sua marca quebra padrões e desafia normas.",
        mago: "Seu arquétipo é o Mago! Sua marca busca transformação e mistério.",
        cara_comum: "Seu arquétipo é o Cara Comum! Sua marca promove conexão e pertencimento.",
        amante: "Seu arquétipo é o Amante! Sua marca desperta emoções e desejo.",
        bufon: "Seu arquétipo é o Bufão! Sua marca diverte e traz humor ao mundo.",
        cuidador: "Seu arquétipo é o Cuidador! Sua marca protege e cuida das pessoas.",
        criador: "Seu arquétipo é o Criador! Sua marca inova e traz criatividade.",
        governante: "Seu arquétipo é o Governante! Sua marca transmite liderança e autoridade."
    };
    document.getElementById('result').textContent = descriptions[topArchetype];
}

loadQuestion();
