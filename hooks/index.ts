import { AppDispatch } from './../store/index';
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import type { AppState } from "../store";
export const useAppDispatch=()=>useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
