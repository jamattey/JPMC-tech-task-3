import { ServerRespond } from './DataStreamer';

export interface Row {
  price_abc: number,
  price_def: number,
  timestamp: Date,
  ratio:number,
  upper_bound: number,
  lower_bound: number,
  trigger_alert: number | undefined,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]): Row[] {
    const price_ABC = (serverResponds[0].top_ask.price + serverResponds[0].top_bid.price) / 2;
    const price_DEF = (serverResponds[1].top_ask.price + serverResponds[1].top_bid.price) / 2;
    const ratio = price_ABC / price_DEF;
    const upper_bound = 1 + 0.5;
    const lower_bound = 1 - 0.5;
    return {
      price_abc: priceABC,
      price_def: priceDEF,
      ratio,
      timestamp: serverResponds[0].timestamp>serverResponds[1].timestamp? serverResponds[1].timestamp? serverResponds[0].timestamp? serverResponds[1].timestamp : serverResponds[1].timestamp:
      upper_bound: upperBound,
      lower_bound: lowerBound,
      trigger_alert: (ratio > upperBound || ratio < lowerBound) ? ratio : undefined,
    };
  })
}
