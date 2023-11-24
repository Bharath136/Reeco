
import styled from 'styled-components';

export const MainOrdersContainer = styled.div`
  background-color: #f9f9f9;
  width: 100%;
`;

export const OrdersWrapper = styled.div`
  box-shadow: 0px 4px 10px 4px #d4d4d4;
  background-color: #fff;
  width: 100%;
  padding: 10px;
`;

export const OrderIdContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--text);
  gap: 4px;
`;

export const OrderIdText = styled.p`
  text-decoration: underline;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const OrderIdHeading = styled.h3`
  padding: 0px;
  margin: 0px;
  font-size: 26px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
`;

export const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 6px 20px;
  border-radius: 20px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    padding: 6px 12px;
    font-size: 10px;
  }
`;

export const BackButton = styled(StyledButton)`
  border: 1px solid var(--background);
  background-color: white;
  color: var(--background);
`;

export const ApproveOrderButton = styled(StyledButton)`
  background-color: var(--background);
  color: white;
`;

export const OrderBoxHeading = styled.h3`
  font-size: 16px;
  color: var(--heading);
`;

export const OrderDetailBoxContainer = styled.div`
  border: 1px solid var(--border);
  border-radius: 10px;
  background-color: white;
  padding: 20px 0px;
`;

export const OrderBoxContainer = styled.div`
  border-right: 1px solid var(--border);
  padding-left: 30px;
`;

export const OrderBoxText = styled.p`
  color: var(--text);
  font-weight: bold;
`;

export const OrderBoxHeadingStyled = styled(OrderBoxHeading)`
  font-weight: bold;
`;

export const OrderItemsContainer = styled.div`
  height: 80vh;
  overflow: auto;
`;

export const OrderProductsWrapper = styled.div`
  background-color: white;
  border: 1px solid var(--border);
  border-radius: 10px;
`;

export const OrderItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const OrderItemsTableHead = styled.thead`
    border:1px solid var(--border);
    border-radius:8px;
  tr {
    border-top: 1px solid var(--border);
  }

  th {
    border-bottom: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    background-color: #ffffff;
  }

  th,
  td {
    border-bottom: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }
`;

export const TableRow = styled.tr`
  border-bottom:1px solid var(--border);
`

export const StyledImage = styled.img`
  width: 80px;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: var(--text);
`;

export const StyledEditButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const SearchInputContainer = styled.div`
  border: 1px solid var(--border);
  width: 300px;
  display: flex;
  align-items: center;
  border-radius: 30px;
`;

export const StyledSearchInput = styled.input`
  width: 82%;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 30px;
`;

export const ProductsContainer = styled.div`
  margin-top: 20px;
  overflow:auto;
`;


export const Container = styled.div`
`



//popup
export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const PopupContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #333;
`;

export const PopupButton = styled.button`
  padding: 10px;
  font-size: 16px;
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
    background-color:green;
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
    background-color:green;
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

export const TableBody = styled.tbody`
`

export const TableHead = styled.th`
`

export const TableData = styled.td`
`