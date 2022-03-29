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

            img {
                border-radius: 2px;
                width: 100%;
                height: 100%;
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
    return (
        <Container isWin={isWin}>
            <ul>
                {items.map((item, i) => (
                    <li className="item" key={'item' + i}>
                        <img
                            src={item.imageUrl}
                            alt={item.imageUrl.split('/').slice(-1)}
                        />
                    </li>
                ))}
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
