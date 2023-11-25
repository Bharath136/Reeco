import styled from 'styled-components';
import { TfiShoppingCart } from 'react-icons/tfi';
import { IoIosArrowDown } from 'react-icons/io';

const NavContainer = styled.div`
  background-color: var(--background);
`;

const ShoppingCartIcon = styled(TfiShoppingCart)`
  margin-right: 10px;
`;


const Navbar = () => {
    return (
        <NavContainer>
            <nav className="container navbar navbar-expand-lg " style={{color:'white',padding:'10px'}}>
                <h3  style={{ color: 'white', marginRight:'50px'}} >Reeco</h3>
                <button style={{ color: 'white' }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='d-flex justify-content-between align-items-center w-100'>
                        <ul className="navbar-nav" >
                            <li className="nav-item nav-link active" style={{ color: 'white',marginRight:'40px' }}>
                                Store
                            </li>
                            <li className="nav-item nav-link active" style={{ color: 'white', marginRight: '40px' }}>
                                Orders
                            </li>

                            <li className="nav-item nav-link active" style={{ color: 'white' }}>
                                Analytics
                            </li>
                        </ul>
                        <div className='d-flex' style={{gap:"50px"}}>
                            <li className="nav-item nav-link active" style={{ color: 'white' }}>
                                <ShoppingCartIcon size={25} />
                            </li>

                            <li className="nav-item nav-link active" style={{ color: 'white' }}>
                                Hello, James <IoIosArrowDown style={{ marginTop: '4px' }} size={16} />
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </NavContainer>
    );
};

export default Navbar;
