import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
const Card = (prop) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  const addProductsToCart = (product) => {
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, product])
  }
  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(prop.data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{prop.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={prop.data.images[0]} alt={prop.data.title} />
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
            onClick={() => addProductsToCart(prop.data)}>
          <svg 
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{prop.data.title}</span>
        <span className='text-lg font-medium'>${prop.data.price}</span>
      </p>
    </div>
  )
}

export { Card }