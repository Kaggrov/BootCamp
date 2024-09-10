getProducts = async () => {
  let id = document.getElementById("productId").value;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();


  document.getElementById("p1").innerHTML = "Id : "+product.id
  document.getElementById("p2").innerHTML = "Title : "+ product.title
  document.getElementById("p3").innerHTML = "Description : "+product.description
  document.getElementById("p4").innerHTML = "Price : "+product.price
};
