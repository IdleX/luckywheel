const luckywheel = require('./module');

mp.events.add(
{
    "luckywheel.cometoluckywheel": (player) => 
    {
        luckywheel.cometoluckywheel(player);
    },
    "luckywheel.spin": (player) => 
    {
        luckywheel.spin(player);
    },
    'luckywheel.finishspin': (player) => 
    {
        luckywheel.finishSpin(player);
    },
    'playerDeath': (player) => 
    {
        luckywheel.finishSpin(player);
    }
});

/*
    "playerJoin": (player) => 
    {
        player.position = new mp.Vector3(1110.8710, 228.8737, -49.6358);
    }
*/