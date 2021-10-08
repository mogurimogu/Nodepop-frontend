export function productView(producto) {
    return `<article class="col">
    <a href="/producto?id=${producto.id}" class="text-decoration-none">
        <div class="card">
            <img src="${producto.photos}" class="card-img-top" alt="${producto.title}">
            <div class="card-body text-center p-2">
                <h1 class="card-title fs-5 py-1">${producto.title}</h1>
                <div class="btn btn-primary w-100">${producto.price}€</div>
            </div>
        </div>
    </a>
</article>`
}

export function loaderView() {
    return `<div class="m-5"><div class="lds-ripple"><div></div><div></div></div></div>`
}

export function errorView(error) {
    return `<div class="text-danger">${error.message}</div>`
}

export function successView() {
    return `<div class="text-success">Todo ha ido bien!</div>`
}

