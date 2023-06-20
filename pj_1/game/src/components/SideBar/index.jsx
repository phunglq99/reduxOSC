import React from 'react';
import Logo from '../../assets/images/Logo.png';
import Explore from '../../assets/images/Explore.png';
import Group2 from '../../assets/images/Group2.png';
import Group3 from '../../assets/images/Group3.png';
import Group_Logo from '../../assets/images/Group_Logo.png';
import Icon_Add from '../../assets/images/Icon_Add.png';
import Frame_7 from '../../assets/images/Frame_7.png';
import Profile from '../../assets/images/Profile.png';

const SideBar = () => {
    return (
        <div className="sidebar vh-100">
            <div className="row side-left">
                <div className="col-3 side-menu_logo">
                    <a href="#"><img src={Logo} alt="" /></a>
                    <ul className="side-logo_menu">
                        <li>
                            <a href="#"><img src={Group_Logo} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={Group2} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={Group3} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={Explore} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={Icon_Add} alt="" /></a>
                        </li>
                    </ul>
                </div>
                <div className="col-9 side-menu_title">
                    <h4 className="text-light">Explore</h4>
                    <ul className="side-menu_list">
                        <li className="side-menu_item">
                            <i className="bi bi-house-door-fill"></i>
                            <a href="#">Home</a>
                        </li>
                        <li className="side-menu_item">
                            <i className="bi bi-music-note"></i>
                            <a href="#">Music</a>
                        </li>
                        <li className="side-menu_item">
                            <i class="bi bi-controller"></i>
                            <a href="#">Gaming</a>
                        </li>
                        <li className="side-menu_item">
                            <i className="bi bi-briefcase-fill"></i>
                            <a href="#">Education</a>
                        </li>
                        <li className="side-menu_item">
                            <i className="bi bi-compass-fill"></i>
                            <a href="#">Science & Tech</a>
                        </li>
                        <li className="side-menu_item">
                            <i className="bi bi-buildings-fill"></i>
                            <a href="#">Entertainment</a>
                        </li>
                        <li className="side-menu_item">
                            <i className="bi bi-bank2"></i>
                            <a href="#">Student Hubs</a>
                        </li>
                    </ul>
                    <div className="side-music">
                        <img src={Frame_7} alt="" />
                    </div>
                    <div className="side-profile d-flex align-items-center justify-content-between px-2">
                        <div className="d-flex align-items-center gap-2">
                            <img src={Profile} alt="" />
                            <h5 className="text-light fw-normal">sophiefortune</h5>
                        </div>
                        <div className="side-profile_mic d-flex align-items-center gap-3">
                            <div className="test">
                                <div className="customize-pentagon">
                                    <div className="customize-pentagon_outline"></div>
                                    <i class="bi bi-mic-fill"></i>
                                </div>
                            </div>
                            {/* <i class="bi bi-mic-mute-fill"></i> */}
                            <i class="bi bi-person-add"></i>
                            <i class="bi bi-volume-up"></i>
                        </div>
                        

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SideBar