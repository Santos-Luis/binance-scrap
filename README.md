# binance-scrap

Get's top percentage values of binance staking

## How to execute
```
> npm i
> npx ts-node get-top-values.ts
```

### Options
- You can pass the max number of results you want (default is 10):
```
> npx ts-node get-top-values.ts 15
```
- You can ask for only available stakings - not sold out - (default is false):
```
> npx ts-node get-top-values.ts --available
```
- You can join both previous option with the following order:
```
> npx ts-node get-top-values.ts 15 --available
```
