function jackpoop(q) {
    while (q !== 0) {
        var win = Math.floor(Math.random() * 100);
        // console.log(win); //Use for testing
        var prize = Math.floor(Math.random() * (100 - 50)) + 50;

        if (win === 99) {
            var loot = q + prize;
            return loot;
        } else {
            return 'Loser! Loser!';
        }
        q--;
    }
}
