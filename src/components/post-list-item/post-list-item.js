import React from 'react';
import  styled from 'styled-components';

const AppListItemStyled = styled.div`
    font-size: 1.25rem;
    display: flex;
    justify-content: space-between;
    span {
        display: block;
        line-height: 35px;
        cursor: pointer;
        user-select: none;
        transition: 0.5s all;
        color: ${props => props.important? '#FFD700' : 'black'}
    }
    button {
        width: 35px;
        height: 35px;
        margin: 3px;
        font-size: 17px;
        border: none;
        cursor: pointer;
        padding: .25rem .5rem;
        line-height: 1.5;
        border-radius: .2rem;
        color: ${props => props.important? '#FFD700' : '#aeaeae'};
        &:focus {
            box-shadow: none;
            outline: none;
        }
    }
    .red-colored {
      color: red;
    }
    .fa-heart {
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 16px;
        color: red;
        transition: 0.3s all;
        transform: ${props => props.like ? 'translateX(0px)' : 'translateX(30px)'};
        opacity: ${props => props.like ? 1 : 0};
        }
`

export default function PostListItem({label, onDelete, onToggleImportant, onToggleLiked, important, like}) {

    return (
        <AppListItemStyled important={important} like={like}>
            <span onClick={onToggleLiked}>
                {label}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    type='button'
                    onClick={onToggleImportant}>
                        <i className='fa fa-star'></i>
                </button>
                <button
                    className='red-colored'
                    type='button'
                    onClick={onDelete}>
                        <i className='fa fa-trash-o'></i>
                </button>
                <i className='fa fa-heart'></i>
            </div>
        </AppListItemStyled>
    )
}