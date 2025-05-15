// 最終更新日
const lastUpdateDate: Date = new Date(document.lastModified);
const year: number = lastUpdateDate.getFullYear();
const month: number = lastUpdateDate.getMonth() + 1;
const date: number = lastUpdateDate.getDate();

const modifyElement: HTMLElement | null = document.getElementById('modify');
if (modifyElement) {
    modifyElement.textContent = `最終更新日：${year}年${month}月${date}日`;
}