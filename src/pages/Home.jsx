import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import imgHome1 from "../assets/imgs/home1.png";
import imgHome2 from "../assets/imgs/home2.png";
import imgHome3 from "../assets/imgs/home3.png";
import imgHome4 from "../assets/imgs/home4.png";
import imgLogo from "../assets/imgs/logo.svg";
import phoneImg1 from "../assets/imgs/Home2-1.png";
import phoneImg2 from "../assets/imgs/Home3-2.png";
import phoneImg3 from "../assets/imgs/Home4-3.png";

function Home() {

  const navigate = useNavigate();

  const goListPage = () => {
    localStorage.clear();
    navigate('/list');
  }

  return (
    <div className={styles.container}>

      <section className={styles.firstSection}>
        <div className={styles.firstSectionBox}>

          <img src={imgHome1}/>

          <div className={styles.logoContainer}>
            <div>내가 좋아하는 아이돌을<br/>가장 <span>쉽게 덕질</span> 하는 방법</div>
            <img src={imgLogo}/>
          </div>

          <button onClick={goListPage} className={styles.startButton}>지금 시작하기</button>

        </div>
      </section>
        
      <section>
        <div className={styles.sectionBox}>

          <img className={styles.sectionBg} src={imgHome2}/>

          <div className={styles.sectionTitleContainer}>
            <div className={styles.sectionTitle}>후원하기</div>
            <div className={styles.sectionInfo}>좋아하는 아이돌에게<br/>쉽게 조공해 보세요</div>
          </div>

          <img className={styles.sectionImg1} src={phoneImg1}/>

        </div>
      </section>

      <section>
        <div className={styles.sectionBox}>

          <img className={styles.sectionBg} src={imgHome3}/>

          <div className={styles.sectionTitleContainer}>
            <div className={styles.sectionTitle}>이달의 아티스트</div>
            <div className={styles.sectionInfo}>내 아티스트에게 1등의<br/>영예를 선물하세요</div>
          </div>

          <img className={styles.sectionImg1} src={phoneImg2}/>

        </div>
      </section>

      <section>
        <div className={styles.sectionBox}>

          <img className={styles.sectionBg} src={imgHome4}/>

          <div className={styles.sectionTitleContainer}>
            <div className={styles.sectionTitle}>나만의 아티스트</div>
            <div className={styles.sectionInfo}>좋아하는 아티스트들의<br/>소식을 모아보세요</div>
          </div>

          <img className={styles.sectionImg1} src={phoneImg3}/>

        </div>
      </section>

      <div className={styles.verticalLine}></div>

    </div>
  );
}

export default Home;
