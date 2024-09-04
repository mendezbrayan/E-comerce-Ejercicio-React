import './styles.css'
const Modal = () => {
    return(
        <div className='w-full flex justify-center'>
<div className="terminal-loader">
  <div className="terminal-header">
    <div className="terminal-title"></div>
    <div className="terminal-controls">
      <div className="control close"></div>
      <div className="control minimize"></div>
      <div className="control maximize"></div>
    </div>
  </div>
  <div className="text">No hay Coincidencias...</div>
</div>

        </div>
     
    )
}
export default Modal