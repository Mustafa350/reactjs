import React, {} from 'react';
import './button.css'

class Newsform extends React.Component {

  addButton() {
    console.log(this);
    this.props.addNews();
  }
  buttons() {
    console.log(this);
    this.props.button();
  }
  css() {
    console.log(this);
    this.props.css();
  }
  son() {
    console.log(this);
    this.props.son();
  }
render(){
  return(
    <div><button onClick={this.addButton.bind(this)}>Add</button>
    <div><button onClick={this.buttons.bind(this)}>buton</button></div>
    <div><button className="button1" onClick={this.css.bind(this)}>tıkla amk</button></div>
    <div><button onClick={this.son.bind(this)}>SON BİR TANE</button></div>

    </div>



  );
}
}

export default Newsform;
