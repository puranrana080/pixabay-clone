import React from 'react'

const Navbar = () => {
  return (
    <div className='container text-center my-3'>

        <button type="button" className="btn btn-outline-primary mx-3">Primary</button>
<button type="button" className="btn btn-outline-secondary mx-3">Secondary</button>
<button type="button" className="btn btn-outline-success mx-3">Success</button>
<button type="button" className="btn btn-outline-danger mx-3">Danger</button>
<button type="button" className="btn btn-outline-warning mx-3">Warning</button>
<button type="button" className="btn btn-outline-info mx-3">Info</button>
<button type="button" className="btn btn-outline-light mx-3">Light</button>
<button type="button" className="btn btn-outline-dark mx-3">Dark</button>
    </div>
  )
}

export default Navbar