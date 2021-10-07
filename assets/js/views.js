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
    return `<div class="lds-ripple"><div></div><div></div></div>`
}

export function errorView(error) {
    return `<div class="h1 text-uppercase mt-5">
                UPS... Parece que algo sucedió
            </div>
            <div class="font-weight-light text-uppercase">${error.message}</div>
            <div class="text-center d-flex align-items-center justify-content-center">
                <button class="text-center btn btn-primary mt-3 d-flex align-items-center">
                    <span class="material-icons-outlined">refresh</span> Reintentar
                </button>
            </div>
            `
}

export function successView() {
    return `<div class="h1 text-uppercase mt-5">
                Todo ha salido bien!
            </div>`
}

