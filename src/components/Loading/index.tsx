"use client";
import ReactLoading from 'react-loading';
import { LoadingContainer } from './styles';



export default function Loading() {
    return (
        <LoadingContainer>
            <ReactLoading type='spin' color='#6046ff' height={'5%'} width={'5%'} />
        </LoadingContainer>
    );
}