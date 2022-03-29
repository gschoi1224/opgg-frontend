const positionName = (name) => {
    let src = '/assets/images/icon-mostposition-';
    switch (name) {
        case 'TOP':
            src += 'top.png';
            break;
        case 'JNG':
            src += 'jng.png';
            break;
        case 'MID':
            src += 'mid.png';
            break;
        case 'SUP':
            src += 'sup.png';
            break;
        case 'BOT':
            src += 'adc.png';
            break;
        default:
            src += '';
            break;
    }
    return src;
};

export default positionName;
