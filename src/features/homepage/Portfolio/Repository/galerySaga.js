import { call, delay, put, takeLatest} from "redux-saga/effects";
import { getRepositories } from "./getRepositories";
import { 
    fetchRepos, 
    fetchReposSuccess, 
    fetchReposError 
} from "./galerySlice";

const loadingDelay = 2000;

function* fetchReposHandler() {
    try {
        yield delay(loadingDelay);
        const repos = yield call(getRepositories);
        yield put(fetchReposSuccess(repos));
    } catch (error) {
        yield put(fetchReposError());
    }
};

export function* galerySaga() {
    yield takeLatest(fetchRepos.type, fetchReposHandler);
};