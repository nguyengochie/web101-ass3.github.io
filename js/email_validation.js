function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Access the form data
  const inputField = document.getElementById("input-email-field");
  const inputValue = inputField.value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (inputValue.match(regex)) {
    // show user info
    onShowlement(true, "user-info-container");
    // hide email input form
    onShowlement(false, "email-form");
  } else {
    onShowlement(true, "email-error");
    onShowlement(false, "guide-email-input");
  }
}

const onShowlement = (isShow, idEl) => {
  const el = document.getElementById(idEl);
  !isShow ? el.classList.add("d-none") : el.classList.remove("d-none");
};

// Add the function as an event listener to the form
const emailForm = document.getElementById("email-form");
emailForm.addEventListener("submit", handleSubmit);

const button = document.getElementById("btn-submit");
button.onclick = handleSubmit;
