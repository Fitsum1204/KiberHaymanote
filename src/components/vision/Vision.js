import React, { Fragment } from 'react';
import './vision.styles.scss';
import vImage from '../../assets/vision.png';
import mImage from '../../assets/target.png';
import valImage from '../../assets/values.png';

const Vision = () => {
  return (
    <Fragment>
      <div className='v-container'>
        <div className='vision'>
          <img src={vImage} alt="vision icon" />
          <h3>ርእይ</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui magnam inventore, non asperiores nesciunt culpa dicta quod.</p>
        </div>
        <div className='vision'>
          <img src={mImage} alt="mission icon" />
          <h3>ተልእኮ</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui magnam inventore, non asperiores nesciunt culpa dicta quod.</p>
        </div>
        <div className='vision'>
          <img src={valImage} alt="values icon" />
          <h3>እሴት</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui magnam inventore, non asperiores nesciunt culpa dicta quod.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Vision;
