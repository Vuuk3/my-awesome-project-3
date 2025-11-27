function addNote(elem) {
  const note = elem.nextElementSibling.value;
  const percent = elem.nextElementSibling.nextElementSibling.value;
  const div1 = document.createElement("div");
  div1.classList.add("course");
  const courses = document.querySelectorAll(".course");
  div1.id =
    Number(courses.length != 0 ? courses[courses.length - 1].id : 0) + 1;
  const div2 = document.createElement("div");
  div2.classList.add("progress");
  const span1 = document.createElement("span");
  span1.textContent = note;
  progressbar = document.createElement("div");
  progressbar.classList.add("bar");
  progressbar.style.width = `${percent}%`;
  const span2 = document.createElement("span");
  span2.textContent = `${percent}%`;
  const button = document.createElement("button");
  button.textContent = "Удалить";
  button.onclick = function () {
    deleteNode(div1.id);
  };
  div2.appendChild(progressbar);
  div1.appendChild(span1);
  div1.appendChild(div2);
  div1.appendChild(span2);
  div1.appendChild(button);
  document.getElementById("coursesList").appendChild(div1);
}

function deleteNode(id) {
  document.getElementById(id).remove();
}
