import React from 'react'
import './paymentsuccess.css'
import { Link, useParams } from 'react-router-dom'


const PaymentSuccess = ({user}) => {
    const params = useParams()
    return <div className='payment-success-page'>
        {user && <div className='success-message'>
            <h2>payment Successfull</h2>
            <p>Your Course subscription has been activated</p>
            <p>Referance no - {params.id}</p>
            <Link to={`/${user._id}/dashboard`} className='common-btn'>
            Go to Dashboard
            </Link>
            </div>}
    </div>
  return (
    <div>PaymentSuccess</div>
  )
}

export default PaymentSuccess