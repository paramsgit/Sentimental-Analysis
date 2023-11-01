import React, { useState,useEffect } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
const Result = (props) => {
    const [needleValue,setneedleValue]=useState(500)
    // const [polarity,setpolarity]=useState()
    let polarity=0;
    if(props.result)
    polarity=props.result.polarity
    let subjectivity=0;
    if(props.result)
    subjectivity=props.result.subjectivity

    useEffect(() => {
      if(polarity<0){
        polarity=polarity*-1;
        let newValue=500-(polarity*500)
        setneedleValue(newValue)
      }else{
        let newValue=polarity*500
        newValue=newValue+500
        setneedleValue(newValue)
      }
    }, [polarity])
    
  return (
    <div>

<ReactSpeedometer
        width={500}
        needleHeightRatio={0.7}
        value={needleValue}
        customSegmentStops={[0, 400, 600, 1000]}
        segmentColors={['#9399ff', '#14ffec', '#00bbf0']}
        currentValueText="How are you?"
        customSegmentLabels={[
          {
            text: 'Negative',
            position: 'OUTSIDE',
            color: '#d8dee9',
          },
          {
            text: 'Neutral',
            position: 'OUTSIDE',
            color: '#d8dee9',
          },
          {
            text: 'Positive',
            position: 'OUTSIDE',
            color: '#d8dee9',
          },
        ]}
        ringWidth={47}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={'#a7ff83'}
        textColor={'#d8dee9'}
      />

        <h1 className='text-lg'>{polarity}</h1>
        <h1 className='text-lg'>{subjectivity}</h1>




    </div>
  )
}

export default Result