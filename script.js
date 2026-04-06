function spinSlot() {
    let symbols = ["🍒","🍋","🍊","💎","7️⃣"];
    let slot = document.getElementById("slot");
    let spins = 20; // number of quick spins

    let i = 0;
    let interval = setInterval(() => {
        let result = [];
        for (let j = 0; j < 3; j++) {
            result.push(symbols[Math.floor(Math.random() * symbols.length)]);
        }
        slot.innerText = result.join(" ");
        i++;
        if (i >= spins) clearInterval(interval);

        // After final spin, check for win
        if (i === spins) {
            if (result[0] === result[1] && result[1] === result[2]) {
                alert("🎉 JACKPOT! You won! 🎉");
            }
        }
    }, 100);
}
