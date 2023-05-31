import { useNavigate } from 'react-router-dom';
import { logInWithGoogle, logInWithGithub } from '../../Firebase/UserService';
import { BsGoogle, BsGithub } from "react-icons/bs";
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        logInWithGoogle()
            .then(() => {
                navigate('/');
            }
        );
    };

    const handleGithubLogin = (e) => {
        e.preventDefault();
        logInWithGithub()
            .then(() => {
                navigate('/');
            }
        );
    };

    return (
        <div className='login-form-container'>
            <h2>Sign in to Give Me A House</h2>

            <form className='login-form'>
                <div className='login-providersLogin'>
                    <button type="button" className="btn btn-outline-light btn-lg" onClick={handleGoogleLogin}><BsGoogle /> Sign in with Google</button>
                    <button type="button" className="btn btn-outline-light btn-lg" onClick={handleGithubLogin}><BsGithub /> Sign in with GitHub</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
