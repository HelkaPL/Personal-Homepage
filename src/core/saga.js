import { all } from "redux-saga/effects";
import { themeSaga } from "../common/themeSaga";
import { galerySaga } from "../features/homepage/Portfolio/Galery/galerySaga";

export default function* saga() {
    yield all([
        themeSaga(),
        galerySaga(),
    ]);
}