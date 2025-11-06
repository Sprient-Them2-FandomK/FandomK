import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import imgHome1 from "../assets/imgs/home1.png";
import imgLogo from "../assets/imgs/logo.svg";

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
        
      {/* <section>
        <div className={styles.sectionBox}>

          <img src="../assets/imgs/home2.png"/>

          <div className={styles.logoContainer}>
            <div>후원하기</div>
            <div>좋아하는 아이돌에게<br/>쉽게 조공해 보세요</div>
          </div>

        </div>
      </section> */}

      <section>
        
      </section>

      <section>
        
      </section>

    </div>
  );
}

export default Home;
