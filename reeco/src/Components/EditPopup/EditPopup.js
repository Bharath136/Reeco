import React from 'react';
import { IoClose } from 'react-icons/io5';

import avacado from '../../images/Avocado Hass.jpg';

import { FaMinus, FaPlus } from "react-icons/fa6";
import {
    CloseButton,
    PopupImage,
    ActionsContainer,
    PopupInput,
    PopupActions,
    MinusButton,
    PlusButton,
    ReasonList,
    ReasonItem,
    CancelButton,
    SendButton,
} from './StyledComponent';

const EditPopup = ({
    closePopup,
    selectedProduct,
    editedProduct,
    handleInputChange,
    handleEdit,
    onSelectStatus,
    reasons,
}) => {
    return (
        <div>
            <CloseButton onClick={closePopup}>
                <IoClose size={20} />
            </CloseButton>

            <h5>{selectedProduct.product_name}</h5>
            <h5 style={{ color: 'grey' }}>American Roland</h5>

            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                    <PopupImage src={avacado} alt='avocado' />
                    <ActionsContainer>
                        <p>Price ($)</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </ActionsContainer>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <PopupInput name='price' value={editedProduct.price} onChange={handleInputChange} />
                    <div className='d-flex align-items-center' style={{ gap: '10px' }}>
                        <MinusButton>
                            <FaMinus size={20} />
                        </MinusButton>
                        <PopupInput name='quantity' value={editedProduct.quantity} onChange={handleInputChange} />
                        <PlusButton>
                            <FaPlus size={20} />
                        </PlusButton>
                    </div>
                    <p>${editedProduct.price * editedProduct.quantity}</p>
                </div>
            </div>

            <h6>
                Choose reason <span style={{ color: 'grey' }}>(Optional)</span>
            </h6>
            <ReasonList>
                {reasons.map((reason) => (
                    <ReasonItem key={reason.id} onClick={() => onSelectStatus(reason.value)}>
                        {reason.value}
                    </ReasonItem>
                ))}
            </ReasonList>

            <PopupActions>
                <CancelButton onClick={closePopup}>Cancel</CancelButton>
                <SendButton onClick={handleEdit}>Send</SendButton>
            </PopupActions>
        </div>
    );
};

export default EditPopup;
