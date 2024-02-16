const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./gridman.jpg") {
    myImage.setAttribute("src", "./layer_akane.png");
  } else {
    myImage.setAttribute("src", "./gridman.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `${myName} さん、新条アカネは可愛いよ。`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `新条アカネは可愛いよ、${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  