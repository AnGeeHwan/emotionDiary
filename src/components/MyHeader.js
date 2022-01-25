const MyHeader = ({ headText, leftChild, rightChlid }) => {
  return <header>
    <div className="head_btn_left">
      {leftChild}
    </div>
    <div className="head_text">
      {headText}
    </div>
    <div className="head_btn_right">
      {rightChlid}
    </div>
  </header>
}

export default MyHeader;