let votos = [0, 0, 0];

function votar(candidato) {
  votos[candidato - 1]++;
}

function exibirResultado() {
  const resultadoDiv = document.getElementById('resultado');
  const vencedor = votos.indexOf(Math.max(...votos)) + 1;

  resultadoDiv.innerHTML = `<p>Resultado:</p>
                            <p>Candidato 1: ${votos[0]} votos</p>
                            <p>Candidato 2: ${votos[1]} votos</p>
                            <p>Candidato 3: ${votos[2]} votos</p>
                            <p>Vencedor: Candidato ${vencedor}</p>`;
}