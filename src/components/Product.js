import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/productsAction';
import Swal from 'sweetalert2';

const Product = ({ product }) => {

    const { name, price, id } = product;

    const dispatch = useDispatch();

    const handleClick = id => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un producto eliminado no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                dispatch(deleteProductAction(id));
            }
        });
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <Link to={`/productos/editar/${id}`} className="btn btn-warning mr-2">Editar</Link>
                <button className="btn btn-danger" type="button" onClick={() => handleClick(id)}>Eliminar</button>
            </td>
        </tr>
    );

}

export default Product;