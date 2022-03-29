import Header from '../components/Header';
import Main from '../components/Main';
import PositionInfo from '../components/PositionInfo';
import RankInfo from '../components/RankInfo';
import SummonerInfo from '../components/SummonerInfo';
import GridContainer from '../components/GridContainer';

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
                            <div>두개</div>
                        </>
                    }
                    rightChild={<PositionInfo />}
                ></GridContainer>
            </Main>
        </>
    );
};
export default MainPage;
