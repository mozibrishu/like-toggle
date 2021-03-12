import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const handleLike = () => {
    setLikeColor(likeColor ? '' : 'primary');
  }

  return (
    <div className="App">
      <div className="like-btn">
        <ThumbUpIcon className="thumb-up" style={{fontSize:'200px'}} onClick={handleLike} color={likeColor}></ThumbUpIcon>
        <h1>Click to Toggle</h1>
      </div>
    </div>
  );
}

export default App;
