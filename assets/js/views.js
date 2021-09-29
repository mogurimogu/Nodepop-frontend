export function product(producto) {
    return `
        <article class="col">
        <a href="/producto?id=${producto.id}" class="text-decoration-none">
            <div class="card">
                <img src="${producto.photos[0]}" class="card-img-top" alt="${producto.title}">
                <div class="card-body text-center p-2">
                    <h1 class="card-title fs-5 py-1">${producto.title}</h1>
                    <div class="btn btn-primary w-100">${producto.price}</div>
                </div>
            </div>
        </a>
    </article>
    `
}




// ejemplo de objeto de producto

// producto = {
//     id: 0,
//     title: '',
//     description: '',
//     tags: [''],
//     photos: [''],
//     price: 0
// }