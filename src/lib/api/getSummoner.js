import axios from 'axios';

const getSummoner = (summonerName) => {
    return axios.get(`https://codingtest.op.gg/api/summoner/${summonerName}`);
};

export default getSummoner;
