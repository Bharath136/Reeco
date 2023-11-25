// MissingProductPopup.js
import React from 'react';
import { IoClose } from 'react-icons/io5';
import { CancelButton, SendButton } from './StyledComponent';

const MissingProductPopup = ({ closePopup, onNotUrgent, onYes, selectedProduct }) => {
    return (
        <div >
            <div className='d-flex w-100 justify-content-end'>
                <IoClose style={{cursor:'pointer'}} size={20} onClick={closePopup} />
            </div>
            <h4>Missing Product</h4>
            <p>Is 'Chicken Breast Fillets, Bonless...' Urgent?</p>
            <div className='d-flex w-100 justify-content-end'>
                <div>
                    <CancelButton onClick={() => onNotUrgent(selectedProduct._id)}>No</CancelButton>
                    <SendButton onClick={() => onYes(selectedProduct._id)}>Yes</SendButton>
                </div>
            </div>
        </div>
    );
};

export default MissingProductPopup;
