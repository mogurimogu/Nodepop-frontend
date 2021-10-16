export function productView(producto) {
    return `
    <a href="/product.html?id=${producto.id}" class="text-decoration-none">
        <div class="card">
            <img src="${producto.photo || 'https://via.placeholder.com/900x600'}" class="card-img-top" alt="${producto.title}">
            <div class="card-body text-center p-2">
                <h1 class="card-title fs-5 py-1">${producto.title}</h1>
                <div class="btn btn-primary w-100">${producto.price}€</div>
            </div>
        </div>
    </a>`
}

export function loaderView() {
    return `<div class="m-5"><div class="lds-ripple"><div></div><div></div></div></div>`
}

export function errorView(error) {
    
    return `<div class="text-danger">${error.message || error}</div>`
}

export function successView(message) {
    return `<div class="text-success">${message}</div>`
}

export function productDetailView(producto) {

    function tagDivider(tags){
        const tagsFormattedArr = []
        for (const tag of tags) {
            tagsFormattedArr.push(`<a href="" class="badge btn rounded-pill bg-info text-dark">${tag}</a>`)
        }
        return tagsFormattedArr
    }


    if (producto === null) {
        return '<h1>No se encontró ningun producto con esos criterios</h1>'
    }
    let button = ''
    if (producto.canBeDeleted) {
        button = `
                <button class="btn btn-danger text-light delete">
                    Eliminar producto
                </button>`
    }
    return `
    <article class="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
        <div class="col">
            <img src="${producto.photo}" alt="" class="img-fluid">
        </div>
        <div class="col">
            <h1>
                ${producto.title}
            </h1>
                ${tagDivider(producto.tags)}
            <p class="mt-3">
                ${producto.description}
            </p>
            <button class="btn btn-primary">
                Comprar por ${producto.price}€
            </button>
            ${button}
        </div>
    </article>
    `
}
