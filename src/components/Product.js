export default function Product() {
    // const products = ["Laptop", "Phone", "Modem", "Computer"];
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 500
        },
        {
            id: 2,
            name: "Phone",
            price: 500
        },
        {
            id: 3,
            name: "Modem",
            price: 500
        },
        {
            id: 4,
            name: "Computer",
            price: 500
        },

    ];
    const fruits = ["Apple", "Banana", "Mango"];

    const productList = products.map((product) => <h3 key={product.id}>Name: {product.name} -- Price: ${product.price} </h3>);

    const fruitList = fruits.map((fruit, index) => <h3 key={index}> {fruit}</h3>)
    return (
        <div>
            {productList}
            -----
            {fruitList}

        </div>
    )
}