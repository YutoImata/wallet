function checkAnswer() {
    let answer = document.getElementById("answerInput").value.trim().toLowerCase();
    let resultMessage = document.getElementById("resultMessage");
    let secondPuzzle = document.getElementById("secondPuzzle");

    // 正解は「5等分の花嫁」またはひらがなや感じでも正解に
    if (answer === "ごとうぶんのはなよめ" || answer === "ごとうぶんの花嫁" || answer === "ごとうぶんのはなよめ" || answer === "5等分の花嫁" || answer === "五等分の花嫁") {
        resultMessage.innerText = "正解！次のクイズが出てきたよ！";
        secondPuzzle.style.display = "block"; // 第二段階のクイズを表示
    } else {
        resultMessage.innerText = "違うようだ…もう一度考えてみよう！";
    }
}

function checkWalletAnswer() {
    let walletAnswer = document.getElementById("walletAnswer").value.trim().toLowerCase();
    let walletResultMessage = document.getElementById("walletResultMessage");
    let walletContent = document.getElementById("walletContent");

    // 正解は「財布」またはひらがなや感じでも正解に
    if (walletAnswer === "さいふ" || walletAnswer === "財布") {
        walletResultMessage.innerText = "正解！財布の中を見てみよう！";
        walletContent.style.display = "block"; // 財布の中身を表示
    } else {
        walletResultMessage.innerText = "違うようだ…もう一度考えてみよう！";
    }
}
