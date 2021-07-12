function checkForm() {
  let p = document.getElementsByTagName("p");
  let c = document.forms[1].cl.value;
  let s = document.forms[1].sz.value;

  for (let i = 0; i < p.length; i++) {
    p[i].style.color = c;
    p[i].style.fontSize = `${s}px`;
  }
}
let t = setInterval(checkForm, 50);
