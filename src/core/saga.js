import { all } from "redux-saga/effects";
import { themeSaga } from "../common/themeSaga";

export default function* saga() {
    yield all([
        themeSaga(),
    ]);
}