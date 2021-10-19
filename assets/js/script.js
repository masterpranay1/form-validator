// signup and signin button
let headerSignup = document.querySelector(".header__signup");
let headerSignin = document.querySelector(".header__login");

// signup and signin form
let formSignup = document.querySelector(".form__signup");
let formSignin = document.querySelector(".form__signin");

// signup and signin images
let imagesSignup = document.querySelector(".images__signup");
let imagesSignin = document.querySelector(".images__signin");

// input fields
let formEmail = document.querySelector(".form__signup .form__email");
let formUsername = document.querySelector(".form__signup .form__username");
let formPassword = document.querySelector(".form__signup .form__password");
let formConfirmPassword = document.querySelector(".form__signup .form__confirm-password");
let formTermsAndCondition = document.querySelector(
  ".form__signup .form__terms-and-condition"
);

// form__progress circles
let progressCircle1 = document.querySelector(".form .form__progress .circle-1");
let progressCircle2 = document.querySelector(".form .form__progress .circle-2");
let progressCircle3 = document.querySelector(".form .form__progress .circle-3");
let progressCircle4 = document.querySelector(".form .form__progress .circle-4");

// form signup next , prev and submit button (MultiStep Form)
let nextButton = document.querySelector(".form__signup .form__next");
let prevButton = document.querySelector(".form__signup .form__prev");
let submitButtonSignup = document.querySelector(
  ".form__signup .form__signup__button"
);
let submitButtonSignin = document.querySelector(
    ".form__signin .form__signin__button"
  );

// signup state
var SIGNUP_STATE = 0;

let CommonToggles = (e) => {
  headerSignin.classList.toggle("hide");
  headerSignup.classList.toggle("hide");
  formSignup.classList.toggle("hide");
  formSignin.classList.toggle("hide");
  imagesSignup.classList.toggle("hide");
  imagesSignin.classList.toggle("hide");
};

let signupReset = (e) => {
  formEmail.style.display = "grid";
  formEmail.querySelector("input").value = "";
  formUsername.style.display = "none";
  formUsername.querySelector("input").value = "";
  formPassword.style.display = "none";
  formPassword.querySelector("input").value = "";
  formConfirmPassword.style.display = "none";
  formConfirmPassword.querySelector("input").value = "";
  formTermsAndCondition.style.display = "none";
  formTermsAndCondition.querySelector("input").checked = false;

  progressCircle1.style.background = "black";
  progressCircle2.style.background = "white";
  progressCircle3.style.background = "white";
  progressCircle4.style.background = "white";

  prevButton.classList.add("hide");
  submitButtonSignup.classList.add("hide");
  nextButton.classList.remove("hide");

  SIGNUP_STATE = 0;
};
headerSignup.addEventListener("click", (e) => {
  e.preventDefault();
  CommonToggles();
  signupReset();
});
headerSignin.addEventListener("click", (e) => {
  e.preventDefault();
  CommonToggles();
});

states = {
  0: function () {
    formEmail.style.display = "grid";
    formUsername.style.display = "none";
    formPassword.style.display = "none";
    formConfirmPassword.style.display = "none";
    formTermsAndCondition.style.display = "none";
    SIGNUP_STATE = 0;

    prevButton.classList.add("hide");
    nextButton.classList.remove("hide");
    submitButtonSignup.classList.add("hide");
    progressCircle1.style.background = "black";
    progressCircle2.style.background = "white";
    progressCircle3.style.background = "white";
    progressCircle4.style.background = "white";
  },
  1: function () {
    formEmail.style.display = "none";
    formUsername.style.display = "grid";
    formPassword.style.display = "none";
    formConfirmPassword.style.display = "none";
    formTermsAndCondition.style.display = "none";
    SIGNUP_STATE = 1;

    prevButton.classList.remove("hide");
    nextButton.classList.remove("hide");
    submitButtonSignup.classList.add("hide");
    progressCircle1.style.background = "black";
    progressCircle2.style.background = "black";
    progressCircle3.style.background = "white";
    progressCircle4.style.background = "white";
  },
  2: function () {
    formEmail.style.display = "none";
    formUsername.style.display = "none";
    formPassword.style.display = "grid";
    formConfirmPassword.style.display = "grid";
    formTermsAndCondition.style.display = "none";
    SIGNUP_STATE = 2;

    prevButton.classList.remove("hide");
    nextButton.classList.remove("hide");
    submitButtonSignup.classList.add("hide");
    progressCircle1.style.background = "black";
    progressCircle2.style.background = "black";
    progressCircle3.style.background = "black";
    progressCircle4.style.background = "white";
  },
  3: function () {
    formEmail.style.display = "none";
    formUsername.style.display = "none";
    formPassword.style.display = "none";
    formConfirmPassword.style.display = "none";
    formTermsAndCondition.style.display = "flex";
    SIGNUP_STATE = 3;

    prevButton.classList.remove("hide");
    nextButton.classList.add("hide");
    submitButtonSignup.classList.remove("hide");
    progressCircle1.style.background = "black";
    progressCircle2.style.background = "black";
    progressCircle3.style.background = "black";
    progressCircle4.style.background = "black";
  },
};
let isValidEmail = (e) => {
  // console.log(e.length);
  let isAtratePresent = 0,
    isDotComPresent = 0;
  for (let i = 0; i < e.length; i++) {
    // console.log(e[i]);
    if (e[i] == "@") {
      //   console.log(e[i]);
      isAtratePresent = i;
    }
    if (e[i] == ".") {
      let tmp = e.split(".");
      if (tmp[tmp.length - 1] == "com") {
        isDotComPresent = i;
      } else {
        return 0;
      }
    }
  }
  if (
    isAtratePresent &&
    isDotComPresent &&
    isDotComPresent > isAtratePresent+1 &&
    isAtratePresent > 0
  ) {
    return 1;
  } else {
    return 0;
  }
};
nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (SIGNUP_STATE == 0) {
    var formEmailText = formEmail.querySelector("input").value;
    if (isValidEmail(formEmailText)) {
      SIGNUP_STATE++;
      states[SIGNUP_STATE]();
      formEmail.querySelector("p").textContent = "";
    } else if (formEmailText.length == 0) {
      formEmail.querySelector("p").textContent = "Field Required";
    } else if(!isValidEmail(formEmailText)) {
      formEmail.querySelector("p").textContent = "Email not valid";
    }
  } else if (SIGNUP_STATE == 1) {
    var formUsernameText = formUsername.querySelector("input").value;
    if (formUsernameText.length == 0) {
      formUsername.querySelector("p").textContent = "Field Required";
    } else {
      SIGNUP_STATE++;
      states[SIGNUP_STATE]();
      formUsername.querySelector("p").textContent = "";
    }
  } else if (SIGNUP_STATE == 2) {
    var formPasswordText = formPassword.querySelector("input").value;
    var formConfirmPasswordText =
      formConfirmPassword.querySelector("input").value;
    if (formPasswordText.length == 0) {
      formPassword.querySelector("p").textContent = "Field Required";
    } else {
      formPassword.querySelector("p").textContent = "";
    }
    if (formConfirmPasswordText.length == 0) {
      formConfirmPassword.querySelector("p").textContent = "Field Required";
    } else if (formConfirmPasswordText != formPasswordText) {
      formConfirmPassword.querySelector("p").textContent =
        "Password Do Not Match";
    } else {
      formConfirmPassword.querySelector("p").textContent = "";
      SIGNUP_STATE++;
      states[SIGNUP_STATE]();
    }
  }
});
prevButton.addEventListener("click", (e) => {
  e.preventDefault();
  SIGNUP_STATE--;
  states[SIGNUP_STATE]();
});
submitButtonSignup.addEventListener("click", e => {
    e.preventDefault();
    if(formTermsAndCondition.querySelector("input").checked) {
        formTermsAndCondition.querySelector("p").textContent = "";
        CommonToggles();
        signupReset();
    } else {
        formTermsAndCondition.querySelector("p").style.color = "red";
        formTermsAndCondition.querySelector("p").textContent = "check the box required";
    }
})
submitButtonSignin.addEventListener("click", e => {
    e.preventDefault();
    let formEmail = document.querySelector(".form__signin .form__email");
    let formPassword = document.querySelector(".form__signin .form__password");
    let formEmailText = formEmail.querySelector("input").value;
    let formPasswordText = formPassword.querySelector("input").value;
    // console.log(formEmailText, formPasswordText);
    let tmp1 = 0, tmp2 = 0;
    if(formEmailText.length == 0) {
        formEmail.querySelector("p").textContent = "field Required";
    } else if(!isValidEmail(formEmailText)) {
        formEmail.querySelector("p").textContent = "invalid email";
    } else {
        formEmail.querySelector("p").textContent = "";
        tmp1 = 1;
    }
    if(formPasswordText.length == 0) {
        formPassword.querySelector("p").textContent = "field required";
    } else {
        formPassword.querySelector("p").textContent = "";
        tmp2 = 1;
    }
    if(tmp2 && tmp1) {
        formEmail.querySelector("input").value = "";
        formPassword.querySelector("input").value = "";
    }
});
