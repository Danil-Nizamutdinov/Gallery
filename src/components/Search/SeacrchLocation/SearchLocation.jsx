import React, { useState} from 'react';

function SearchLocation(props) {
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
                    props.locationToggler ? <span className='clear' onClick={props.setLocationToggleFalse}></span> : ''
                }
                {props.location.length > props.maxSymbols ? props.location.slice(0,props.maxSymbols)+'...' : props.location}
            </button>

            <ul className={`search_content_dropdown ${addClassDarkDropDown} ${toggleClassCheckDropdown}`}>

                {
                    props.locations.map(l => {
                        return <li key={l.id} onClick={() => props.setLocation(l.location, l.id)} 
                        className={`search_content_dropdown_item ${addClassDarkDropDownItem}`}>{l.location.length > props.maxSymbols ? l.location.slice(0,props.maxSymbols)+'...' : l.location}</li> 
                    })
                }

            </ul>

        </div>
    );
    
}

export default SearchLocation