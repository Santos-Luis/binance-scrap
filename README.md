# binance-scrap

Get's top percentage values of binance staking

## How to execute
```
> npm i
> npx ts-node get-top-values.ts
```

### Options
- You can pass the max number of results you want: `npx ts-node get-top-values.ts 15` - (default is 10)
- You can ask for only available stakings (not sold out): `npx ts-node get-top-values.ts --available` - default is false
- You can join both previous option with the following order `15 --available`
