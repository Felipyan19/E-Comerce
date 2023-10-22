import { useState, useEffect } from 'react'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
function Home() {
    const [items, setItems]=useState(null)

    useEffect(()=>{
       fetch('https://api.escuelajs.co/api/v1/products')
        .then(res=>res.json())
        .then(data=>setItems(data))
    }, [])
    return (
     
        <Layout className='bg-red-100'>
        my home
        {
            items && items.map(item=>(
                <Card key={item.id} item={item} />
            ))
        }
        </Layout>
    )
  }
  
  export default Home