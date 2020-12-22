import React, {useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axions from 'axios'
const Post = () => {
    const url = 'https://contactaddress.herokuapp.com/api/all_contacts'
    const [data, setData] = useState({});
    const [names, setNames] = useState(['']);
    const [phone, setPhone] = useState(['']);
    useEffect(() => {
        setData({name:names, phone:phone})
    }, [names, phone])

    const hundlesubmit = e => {
        e.preventDefault();
        axions.post(url, data).catch(erro => {
            if (!erro) {
                console.log('well saved')
            }
            console.log('not saved '+erro)
        })
    }
    return (
        <>
          
        <div  className='row'>
            <div className='col-4'></div>
            <div className='col-4'>
                 <Form onSubmit={hundlesubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" placeholder="Names" name='names' value={names} onChange={e=>{setNames(e.target.value)}}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Phone number</Form.Label>
    <Form.Control type="text" placeholder="Phone number" name='phonenumber' value ={phone} onChange={e=>{setPhone(e.target.value)}} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
            </div>
            </>
    )
}

export default Post