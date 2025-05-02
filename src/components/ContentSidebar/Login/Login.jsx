import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function Login() {
    const { container, title,forgotPW,boxRememberMe } = styles;
    return (
        <div className={container}>
            <div className={title}>Sign In</div>
            <InputCommon labels='Enter Your Email' type='Email' isRequired />
            <InputCommon
                labels='Enter Your Password'
                type='password'
                isRequired
            />
            <div className={boxRememberMe}>
                <input type='checkbox' name='' id='' />
                <span>Remember me</span>
            </div>
            <Button content="LOGIN" />
            <div className={forgotPW}>Forgot Password ?</div>
        </div>
    );
}

export default Login;
