function names () {
  let yourname = document.getElementById("source");
  let text = "";
  for (let x = 0; x < yourname.length; x++) {
    text += yourname.elements[x].value + " ";
  }

  document.getElementById("target").innerHTML = "your name is " + text;
}

document.getElementById("source").addEventListener("mouseover", names);