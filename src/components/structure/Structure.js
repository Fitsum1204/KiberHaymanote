import React from 'react'
import Logo from '../../assets/photo.png'
import './structure.styles.scss'
import strucPic from '../../assets/6023649555301647005.jpg'
import Footer from '../footer/Footer'
const Structure = () => {
  return (
    <div className='structure'>
        <div className='structure-header'>
          <h1>መዋቅራዊ አደረጃጀት</h1>
          <img className='image' src={Logo} alt='KibereHaymanot' />
      </div>
        <div className='structure-flex'>
        <h2>መዋቅራዊ አደረጃጀት </h2>
        <p>በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን  በደብረ ምጥማቅ ቅዱስ ፊልጶስ ከሚገኙ አገልግሎቶች መዋቅር መካከል አንዱ የሰ/ት/ቤት አገልግሎትን የሚመራው  መዋቅር ነው፡፡ መዋቅሩም በየጊዜው እየተሻሻለ አሁን አገልግሎት ላይ የሚገኘው መዋቅር በ2017 ዓ.ም በሰንበት ት/ቤቱ ጠቅላላ ጉባኤ ጸድቆ በስራ ላይ ይገኛል፡፡<br/><br/>

        የክብረ ሃይማኖት ሰንበት ት/ቤቱ መዋቅር በጽ/ቤት እና ጽ/ቤቱ በሚመራቸው አሥራ አንድ ክፍላትና ተጠሪነቱ ለጠቅላላ ጉባኤ በሆነ የቁጥጥር እና ክትትል ክፍል አማካኝነት ተዋቅሯል፡፡</p>
        </div>
        <div className='stracture-image'>
            <img className='img-str'src={strucPic} alt='structure of sunday school'/>    
        </div>    
    <Footer/>
    </div>
  )
}

export default Structure
