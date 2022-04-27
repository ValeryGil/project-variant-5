import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { deleteCommentQuery } from '../../redux/actionCreators/commentActionCreator';

export const CommentsItem = ({ text, _id }) => {
  const dispatch = useDispatch()

  const deleteCommentHandler = () => {
    dispatch(deleteCommentQuery(_id))
  }
  
  return (
    <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
      <ListItem
        key={text}
        disableGutters
        secondaryAction={
          <IconButton aria-label="comment">
            <DeleteIcon onclick={deleteCommentHandler} />
          </IconButton>
        }
      >
        <ListItemText primary={text}/>
      </ListItem>
    </List>
  );
}
