import React from 'react';
import ReactPaginate from 'react-paginate';

export function Pagination(props) {
	return (
		<ReactPaginate
			previousLinkClassName={'page-link'}
			previousLabel={'previous'}
			nextLabel={'next'}
			nextLinkClassName={'page-link'}
			breakLabel={'...'}
			breakClassName={'break-me'}
			pageLinkClassName={'page-link'}
			pageClassName={'page-item'}
			pageCount={props.pageCount}
			marginPagesDisplayed={3}
			pageRangeDisplayed={2}
			onPageChange={props.handlePageClick}
			containerClassName={'pagination pagination-sm d-flex justify-content-center mt-3'}
			subContainerClassName={'pagination justify-content-center'}
			activeClassName={'active'}
		/>
	);
}
