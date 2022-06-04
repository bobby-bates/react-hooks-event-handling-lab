const Keypad = () => {
  const alert = () => console.log('Entering password...')

  return <input type='password' onChange={alert}></input>
}

export default Keypad