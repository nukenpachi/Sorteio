// Equipes participantes
const equipes = [
    "Equipe 1", "Equipe 2", "Equipe 3", "Equipe 4", "Equipe 5",
    "Equipe 6", "Equipe 7", "Equipe 8", "Equipe 9", "Equipe 10",
    "Equipe 11", "Equipe 12", "Equipe 13", "Equipe 14", "Equipe 15",
    "Equipe 16", "Equipe 17", "Equipe 18", "Equipe 19", "Equipe 20"
];

// Função para embaralhar as equipes aleatoriamente
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const sortearButton = document.getElementById("sortearButton");
    const resultado = document.getElementById("resultado");

    sortearButton.addEventListener("click", function () {
        // Embaralhar as equipes aleatoriamente
        shuffle(equipes);

        // Exibir os resultados
        resultado.innerHTML = "";
        for (let i = 0; i < equipes.length; i++) {
            const li = document.createElement("li");
            li.textContent = `${i + 1}º Lugar: ${equipes[i]}`;
            resultado.appendChild(li);
        }
    });
});
