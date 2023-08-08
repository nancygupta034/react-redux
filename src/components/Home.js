import React from 'react';

function Home() {
    return (
        <div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.KwavIwuhhIw20dSqHQA4pAHaHa&pid=Api&P=0&h=180" />
                </div>
                <div className='text-wrapper item'>
                    <span> I-Phone </span>
                    <span>Price: $1000</span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add To Cart</button>
                </div>
            </div>
           
        </div>
    )
}

export default Home;