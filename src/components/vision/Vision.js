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
          <p>የተመሰገነውን ተስፋ የታላቁን የአምላካችን የመድኀኒታችን የኢየሱስ ክርስቶስን ክብር መገለጥ እየጠበቅ በዚህ ዓለምም<br/> 
              <div className='text'>
                በጽድቅ<br/>
                በንጽሕና<br/> 
                በፍቅር የሚኖር ትውልድ ማየት<br/>ቲቶ ፪፥፲ ፪-፲ ፫</div>
</p>
        </div>
        <div className='vision'>
          <img src={mImage} alt="mission icon" />
          <h3>ተልእኮ</h3>
          <p>&#129187;ለአባላት እንዲሁም ለምዕመናን  የቅድስት ቤተክረስቲያንን
እምነት፣ ስርዓት እና ትውፊት ማስተማር</p>
        <p>&#129187; ኦርቶዶክሳዊ መንፈሳዊ አገልጋይ ማፍራት</p>
        <p>&#129187; ለአባላት እንዲሁም ለምዕመናን በእውቀታቸው፣ በገንዘባቸው፣ በጉልበታቸው እና በጊዜያቸው ቤተ-ክርስቲያንን
          እንዲያገለግሉ ማድረግ</p>
          <p>&#129187; አባላት እንዲሁም ምዕመናን የምስጢራተ ቤ/ክ ተሳታፊ እንዲሆኑ ማድረግ
            </p>
        </div>
        <div className='vision'>
          <img src={valImage} alt="values icon" />
          <h3>እሴት</h3>
          <p>  
          &#11179; ጾም<br/>
              &#11179; ጸሎት<br/>
              &#11179; የአላማ አንድነት<br/>
              &#11179; የአገልጋይነት መንፈስ<br/>
              &#11179; አርአያነት<br/>
              &#11179; ፍቅር<br/>
              &#11179; ግልፅነት<br/>
              &#11179; የንፅህና ህይወት<br/>
              &#11179; መከባበር<br/>
              &#11179; ሥርዓተ ቤተ ክርስቲያንን ማክበር
              </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Vision;
