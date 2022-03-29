import mathRound from './mathRound';

const getKDA = (kill, deaths, assists) => {
    if (deaths === 0) {
        return 'Perfect';
    }
    return mathRound((kill + assists) / deaths, 2);
};

export default getKDA;
