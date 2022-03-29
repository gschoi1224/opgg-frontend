import { useState } from 'react';
import NavBoxComponent from '../components/common/NavBoxComponent';

const useNavBox = (navType) => {
    const [type, setType] = useState(0);
    const NavBox = ({ navigationTypes }) => (
        <NavBoxComponent
            type={type}
            setType={setType}
            navType={navType}
            navigationTypes={navigationTypes}
        />
    );

    return { NavBox, type };
};

export default useNavBox;
