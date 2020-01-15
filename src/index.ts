
export enum SnarksProtocol {
  Original = 'original',
  Groth16 = 'groth',
  KimLeeOh = 'kimleeoh'
}

export interface CircuitConfig {
  protocol?: SnarksProtocol;
  provingKeyUrl?: string;
  compiledCircuitUrl?: string;
  exclude?: boolean;
}

export interface Config {
  circuits: string[];
  circuitsConfig: {
    [key: string]: CircuitConfig;
  };
}
export default class EmbarkJsSnark {
  [key: string]: any;
  constructor(private config: Config) {
    this.Multiplier = {};
  }
}

// export default class EmbarkJsSnark {
//   constructor(config) {
//     this.Multiplier = {};
//   }
// }
