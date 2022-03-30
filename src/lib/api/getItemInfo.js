import axios from 'axios';

const getItemInfo = (summonerName, gameId) => {
    return axios.get(
        `http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json`,
    );
};

export default getItemInfo;
