import "./index.css";
import data from '../../res/content/texts.json'
import { useState } from "react";
// import images from '../../res/img/'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item);return ""});
    // r.keys().map((item, index) => { images[item] = r(item); });
    return images;
}

const images = importAll(require.context('../../res/img', false, /\.(png|jpe?g|svg)$/));

// console.log(images)

export const Valentine = ()=>{
    const [step, setStep] = useState(0)
    const [stage, setStage] = useState(0)
    // style={{backgroundImage: `url(${images[data[stage][step].img]})`}}
    return <>
    <div data-theme="valentinstag" className="valentine-body" >
        <div className="card w-96 h-full mt-10 mb-16 bg-base-100 shadow-2xl image-full">
            <figure><img src={(data[stage][step].img)? images[data[stage][step].img] :"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Hey Pupsie! ❤️</h2>
                <p key={(stage, step)}>{data[stage][step].txt}</p>
                <div className="card-actions justify-between items-center">
                    <button className="btn btn-primary btn-lg"
                    onClick={()=>{

                        if (step < data[stage].length-1){
                            setStep(step+1)
                        }else{
                            setStep(0)
                            if (stage < data.length-1){
                                setStage(stage+1)
                            }else{
                                setStage(0)
                            }
                        }
                        
                    }}>{data[stage][step].posbtn}</button>
                    {data[stage][step].negbtn !== "" ? <button id="btn-no" className="btn btn-xs">{data[stage][step].negbtn}</button>:""}
                </div>
            </div>
        </div>
    </div>
    <div className="stepsContainer">
        <ul className="steps">
            {
                data.map((value, currIndex)=>{
                    if (currIndex < stage){
                        return <li key={currIndex} data-content="❤️" className="step step-secondary">{currIndex}</li>
                    }else{
                        return <li key={currIndex} data-content="" className="step step-neutral">{currIndex}</li>
                    }
                })
            }
            {/* {txts.map((_, i)=>{
                if (i < txt){
                    return <li data-content="✓" className="step step-secondary">{i}</li>
                }else{
                    return <li data-content="" className="step step-neutral">{i}</li>
                }
            })} */}
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