const form = document.querySelector("form");

console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Page reload na ho

  const formData = new FormData(form);
  console.log("1clc");
  // FormData ko loop karke dekhte hain
  for (let [key, value] of formData.entries()) {
    console.log("clicked");
    console.log(`${key}: ${value}`);
  }

  // Ya agar fetch se bhejna hai
  //   fetch("/submit", {
  //     method: "POST",
  //     body: formData
  //   });
});
