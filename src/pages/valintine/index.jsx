import "./index.css";
import dataPos from '../../res/content/texts.json'
import dataNeg from '../../res/content/failtexts.json'
import { useState } from "react";
// import images from '../../res/img/'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item);return ""});
    // r.keys().map((item, index) => { images[item] = r(item); });
    return images;
}

const images = importAll(require.context('../../res/img', false, /\.(png|jpe?g|svg|gif)$/));

// console.log(images)

export const Valentine = ()=>{
    const [step, setStep] = useState(0)
    const [stage, setStage] = useState(0)
    const [isPosArc, setPosArc] = useState(true)
    const [negObj, setNegObj] = useState(0)
    // style={{backgroundImage: `url(${images[data[stage][step].img]})`}}
    let currObj = (isPosArc) ? dataPos[stage][step] : dataNeg[negObj] 
    return <>
    <div data-theme="valentinstag" className="valentine-body" >
    <div className="card w-80 h-auto mt-10 mb-16 bg-base-100 shadow-2xl ">
        <figure><img style={{aspectRatio: 3/4, objectFit:"cover" }} alt="" src={(currObj.img)? images[currObj.img] :""} /></figure>
        <div className="card-body">
            <h2 className="card-title">{currObj.ttxt ? currObj.ttxt : "no title yet"}</h2>
            <p>{currObj.txt}</p>

            <div className="card-actions justify-between items-center">
                {currObj.posbtn ? <button className="btn btn-primary btn-lg"
                onClick={()=>{
                    if (isPosArc){
                        if (step < dataPos[stage].length-1){
                            setStep(step+1)
                        }else{
                            setStep(0)
                            if (stage < dataPos.length-1){
                                setStage(stage+1)
                            }else{
                                setStage(0)
                            }
                        }
                    }else{
                        // war im negArc -> positiv
                        setPosArc(true)
                        setStage(currObj.nextPos.stage)
                        setStep(currObj.nextPos.step)
                    }
                    
                }}>{currObj.posbtn}</button>
                : ""}
                {
                currObj.negbtn !== "" ? 
                    <button onClick={()=>{
                        setNegObj(currObj.nextNeg)
                        setPosArc(false)
                    }} className="btn btn-xs">{currObj.negbtn}</button>
                :
                    ""
                }
            </div>
        </div>
    </div>
    </div>
    <div className="stepsContainer">
        <ul className="steps">
            {
                dataPos.map((value, currIndex)=>{
                    if (currIndex <= stage){
                        return <li onClick={()=>{
                            setStage(currIndex)
                            setStep(0)
                        }} key={currIndex} data-content="❤️" className="step step-success"></li>
                    }else if (currIndex === stage){
                        return <li onClick={()=>{
                            setStage(currIndex)
                            setStep(0)
                        }} key={currIndex} data-content="" className="step step-info"></li>
                    }else{
                        return <li key={currIndex} data-content="" className="step step-neutral"></li>
                    }
                })
            }
        </ul>
    </div>
    </>
}