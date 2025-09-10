$(document).ready(function () {
    let list = [];
    const toDoEl = $("#ft_list");
    const addBtn = $("#addBtn");

    const render = () => {
      toDoEl.empty();
      $.each(list, function (index, value) {
        const toDoItem = createTodoElement(value);
        toDoItem.on("click", function () {
          removeTodo(index);
        });
        toDoEl.append(toDoItem);
      });
    };

    const createTodoElement = (value) => {
      const button = $("<button>").addClass("todoItem").text(value);
      return button;
    };

    const addTodo = (value) => {
      list.push(value);
      updateCookie(JSON.stringify(list));
      render();
    };

    const removeTodo = (index) => {
      if (!confirm("Delete?")) return;
      list.splice(index, 1);
      updateCookie(JSON.stringify(list));
      render();
    };

    const updateCookie = (value) => {
      setCookie("toDo", value);
    };

    const setCookie = (key, value) => {
      document.cookie = `${key}=${encodeURIComponent(value)};`;
    };

    const getCookie = (key) => {
      const cookies = document.cookie.split("; ");

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];

        if (cookie.startsWith(key + "=")) {
          return cookie.substring(key.length + 1);
        }
      }

      return null;
    };

    addBtn.on("click", function () {
      const newTodo = prompt("New ToDo");
      if (newTodo.trim().length <= 0) return;
      addTodo(newTodo);
    });

    const oldToDo = getCookie("toDo");
    if (oldToDo) {
      list = JSON.parse(decodeURIComponent(oldToDo));
    }

    render();
    
});