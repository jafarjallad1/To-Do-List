

document.querySelector(".formm").onsubmit = function (e) {
    e.preventDefault();
    let task = document.querySelector(".task label");
    let text = document.querySelector(".task-input").value;
    let tasks = document.querySelector(".tasks");
  
    tasks.innerHTML += `
        <li class="task">
              <input class="check" type="checkbox"  onclick="checkedd(this)"/>
              <label>${text}</label>
          </li>
        `;
  
    checkedd();
  };
  
  function checkedd(checkbox) {
    let element = checkbox;
    let text = element.nextElementSibling;
  
    if (element.checked) {
      text.classList.add("checked");
    } else {
      text.classList.remove("checked");
    }
  }
  





