let scores = { 
    inocente: 0, explorador: 0, sabio: 0, heroi: 0, 
    fora_da_lei: 0, mago: 0, cara_comum: 0, amante: 0, 
    bufon: 0, cuidador: 0, criador: 0, governante: 0 
};

let archetypeDescriptions = {
    inocente: "O Inocente busca simplicidade e honestidade. Marcas como a Coca-Cola transmitem alegria e positividade.",
    explorador: "O Explorador adora desafios e novidades. Marcas como a Jeep representam aventura e liberdade.",
    sabio: "O Sábio valoriza conhecimento e verdade. Marcas como Google e TED buscam ensinar e informar.",
    heroi: "O Herói supera desafios e inspira. Marcas como Nike mostram força e determinação.",
    fora_da_lei: "O Fora da Lei desafia as regras. Marcas como Harley-Davidson são rebeldes e inovadoras.",
    mago: "O Mago transforma e encanta. Marcas como Disney criam experiências mágicas.",
    cara_comum: "O Cara Comum conecta-se com todos. Marcas como IKEA são acessíveis e confiáveis.",
    amante: "O Amante valoriza beleza e emoção. Marcas como Chanel transmitem paixão e desejo.",
    bufon: "O Bufão traz humor e diversão. Marcas como Oreo e M&Ms usam entretenimento para engajar.",
    cuidador: "O Cuidador protege e ajuda. Marcas como Johnson & Johnson prezam pelo bem-estar.",
    criador: "O Criador é inovador e artístico. Marcas como Lego incentivam a criatividade.",
    governante: "O Governante busca controle e excelência. Marcas como Rolex e Mercedes-Benz transmitem status."
};

let questions = [
    "O que melhor representa sua marca?",
    "Que emoção sua marca transmite?",
    "Como sua marca se posiciona no mercado?"
];

let options = [
    ["🕊️ Transparência e Pureza", "🌍 Exploração e Liberdade", "📚 Sabedoria e Aprendizado", "💪 Poder e Superação"],
    ["😊 Alegria e Inspiração", "🔮 Magia e Transformação", "🎨 Criatividade e Originalidade", "🔥 Desafio e Revolução"],
    ["❤️ Proteção e Empatia", "👑 Exclusividade e Prestígio", "🤝 Autoconfiança e Pertencimento", "🎭 Humor e Entretenimento"]
];

let archetypesMapping = [
    ["inocente", "cara_comum", "cuidador"],
    ["explorador", "fora_da_lei", "heroi"],
    ["sabio", "criador", "mago"],
    ["heroi", "governante", "fora_da_lei"]
];

let currentQuestion = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.querySelector('.question').textContent = questions[currentQuestion];
        let optionsContainer = document.querySelector('.options');
        optionsContainer.innerHTML = "";
        document.querySelector('.progress').style.width = ((currentQuestion + 1) / questions.length) * 100 + "%";
        
        for (let i = 0; i < options[currentQuestion].length; i++) {
            let button = document.createElement('button');
            button.textContent = options[currentQuestion][i];
            button.onclick = function () { answer(archetypesMapping[i]); };
            optionsContainer.appendChild(button);
        }
    } else {
        showResult();
    }
}

function answer(arquetipos) {
    arquetipos.forEach(a => scores[a]++);
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    let topArchetype = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    document.getElementById('result').textContent = `Seu arquétipo é ${topArchetype.toUpperCase()}!`;
    document.getElementById('explanation').textContent = archetypeDescriptions[topArchetype];
    document.getElementById('explanation').style.display = 'block';
}

loadQuestion();
