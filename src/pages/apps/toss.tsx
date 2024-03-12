import { useState } from "react"
import { AdminSideBar } from "../../components"

const Toss = () => {
    const [angle,setAngle]=useState<number>(0);
    const [result,setResult]=useState<string>();
  
  const flipCoin=()=>{
   

    if(Math.random()>0.5){
        setAngle(prev=>prev+180);
        
    }
    else{
        setAngle(prev=>prev+360);
        setResult("Tails")
    }

  }
    return (
    <div className="adminContainer">
        <AdminSideBar/>
        <main className="dashboard-app-container">
            <h1>Coin Flip (Toss) Game</h1>
            <section>
                <h2 className={angle%360===0?'green coin-toss-heading':'red coin-toss-heading'}>{angle%360===0?"Heads":"Tails"}</h2>
                <article className="coin-flip" onClick={flipCoin}
                style={{
                    transform:`rotateY(${angle}deg)`,
                }}>
                    <div ></div>
                    <div ></div>
                </article>
            </section>
        </main>
    </div>
  )
}

export default Toss