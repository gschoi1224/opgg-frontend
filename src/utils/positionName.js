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
        case 'ADC':
            return '원딜';
        default:
            return '';
    }
};

export default positionName;
