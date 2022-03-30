import axios from 'axios';

const getMostInfo = (summonerName) => {
    return axios.get(
        `https://codingtest.op.gg/api/summoner/${summonerName}/mostInfo`,
    );
};

export default getMostInfo;
