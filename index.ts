const startingCash = 2560;
const startingBet = 10;
const maxTargetBet = 160;
const gamesToPlay = 40;

let netProfit = 0;

function play(i: number): boolean {
    let balance = startingCash;
    let bet = startingBet;
    let rounds = 0;
    while (true) {
        const rouletteResult = rand(0, 37);
        const isBlack = rouletteResult % 2 === 0 && rouletteResult !== 0;

        if (isBlack) {
            balance += bet * 2;
            if (bet >= maxTargetBet) {
                console.log(`Game ${i}: Won! Balance: ${balance} Rounds: ${rounds}`);
                netProfit += balance - startingCash;
                return true;
            }
            bet = startingBet;
            continue;
        }

        if (balance < bet * 2) {
            console.log(`Game ${i}: Lost! Balance: ${balance} Rounds: ${rounds}`);
            netProfit += balance - startingCash;
            return false;
        }

        balance -= bet;
        bet *= 2;
        rounds++;
    }
}

let wins = 0;
for (let i = 1; i <= gamesToPlay; i++) {
    if (play(i)) {
        wins++;
    }
}

function rand(min: number, max: number): number {
    return (Math.floor(Math.pow(10, 14) * Math.random() * Math.random()) % (max - min + 1)) + min;
}

console.log(`Won ${wins} out of ${gamesToPlay} games. (${wins / gamesToPlay * 100}%)`)
console.log(`Net profit: ${netProfit} (${netProfit / gamesToPlay} per game)`)