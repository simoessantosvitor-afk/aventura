function choose(path) {
  const story = document.getElementById("story");
  const choices = document.getElementById("choices");

  if (path === "left") {
    story.textContent = "Você encontra uma ponte sobre um rio mágico. Um velho sábio oferece um enigma.";
    choices.innerHTML = `
      <button onclick="choose('riddle')">Tentar resolver o enigma</button>
      <button onclick="choose('run')">Fugir da ponte</button>
    `;
  } else if (path === "right") {
    story.textContent = "Você encontra uma caverna escura com sons estranhos vindos de dentro.";
    choices.innerHTML = `
      <button onclick="choose('enter')">Entrar na caverna</button>
      <button onclick="choose('back')">Voltar para a clareira</button>
    `;
  } else if (path === "riddle") {
    story.textContent = "Você resolve o enigma e o sábio lhe dá uma pedra mágica. Vitória!";
    choices.innerHTML = `<button onclick="restart()">Jogar novamente</button>`;
  } else if (path === "run") {
    story.textContent = "Você foge, mas cai em um buraco e acorda na clareira novamente.";
    choices.innerHTML = `<button onclick="restart()">Tentar de novo</button>`;
  } else if (path === "enter") {
    story.textContent = "Dentro da caverna, você encontra um dragão adormecido. Você escapa com tesouros!";
    choices.innerHTML = `<button onclick="restart()">Jogar novamente</button>`;
  } else if (path === "back") {
    story.textContent = "Você volta para a clareira e escolhe outro caminho.";
    choices.innerHTML = `
      <button onclick="choose('left')">Ir pela trilha da esquerda</button>
      <button onclick="choose('right')">Ir pela trilha da direita</button>
    `;
  }
}

function restart() {
  document.getElementById("story").textContent = "Você acorda em uma clareira misteriosa. Há dois caminhos à sua frente.";
  document.getElementById("choices").innerHTML = `
    <button onclick="choose('left')">Ir pela trilha da esquerda</button>
    <button onclick="choose('right')">Ir pela trilha da direita</button>
  `;
}

