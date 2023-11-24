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
            <nav class="container navbar navbar-expand-lg " style={{color:'white',padding:'10px'}}>
                <h5 class="navbar-brand" style={{ color: 'white' }} to="#">Reeco</h5>
                <button style={{ color: 'white' }} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='d-flex justify-content-between align-items-center w-100'>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item nav-link active" style={{ color: 'white' }}>
                                Store
                            </li>
                            <li class="nav-item nav-link active" style={{ color: 'white' }}>
                                Orders
                            </li>

                            <li class="nav-item nav-link active" style={{ color: 'white' }}>
                                Analytics
                            </li>
                        </ul>
                        <div className='d-flex' style={{gap:"50px"}}>
                            <li class="nav-item nav-link active" style={{ color: 'white' }}>
                                <ShoppingCartIcon size={25} />
                            </li>

                            <li class="nav-item nav-link active" style={{ color: 'white' }}>
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
