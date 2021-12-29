// import stackingFile from './staking.json';
import fetch from 'node-fetch';

type Coin = {
    asset: string;
    projects: Project[];
};

type Project = {
    asset: string;
    issueStartTime: string;
    issueEndTime: string;
    duration: string;
    sellOut: boolean;
    config: {
        annualInterestRate: string;
    }
};

type Value = {
    coin: string;
    days: string;
    cb: string;
    end: string;
    apr: string;
};

async function getTopValues() {
    const url = 'https://www.binance.com/bapi/earn/v1/friendly/pos/union';

    const stackingData = await fetch(url);

    const coins: Coin[] = (await stackingData.json() as any).data;

    // const coins: Coin[] = stackingFile.data;

    const valuesPerProject = coins.map(({ projects }) => (
        projects.map(({ asset, duration, sellOut, config, issueEndTime }) => ({
            coin: asset,
            days: duration,
            cb: sellOut ? 'n' : 'y',
            end: convertTimestampToDate(issueEndTime),
            apr: Number(config.annualInterestRate) * 100,
        }))
    ));

    const values = valuesPerProject.flat();

    const sortedValues: Value[] = values
        .sort((i, j) => Number(j.apr) - Number(i.apr))
        .map((sortedValue) => ({
            ...sortedValue,
            apr: sortedValue.apr.toFixed() + '%',
        }));

    console.log(sortedValues.slice(0, 11));
};

function convertTimestampToDate(timestamp: string): string {
    const date = new Date(Number(timestamp));

    const dateFormat = { month: '2-digit', day: '2-digit', year: '2-digit' };

    return new Intl.DateTimeFormat('pt-PT', dateFormat as any).format(date);
}

getTopValues();
