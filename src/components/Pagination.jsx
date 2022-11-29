import { useState } from 'react';
import '../assets/styles/components/pagination.scss'

const Pagination = () => { 
    const [currentPage, setCurrentPage] = useState(1);
    let maxPages = 10;
    let items = [];
    let leftSide = currentPage - 2;

    if(leftSide <= 0 ) leftSide=1;

    let rightSide = currentPage + 2;

    if(rightSide > maxPages) rightSide = maxPages;

    for (let number = leftSide ; number <= rightSide; number++) {
      items.push(
        <div key={number} className={(number === currentPage ? 'round-effect active' : 'round-effect')} onClick={()=>{ setCurrentPage(number)}}>
          {number}
        </div>,
      );
    }

  const nextPage = () => {
    if(currentPage < maxPages){
      setCurrentPage(currentPage + 1)
    }
  }
  
  const prevPage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }
    return (
    <div className="pagination">
        <div className="pagination__box">
          <div className="pagination__box__left" onClick={prevPage}>&#129152; Previous </div>
          <div className="pagination__items">
            {items}
          </div>
          <div className="pagination__box__right" onClick={nextPage}> Next 	
	
          &#129154;</div>
        </div>
      </div>
    );
  }

  export default Pagination;
  