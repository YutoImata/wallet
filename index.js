function checkAnswer() {
    let answer = document.getElementById("answerInput").value.trim();
    let title = document.getElementById("hiddenTitle");
    let resultMessage = document.getElementById("resultMessage");
    let walletSection = document.getElementById("walletSection");

    if (answer === "タイトルを探せ") { 
        title.innerText = "これはなんのページなのでしょうか...";
        resultMessage.innerText = "正解！何かが現れた…";
        walletSection.style.display = "block";
    } else {
        resultMessage.innerText = "違うようだ…もう一度考えてみよう！";
    }
}

function openWallet() {
    let wallet = document.getElementById("wallet");
    let secondPuzzle = document.getElementById("secondPuzzle");

    wallet.src = "wallet_open.png"; // 開いた財布の画像に変更
    secondPuzzle.style.display = "block"; // 次の謎解きを表示
}

function checkWalletAnswer() {
    let walletAnswer = document.getElementById("walletAnswer").value.trim();
    let walletResultMessage = document.getElementById("walletResultMessage");
    let walletContent = document.getElementById("walletContent");

    if (walletAnswer === "財布") {
        walletResultMessage.innerText = "正解！財布の中を見てみよう！";
        walletContent.style.display = "block";
    } else {
        walletResultMessage.innerText = "違うようだ…もう一度考えてみよう！";
    }
}
