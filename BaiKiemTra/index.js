function getPokemon(string) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${string}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector(".pokemonBox").innerHTML = `"<div>
      <img src="${data.sprites.font_shiny}"
        alt="${data.name}" />
    </div>
    <div class="pokemonInfos">
      <h1>${data.name}</h3>
        <p>${data.weight}</p>
    </div>"`;
    })
    .catch((error) => {
      document.querySelector(".pokemonBox").innerHTML = "Not found pokemon";
    });
}

var inputValue = document.querySelector("#pokemonName");
document.querySelector("#search").addEventListener("click", function () {
  getPokemon(inputValue.value.tolowercase());
});

var input = document.querySelector("#pokemonName");
var a = 1;
var button = document.querySelector("#search");
var name123 = document.querySelector(".name");
button.addEventListener("click", function () {
  if (input.value == name123.innerHTML.text) {
    alert("Dung ten");
  } else {
    alert("Khong Dung Ten");
  }
});
getPokemon();

// Viết cho thầy tính năng search tìm kiếm tên pokemon
// Nếu tên tìm kiếm không có kết quả thì xuất lên element pokemonBox  là "Not found pokemon"
// Nếu tìm thấy thì hiển thị thông tin gồm : hình ảnh , tên và cân nặng của pokemon đó

// Gợi ý
// Dữ liệu của data là thông tin của pokemon Pikachu
// Biết tên của pokemon nằm ở key name trong data
// Biết hình ảnh của pokemon nằm ở key sprites và front_shiny_female của data
// Biết cân nặng nằm ở key weight của data
// Chúc các bạn hoàn thành tốt
