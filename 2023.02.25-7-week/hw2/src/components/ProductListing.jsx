import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'

import { setProducts } from '../redux/actions/productActions'
import { Card } from './Card'

export const ProductListing = () => {
	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const response = await axios.get('https://fakestoreapi.com/products')
		.catch(error => {
			console.log('Error on fetching resourse ', error)
		})
		dispatch(setProducts(response.data))
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	const products = useSelector(state => state.allProducts.products);
	// console.log("Products: ", products)

	return (
		<div className='container mx-auto pt-20 mb-10 w-full min-h-screen flex justify-center items-start flex-wrap gap-5 '>
			{products.map(product => {
				return <Card 
					imgUrl={product.image} 
					name={product.title} 
					rate={product.rating.rate}
					price={product.price}
					id={product.id}
					key={product.id}
				/>
			})}

		</div>
	)
}
