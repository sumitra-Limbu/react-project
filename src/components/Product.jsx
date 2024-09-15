import React from 'react'
import { Link } from 'react-router-dom'

function Product(props) {
  const markedPrice=props.product.price
  const discount_precent=props.product.discountPercentage
  const discount=(markedPrice*discount_precent)/100
  const sellingPrice=(markedPrice-discount).toFixed(2)
  return (
    <div className='w-full bg-green-200 rounded-xl p-2 '>
            <img src={props.product.thumbnail} className='h-48 w-full object-contain' alt="" />

            <h1 className='mt-2 font-bold text-xl p-2  '>{props.product.title}</h1>
            <h2 className='pl-2 line-through text-red-500 font-bold'>{markedPrice}</h2>
            <h2 className='pl-2 font-bold text-green-500'>{sellingPrice}</h2>

            <Link to={"/products/" + props.product.id} className='mt-2 bg-blue-500 py-2 px-4 w-full cursor-pointer text-white text-center rounded-xl'>View</Link>

    </div>
  )
}

export default Product;
