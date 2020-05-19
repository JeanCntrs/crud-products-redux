import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../actions/productsAction';
import Product from './Product';

const Products = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.products.products);
    console.log(products)
    const error = useSelector(state => state.products.error);
    const loading = useSelector(state => state.products.loading);

    useEffect(() => {
        (() => {
            dispatch(getProductsAction());
        })()
    }, []);

    return (
        <>
            <h2 className="text-center my-5">Listado de Productos</h2>
            {error && <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p>}
            {loading && <p className="text-center">Cargando...</p>}
            <table className="table table-striped">
                <thead className="table-info">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length === 0
                            ? <tr><td colSpan="3">No hay Productos</td></tr>
                            : products.map(element => <Product key={element.id} product={element} />)
                    }
                </tbody>
            </table>
        </>
    );

}

export default Products;