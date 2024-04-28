window.addEventListener("click", ({target}) => {

    if ( target.id === 'card-img-header' || target.id === 'img-header' || target.id === 'name-and-icon-header' || target.id === 'name-header'  || target.id === 'icon-header'  )
        return DropdownHeader(true)

    return DropdownHeader(false)

})

function DropdownHeader( state ) {

    const listDropdownHeader = document.querySelector('#list-dropdown-header')

    if (state) 
        return listDropdownHeader.setAttribute('style', 'display: flex')

    return listDropdownHeader.setAttribute('style', 'display: none')
  
}