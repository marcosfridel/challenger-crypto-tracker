//BTC, ETH, DAI, USDC, USDT, BUSD, UST, USDP, XRP, BCH, LTC, ADA, LINK, EOS, TUSD, BNB, XLM, UNI, MATIC, SOL, LUNA, AVAX, FTM, AXS, SLP, MANA, UBI, BAT, TRX, DOGE

export const imagesCoins: { [key: string]: any; } = {
    avax: require('../../assets/image/coins/avax.png'),
    bnb: require('../../assets/image/coins/bnb.png'),
    btc: require('../../assets/image/coins/btc.png'),
    dai: require('../../assets/image/coins/dai.png'),
    eth: require('../../assets/image/coins/eth.png'),
    matic: require('../../assets/image/coins/matic.png'),
    sol: require('../../assets/image/coins/sol.png'),
    usdc: require('../../assets/image/coins/usdc.png'),
    usdt: require('../../assets/image/coins/usdt.png'),
    xrp: require('../../assets/image/coins/xrp.png'),
}

export enum CoinSymbol {
    AVAX = "avax",
    BNB = "bnb",
    BTC = "btc",
    DAI = 'dai',
    ETH = 'eth',
    MATIC = 'matic',
    SOL = 'sol',
    USDC = 'usdc',
    USDT = 'usdt',
    XRP = "xrp"
}
