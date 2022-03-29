const positionName = (name) => {
    switch (name) {
        case 'TOP':
            return '탑';
        case 'JNG':
            return '정글';
        case 'MID':
            return '미드';
        case 'SUP':
            return '서포터';
        case 'BOT':
            return '바텀';
        default:
            return '';
    }
};

export default positionName;
