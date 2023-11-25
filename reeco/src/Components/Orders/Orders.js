import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { GoChevronRight } from "react-icons/go";
import { CgSearch } from "react-icons/cg";
import { LuPrinter } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import apple from '../../images/Apple Green Smith.png'
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
const domain = 'https://movie-ticket-pntf.onrender.com'

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
        status: selectedProduct.status,
    });

    const orderDetailBoxes = [
        { id: 1, label: 'Supplier', value: 'East Coast fruits & vegetables' },
        { id: 2, label: 'Supplier', value: 'East Coast fruits & vegetables' },
        { id: 3, label: 'Supplier', value: 'East Coast fruits & vegetables' },
        { id: 4, label: 'Supplier', value: 'East Coast fruits & vegetables' },
        { id: 5, label: 'Supplier', value: 'East Coast fruits & vegetables' },
        { id: 6, label: 'Supplier', value: 'East Coast fruits & vegetables' },
    ];


    // Function to add product with default values
    const onAddItem = async () => {
        try {
            await axios.post(`${domain}/products`, {
                image_url: apple,
                product_name: "Chicken Breast Fillets, Boneless marinated 6 Ounce Raw, Invivid",
                brand: "Hormel Black Label",
                price: "65",
                quantity: 1,
                status: ''
            })
            fetchProducts()
        } catch (error) {
            console.log(error)
        }
    }

    // Function to fetch products from the server
    const fetchProducts = async () => {
       
        try {
            const response = await axios.get(`${domain}/products`);
            if(response.status === 200){
               
            }
            // Assuming response.data is an array of products with a property '_id'
            // const sortedData = response.data.sort((a, b) => a._id - b._id);

            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };


    // useEffect hook to fetch products on component mount
    useEffect(() => {
        
        fetchProducts();
    }, []);

    // Function to open the edit popup and initialize the state
    const openPopup = (product) => {
        setEditedProduct({ price: product.price, quantity: product.quantity });
        setIsMissingProduct(false);
        setSelectedProduct(product);
        setIsPopupOpen(true);
    };

    // Function to close the popup
    const closePopup = () => {
        setIsPopupOpen(false);
    };

    // Function to approve an item
    const onApproveItem = async (product) => {
        // console.log(selectedProduct)
        try {
            await axios.put(`${domain}/products/${product._id}`, {...product, status: "Approved" });
            fetchProducts();
        } catch (error) {
            console.error('Error approving item:', error);
        }
    };

    // Function to handle missing item
    const onMissingItem = async (product) => {
        setSelectedProduct(product);
        setIsPopupOpen(true);
        setIsMissingProduct(true);
    };

    // Function to mark an item as missing urgent
    const onYes = async (id) => {
        try {
            await axios.put(`${domain}/products/${id}`, { ...selectedProduct, status: "Missing-Urgent" });
            fetchProducts();
            closePopup();
        } catch (error) {
            console.error('Error marking item as missing urgent:', error);
        }
    };

    // Function to mark an item as missing (not urgent)
    const onNotUrgent = async (id) => {
        try {
            await axios.put(`${domain}/products/${id}`, { ...selectedProduct, status: "Missing" });
            fetchProducts();
            closePopup();
        } catch (error) {
            console.error('Error marking item as missing:', error);
        }
    };

    // Function to handle the edit of a product
    const handleEdit = async () => {
        console.log(status)
        try {
            await axios.put(`${domain}/products/${selectedProduct._id}`, {...editedProduct, status });
            closePopup();
            fetchProducts();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // Function to handle input change while updating price or quantity
    const handleInputChange = (e) => {
        // Determine the status based on changes in price and quantity
        if (selectedProduct.quantity !== editedProduct.quantity && selectedProduct.price !== editedProduct.price) {
            setStatus("Price & Quantity updated");

        } else if (selectedProduct.price !== editedProduct.price) {
            setStatus("Price updated");

        } else if (selectedProduct.quantity !== editedProduct.quantity) {
            setStatus("Quantity updated");

        }

        // Update the edited product state
        const { name, value } = e.target;
        setEditedProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Function to handle Reason selection
    const onSelectReason = (selectedReson) => {
        console.log(selectedReson)
    };

    // Array of reasons for missing items
    const reasons = [
        { id: 1, value: 'Missing product' },
        { id: 2, value: 'Quantity is not the same' },
        { id: 3, value: 'Price is not the same' },
        { id: 4, value: 'Other' },
    ];

    // Function to handle search term change
    const onChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    };


    const onIncreaseQuantity = () => {
        setStatus("Quantity updated");
        setEditedProduct((prevProduct) => {
            // Assuming editedProduct is an object and quantity is a number
            return {
                ...prevProduct,
                quantity: prevProduct.quantity + 1,
            };
        });
    };

    const onDecreaseQuantity = () => {
        setStatus("Quantity updated");
        setEditedProduct((prevProduct) => {
            // Assuming editedProduct is an object and quantity is a number
            if (prevProduct.quantity > 1) {
                return {
                    ...prevProduct,
                    quantity: prevProduct.quantity - 1,
                };
            } else {
                // Prevent quantity from going below 1
                return prevProduct;
            }
        });
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
                        <Container className='d-flex align-items-center' style={{ gap: "40px" }}>
                            <BackButton onClick={onAddItem}>Add item</BackButton>
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
                                    <TableRow key={product._id}>
                                        <TableData><StyledImage src={product.image_url} alt='fruit' /></TableData>
                                        <TableData style={{ width: '280px' }}>{product.product_name}</TableData>
                                        <TableData>{product.brand}</TableData>
                                        <TableData>${product.price}</TableData>
                                        <TableData>{product.quantity}</TableData>
                                        <TableData>${product.quantity * product.price}</TableData>
                                        <TableData>{product.status !== "" && <div className='d-flex align-items-center justify-content-center'><StatusButton style={{
                                            borderRadius: '20px', color: 'white', backgroundColor: product.status === 'Missing-Urgent'
                                                ? 'red'
                                                : product.status === 'Missing'
                                                    ? `var(--orange)`
                                                    : `var(--light-green)`
                                                    
                                        }}>{product.status}</StatusButton></div>}</TableData>
                                        <TableData>
                                            <StatusContainer>
                                                <FaCheck style={{
                                                    color: product.status === 'Missing-Urgent'
                                                        ? ''
                                                        : product.status === 'Missing'
                                                            ? ``
                                                            : product.status === null || product.status === '' ? ''
                                                                : `var(--light-green)`, cursor: 'pointer'
                                                }} onClick={() => onApproveItem(product)} size={20} />
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
                                onSelectReason={onSelectReason}
                                reasons={reasons}
                                    onIncrease={onIncreaseQuantity}
                                    onDecrease={onDecreaseQuantity}
                            />
                        )}
                    </PopupContent>
                </PopupContainer>
            )}
        </MainOrdersContainer>
    );
};

export default StyledOrders;
