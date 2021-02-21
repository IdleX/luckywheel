module.exports = {
    utils: 
    {
        randomInt(min, max) 
        {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        }
    },
    win_list: 
    {
        0: 'Clothing',
        1: '2,500 RP',
        2: '$20,000',
        3: '10,000 chips',
        4: 'Discount',
        5: '5,000 RP',
        6: '$30,000',
        7: '15,000 chips',
        8: 'Clothing',
        9: '7,500 RP',
        10: '20,000 chips',
        11: 'Mystery',
        12: 'Clothing',
        13: '10,000 RP',
        14: '$40,000',
        15: '25,000 chips',
        16: 'Clothing',
        17: '15,000 RP',
        18: 'Vehicle',
        19: '$50,000'
    },
    time: 
    {
        waitFor: 0,
        blockTime: 14000 // ms
    },
    cometoluckywheel(player) 
    {
        const time = new Date().getTime();
        if (this.time.waitFor > time) 
        {  
            // Blocks the spinning of the lucky wheel after last spinning on 'blockTime'
            player.notify(`Wait a little!`);
        } 
        else 
        {
            // Here u need give the winnings
            this.time.waitFor = time + this.time.blockTime;
            const value = this.utils.randomInt(0, 19);
            player.forLuckyWheel = { call: false, win: value };
            player.call('luckywheel.cometoluckywheel', [value]);
        }
    },
    spin(player) 
    {
        if (player.forLuckyWheel && !player.forLuckyWheel.call) 
        {
            player.forLuckyWheel.call = true;
            mp.players.callInRange(player.position, 50, 'luckywheel.spin', [player.forLuckyWheel.win]);
        }
    },
    finishSpin(player) 
    {
        if (player.forLuckyWheel) 
        {
            player.notify(`You won: ~g~${this.win_list[player.forLuckyWheel.win]}`);
            player.forLuckyWheel = undefined;
        } 
    }
};