import { useDispatch } from 'react-redux';
import { logout } from './actions';
import { useAuthContext } from './authContext';
const LogoutButton = () => {
    const dispatch = useDispatch();
    const { logoutOk } = useAuthContext();
    const handleLogout = () => {
        dispatch(logout())
        logoutOk();
        
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}
export default LogoutButton;