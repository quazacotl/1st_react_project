import React, {Component} from 'react';
import styled from "styled-components";

const SearchInput = styled.input`
  width: auto;
  flex-grow: 1;
  margin-right: 3px;
`

export default class SearchPanel extends Component {
    state ={
        term: ''
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <SearchInput type="text"
               className='form-control'
               placeholder='Поиск по записям'
               onChange={this.onUpdateSearch}
            />
        )
    }
}
