import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Avatar = (props) => {
    return(
      <Zoom>
        <div className="avatar">
          <img src={props.avatar} alt="avatar" />
        </div>
      </Zoom>
    );
}

export default Avatar;