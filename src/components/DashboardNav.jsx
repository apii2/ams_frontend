import Styles from './DashboardNav.module.css'
import {Link, useLocation} from "react-router-dom";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
const DashboardNav = () => {
    const auth = useAuthUser();

    const location = useLocation();
    return (
        <nav className={`${Styles.dashboard_nav}`}>
            <ul className={`nav flex-column gap-3 mt-5`}>
                {/* This is the student dashbord bar*/}
                {auth.role === 'student'
                    &&
                    <>
                        <li className="nav-item">
                            <Link className={`nav-link py-3 w-100 text-secondary 
                    ${location.pathname === '/student/' || location.pathname === '/student'?Styles.active:''}
                    `}  to="/student/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link py-3 w-100 text-secondary
                    ${location.pathname === '/student/classes' || location.pathname === '/student/classes/'?Styles.active:''}
                    `} to="/student/classes">Classes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link py-3 w-100 text-secondary
                    ${location.pathname === '/student/assignments/' || location.pathname === '/student/assignments'?Styles.active:''}
                    `} to="/student/assignments">Assignments</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link py-3 w-100 text-secondary
                    ${location.pathname === '/student/assignments/' || location.pathname === '/student/attendance'?Styles.active:''}
                    `} to="/student/assignments">Attendance</Link>
                        </li>
                    </>
                }
                {/*    This is the start of the teacher navigation bar*/}
                {
                    auth.role === 'teacher'
                    &&
                    <>

                    </>
                }
            {/*    This is the section of the admins dashboard */}
                {
                    auth.role === 'admin'
                    &&
                    <>
                        <li>
                        <Link className={`nav-link py-3 w-100 text-secondary
                    ${location.pathname === '/admin/users/' || location.pathname === '/student/users'?Styles.active:''}
                    `} to="/student/assignments">Users</Link>
                        </li>
                    </>
                }
            </ul>
        </nav>
    );
};

export default DashboardNav;
