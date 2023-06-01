const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];
function borrarLis(){
  const listaEl=document.querySelector(".lista")
  const liEls=listaEl.querySelectorAll("li");
  liEls.forEach((el)=>{
    el.remove();
  })
}
function newsLis(){
  for(let item of cosasQueAprendimos){
    const newLiEl=document.createElement("li")
    newLiEl.textContent=item.tema
    const nuevaClaseLi= item.class || "item"
    newLiEl.classList.add(nuevaClaseLi);
    console.log(newLiEl);
    const listaDeItems=document.querySelector(".lista")
    listaDeItems.appendChild(newLiEl);
  }

}

function main() {
  borrarLis();
  newsLis();
}

main();
