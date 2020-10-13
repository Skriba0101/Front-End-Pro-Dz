const wrapper = document.querySelector("#wrapper");
const input = document.querySelector("#wrapper input");
const addButton = document.querySelector("#wrapper button");
const list = document.querySelector("#wrapper ul");

const listItemsArr = createDataArr() || [];
const listItems = "listItems";

if (wrapper !== null && input !== null && addButton !== null && list !== null) {
  listItemsArr.forEach((item) => {
    const listItem = createListItem({ name: item, className: "list-item" });
    list.appendChild(listItem);
  });

  input.addEventListener("input", () => {
    addButton.disabled = input.value === "";
  });

  addButton.addEventListener("click", () => {
    const listItem = createListItem({ name: input.value, className: "list-item" });
    list.appendChild(listItem);

    listItemsArr.push(input.value);
    setLocalStorageItem();

    input.value = "";
    input.focus();
    addButton.disabled = true;
  });

}

function createDataArr() {
  try {
    return JSON.parse(localStorage.getItem("listItems"));
  } catch {
    return [];
  }
}

function setLocalStorageItem() {
  const json = JSON.stringify(listItemsArr);
    localStorage.setItem(listItems, json);
}

function createButton(props) {
  const button = document.createElement("button");
  const text = props.text || "";
  const className = props.className || "";
  const disabled = props.disabled || false;

  button.type = "button";
  button.innerHTML = text;
  button.className = className;
  button.disabled = disabled;
  button.addEventListener("click", () => {
    if (typeof props.onClick === "function") {
      props.onClick();
    }
  });
  return button;
}

function createSpan(props) {
  const span = document.createElement("span");
  const text = props.text || "";
  const className = props.className || "";

  span.innerHTML = text;
  span.className = className;
  return span;
}

function createListItem(props) {
  const item = document.createElement("li");
  let name = props.name || "";
  const className = props.className || "";

  item.className = className;
  const span = item.appendChild(createSpan({ text: name, className: "text-span" }));

  const deleteButton = createButton({
    text: "Удалить",
    className: "delete-button",
    onClick: () => {
      if (list !== null) list.removeChild(item);

      const index = listItemsArr.indexOf(span.innerHTML);
      listItemsArr.splice(index, 1);

      setLocalStorageItem();
    }
  });
  item.appendChild(deleteButton);

  return item;
}