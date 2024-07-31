// 最終更新日
const lastUpdateDate = new Date(document.lastModified);
const year = lastUpdateDate.getFullYear();
const month = lastUpdateDate.getMonth() + 1;
const date = lastUpdateDate.getDate();

const modifyElement = document.getElementById('modify');
modifyElement.textContent = "最終更新日：" + year + '年' + month + '月' + date + '日';
