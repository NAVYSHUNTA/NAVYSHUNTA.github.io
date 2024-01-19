// 最終更新日
const last = new Date(document.lastModified);
const year = last.getFullYear();
const month = last.getMonth() + 1;
const date = last.getDate();

const target = document.getElementById('modify');
target.textContent = "最終更新日：" + year + '年' + month + '月' + date + '日';
