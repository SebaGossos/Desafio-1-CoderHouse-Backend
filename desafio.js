class ProductManager {
    #_products
    constructor(){
        this.#_products = []
    }

    #isCodeInProducts( code ) {
        if ( this.#_products.length === 0 ) return false 
        return this.#_products.some( prod => prod.code === code )
    }
    #generateId() {
        const quantityProd = this.#_products.length 
        return quantityProd === 0 ? 1 : quantityProd + 1
    }
    addProduct( title, description, price, thumbnail, code, stock ){

        //?? puse el operador de nulish, por que si le paso un cero 0 como argumento me salta un error!
        if ( !title || !description || !price || !thumbnail || !code || !stock ) 
            throw 'All fields required!'

        const isCodeAdded = this.#isCodeInProducts( code )
        if ( isCodeAdded ) throw `Code: ${ code } is the same that a product added!`

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        product.id = this.#generateId()

        this.#_products.push( product )
    }

    getProducts(){
        return this.#_products
    }

    getProductById( id ){
        const product = this.#_products.find(p => p.id === id)
        if ( !product ) throw `Product with ID: ${ id } not found!`
        return product 
    }
}