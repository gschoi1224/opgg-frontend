const whenPlay = (time) => {
    const playedTime = new Date(time);
    const month = playedTime.getMonth();
    if (month === 1) {
        return '한 달 전';
    }
    if (month > 1) {
        return `${month}달 전`;
    }
    const hour = playedTime.getHours();
    if (hour === 1) {
        return '한 시간 전';
    }
    if (hour > 1) {
        return `${hour}시간 전`;
    }
    const minute = playedTime.getMinutes();
    return `${minute}분 전`;
};

export default whenPlay;
