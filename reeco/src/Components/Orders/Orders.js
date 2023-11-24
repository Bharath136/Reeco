import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GoChevronRight } from "react-icons/go";
import { CgSearch } from "react-icons/cg";
import { LuPrinter } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import avacadoImage from '../../images/Avocado Hass.jpg';
import MissingProductPopup from '../MissingPopup/MissingPopup';
import EditPopup from '../EditPopup/EditPopup';
import {
    MainOrdersContainer,
    OrdersWrapper,
    OrderIdContainer,
    OrderIdText,
    OrderIdHeading,
    ButtonsContainer,
    BackButton,
    ApproveOrderButton,
    OrderDetailBoxContainer,
    OrderBoxContainer,
    OrderBoxText,
    OrderBoxHeadingStyled,
    OrderItemsContainer,
    OrderProductsWrapper,
    OrderItemsTable,
    OrderItemsTableHead,
    StyledImage,
    StatusContainer,
    StyledEditButton,
    SearchInputContainer,
    StyledSearchInput,
    ProductsContainer,
    Container,
    TableRow,
    TableBody,
    PopupContainer,
    PopupContent,
    TableData,
    TableHead,
    StatusButton
} from './StyledComponents';

const StyledOrders = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [isMissingProduct, setIsMissingProduct] = useState(false);
    const [status, setStatus] = useState('');

    const [editedProduct, setEditedProduct] = useState({
        price: selectedProduct.price,
        quantity: selectedProduct.quantity,
        status: '',
    });

    const orderDetailBoxes = [
        { id: 1, label: 'Supplier', value: 'East Coast fruits & vegetables' },
        { id: 2, label: 'Supplier', value: 'East Coast fruits & vegetables' },
        { id: 3, label: 'Supplier', value: 'East Coast fruits & vegetables' },
        { id: 4, label: 'Supplier', value: 'East Coast fruits & vegetables' },
        { id: 5, label: 'Supplier', value: 'East Coast fruits & vegetables' },
        { id: 6, label: 'Supplier', value: 'East Coast fruits & vegetables' },
    ];

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:9000/');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleEdit = async () => {
        try {
            await axios.put(`http://localhost:9000/update/${selectedProduct.product_id}`, { ...editedProduct, status });
            closePopup();
            fetchProducts();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const openPopup = (product) => {
        setEditedProduct({ price: product.price, quantity: product.quantity });
        setIsMissingProduct(false);
        setSelectedProduct(product);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const onApproveItem = async (id) => {
        try {
            await axios.put(`http://localhost:9000/${id}`, { status: "Approved" });
            fetchProducts();
        } catch (error) {
            console.error('Error approving item:', error);
        }
    };

    const onMissingItem = async (product) => {
        setSelectedProduct(product);
        setIsPopupOpen(true);
        setIsMissingProduct(true);
    };

    const onYes = async (id) => {
        try {
            await axios.put(`http://localhost:9000/${id}`, { status: "Missing-Urgent" });
            fetchProducts();
            closePopup();
        } catch (error) {
            console.error('Error marking item as missing urgent:', error);
        }
    };

    const onNotUrgent = async (id) => {
        try {
            await axios.put(`http://localhost:9000/${id}`, { status: "Missing" });
            fetchProducts();
            closePopup();
        } catch (error) {
            console.error('Error marking item as missing:', error);
        }
    };

    const onSelectStatus = (selectedStatus) => {
        setStatus(selectedStatus);
    };

    const reasons = [
        { id: 1, value: 'Missing product' },
        { id: 2, value: 'Quantity is not the same' },
        { id: 3, value: 'Price is not the same' },
        { id: 4, value: 'Other' },
    ];

    const onChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <MainOrdersContainer>
            <OrdersWrapper>
                <Container className='container'>
                    <Container>
                        <OrderIdContainer>
                            <p>Orders</p>
                            <GoChevronRight style={{ marginBottom: '12px' }} size={18} />
                            <OrderIdText>Order 32457ABC</OrderIdText>
                        </OrderIdContainer>
                        <Container className='d-flex align-items-center justify-content-between'>
                            <OrderIdHeading>Order 32457ABC</OrderIdHeading>
                            <ButtonsContainer>
                                <BackButton>Back</BackButton>
                                <ApproveOrderButton>Approve order</ApproveOrderButton>
                            </ButtonsContainer>
                        </Container>
                    </Container>
                </Container>
            </OrdersWrapper>
            <OrderItemsContainer>
                <Container className='container'>
                    <OrderDetailBoxContainer className='row mt-4 mb-4 border'>
                        {orderDetailBoxes.map((orderBox) => (
                            <OrderBoxContainer key={orderBox.id} className='col-6 col-md-4 col-lg-3 col-xl-2'>
                                <OrderBoxText>{orderBox.label}</OrderBoxText>
                                <OrderBoxHeadingStyled>{orderBox.value}</OrderBoxHeadingStyled>
                            </OrderBoxContainer>
                        ))}
                    </OrderDetailBoxContainer>
                </Container>
                <OrderProductsWrapper className='container'>
                    <Container className='d-flex align-items-center justify-content-between'>
                        <SearchInputContainer>
                            <StyledSearchInput type='search' placeholder='Search...' onChange={onChangeSearchTerm} value={searchTerm} />
                            <CgSearch style={{ color: `var(--text)` }} size={20} />
                        </SearchInputContainer>
                        <Container className='d-flex align-items-center' style={{gap:"40px"}}>
                            <BackButton>Add item</BackButton>
                            <LuPrinter style={{ color: `var(--background)` }} size={22} />
                        </Container>
                    </Container>
                    <ProductsContainer>
                        <OrderItemsTable >
                            <OrderItemsTableHead>
                                <TableRow>
                                    <TableHead></TableHead>
                                    <TableHead>Product Name</TableHead>
                                    <TableHead>Brand</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Total</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </OrderItemsTableHead>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow key={product.product_id}>
                                        <TableData><StyledImage src={avacadoImage} alt='fruit' /></TableData>
                                        <TableData style={{ width: '280px' }}>{product.product_name}</TableData>
                                        <TableData>{product.brand}</TableData>
                                        <TableData>${product.price}</TableData>
                                        <TableData>{product.quantity}</TableData>
                                        <TableData>${product.quantity * product.price}</TableData>
                                        <TableData>{product.status !== null && <div className='d-flex align-items-center justify-content-center p-1 m-3'><StatusButton style={{
                                            borderRadius: '20px', color: 'white', backgroundColor: product.status === 'Missing-Urgent'
                                                ? 'red'
                                                : product.status === 'Missing'
                                                    ? `var(--orange)`
                                                    : `var(--light-green)`
                                        }}>{product.status}</StatusButton></div>}</TableData>
                                        <TableData>
                                            <StatusContainer>
                                                <FaCheck style={{ color: product.status === 'Approved' && `var(--light-green)`, cursor: 'pointer' }} onClick={() => onApproveItem(product.product_id)} size={20} />
                                                <IoClose
                                                    style={{
                                                        cursor: 'pointer',
                                                        color:
                                                            product.status === 'Missing-Urgent'
                                                                ? 'red'
                                                                : product.status === 'Missing'
                                                                    ? `var(--orange)`
                                                                    : ''
                                                    }}
                                                    onClick={() => onMissingItem(product)}
                                                    size={20}
                                                /> <StyledEditButton onClick={() => openPopup(product)}>Edit</StyledEditButton>
                                            </StatusContainer>
                                        </TableData>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </OrderItemsTable>
                    </ProductsContainer>
                </OrderProductsWrapper>
            </OrderItemsContainer>

            {/* Popup Components */}
            {isPopupOpen && (
                <PopupContainer>
                    <PopupContent>
                        {isMissingProduct ? (
                            <MissingProductPopup
                                closePopup={closePopup}
                                onNotUrgent={onNotUrgent}
                                onYes={onYes}
                                selectedProduct={selectedProduct}
                            />
                        ) : (
                            <EditPopup
                                closePopup={closePopup}
                                selectedProduct={selectedProduct}
                                editedProduct={editedProduct}
                                handleInputChange={handleInputChange}
                                handleEdit={handleEdit}
                                onSelectStatus={onSelectStatus}
                                reasons={reasons}
                            />
                        )}
                    </PopupContent>
                </PopupContainer>
            )}
        </MainOrdersContainer>
    );
};

export default StyledOrders;
