import { useMemo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 11px;
    letter-spacing: -0.42px;
    color: var(--greyish-brown);
    justify-content: center;
    display: grid;
    text-align: center;
    grid-template-columns: 46px 22px 22px;
    grid-column-gap: 4px;
    .face {
        width: 46px;
        height: 46px;
        img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
        }
    }
    .spells {
    }
    .perks {
    }
    .name {
        grid-column: span 3;
    }
    .item {
        width: 22px;
        height: 22px;
    }
`;

const ChampionBox = ({ peak, spells, champion }) => {
    return (
        <Container>
            <div className="face">
                <img
                    src={champion.imageUrl}
                    alt={champion.imageUrl.split('/').slice(-1)}
                />
            </div>
            <div className="spells">
                {spells?.length &&
                    spells.map((spell, index) => (
                        <img
                            key={'spell' + index}
                            className="item"
                            src={spell.imageUrl}
                            alt={spell.imageUrl.split('/').slice(-1)}
                        />
                    ))}
            </div>
            <div className="perks">
                {peak?.length &&
                    peak.map((p, index) => (
                        <img
                            key={'perk' + index}
                            className="item"
                            src={p}
                            alt={p.split('/').slice(-1)}
                        />
                    ))}
            </div>
            <div className="name">{champion.name}</div>
        </Container>
    );
};

export default ChampionBox;
