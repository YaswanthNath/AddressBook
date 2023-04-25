import React, { useEffect, useState, useRef } from 'react'
import { Buttons, Container, HeaderHome, ListCon, MainDiv, Nav, NavList, NavItem, NavItemLink, NoDataDiv, NoDataText, NoSearchItem, SearchBar, SearchHeader, Table, TableBody, TableDitems, TableH, ViewAddressButton } from '../AddressBookList/AddressListStyle'
import { useNavigate } from 'react-router-dom';
import AddressFormPage from '../AddressBookForm/AddressForm';
import Viewaddress from '../ViewAddress/ViewAddress';
import NumberCarousel from '../../Components/Pagination/Pagination';
function AddressList({ Click, View }: any) {
    const [AddressData, setAddressData] = useState<any>([]);
    const [ClickCreate, setClickCreate] = useState(Click);
    const [ClickEdit, setClickEdit] = useState(false);
    const [index, setIndex] = useState(null);
    const [AddressToEdit, setAddressToEdit] = useState();
    const [selectedData, SetSelectedData] = useState();
    const [viewAddress, setViewAddress] = useState(false);
    const [homeClick, setHomeClick] = useState(Click? false : true);
    const [viewClick, setViewClick] = useState(false);
    const [SearchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const formRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (formRef.current !== null) {
            formRef.current.scrollIntoView({ block: "start" });
        }
    }, []);
    useEffect(() => {
        setClickCreate(Click)
    }, [Click]);
    useEffect(() => {
        setViewClick(true)
    }, [View])
    const handleSubmit = (data: any) => {
        if (index == null) {
            setAddressData([...AddressData, data])
        }
        else {
            AddressData[index] = data
        }
        setIndex(null);
        setClickEdit(false);
        setHomeClick(true);
        setClickCreate(false);
        navigate('/address-book')
    }
    const handleEdit = (index: any) => {
        const selectedAddress = AddressData[index];
        setClickEdit(true);
        setIndex(index);
        setAddressToEdit(selectedAddress);
    }
    const handleView = (item: any) => {
        const Address = item;
        SetSelectedData(Address);
        if (viewClick) {
            setViewAddress(true);
        }
        navigate('/address-book/address-book-viewAddress');

    }
    const handleChaneView = (data: any) => {
        setViewAddress(data)
        navigate('/address-book');
    }
    const handleDelete = (index: any) => {
        setAddressData((prevData: any[]) =>
            prevData.filter((user: any, i: number) => i !== index));
    }
    const items = AddressData;
    const filteredData = items.filter((item: any) =>
        item.firstname.includes(SearchQuery)
    );
    let data = SearchQuery.length === 0 ? AddressData : filteredData;
    const numPages = Math.ceil(AddressData.length / 5);
    const startIdx = (currentPage - 1) * 5;
    const endIdx = startIdx + 5;
    const displayedData = data.slice(startIdx, endIdx);
    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };
    return (
        <MainDiv >
            <HeaderHome ref={formRef}>
                <Nav >
                    <NavList>
                        <NavItem>
                            <NavItemLink to="/address-book">Home</NavItemLink>
                            <NavItemLink to="/address-book">/ AddressBook</NavItemLink>
                            <NavItemLink to="/address-book/address-book-create">/ Create</NavItemLink>
                            <NavItemLink to="/address-book/address-book-viewAddress">/ ViewAddress</NavItemLink>
                        </NavItem>
                    </NavList>
                </Nav>
            </HeaderHome>
            <Container>
                <ListCon>
                    {viewAddress ? <Viewaddress state={selectedData} onFormChange={handleChaneView}/> :

                        (ClickCreate ?
                            <>
                                <AddressFormPage onFormChange={handleSubmit} />
                            </>
                            :
                            <>
                                {ClickEdit ?
                                    <>
                                        <AddressFormPage onFormChange={handleSubmit} addressToEdit={AddressToEdit} />
                                    </>
                                    :
                                    <>
                                        {homeClick && (
                                            (AddressData.length <= 0) ?
                                                <NoDataDiv>
                                                    <Table>
                                                        <TableH>
                                                            <tr>
                                                                <TableDitems>Name</TableDitems>
                                                                <TableDitems>Phone Number</TableDitems>
                                                                <TableDitems>Email</TableDitems>
                                                                <TableDitems>Address</TableDitems>
                                                                <TableDitems>Action</TableDitems>
                                                            </tr>
                                                        </TableH>
                                                    </Table>
                                                    <NoDataText>No data found</NoDataText>

                                                </NoDataDiv>
                                                :
                                                <>
                                                    <SearchHeader>
                                                        <SearchBar type='text' placeholder='Search...' onChange={(e: any) => setSearchQuery(e.target.value)} />
                                                    </SearchHeader>
                                                    <Table>
                                                        <TableH>
                                                            <tr>
                                                                <TableDitems>Name</TableDitems>
                                                                <TableDitems>Phone Number</TableDitems>
                                                                <TableDitems>Email</TableDitems>
                                                                <TableDitems>Address</TableDitems>
                                                                <TableDitems>Action</TableDitems>
                                                            </tr>
                                                        </TableH>
                                                        {displayedData.map((item: any, index: number) => (
                                                            <TableBody key={index}>
                                                                <tr>
                                                                    <TableDitems><ViewAddressButton onClick={() => handleView(item)}>{item.firstname}</ViewAddressButton></TableDitems>
                                                                    <TableDitems>{item.phone.map((phoneitem: any, phoneindex: number) => (
                                                                        <span key={phoneindex}>{phoneitem.phonenumber},</span>
                                                                    ))}</TableDitems>
                                                                    <TableDitems>{item.email.map((emailitem: any, emailindex: number) => (
                                                                        <span key={emailindex}>{emailitem.email},</span>
                                                                    ))}</TableDitems>
                                                                    <TableDitems>{item.address.map((addressitem: any, addressindex: number) => (
                                                                        <span key={addressindex}>{addressitem.state},</span>
                                                                    ))}</TableDitems>
                                                                    <TableDitems>
                                                                        <Buttons onClick={() => handleEdit(index)}>Edit</Buttons>
                                                                        <Buttons onClick={() => handleDelete(index)}>Delete</Buttons>
                                                                    </TableDitems>
                                                                </tr>
                                                            </TableBody>
                                                        ))}
                                                    </Table>
                                                    <div>
                                                        {AddressData.length >= 2 && <NumberCarousel numPages={numPages} currentPage={currentPage} onPageChange={handlePageChange} />}
                                                    </div>
                                                </>
                                        )}
                                    </>
                                }
                                {SearchQuery && filteredData.length === 0 && (
                                    <>
                                        <NoSearchItem>
                                            Searched field does not exist
                                        </NoSearchItem>
                                    </>
                                )}
                            </>
                        )
                    }

                </ListCon>
            </Container>

        </MainDiv >
    )
}
export default AddressList;
