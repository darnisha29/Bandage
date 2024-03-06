import React, { useState } from 'react';
import './Popup.css';

interface PopupProps {
    trigger: React.ReactNode;
    modal?: boolean;
}

const Popup: React.FC<PopupProps> = ({ trigger, modal }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            {modal && isOpen ? (
                <div className='modal'>
                    <div className='content'>
                        <h3>Thanks for Your Purchases!</h3>
                        
                    </div>
                    <div>
                        <button onClick={closeModal}>
                            Close 
                        </button>
                    </div>
                </div>
            ) : null}

            <div onClick={openModal}>{trigger}</div>
        </>
    );
};

export default Popup;
