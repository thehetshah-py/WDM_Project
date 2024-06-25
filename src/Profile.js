import React from 'react';
import './Profile.css';
import { FaUserCircle } from 'react-icons/fa'; // Importing Font Awesome user circle icon

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="image-container">
                <FaUserCircle size={150} className="profile-icon" />  {/* Using the icon with size 150 */}
            </div>
            <div className="info-container">
                <p className="info"><span className="label">Username:</span> John Doe</p>
                <p className="info"><span className="label">Email:</span> johndoe@gmail.com</p>
                <p className="info"><span className="label">Password:</span> ********</p>
                <p className="info"> <span className="last-login">You last logged in on June 25, 2024 at 3:45 PM.</span></p>
                <button className="change-password-btn">Change Password</button>
            </div>
        </div>
    );
};

export default Profile;
