import React from 'react';
import ReactPaginate from 'react-paginate';

export function Pagination(props) {
	return (
		<ReactPaginate
			previousLabel={'previous'}
			nextLabel={'next'}
			breakLabel={'...'}
			breakClassName={'break-me'}
			pageCount={props.pageCount}
			marginPagesDisplayed={2}
			pageRangeDisplayed={5}
			onPageChange={props.handlePageClick}
			containerClassName={'pagination'}
			subContainerClassName={'pages pagination'}
			activeClassName={'active'}
		/>
	);
}
