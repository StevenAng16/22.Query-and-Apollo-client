import { useState } from 'react';
import './App.css';
import Keterangan from './components/Keterangan';
import {gql, useLazyQuery} from '@apollo/client';
import LoadingSvg from './components/LoadingSvg';

  const GetKeteranganlist = gql`
  query MyQuery {
    keteranganlist {
      Status
      id
      Pelajaran
    }
  }
  `;

  function KeteranganList() {
    const [getKeterangan, {data, loading, error}] = useLazyQuery(GetKeteranganlist);
    const [list, setList] = useState([]);
    const [title, setTitle] = useState('');

    if(loading) {
      <LoadingSvg/>
    }

    if(error) {
      console.log(error)
      return null;
    }
  
    const onChangeTitle = (e) => {
      if (e.target) {
        setTitle(e.target.value);
      }
    };
  
    const onSubmitList = (e) => {
      e.preventDefault();
      setList((prev) => [...prev, {checked : false, title}]);
      setTitle('');
    };
  
    const onClickItem = (idx) => {
      const newList = [...list];
      newList[idx].checked = !newList[idx].checked;
      setList(newList);
    };
  
    const onDeleteItem = (idx) => {
      const newList = list.filter((_, i) => i !== idx);
      setList(newList);
    };

    const onGetData = () => {
      getKeterangan()
      setList(data?.keteranganlist)
    }

    return (
      <>
        <div className='container'>
          <button onClick={onGetData}>Get Data</button>
          <h1 className='app-title'>Keterangan</h1>
            <ul className='keterangan-list js-keterangan-list'>
              {data?.keteranganlist.map((v, i) => (
                <Keterangan
                key={i}
                id={i}
                onClickItem={() => onClickItem(i)}
                onDeleteItem={() => onDeleteItem(i)}
                title= {v.title}
                checked={v.Status}
                />
              ))}
            </ul>
            <div className='empty-state'>
              <svg>
                <use href='#checklist-icon'></use>
              </svg>
              <h2 className='empty-state__title'>Add your first Keterangan</h2>
              <p className='empty-state__description'>
                What do you want to get done today
              </p>
            </div>
            <form className='js-form' onSubmit={onSubmitList}>
              <input onChange={onChangeTitle} 
                value={title}
                autoFocus
                type='text'
                aria-label='Enter a new keterangan item'
                placeholder='E.g. Build a web app'
                className='js-todo-input'
              />
            </form>
        </div>
      </>
    );
  };

export default KeteranganList;
