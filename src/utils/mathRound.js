const mathRound = (num, digit = 0) => {
    const e = 10 ** digit;
    return Math.round(num * e) / e;
};

export default mathRound;
