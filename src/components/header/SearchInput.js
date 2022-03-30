import { useCallback, useState } from 'react';
import styled from 'styled-components';
import OpggIcon from '../../assets/svg/icon-gg.svg';
import getSummoner from '../../lib/api/getSummoner';
import executeAPI from '../../utils/executeAPI';
import FitSummoner from './FitSummoner';
import SearchHistory from './SearchHistory';

const Container = styled.form`
    width: 260px;
    height: 32px;
    border-radius: 2px;
    background-color: var(--white-two);
    padding: 9px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    float: right;
    position: relative;
`;

const StyledInput = styled.input`
    width: 75%;
    height: 100%;
    font-size: 12px;
    font-family: AppleSDGothicNeo;
    color: var(--warm-grey);
`;

const StyledButton = styled.button`
    width: 20%;
    background-color: inherit;
    border: 0;
    img {
        width: 100%;
    }
    cursor: pointer;
`;

const SearchInput = () => {
    const [historyShow, setHistoryShow] = useState(false);
    const [resultShow, setResultShow] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [input, setInput] = useState('');
    const [summoner, setSummoner] = useState(null);
    const onFocusHandler = useCallback((e) => {
        setIsFocused(true);
        if (!e.target.value) {
            setHistoryShow(true);
            setResultShow(false);
        } else {
            setHistoryShow(false);
            setResultShow(true);
        }
        // eslint-disable-next-line
    }, []);
    const onBlurHandler = useCallback(() => {
        setIsFocused(false);
        // eslint-disable-next-line
    }, []);
    const onChangeHandler = useCallback((e) => {
        onFocusHandler(e);
        setInput(e.target.value);
        if (e.target.value) {
            executeAPI(
                () => getSummoner(e.target.value),
                (e) => {
                    console.error(e);
                },
                null,
                (res) => {
                    if (res) {
                        setSummoner(res.summoner);
                    }
                },
            );
        }
        // eslint-disable-next-line
    }, []);

    const onSubmitHandler = useCallback(
        (e) => {
            e.preventDefault();
            window.location.href = `/summoners/${input}`;
        },
        [input],
    );

    return (
        <Container onSubmit={onSubmitHandler}>
            <StyledInput
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                type="text"
                placeholder="소환사명, 챔피언···"
                value={input}
            />
            <StyledButton>
                <img src={OpggIcon} alt="검색 아이콘" />
            </StyledButton>
            {historyShow && (
                <SearchHistory
                    setHistoryShow={setHistoryShow}
                    isFocused={isFocused}
                />
            )}
            {resultShow && summoner && (
                <FitSummoner
                    setResultShow={setResultShow}
                    summoner={summoner}
                    isFocused={isFocused}
                />
            )}
        </Container>
    );
};

export default SearchInput;
