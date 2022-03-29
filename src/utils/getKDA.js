const getKDA = (kill, deaths, assists) => {
    if (deaths === 0) {
        return 'Perfect';
    }
    return Math.round(((kill + assists) / deaths) * 100) / 100;
};

export default getKDA;
