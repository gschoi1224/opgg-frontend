import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--silver-two);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    line-height: 2;
    font-size: 20px;
    font-family: NanumGothic;
    * + * {
        margin-top: 20px;
    }
    .link {
        color: var(--azure);
        text-decoration: none;
    }
    .x {
        font-size: 50px;
        color: var(--warm-grey);
        border: 1px solid var(--warm-grey);
        border-radius: 50%;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const NotFoundPage = () => {
    return (
        <Container>
            <i className="x">X</i>
            <div className="info">존재하지 않는 페이지입니다.</div>
            <Link className="link" to="/">
                메인으로
            </Link>
        </Container>
    );
};

export default NotFoundPage;
