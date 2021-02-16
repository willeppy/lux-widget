import React, { Component } from 'react';
import { InfoBtnProps } from './interfaces/infoBtnProps';

class InfoBtn extends Component<InfoBtnProps> {
    constructor(props:any) {
        super(props);
    }

    render() {
      const{ message, toggleInfoPanel, closeInfoPanel, openInfo } = this.props;
      let infoBtn;
      let infoMsg;
      if (message!=""){
        infoBtn = <i  id="infoBtn" 
                        className='fa fa-info-circle'
                        onClick={(e)=>toggleInfoPanel(e)}/>;
        infoMsg = <div className="info-footer" style={{display: (openInfo) ? 'flex' : 'none' }} >
        <p className="infoMsgText" dangerouslySetInnerHTML={{__html: message}}></p>
        <i className="fa fa-window-close" aria-hidden="true" onClick={(e)=>closeInfoPanel(e)}
        style={{position: 'absolute', right: '15px', fontSize: '15px' }}
        ></i> 
        </div>;
      }
        return (
          <span>
            {infoBtn}
            {infoMsg}
          </span>
          );
    }
}
export default InfoBtn;
