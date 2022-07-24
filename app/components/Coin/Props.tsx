import { CoinSymbol } from "./Setup";

export type CoinTrade = {
    symbol:CoinSymbol,
    name?:string,
    current_price?:number,
    price_change_percentage_24h?:number,
    show:boolean
}

export default interface Props extends CoinTrade {
}

export const coinListSupported:CoinTrade[] = [
    {
        symbol: CoinSymbol.AVAX,
        show: false
    },
    {
        symbol: CoinSymbol.BTC,
        show: false
    },
    {
        symbol: CoinSymbol.BNB,
        show: false
    },
    {
        symbol: CoinSymbol.DAI,
        show: false
    },
    {
        symbol: CoinSymbol.ETH,
        show: false
    },
    {
        symbol: CoinSymbol.MATIC,
        show: false
    },
    {
        symbol: CoinSymbol.SOL,
        show: false
    },
    {
        symbol: CoinSymbol.USDC,
        show: false
    },
    {
        symbol: CoinSymbol.USDT,
        show: false
    },
    {
        symbol: CoinSymbol.XRP,
        show: false
    }
];