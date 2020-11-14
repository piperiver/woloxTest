import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {getList, filter, setFavorites, sortList} from "./../../redux/listDucks"
import starInactive from './../../assets/star.svg'
import starActive from './../../assets/star_active.svg'
import sort_desc from './../../assets/sort_desc.svg'
import sort_asc from './../../assets/sort_asc.svg'
import "./listStyles.scss";

const List = () => {
    const dispatch = useDispatch();
    const list = useSelector(store => store.list)

    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const filterFor = (option, value) => {
        if(option == 'name'){
            setName(value);    
            dispatch(filter(value, type));
        }
        if(option == 'type'){
            setType(value);    
            dispatch(filter(name, value));
        }
    }

    const toggleFavorite = (id) => {
        let favorites = list.favorites;
        const positionFav = favorites.indexOf(id);

        if(positionFav > -1){
            favorites.splice(positionFav, 1);
        }else{
            favorites.push(id);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
        dispatch(setFavorites(favorites));
    }

    const star = (id) => {
        if(list.favorites.indexOf(id) > -1){
            return (<img src={starActive} className="favorite" onClick={ (e) => toggleFavorite(id) }/>)
        }else{
            return (<img src={starInactive} className="favorite" onClick={ (e) => toggleFavorite(id) }/>)
        }
    }

    const iconSort = () => {
        if(list.sort == "DESC"){
            return (<img src={sort_desc}/>)
        }else{
            return (<img src={sort_asc}/>)
        }
    }

    const sort = () => {
        dispatch(sortList());
    }

    useEffect(() => {
        const favorites = localStorage.getItem('favorites');
        if(favorites === null){
            localStorage.setItem('favorites', JSON.stringify([]));
        }else{
            dispatch(setFavorites(JSON.parse(favorites)));
        }
        dispatch(getList());
    }, []);

    return (
        <div id="list">
        <div className="contentList">
            <h1>LISTA DE TECNOLOGÍAS</h1>

            <div className="contentFilters">
                <div className="filter">
                    <div className="content-input">
                        <label>Filtrar por tecnología</label>
                        <input onChange={ (e) => filterFor('name', e.target.value) }/>
                    </div>
                </div>
                <div className="filter">
                    <div className="content-input">
                        <label>Filtrar por Tipo</label>
                        <select onChange={ (e) => filterFor('type', e.target.value) }>
                            <option value="All">All</option>
                            <option value="Back-End">Back-End</option>
                            <option value="Front-End">Front-End</option>
                            <option value="Mobile">Mobile</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='contentTable'>
                <table>
                    <thead>
                        <tr className='extra-bold'>
                            <th>Favoritos</th>
                            <th>Logo</th>
                            <th onClick={ (e) => sort() } className="sort">
                                Tecnología
                                {iconSort()}
                            </th>
                            <th>Año</th>
                            <th>Autor</th>
                            <th>Licencia</th>
                            <th>Lenguaje</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {list.filterList.map((item, index) => 
                            <tr key={`${item.author}-${item.tech}`}>
                                <td>
                                    {star(`${item.author}-${item.tech}`)}
                                </td>
                                <td>
                                    <img src={item.logo} className="logo zoom"/>
                                </td>
                                <td>{item.tech}</td>
                                <td>{item.year}</td>
                                <td>{item.author}</td>
                                <td>{item.license}</td>
                                <td>{item.language}</td>
                                <td>{item.type}</td>
                            </tr>
                        )}

                        {list.filterList.length == 0 &&
                            <tr>
                                <td colSpan="7">
                                    No se encontrarón tecnologías con los parametros de búsqueda especificados
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
                <div className="content-total">
                    Total de tecnologías encontradas: {list.filterList.length}
                </div>
            </div>
        </div>
        </div>
    );
};

export default List;
