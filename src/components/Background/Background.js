import bgImg1 from '../../images/background/1.jpg';
import bgImg2 from '../../images/background/2.jpg';
import bgImg3 from '../../images/background/3.jpg';
import './Background.scss';

function Background() {
  const imgList = [bgImg1, bgImg2, bgImg3];
  const number = Math.floor(Math.random() * imgList.length);
  const imgUrl = imgList[number];
  const bgStyle = {backgroundImage: 'url(' + imgUrl + ')'};

  return (
    <div className="region cover">
      <div className="bg-img" style={bgStyle}></div>
    </div>
  )
}

export default Background;