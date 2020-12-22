import React, { useState, useEffect}from 'react'
import * as  Reactbootstrap from 'react-bootstrap';
import  {NavLink} from 'react-router-dom';
const Navbar = () => {
  const [data, setMydata] = useState([]);
  const [query,  setMyquery] = useState([''])
  useEffect(() => {
    fetch('https://contactaddress.herokuapp.com/api/all_contacts').then(response => response.json())
      .then(json => setMydata(json.data)).catch(err => {
        console.log(err)
      }) 
  }, []);
  console.log(data)
  const filtering = (phone) => {
    
    return   phone.filter(phonumber => phonumber.phone.indexOf(query) > -1);
  }
  const search = () => {
    let message = 'The povided phonenumber is not valid'
    console.log(filtering(data).map(people => people.names))
    console.log(query)
    if (query.length === 10 && query !== '' && query !== null) {
      if (data !== ['']) {
        message =  filtering(data).map(people=>people.names)
      }
      else {
         message =  'There is no much found there !'
      }
    }
    document.getElementById('ouput').innerText =message
  }

  return (
      <>
         <div className='row'>
          <div className='col-12'>
             <Reactbootstrap.Navbar bg="dark" variant="dark">
    <Reactbootstrap.Navbar.Brand href="#home">Holsoft</Reactbootstrap.Navbar.Brand>
    <Reactbootstrap.Nav className="mr-auto">
      <NavLink  to='/'>Home</NavLink>
      <NavLink  to= '../loginform'>Login</NavLink>
      <NavLink  to='../postform'>Recording</NavLink>
    </Reactbootstrap.Nav>
    <Reactbootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={event=> setMyquery(event.target.value )}/>
     <Reactbootstrap.Button value={query} onClick={ search} variant="outline-info">Search</Reactbootstrap.Button>
    
  </Reactbootstrap.Navbar>
           </div>
        </div>
        <div className=' justify-content-between'>
          <center>
          <h1 id='ouput'> </h1>
          </center>
        </div>
      </>
    )
}

export default Navbar
