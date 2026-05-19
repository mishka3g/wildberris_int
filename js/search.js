const search = function () {
  const input = document.querySelector('.search-block > input');
  const searchBtn = document.querySelector('.search-block > buton');

  // input.addEventListener('input', (event) => {
  //   console.log(event.target.value);
  // });
  input.addEventListener('click', (event) => {
    console.log(input.value);
  });

  // searchBtn.addEventListener('click', () => {
  //   console.log(input.value);
  // });

}

search();