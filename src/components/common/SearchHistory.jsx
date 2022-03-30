import { useState, useEffect, useCallback } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import useNavBox from '../../hooks/useNavBox';

const Container = styled.div`
    width: 260px;
    background: pink;
    position: absolute;
    top: 33px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
    overflow: hidden;
`;

const Empty = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    color: #555e5e;
    font-size: 11px;
    .icon {
        border: 1px solid #555e5e;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const History = styled.ul`
    width: 100%;
    color: var(--charcoal);
    font-size: 12px;
    line-height: 15px;
    padding: 8px 0;
    li {
        padding: 8px 16px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        .actions {
            button {
                cursor: pointer;
                border: 0;
            }
            .favorite {
                color: var(--warm-grey-four);
            }
            .favorite.active {
                color: var(--perrywinkle);
            }
            .x {
                font-family: Helvetica;
                color: var(--slate-grey);
            }
        }
    }
`;

const menues = ['최근검색', '즐겨찾기'];
const SearchHistory = ({ setHistoryShow, isFocused }) => {
    const { type, NavBox } = useNavBox(2);
    const [list, setList] = useState(null);
    const [favoriteList, setFavoriteList] = useState(
        JSON.parse(localStorage.getItem('favoriteList')) || [],
    );
    useEffect(() => {
        let newList = null;
        switch (type) {
            case 0:
                newList = JSON.parse(localStorage.getItem('searchedList'));
                break;
            case 1:
                newList = favoriteList;
                break;
            default:
                newList = null;
                break;
        }
        setList(newList);
        // eslint-disable-next-line
    }, [type, favoriteList]);

    const deleteItem = useCallback(
        (delItem) => {
            const newList = list.filter((item) => item !== delItem);
            let key = '';
            switch (type) {
                case 0:
                    key = 'searchedList';
                    break;
                case 1:
                    key = 'favoriteList';
                    setFavoriteList(newList);
                    break;
                default:
                    break;
            }
            setList(newList);
            localStorage.setItem(key, JSON.stringify(newList));
        },
        [list, type],
    );

    const addFavoriteItem = useCallback(
        (item) => {
            localStorage.setItem(
                'favoriteList',
                JSON.stringify([item, ...favoriteList]),
            );
            setFavoriteList((prev) => [item, ...prev]);
        },
        [favoriteList],
    );

    const deleteFavoriteItem = useCallback(
        (delItem) => {
            const newList = favoriteList.filter((item) => item !== delItem);
            setFavoriteList(newList);
            localStorage.setItem('favoriteList', JSON.stringify(newList));
        },
        [favoriteList],
    );

    return (
        <Container>
            <OutsideClickHandler
                onOutsideClick={() => !isFocused && setHistoryShow(false)}
            >
                <NavBox navigationTypes={menues} />
                {list?.length ? (
                    <History>
                        {list.map((item) => (
                            <li key={item}>
                                <span className="id">{item}</span>
                                <div className="actions">
                                    {type === 0 &&
                                        (favoriteList?.indexOf(item) > -1 ? (
                                            <button
                                                className="favorite active"
                                                onClick={() =>
                                                    deleteFavoriteItem(item)
                                                }
                                            >
                                                ★
                                            </button>
                                        ) : (
                                            <button
                                                className="favorite"
                                                onClick={() =>
                                                    addFavoriteItem(item)
                                                }
                                            >
                                                ☆
                                            </button>
                                        ))}
                                    <button
                                        className="x"
                                        onClick={() => deleteItem(item)}
                                    >
                                        x
                                    </button>
                                </div>
                            </li>
                        ))}
                    </History>
                ) : (
                    <Empty>
                        <i className="icon">i</i>
                        <span>최근에 본 소환사가 없습니다.</span>
                    </Empty>
                )}
            </OutsideClickHandler>
        </Container>
    );
};

export default SearchHistory;
