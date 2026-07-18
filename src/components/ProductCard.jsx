function ProductCard({name,price,image}){


return(

<div className="product-card">


<img src={image} alt={name}/>


<h3>{name}</h3>


<p>Rs. {price}</p>


<button>
Add to Cart
</button>


</div>

)

}


export default ProductCard;