const toTierString = (str) => {
    const [tier, grade] = [str.slice(0, -1).toUpperCase(), str.slice(-1)];
    let tierString = '';
    switch (tier) {
        case 'I':
            tierString = 'Iron';
            break;
        case 'B':
            tierString = 'Bronze';
            break;
        case 'S':
            tierString = 'Silver';
            break;
        case 'G':
            tierString = 'Gold';
            break;
        case 'P':
            tierString = 'Platinum';
            break;
        case 'D':
            tierString = 'Diamond';
            break;
        case 'M':
            tierString = 'Master';
            break;
        case 'GM':
            tierString = 'GrandMaster';
            break;
        case 'C':
            tierString = 'Challenger';
            break;
        default:
            break;
    }
    return `${tierString} ${grade}`;
};

export default toTierString;
