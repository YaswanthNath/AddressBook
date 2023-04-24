import {   NumberButton, PaginationButton, PaginationIcon} from "./PaginationStyle";
import NavigateLeft from "../../Assests/Navigate-left.svg";
import NavigateRight from "../../Assests/Navigate-right.svg";
const NumberCarousel = ({ numPages, currentPage, onPageChange }: any) => {    
    const nextNumber = () => { onPageChange(currentPage === numPages ? 1 : currentPage + 1); };    
    const prevNumber = () => { onPageChange(currentPage === 1 ? numPages : currentPage - 1); };
    return (
        <div>
            <NumberButton>
                
                <PaginationButton onClick={prevNumber}>
                    Previous
                </PaginationButton>
                <PaginationButton onClick={nextNumber}>
                    Next
                </PaginationButton>
            </NumberButton>
        </div>
    );
};




export default NumberCarousel;