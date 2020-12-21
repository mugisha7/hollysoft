import React, { useState, useEffect}from 'react'
import * as  Reactbootstrap  from'react-bootstrap';
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
    let searching = ' Thisis not registerd '
    if (phone.filter(phonumber => phonumber.phone.indexOf(query) > -1))
    {
      searching = phone.filter(phonumber => phonumber.phone.indexOf(query) > -1);
    } else if( phone.filter(phonumber => phonumber.phone.indexOf(query) ===0)){
        searching = searching+query
      }
    return searching;
  }
  const search = () => {
    let message = 'No data found of the provided number'
    console.log(filtering(data).map(people => people.names))
    console.log(query)
    if (query.length === 10 && query !== '' && query !== null) {
      message =  filtering(data).map(people=>people.names)
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
      <Reactbootstrap.Nav.Link href="#home">Home</Reactbootstrap.Nav.Link>
      <Reactbootstrap.Nav.Link  to= '/src/components/loginform'>Login</Reactbootstrap.Nav.Link>
      <Reactbootstrap.Nav.Link href="#">Recording</Reactbootstrap.Nav.Link>
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
