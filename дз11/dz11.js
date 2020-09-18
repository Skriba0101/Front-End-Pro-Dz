const wrapper = document.querySelector("#wrapper");
if (wrapper) {
  const list = createList({ className: "list" });
  const form = createForm((value) => {
    const li = createListItem({ text: value });
    list.appendChild(li);
  });

  wrapper.appendChild(form);
  wrapper.appendChild(list);


  const userList = ["Вася", "Люба", "Гоша"];

  for (let i = 0; i < userList.length; i++) {
    let user = createListItem({ text: userList[i] })
    list.appendChild(user)
  }


  function createInput(props) {
    const input = document.createElement("input");
    input.style.margin = "20px";
    const placeholder = props.placeholder || "";
    const className = props.className || ""
    input.placeholder = placeholder;
    input.className = className;

    return input
  }

  function createButton(props) {
    const button = document.createElement("button");
    const disabled = props.disabled || false;
    button.disabled = disabled;
    const buttonText = props.buttonText || "";
    const className = props.className || "";
    button.innerText = buttonText;
    button.className = className;
    button.type = "button";
    button.style.backgroundColor = "pink"

    return button
  }

  function createList(props) {
    const list = document.createElement("ul");
    className = props.className || "";
    list.className = className;
    

    return list
  }

  function createListItem(props) {
    let userName = document.createElement("span");
    let text = props.text || "";
    userName.innerText = text;

    const listItem = document.createElement("li");
    listItem.style.border = "1px solid pink";
    listItem.style.borderRadius = "3px";
    listItem.style.margin = "10px";
    listItem.style.background = "pink"
    listItem.style.width = "250px"
    const change = document.createElement("button")
    change.innerText = "Изменить";
    change.style.margin = "10px"
    change.addEventListener("click", () => {
      const newUserName = prompt("Новое Имя?");
      userName.innerText = newUserName === null ?
        userName.innerText = userName.innerText : userName.innerText = newUserName
    })

    const delite = document.createElement("button")
    delite.innerText = "Удалить";
    delite.style.margin = "5px";
    delite.addEventListener("click", () => {
      const deliteListItem = confirm("Вы уверены?");
      if (deliteListItem === true) {
        listItem.remove()
      }
    })

    listItem.appendChild(userName);
    listItem.appendChild(change);
    listItem.appendChild(delite);

    return listItem
  }

  function createForm(addUser) {
    const welcomeText = document.createElement("div");

   
    const okButton = createButton({
      buttonText: "Ok",
      className: "okbutton",
      disabled: true
    })

    const inputCreateUser = createInput({
      placeholder: "Введите Имя",
      className: "inputcreateuser"
    })

    okButton.addEventListener("click", () => {
      if (typeof addUser === "function") {
        addUser(inputCreateUser.value);
        inputCreateUser.value = "";
        okButton.disabled = true;
        inputCreateUser.focus();
      }
    });

    inputCreateUser.addEventListener("input", (event) => {
      const value = event.target.value;
      okButton.disabled = value === "";
    });

    const formForCreateUser = document.createElement("div");
    formForCreateUser.className = "formForCreateUser";
    formForCreateUser.style.backgroundColor = "grey"


    formForCreateUser.appendChild(welcomeText)
    formForCreateUser.appendChild(inputCreateUser)
    formForCreateUser.appendChild(okButton)

    return formForCreateUser
  }
}