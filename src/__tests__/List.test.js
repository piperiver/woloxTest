/* eslint-disable no-undef */
import React from 'react'
import reducer, {
  getList,
  filter,
  setFavorites,
  sortList,
  SET_LIST,
  SET_FILTER,
  SET_FAVORITES,
  SET_SORT
} from '../redux/listDucks'
import { render, screen } from '@testing-library/react'
import List from '../components/List/List'
import { listTest } from '../__mocks__/data'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import generateStore from './../redux/store'

const initState = {
  initList: [],
  filterList: [],
  favorites: [],
  sort: 'ASC'
}

describe('COMPONENTE DE LISTADO', () => {
  describe('REDUCERS', () => {
    it('Debería devolver el estado inicial', () => {
      expect(reducer(undefined, {})).toEqual(initState)
    })

    it('Debería modificar el contenido del initList y filterList por la lista enviada', () => {
      const list = ['item 1', 'item 2']
      expect(
        reducer(initState, {
          type: SET_LIST,
          list: list
        })
      ).toEqual({
        initList: list,
        filterList: list,
        favorites: [],
        sort: 'ASC'
      })
    })

    it('Debería modificar el contenido del filterList por la lista enviada', () => {
      const list = ['Filter 1', 'Filter 2']

      expect(
        reducer(initState, {
          type: SET_FILTER,
          filter: list
        })
      ).toEqual({
        initList: [],
        filterList: list,
        favorites: [],
        sort: 'ASC'
      })
    })

    it('Debería modificar el contenido del filterList por la lista enviada', () => {
      const list = ['Filter 1', 'Filter 2']

      expect(
        reducer(initState, {
          type: SET_FILTER,
          filter: list
        })
      ).toEqual({
        initList: [],
        filterList: list,
        favorites: [],
        sort: 'ASC'
      })
    })

    it('Debería modificar el contenido del favorites por la lista enviada', () => {
      const list = ['1', '2']

      expect(
        reducer(initState, {
          type: SET_FAVORITES,
          favorites: list
        })
      ).toEqual({
        initList: [],
        filterList: [],
        favorites: list,
        sort: 'ASC'
      })
    })

    it('Debería modificar el contenido del filterList y el sort los parametros enviados', () => {
      const list = ['Filter 1', 'Filter 2']

      expect(
        reducer(initState, {
          type: SET_SORT,
          listSort: list,
          sort: 'DESC'
        })
      ).toEqual({
        initList: [],
        filterList: list,
        favorites: [],
        sort: 'DESC'
      })
    })
  })

  describe('ACTIONS', () => {
    it('Se espera obtener un listado de objetos', () => {
      const middlewares = [thunk]
      const mockStore = configureStore(middlewares)
      const store = mockStore({})
      return store.dispatch(getList()).then(() => {
        const exist = typeof store.getActions()[0].list !== 'undefined'
        expect(exist).toBe(true)
      })
    })

    it('Se espera que se pueda agregar a favoritos', () => {
      const middlewares = [thunk]
      const mockStore = configureStore(middlewares)
      const store = mockStore({})
      store.dispatch(setFavorites(['1']))
      const actions = store.getActions()
      const expectedPayload = {
        type: 'SET_FAVORITES',
        favorites: ['1']
      }
      expect(actions).toEqual([expectedPayload])
    })

    it('Se espera que se filtren los elementos de la lista', () => {
      const middlewares = [thunk]
      const mockStore = configureStore(middlewares)

      const initData = {
        initList: listTest,
        filterList: [],
        favorites: [],
        sort: 'ASC'
      }

      const store = mockStore({ list: initData })
      store.dispatch(filter('vue', 'Front-End'))
      const actions = store.getActions()

      const resultFilter = actions.filter.length < listTest.length
      expect(resultFilter).toBe(true)
    })
    it('Se espera que se puedan ordenar los elementos de la lista', () => {
      const middlewares = [thunk]
      const mockStore = configureStore(middlewares)

      const copyOriginalList = listTest.slice(0)
      const initData = {
        initList: listTest,
        filterList: listTest,
        favorites: [],
        sort: 'DESC'
      }

      const store = mockStore({ list: initData })
      store.dispatch(sortList())
      const actions = store.getActions()
      const result =
        actions[0].listSort.length === copyOriginalList.length &&
        actions[0].listSort[0].tech !== copyOriginalList[0].tech
      expect(result).toBe(true)
    })
  })

  const renderList = () => {
    const storeRedux = generateStore()
    return render(
      <Provider store={storeRedux}>
        <List />
      </Provider>
    )
  }

  describe('RENDER', () => {
    it('Se espera que la página se renderice', () => {
      renderList()
      expect(screen.getByText('LISTA DE TECNOLOGÍAS')).toBeInTheDocument()
    })
  })
})
