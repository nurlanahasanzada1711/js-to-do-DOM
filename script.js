let row = document.querySelector(".row");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let fullname = document.querySelector("name");
    let errorMsg = document.querySelector(".error");

    console.log();
    if (fullname.value.trim() == "") {
        errorMsg.classList.replace("d-none", "d-block");
    } else {
        row.innerHTML += `<ul>
        <li>
        <div class="list">
        ${InputEmail.value}
        </div>
        </li>
        </ul>`;
        errorMsg.classList.replace("d-block", "d-none");
    }

    
    InputEmail.value = "";
});