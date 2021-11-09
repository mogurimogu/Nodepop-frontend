export default {
  request: async function (method, url, body) {
    const requestConfig = {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    };
    if (this.isAuthenticed()) {
      const token = localStorage.getItem("AUTH_TOKEN");
      // requestConfig.headers.Authorization = `Bearer ${token}`
      requestConfig.headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(url, requestConfig);
    try {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw error;
    }
  },

  get: async function (url, errorMessage) {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(errorMessage);
    }
  },

  post: async function (url, body) {
    return await this.request("POST", url, body);
  },

  put: async function (url, body) {
    return await this.request("PUT", url, body);
  },

  delete: async function (url, body = {}) {
    return await this.request("DELETE", url, body);
  },

  parseProduct: function (product) {
    const antiInject = (element) => {
      return element
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    };
    product.date = product.date || product.updatedAt;
    product.title = antiInject(product.title);
    product.tags = product.tags.map((tag) => antiInject(tag));
    product.description = antiInject(product.description);
    product.author = product.user.username;
    product.canBeDeleted = product.userId === this.getAuthUserId();
    return product;
  },

  getProducts: async function () {
    const url = "http://localhost:8000/api/anuncios?_expand=user";
    const response = await fetch(url);
    if (response.ok) {
      const productos = await response.json();
      return productos.map((producto) => this.parseProduct(producto));
    } else {
      throw new Error("Error al obtener los Productos");
    }
  },

  getProductsDetail: async function (productID) {
    const url = `http://localhost:8000/api/anuncios/${productID}?_expand=user`;
    const response = await fetch(url);
    if (response.ok) {
      const producto = await response.json();
      return this.parseProduct(producto);
    } else {
      if (response.status === 404) {
        return null;
      } else {
        throw new Error("Error al cargar el producto");
      }
    }
  },

  registerUser: async function (username, password) {
    const url = "http://localhost:8000/auth/register";
    return await this.post(url, { username, password });
  },

  login: async function (username, password) {
    const url = "http://localhost:8000/auth/login";
    const data = await this.post(url, { username, password });
    const token = data.accessToken;
    localStorage.setItem("AUTH_TOKEN", token);
  },

  createProduct: async function (productData) {
    const url = "http://localhost:8000/api/anuncios";
    return this.post(url, productData);
  },

  isAuthenticed: function () {
    return localStorage.getItem("AUTH_TOKEN") !== null;
  },

  getAuthUserId: function () {
    const token = localStorage.getItem("AUTH_TOKEN");
    if (token === null) {
      return null;
    }
    const b64Parts = token.split(".");
    if (b64Parts.length !== 3) {
      return null;
    }
    const b64Data = b64Parts[1];
    try {
      const userJSON = atob(b64Data);
      const user = JSON.parse(userJSON);
      return user.userId;
    } catch (error) {
      console.error("Error while decoding JWT Token", error);
      return null;
    }
  },

  deleteProduct: async function (productID) {
    const url = `http://localhost:8000/api/anuncios/${productID}`;
    return await this.delete(url);
  },
};
