import axios from 'axios';

const getMatches = (summonerName) => {
    return axios.get(
        `https://codingtest.op.gg/api/summoner/${summonerName}/matches`,
    );
};

export default getMatches;
