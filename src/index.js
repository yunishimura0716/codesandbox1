import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  addToIncompleteList(inputText);
};

const addToIncompleteList = (text) => {
  // create li, div and p
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "list-title";
  p.innerText = text;
  // create button
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode.parentNode;
    // delete from incomplete
    deleteTargetFromIncompleteList(completeTarget);
    // add to complete
    const text = completeTarget.firstElementChild.firstElementChild.innerText;
    completeTarget.textContent = null;
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.className = "list-title";
    p.innerText = text;

    const returnButton = document.createElement("button");
    returnButton.innerText = "Return";
    returnButton.addEventListener("click", () => {
      const deleteTarget = returnButton.parentNode.parentNode;
      deleteTargetFromCompleteList(deleteTarget);
      const text = deleteTarget.firstElementChild.firstElementChild.innerText;
      addToIncompleteList(text);
    });

    div.appendChild(p);
    div.appendChild(returnButton);
    completeTarget.appendChild(div);

    document.getElementById("complete-list").appendChild(completeTarget);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteTargetFromIncompleteList(deleteTarget);
  });

  // li > div > p
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  console.log(li);

  // append incomlete list
  document.getElementById("incomplete-list").appendChild(li);
};

const deleteTargetFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
const deleteTargetFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
