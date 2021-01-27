import React from 'react';
import styled from "styled-components";

import PostListItem from '../post-list-item/post-list-item'

const ListItem = styled.li`
    padding: 20px 35px 10px 35px;
    margin-top: 10px;
`

const UnorderedList = styled.ul`
  margin-top: 50px;
`

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.filter(item => item === Object(item) && Object.keys(item).length > 0).map(item => {
        const {id, ...itemProps} = item;
        return (
            <ListItem key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
            </ListItem>
        );
    });

    return (
        <UnorderedList className='list-group'>
            {elements}
        </UnorderedList>
    )
};

export default PostList;