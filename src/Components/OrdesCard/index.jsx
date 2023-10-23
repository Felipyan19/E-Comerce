const OrdersCard = (props) => {
    const { totalPrice, totalProducts } = props

    return (

        <div className="flex justify-between items-center mt-2 border border-black rounded-lg w-80 p-4 mb-3">
          <p className="flex justify-between">
           <div className="flex flex-col">
            <span className="font-light">01.01.2022</span>
            <span className="font-light">{totalProducts} articles</span>
           </div>
            <span className="font-medium text-2xl">${totalPrice}</span>
          </p>
        </div>

    )
}

export { OrdersCard }