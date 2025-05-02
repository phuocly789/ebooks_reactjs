import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
function InputCommon({ labels, type, isRequired = false }) {
    const { container, label, box, boxIcon } = styles;
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    //đổi thành text khi click vào icon show password
    const isShowTextPassword = type === 'password' && showPassword? 'text' : type;
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={container}>
            <div className={label}>
                {labels} {isRequired && <span style={{ color: 'red' }}>*</span>}
            </div>
            <div className={box}>
                <input type={isShowTextPassword} name='' id='' />

                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;
