// MissingProductPopup.js
import React from 'react';
import { IoClose } from 'react-icons/io5';
import { CancelButton, SendButton } from './StyledComponent';

const MissingProductPopup = ({ closePopup, onNotUrgent, onYes, selectedProduct }) => {
    return (
        <div>
            <IoClose size={20} onClick={closePopup} />
            <h4>Missing Product</h4>
            <p>Is 'Chicken Breast Fillets, Bonless...' Urgent?</p>
            <div>
                <CancelButton onClick={() => onNotUrgent(selectedProduct.product_id)}>No</CancelButton>
                <SendButton onClick={() => onYes(selectedProduct.product_id)}>Yes</SendButton>
            </div>
        </div>
    );
};

export default MissingProductPopup;
