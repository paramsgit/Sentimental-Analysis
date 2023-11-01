import React, { useState,useEffect } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
const Result = (props) => {
    const [needleValue,setneedleValue]=useState(500)
    const [polarity,setpolarity]=useState(0)
    const [subjectivity,setsubjectivity]=useState(0)

    useEffect(() => {
      if (props.result) {
        setpolarity(props.result.polarity);
        setsubjectivity(props.result.subjectivity);
      }
        
          if (polarity < 0) {
            setneedleValue(500 + (polarity * 500));
          } else {
            setneedleValue(polarity * 500 + 500);
          }
        
      
    }, [props.result,polarity]);
    
  return (
    <div className='p-4 pb-0 w-full flex flex-col items-center justify-center'>

<ReactSpeedometer
        width={400}
        needleHeightRatio={0.6}
        value={needleValue}
        customSegmentStops={[0, 400, 600, 1000]}
        segmentColors={['#9399ff', '#14ffec', '#00bbf0']}
        currentValueText={`${polarity}`}
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

        <h1 className='mt-[-40px] text-lg'>Subjectivity : {subjectivity}</h1>




    </div>
  )
}

export default Result