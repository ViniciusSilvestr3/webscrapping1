header('Access-Control-Allow-Origin: *'); 
function taFeito(doc, containerId) {
  let noticia = doc.querySelectorAll(".theme");
  let ul = document.createElement("ul");
  ul.className = "summaries";
  noticia.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = element.innerHTML;
    ul.appendChild(li);
  });
  let container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = "";
    container.appendChild(ul);
  } else {
    document.body.appendChild(ul);
  }
}

function showTab(id) {
  document
    .querySelectorAll(".tab-content")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".tab-button")
    .forEach((b) => b.classList.remove("active"));
  const sec = document.getElementById(id);
  const btn = document.getElementById("btn-" + id);
  if (sec) sec.classList.add("active");
  if (btn) btn.classList.add("active");
}

function g3Volei() {
  showTab("voleibol");
  fetch("https://proxy.corsfix.com/?https://ge.globo.com/volei/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Chamada HTTP Falhou");
      }
      return response.text();
    })
    .then((dados) => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(dados, "text/html");
      taFeito(doc, "voleibol");
    })
    .catch((erro) => alert(erro));
}

function g3Basquete() {
  showTab("basquete");
  fetch("https://proxy.corsfix.com/?https://ge.globo.com/basquete/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Chamada HTTP Falhou");
      }
      return response.text();
    })
    .then((dados) => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(dados, "text/html");
      taFeito(doc, "basquete");
    })
    .catch((erro) => alert(erro));
}

function g3Brasileirao() {
  showTab("brasileirao");
  fetch(
    "https://proxy.corsfix.com/?https://ge.globo.com/futebol/brasileirao-serie-a/"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Chamada HTTP Falhou");
      }
      return response.text();
    })
    .then((dados) => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(dados, "text/html");
      taFeito(doc, "brasileirao");
    })
    .catch((erro) => alert(erro));
}

