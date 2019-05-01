const selectButtonChangeImage = document.getElementById('btn-changeImage');

  const changeImage = () => {
  const selectImage = document.querySelector('img');
  const selectImageInput = document.getElementById('imageInput');
  console.log(selectImageInput.value);
  selectImage.src = selectImageInput.value;
  }
  document.querySelector("#btn-changeImage").addEventListener("click", changeImage);
