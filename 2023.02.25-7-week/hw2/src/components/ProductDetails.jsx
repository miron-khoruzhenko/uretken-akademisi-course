import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import {selectedProduct, removeSelectedProduct} from '../redux/actions/productActions'

export const ProductDetails = () => {


	const product = useSelector(state => state.product)
	const {productId} = useParams();
	const dispatch = useDispatch()
	
	console.log(productId)

	const {id, title, price, description, category, image, rating} = product
	console.log(id, title, price, description, category, image, rating)
	console.log(product)

	const fetchProductDetail = async () => {
		const response = await axios
		.get(`https://fakestoreapi.com/products/${productId}`)
		.catch(error => {
			console.log('Error in detail: ', error)
		})

		dispatch(selectedProduct(response.data))
		
	}

	useEffect(() => {
		if(productId && productId !== "")	fetchProductDetail()
		return () => {
			dispatch(removeSelectedProduct())
		}
	}, [productId])


	return (
		<div className="h-screen pt-24 pb-7 flex justify-center items-center">
			{Object.keys(product).length === 0 ? 'Loading	' : 
			<div className="container bg-zinc-100 dark:bg-zinc-800 w-3/4 h-full m-9 p-8 flex md:flex-nowrap sm:flex-wrap rounded-lg shadow-2xl shadow-zinc-800">
				<div className="h-full w-1/3 mr-5 min-w-[200px] flex justify-center items-center">
					<img src={image} alt="" className="border-4  border-zinc-500" />
				</div>
				<div className="w-2/3 min-w-[]">
					<h3 className="text-zinc-900 dark:text-zinc-200 uppercase text-center font-semibold text-2xl mb-8">{title}</h3>
					<ul className='uppercase text-zinc-800 dark:text-white text-sm mx-4 font-light'>
						<li className="mb-2">Rate: <span className='bg-white text-black rounded inline-block px-2 text-lg'>{product.rating.rate}</span></li>
						<li className="">Count: <span className='text-lg font-normal'>{product.rating.count}</span></li>
						<li className="">Category: <span className='font-normal text-lg'>{category}</span></li>
					</ul>
					<p className='my-8'>{description}</p>
					<button className='
						transition-all duration-300 translate-y-1/2
						text-zinc-800 font-semibold mt-2 py-2 px-5 rounded 
						inline-block dark:bg-white bg-yellow-400/50
						delay-[500ms]'>Buy Now</button>
				</div>
			</div> }
		</div>
		)
}
