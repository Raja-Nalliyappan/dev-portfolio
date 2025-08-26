import { useEffect } from "react";
import  styles from"./Notfound.module.css"
import { useNavigate } from "react-router-dom";

export const Notfound = () => {
    useEffect(()=>{
        document.body.style.backgroundColor = "rgba(175, 192, 192, 1)"
    })

    const navigate = useNavigate()

    const goHome = ()=>{
        navigate("/home")
    }

  return (
    <>
      <div style={{ display: 'inline-flex' }}>
        <div className={styles.para}>
          <header>
            <h2>404.</h2>
          </header>
          <h3>Sorry, Wrong Door.</h3>
          <p>
            Don't worry, sometimes even we make mistakes. You can find plenty of
            other things on our homepage.
          </p>
          <button onClick={goHome}> Back to Homepage</button>
        </div>
      </div>
    </>
  );
};
