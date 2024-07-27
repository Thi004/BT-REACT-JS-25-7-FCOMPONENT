import {useState} from "react";

export function ListProduct() {
    let [product, setProduct] = useState([
        {id: '1', name: 'Mì hảo hảo', price: '116.000'},
        {id: '2', name: 'Hủ tiếu', price: '240.000'},
        {id: '3', name: 'Siukay', price: '270.000'},
    ]);
    let [newProduct, setNewProduct] = useState({id: '', name: '', price: ''})
    let inp = (e) => {
        setNewProduct({...newProduct, [e.target.name]: e.target.value})
    }
    let add = () => {
        setProduct([...product, newProduct])
        setNewProduct({id: '', name: '', price: ''})
    }
    return (
        <>
            <h2 style={{color: 'green'}}>DANH SÁCH SẢN PHẨM</h2>
            <input onChange={(inp)} name={'id'} value={newProduct.id} placeholder={'id'}/>
            <input onChange={(inp)} name={'name'} value={newProduct.name} placeholder={'name'}/>
            <input onChange={(inp)} name={'price'} value={newProduct.price} placeholder={'price'}/>
            <button onClick={(add)}>Add New</button>
            <table>
                <tr>
                    <th>Mã số</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá sản phẩm</th>
                </tr>
                {product.map((e) =>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                    </tr>
                )}
            </table>

        </>
    )
}

//Sử dụng Function Component, hiện danh sách sản phẩm và thêm mới.