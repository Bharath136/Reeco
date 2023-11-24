
import styled from 'styled-components';


export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #333;
`;

export const PopupImage = styled.img`
    width:160px;
`

export const ActionsContainer = styled.div`
`;

export const PopupInput = styled.input`
  margin-bottom: 10px;
  padding:6px;
  width:100px;
  border-radius:10px;
  outline:none;
  border:1px solid var(--border);
`;

export const PopupActions = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 10px;
  }
`;

export const MinusButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    height:30px;
    width:30px;
    background-color:var(--light-green);
    color:white;
    border-radius:20px;
    outline:none;
    border:none;
`

export const PlusButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    height:30px;
    width:30px;
    background-color:var(--light-green);
    color:white;
    border-radius:20px;
    outline:none;
    border:none;
`

export const ReasonList = styled.ul`
  display:flex;
  align-items:center;
  list-style-type:none;
  padding:0px;
  gap:10px;
`

export const ReasonItem = styled.button`
  border:1px solid var(--border);
  border-radius:30px;
  padding:6px 10px;
  display:flex;
  align-items:center;
  font-size:12px
`

export const SendButton = styled.button`
  background-color:var(--background);
  padding:6px 16px;
  border-radius:30px;
  outline:none;
  border:none;
  color:white;
`


export const CancelButton = styled.button`
  background-color:transparent;
  padding:6px 16px;
  border-radius:30px;
  outline:none;
  border:none;
  color:var(--background)
`



