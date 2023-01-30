function fillItems(arr) {
  i = 1;
  idx = 0;
  count = 1;
  while (count < 9) {
    let item = document.getElementById(i);
    item.innerText = arr[idx];
    idx++;
    count++;

    if (i < 3) {
      i++;
    } else if (i == 3 || i == 6) {
      i = i + 3;
    } else if (i == 9 || i == 8) {
      i--;
    } else {
      i = i - 3;
    }
  }
}

var arr = [1, 2, 3, 6, 9, 8, 7, 4];

document.getElementById("5").addEventListener("click", () => {
  let value = arr.pop();
  arr.unshift(value);
  fillItems(arr);
});
