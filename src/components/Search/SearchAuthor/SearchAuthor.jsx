import React, { useState } from 'react';

function SearchAuthor(props) {

    const [btnState, setBtnState] = useState(false)
    
    let toggleClassCheckDropdown = btnState ? 'search_content_dropdown--active': '';
    let toggleClassCheckBars = btnState ? 'search_content_bars--active': '';
    let toggleClassCheckBarsDark = btnState ? 'search_content_bars--active--dark': '';

    let dropDownToggler = () => {
      setBtnState(btnState => !btnState)
    }

    let addClassDarkBars = props.styleToggle ? 'search_content_bars--dark' : '';  
    let addClassDarkDropDown = props.styleToggle ? 'search_content_dropdown--dark' : '';
    let addClassDarkDropDownItem = props.styleToggle ? 'search_content_dropdown_item--dark' : '';
    let addClassDarkDropSelect = props.styleToggle ? 'search_content_select--dark' : '';
    let addClassDarkBarsActive = props.styleToggle ? toggleClassCheckBarsDark : '';



    return (

        <div className={`search_content_select ${addClassDarkDropSelect}`}>

            <button className={`${'search_content_bars'} ${addClassDarkBars} ${toggleClassCheckBars} ${addClassDarkBarsActive}`}  onClick={dropDownToggler} >
              {
                props.authorToggler ? <span className='clear' onClick={props.setAuthorToggleFalse}></span> : ''
              }
              {props.author.length > props.maxSymbols ? props.author.slice(0,props.maxSymbols)+'...' : props.author}
            </button>

            <ul className={`search_content_dropdown ${addClassDarkDropDown} ${toggleClassCheckDropdown}`}>

              {
                props.authors.map(a => {
                  return <li key={a.id} onClick={() => props.setAuthor(a.name, a.id)} 
                          className={`search_content_dropdown_item ${addClassDarkDropDownItem}`}>{a.name.length > props.maxSymbols ? a.name.slice(0,props.maxSymbols)+'...' : a.name}</li> 
                })
              }
              
            </ul>

        </div>
    );
    
}

export default SearchAuthor