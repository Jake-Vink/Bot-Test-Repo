import React from 'react';
import './Calculator.css';

const Calculator = () => {
  const [value, setValue] = React.useState('0')
  const [storedVals, setStoredVals] = React.useState([])
  const [storedOp, setStoredOp] = React.useState([])
  const [fullEq, setFullEq] =React.useState('')
  const [display, setDisplay] = React.useState('0')

  const clickNum = (number) => {
    let str = ''
    value === '0'? str = number: str = value.concat(number)
    setValue(str)
    setDisplay(str)
  }

  const clearNum = () => {
    setValue('0')
    setDisplay('0')
    setStoredOp([])
    setStoredVals([])
    setFullEq('')
  }

  const add = () => {
     const arr1 = [...storedVals]
     const arr2 = [...storedOp]
     let eq = fullEq
     arr1.push(parseInt(value))
     setStoredVals(arr1)
     arr2.push('+')
     setStoredOp(arr2)
     eq = eq.concat(value + '+')
     setFullEq(eq)
     setValue('0')
     setDisplay('0')
  }

  const subtract = () => {
     const arr1 = [...storedVals]
     const arr2 = [...storedOp]
     let eq = fullEq
     arr1.push(parseInt(value))
     setStoredVals(arr1)
     arr2.push('-')
     setStoredOp(arr2)
     eq = eq.concat(value + '-')
     setFullEq(eq)
     setValue('0')
     setDisplay('0')
  }

  const multiply = () => {
     const arr1 = [...storedVals]
     const arr2 = [...storedOp]
     let eq = fullEq
     arr1.push(parseInt(value))
     setStoredVals(arr1)
     arr2.push('x')
     setStoredOp(arr2)
     eq = eq.concat(value + 'x')
     setFullEq(eq)
     setValue('0')
     setDisplay('0')
  }

  const equals = () => {
    const arr1 = [...storedVals]
    arr1.push(parseInt(value))
    setStoredVals(arr1)

    let numArray = [...arr1]
    let numOps = [...storedOp]

    numOps.map((operation, index) => {
      if (operation === '+'){
        return numArray[index + 1] = numArray[index] + numArray[index + 1]
      }
      else if (operation === '-') {
        return numArray[index + 1] = numArray[index] - numArray[index + 1]
      }
      else if (operation === 'x'){
        return numArray[index + 1] = numArray[index] * numArray[index + 1]
      }
      else {
        return 0
      }
    })
    setDisplay(numArray[numArray.length - 1])
    setValue(numArray[numArray.length - 1])
    setFullEq('')
    setStoredVals([])
    setStoredOp([])

  }

  return (
  <div className='outline'>
    <h1 className="title"> Calculator </h1>
    <div className="calculator">
      <div>
        <div className="numberBar">
          <NumberBar display={display}/>
        </div>
      </div>
      <div>
        <div className="clearArea left">
          <Button onClick={() => clearNum()} display="Clear" className="clearButt"/>
        </div>
        <div className="operations left">
          <Button onClick={() => multiply()} display="x" className="operation"/>
        </div>
      </div>
      <div>
        <div className="left">
          <Button onClick={() => clickNum("7")} display="7" className="number"/>
          <Button onClick={() => clickNum("4")} display="4" className="number"/>
          <Button onClick={() => clickNum("1")} display="1" className="number"/>
        </div>
        <div className="left middle-col">
          <Button onClick={() => clickNum("8")} display="8" className="number"/>
          <Button onClick={() => clickNum("5")} display="5" className="number"/>
          <Button onClick={() => clickNum("2")} display="2" className="number"/>
        </div>
        <div className="left">
          <Button onClick={() => clickNum("9")} display="9" className="number"/>
          <Button onClick={() => clickNum("6")} display="6" className="number"/>
          <Button onClick={() => clickNum("3")} display="3" className="number"/>
        </div>
        <div className="operations left">
          <Button onClick={() => subtract()} display="-" className="operation"/>
          <Button onClick={() => add()} display="+" className="operation"/>
          <Button onClick={() => equals()} fullEq={fullEq} display="=" value={value} className="operation tooltip"/>
        </div>
      </div>
    </div>
  </div>
  )
};

const Button = ({onClick, className, display, fullEq, value}) => {
  return (
    <div onClick={() => onClick()} className={className}>
      {className === 'operation tooltip' && <span className="tooltiptext">{fullEq + value}</span>}
      {display}
    </div>
  )
}

const NumberBar = ({display}) => {
  return (
    <div>
      {display}
    </div>
  )
}

export default Calculator;
