import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.css';

export function Pagination(props) {
	return (
		<ReactPaginate
		previousLinkClassName = {"page-link"}
			previousLabel={'previous'}
			nextLabel={"next"}
			nextLinkClassName={'page-link'}
			breakLabel={'...'}
			breakClassName={'break-me'}
			pageLinkClassName={'page-link'}
			pageClassName={'page-item'}
			pageCount={props.pageCount}
			marginPagesDisplayed={3}
			pageRangeDisplayed={4}
			onPageChange={props.handlePageClick}
			containerClassName={'pagination d-flex justify-content-center mt-3'}
			subContainerClassName={'pagination justify-content-center'}
			activeClassName={'active'}
		/>
	);
}