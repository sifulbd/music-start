import React from 'react'

function Cart(props) {
    const cart = props.cart;
    console.log(cart);
    const totalCost = cart.reduce((sum, crd) => sum + crd.fee, 0)
    return (
        <div className='cartArea'>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-5 text-left">
                        <p>Start your course today! Become a Music expert.</p>
                    </div>
                    <div className="col-lg-7 text-right">
                        You Enrolled on <b>{props.cart.length}</b> Courses and Total  Cost is : <b>${totalCost}</b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
