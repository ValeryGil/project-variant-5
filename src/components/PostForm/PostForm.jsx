import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loadNewPost } from '../../redux/actionCreators/postsActionCreator';
import { useState } from 'react';

const PostForm = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState('')
  const [tags, setTags] = useState('')
  const dispatch = useDispatch()

  const submitHandler = () => {
    const preparedPostQuery = {
      title,
      text,
      image,
      tags: tags.split(',').map((el) => el.trim()),
    }
    dispatch(loadNewPost(JSON.stringify(preparedPostQuery)))
  }

  return (
    <Stack
      component="form"
      alignItems="center"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-basic" label="Title..." variant="outlined" value={title} onChange={((e) => setTitle(e.target.value))} />
      </div>
      <div>
        <TextField id="outlined-basic" label="Text..." variant="outlined" multiline sx={{ width: '25ch' }} value={text} onChange={((e) => setText(e.target.value))} />
      </div>
      <div>
        <TextField id="outlined-basic" label="Image" variant="outlined" value={image} onChange={((e) => setImage(e.target.value))} />
      </div>
      <div>
        <TextField id="outlined-basic" label="Tags" variant="outlined" value={tags} onChange={((e) => setTags(e.target.value))} />
      </div>
      <Button variant="contained" onClick={submitHandler}>Create post</Button>
    </Stack>
  )
}

export default PostForm
