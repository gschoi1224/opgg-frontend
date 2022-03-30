import axios from 'axios';

const getMatchDetail = (summonerName, gameId) => {
    return axios.get(
        `https://codingtest.op.gg/api/summoner/${summonerName}/matchDetail/${gameId}`,
    );
};

export default getMatchDetail;
