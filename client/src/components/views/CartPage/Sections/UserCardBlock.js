import React from 'react'

function UserCardBlock(props) {



    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `/${image}`
        }
    }
    function multiplyNumbers(x,y){
        return x*y;
    }
        function addNumbers(x,y){
        return x+y;
    }
        function decereaseNumbers(x,y){
        return x-y;
    }

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
            <td>{product.title} QTY </td>                                 
            <td>
                    <img style={{ width: '70px' }} alt="product" 
                    src={renderCartImage(product.images)} />
                </td> 
                <td>{product.quantity} QTY 
                    <button onClick={()=> product.quantity=product.quantity-1}> - </button> 
                    <button onClick={()=> product.quantity=product.quantity+1)}> + </button> 
                    </td>
                <td>$ {multiplyNumbers(product.price, product.quantity)}</td>
                <td><button 
                onClick={()=> props.removeItem(product._id)}
                >Remove </button> </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
         <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Product Quantity</th>
                        <th>Product Price</th>
                        <th>Remove from Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
