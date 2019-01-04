import { getAptData } from './action';
import { RANDOM_IMAGE } from '../constants/constants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchData } from '../util/api';

function* getData(){
    try{
        const data = yield call(fetchData);
        yield put(getAptData(data));
    }
    catch(e){
        console.log(e);
    }
}

export function* catchAction(){
    yield takeLatest(RANDOM_IMAGE, getData)
}