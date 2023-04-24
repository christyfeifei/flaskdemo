const dateE1 = document.querySelector(".date");

dateE1.innerText = getTime();



//取得時、分、秒跟年、月、日
function getTime(fullTime = true) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    
    if (fullTime) {
        return `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;
    }
    
    return `${year}/${month}/${date}`;
}