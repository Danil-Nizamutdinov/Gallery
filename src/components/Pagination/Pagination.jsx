import React from "react";

function Pagination(props) {

  let l = '<'
  let r = '>'

  let addClassDarkPage = props.styleToggle ? 'pagination_content_button--dark' : '';
  let addClassDarkPageActive = props.styleToggle ? 'pagination_content_button--active--dark' : 'pagination_content_button--active';

  let classNamePagination = `pagination_content_button ${addClassDarkPage}`

  return (
    <footer>
      <div className="pagination_content">
        <button className={classNamePagination} onClick={() => props.previousPageSliderX2(props.pages)} disabled={props.toggleButtonPrevious}>{l + l}</button>
        <button className={classNamePagination} onClick={() => props.previousPageSlider(props.pages)} disabled={props.toggleButtonPrevious}>{l}</button>
          {
            props.pages.map(n => {
              return <button key={n} onClick={() => props.page(n)} className={`${classNamePagination} ${props.currentPage === n ? addClassDarkPageActive: ''}`}>{n}</button>
            })
          }
        <button className={classNamePagination} onClick={() => props.nextPageSlider(props.pages)} disabled={props.toggleButtonNext}>{r}</button>
        <button className={classNamePagination} onClick={() => props.nextPageSliderX2(props.pages)} disabled={props.toggleButtonNext}>{r + r}</button>
      </div>
    </footer>
    );
    
  }
  
  export default Pagination;
  