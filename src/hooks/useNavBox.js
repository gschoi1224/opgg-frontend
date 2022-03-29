import { useState } from 'react';
import NavBoxComponent from '../components/common/NavBoxComponent';

const useNavBox = () => {
    const [type, setType] = useState(0);
    const NavBox = () => <NavBoxComponent type={type} setType={setType} />;

    return { NavBox, type };
};

export default useNavBox;
