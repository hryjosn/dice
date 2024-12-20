function rollDice() {
    const dice1 = document.querySelectorAll("img")[0];
    const dice2 = document.querySelectorAll("img")[1];
    
    // 添加動畫類別
    dice1.classList.add("rolling");
    dice2.classList.add("rolling");
    
    // 延遲更新骰子圖片，等待動畫結束
    setTimeout(() => {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        
        dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
        dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
        
        // 移除動畫類別
        dice1.classList.remove("rolling");
        dice2.classList.remove("rolling");
        
        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
        } else if (randomNumber2 > randomNumber1) {
            document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
        } else {
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }, 1000);
}