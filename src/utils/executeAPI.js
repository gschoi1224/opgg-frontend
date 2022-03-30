const executeAPI = async (fn, error, before, after) => {
    let result;
    try {
        before && before();
        const response = await fn();
        if (response.status === 200) {
            result = response.data;
        } else {
            let msg = '';
            switch (Math.floor(response.status / 100)) {
                case 5:
                    msg = '서버 에러';
                    break;
                case 4:
                    msg = '클라이언트 에러';
                    break;
                case 3:
                    msg = '리다이렉트 에러';
                    break;
                default:
                    msg = '암튼 에러임';
                    break;
            }
            throw new Error({ status: response.status, message: msg });
        }
    } catch (e) {
        error && error(e);
    } finally {
        after && after(result);
    }
};

export default executeAPI;
