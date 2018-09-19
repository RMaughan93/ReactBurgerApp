import React from 'react';
import classes from './MenuButton.css';

// export default class MenuButton {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return(
//       <button>

//       </button>
//     );
//   }

// };

const MenuButton = (props) => {
  return (
    <div
      className={classes.MenuButton}
      onClick={props.clicked}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MenuButton;