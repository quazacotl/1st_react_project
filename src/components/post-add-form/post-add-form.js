import React, {Component} from 'react';
import  styled from 'styled-components';

const PostAddFormStyled = styled.form`
    display: flex;
    margin-top: 20px;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`

export default class PostAddForm extends Component {
    state = {
        text: ''
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <PostAddFormStyled
                onSubmit={this.onSubmit}
            >
                <input type="text"
                       placeholder='О чём вы думаете?'
                       className='form-control new-post-label'
                       onChange={this.onValueChange}
                       value={this.state.text}
                />
                <button
                    type='submit'
                    className='btn btn-outline-secondary'>
                    Добавить
                </button>
            </PostAddFormStyled>
        )
    }
};
