import { useMemo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    ul {
        display: grid;
        text-align: center;
        grid-template-columns: repeat(4, 22px);
        grid-column-gap: 4px;
        grid-row-gap: 4px;
        margin: 0px auto;
        .item {
            width: 22px;
            height: 22px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            img {
                border-radius: 2px;
                width: 100%;
                height: 100%;
            }
            &:hover {
                .tooltip {
                    display: block;
                    padding: 10px;
                    width: 300px;

                    position: absolute;
                    background: var(--black-two);
                    color: var(--white);
                    align-items: flex-start;
                    bottom: 30px;
                    text-align: left;
                    .name {
                        color: var(--bluey-green);
                        margin-bottom: 5px;
                    }
                    stats {
                        text-align: left;
                        line-height: 1.1;
                    }
                }
                .tooltip::after {
                    background: var(--black-two);
                    content: '';
                    background: transparent;
                    position: absolute;
                    bottom: -10px;
                    display: flex;
                    left: calc(50% - 10px);
                    border-right: 10px solid transparent;
                    border-left: 10px solid transparent;
                    border-top: 10px solid var(--black-two);
                }
                .tooltip.mini {
                    width: 50px;
                    text-align: center;
                }
            }
            .tooltip {
                display: none;
            }
        }
        .empty {
            border-radius: 2px;
            background-color: ${({ isWin }) =>
                isWin ? 'var(--greyblue)' : 'var(--pinkish-grey-four)'};
        }
    }
    div {
        display: flex;
        align-items: center;
        .ward {
            width: 16px;
            height: 16px;
        }
        .wardCount {
            font-family: AppleSDGothicNeo;
            font-size: 11px;
            letter-spacing: -0.42px;
            color: var(--black-two);
            margin-left: 4px;
        }
    }
`;

const ItemsBox = ({ items, isWin, visionWardsBought }) => {
    const emptyItems = useMemo(
        () => Array(7 - items.length).fill(false),
        [items],
    );
    const itemInfo = useMemo(
        () => JSON.parse(localStorage.getItem('itemInfo')),
        [],
    );
    return (
        <Container isWin={isWin}>
            <ul>
                {items.map((item, i) => {
                    const id = item.imageUrl
                        .split('/')
                        .slice(-1)[0]
                        .split('.')[0];
                    const info = itemInfo?.data[id] || {
                        name: '',
                        description: '',
                    };
                    return (
                        <li className="item" key={'item' + i}>
                            <img src={item.imageUrl} alt={id} />
                            <div
                                className="tooltip"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        '<div class="name">' +
                                        info.name +
                                        '</div>' +
                                        info.description,
                                }}
                            ></div>
                        </li>
                    );
                })}
                {emptyItems.map((_, i) => (
                    <li className="empty" key={'emptyItem' + i}></li>
                ))}
                <li className="item">
                    <img
                        src={`/assets/images/icon-build${
                            isWin ? 'blue' : 'red'
                        }-p.png`}
                        alt={'buildImg'}
                    />
                    <div className="tooltip mini">빌드</div>
                </li>
            </ul>
            <div>
                <img
                    className="ward"
                    src={`/assets/images/icon-ward-${
                        isWin ? 'blue' : 'red'
                    }@2x.png`}
                    alt="ward"
                />
                <span className="wardCount">제어와드 {visionWardsBought}</span>
            </div>
        </Container>
    );
};

export default ItemsBox;
