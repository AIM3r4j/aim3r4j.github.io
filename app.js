import sernam from "https://cdn.jsdelivr.net/npm/sernam@1.0.3/index.min.js"
const options = {
  symbols: true,
  numbers: true,
}
const sn = sernam(options)

;(function () {
  ;[...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn")
      this.classList.add("active-btn")
      document.querySelector(".active").classList.remove("active")
      document.getElementById(button.dataset.id).classList.add("active")
    })
  })
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode")
  })
  document.querySelector("#ugen-btn").addEventListener("click", () => {
    let given_name = document.getElementById("given-name").value
    if (given_name !== "") {
      let username = sn.generateOne(given_name)
      document.getElementById("generated-name").value = username
    } else {
      window.alert("Please insert a name!")
    }
  })
})()
