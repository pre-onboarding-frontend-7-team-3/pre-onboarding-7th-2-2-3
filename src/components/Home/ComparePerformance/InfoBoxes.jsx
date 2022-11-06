import React from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import unitDecider from 'utils/unitDecider';

export const ROAS = ({value, exValue}) => {
  const diff = value - exValue 
  return (
    <div>
      <h2>ROAS</h2>
      <p>{parseInt(value)}%</p>
      <div>
        {diff > 0? <AiOutlineCaretUp/> : <AiOutlineCaretDown/> }
        {parseInt(Math.abs(diff))}%
      </div>
    </div>
  )
}
export const Cost = ({value, exValue}) => {
  const diff = value - exValue
  return (
    <div>
      <h2>광고비</h2>
      <p>{unitDecider(parseInt(value))} 원</p>
      <div>
        {diff > 0? <AiOutlineCaretUp/> : <AiOutlineCaretDown/> }
        {unitDecider(Math.abs(parseInt(diff)))} 원
      </div>
    </div>
  )
}

export const Imp = ({value, exValue}) => {
  const diff = value - exValue
  return (
    <div>
      <h2>노출수</h2>
      <p>{unitDecider(parseInt(value))} 회</p>
      <div>
        {diff > 0? <AiOutlineCaretUp/> : <AiOutlineCaretDown/> }
        {unitDecider(Math.abs(parseInt(diff)))} 회
      </div>
    </div>
  )
}

export const Click = ({value, exValue}) => {
  const diff = value - exValue
  return (
    <div>
      <h2>클릭수</h2>
      <p>{unitDecider(value)} 회</p>
      <div>
        {diff > 0? <AiOutlineCaretUp/> : <AiOutlineCaretDown/> }
        {unitDecider(Math.abs(diff))} 회
      </div>
    </div>
  )
}
export const Conv = ({value, exValue}) => {
  const diff = value - exValue
  return (
    <div>
      <h2>전환수</h2>
      <p>{parseInt(value)} 회</p>
      <div>
        {diff > 0? <AiOutlineCaretUp/> : <AiOutlineCaretDown/> }
        {Math.abs(diff)} 회
      </div>
    </div>
  )
}
export const Revenue = ({value, exValue}) => {
  console.log(value, exValue);
  const diff = value - exValue
  return (
    <div>
      <h2>매출</h2>
      <p>{unitDecider(parseInt(value))} 원</p>
      <div>
        {diff > 0? <AiOutlineCaretUp/> : <AiOutlineCaretDown/> }
        {unitDecider(Math.abs(diff))} 원
      </div>
    </div>
  )
}

