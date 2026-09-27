const text = document.querySelector(".text");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const divMemes = document.querySelector(".divMemes");

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let apiMemes = await fetch("https://api.imgflip.com/get_memes");
  let data = await apiMemes.json();
  console.log(data);

  content = "";
  data.data.memes.map((meme, index) => {
    if (input.value == index) {
      content = `<h1 class="text-warning text-center">${meme.name}</h1>
                <img class="img-fluid" src="${meme.url}">`;
    } else if (
      input.value.trim() == "" ||
      input.value > index ||
      isNaN(input.value)
    ) {
      content = `<h1 class=" text-warning text-center">Please Enter Valid Number</h1>`;
    }
  });
  input.value = "";
  divMemes.innerHTML = content;
});
