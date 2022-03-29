import Header from '../components/Header';
import Main from '../components/Main';
import RankInfo from '../components/RankInfo';
import SummonerInfo from '../components/SummonerInfo';
import GridContainer from '../components/GridContainer';
import ChampionInfo from '../components/ChampionInfo';
import GameHistory from '../components/GameHistory';

const MainPage = () => {
    return (
        <>
            <Header />
            <Main>
                <SummonerInfo />
                <GridContainer
                    leftChild={
                        <>
                            <RankInfo />
                            <ChampionInfo />
                        </>
                    }
                    rightChild={<GameHistory />}
                ></GridContainer>
            </Main>
        </>
    );
};
export default MainPage;
