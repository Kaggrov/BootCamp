getProducts = async (id) => {

    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${id*10}`);
    const prod = await response.json();
    const list  = await prod.products;

    list.forEach(e => {
        document.getElementById("products").innerHTML+=`<div>
            <p>${e.price}</p>
            <p>${e.title}</p>
            <p>${e.description}</p>
            <br>
        </div>`
    });
  
  
  };

  getProducts(1)
  