
import '../../style/navbar.css'
import { useContext } from 'react'

import { AppContext } from '../../contexts/AppContext'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
export default function ({ toggle }) {

    const { city, handleChange } = useContext(AppContext);
    const [showLogin, setShowLogin] = useState(false);





    function checkUser() {

        return localStorage.getItem('user');

    }


    function handleClose(e) {
        setShowLogin(false);
    }

    console.log("Toggled location function", toggle)
    return (<>

        <Modal size="sm" show={showLogin} onHide={handleClose} style={{}} aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Body>
                <Login hide={setShowLogin} />
            </Modal.Body>



        </Modal>


        <div className="container-fluid navbar">
            <div>
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} />
                </Link>
            </div>

            <div>

                <input className="inp" placeholder='Search for movies sports and events' />

            </div>

            <div className="grow">

            </div>

            <div onClick={toggle}>
                <p className='sub'>{city} <img className='img-fluid' src={`${process.env.PUBLIC_URL}/down.png`} /></p>
            </div>


            {localStorage.getItem('user') ? <div>


                <p className='sub'><FaUser /> Hi,&nbsp;{JSON.parse(localStorage.getItem('user')).displayName} &nbsp; <FaSignOutAlt onClick={() => {

                    localStorage.removeItem('user');
                    setShowLogin(false);
                }} /> </p>
            </div> : <div>
                <Button onClick={() => {
                    setShowLogin(!showLogin);

                }} className='btn-signin'>Signin</Button>

                &nbsp;
                &nbsp;
                &nbsp;
                <img src={`${process.env.PUBLIC_URL}/menu.png`} className="img-fluid" />
            </div>}

        </div>


    </>)
}