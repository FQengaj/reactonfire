import "./index.css";
import data from '../../res/content/texts.json'
import { useState } from "react";


export const Valentine = ()=>{
    const [txt, setTxt] = useState(0)
    const txts = data.txts
    return <>
    <div data-theme="valentinstag" className="valentine-body">
        <div className="card w-96 bg-base-100 shadow-2xl image-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Hey Pupsie! ❤️</h2>
                <p>{txts[txt]}</p>
                <div className="card-actions justify-between items-center">
                    <button className="btn btn-primary btn-lg"
                    onClick={()=>{
                        if (txt < txts.length-1){
                            setTxt(txt+1)
                        }else{
                            setTxt(0)
                        }
                    }}>YES!!!</button>
                    <button id="btn-no" className="btn btn-xs">no</button>
                </div>
            </div>
        </div>
    </div>
    <div className="stepsContainer">
        <ul className="steps">
            {txts.map((_, i)=>{
                if (i < txt){
                    return <li data-content="✓" className="step step-secondary">{i}</li>
                }else{
                    return <li data-content="" className="step step-neutral">{i}</li>
                }
            })}
            {/* <li data-content="?" className="step step-secondary">Step 1</li>
            <li data-content="!" className="step step-secondary">Step 2</li>
            <li data-content="✓" className="step step-secondary">Step 3</li>
            <li data-content="✕" className="step step-secondary">Step 4</li>
            <li data-content="★" className="step step-secondary">Step 5</li>
            <li data-content="" className="step step-neutral">Step 6</li>
            <li data-content="●" className="step step-neutral">Step 7</li> */}
        </ul>
    </div>
    </>
}