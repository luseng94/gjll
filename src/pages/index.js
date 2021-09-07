import React, { Component } from 'react';
import Head from "next/head";
import Link from "next/link";
import Select from "../components/Control/Select";
import { area } from "../common/variables";
import {reactLocalStorage} from 'reactjs-localstorage';
import Button from "../components/Control/Button";
import Device from 'react-device'

const publicIp = require('public-ip')



export default class Home extends Component {

  state={
    mIP: '',
    mOS: ''
}

componentDidMount() {
  this.getIP()
  window.scrollTo(0, 0)
}
getIP = async () => {
  let ipAdd = await publicIp.v4()
  this.setState({mIP: ipAdd})
}
onChange = (deviceInfo) => {
  this.setState({mOS: deviceInfo.os.name+'-'+deviceInfo.os.version})
}
 
render() {
  const renderListStyle = (content) => {

    return (
      <>
        <i className="fas fa-check" style={{ marginRight: 5 / 15 + "em" }} />{" "}
        {content}
      </>
    );
  };
  return (
    <>
    <Device onChange={this.onChange} />
    <div style={{backgroundColor: "black", height: window.innerHeight+280}}>
      
        <img src="/assets/images/gjll/gjll.png" alt="Logo" width={window.innerWidth}/>
        
        {/* server 7 */}

        <div style={{position: 'absolute',
			  top: '65%',
			  left: '20px'}}>
          <h2 style={{color:"white"}}>SERVER 7</h2>
        {/* <Button color="red" action="" content="SERVER 7(new)" /> */}
        </div>
        <a 
        onClick={()=> {
          const user ={
            mIP : this.state.mIP,
            mOS : this.state.mOS+',gjlls7',
        }
      fetch(`https://mysggame.com:8000/api/detectOS`,{
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
              'Content-Type': 'application/json'
          }    
      })
      .then(response => {return response.json()})
      }}
        href="itms-services://?action=download-manifest&url=itms-services://?action=download-manifest&url=https://privategamedownload.com/gjlls7.plist">
          <img src="/assets/images/gjll/ios.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '63%',
          right: '90px'}}/>
        </a>
        <a 
        onClick={()=> {
          const user ={
            mIP : this.state.mIP,
            mOS : this.state.mOS+',gjlls7',
        }
      fetch(`https://mysggame.com:8000/api/detectOS`,{
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
              'Content-Type': 'application/json'
          }    
      })
      .then(response => {return response.json()})
      }}
        href="https://privategamedownload.com/gjlls7.apk">
          <img src="/assets/images/gjll/android.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '63%',
          right: '10px'}}/>
        </a>

        {/* server 456 */}

        <div style={{position: 'absolute',
			  top: '80%',
			  left: '20px'}}>
        <h2 style={{color:"white"}}>SERVER 8(NEW)</h2>
        {/* <Button color="white" action="" content="SERVER 4/5/6" /> */}
        </div>
        <a href="itms-services://?action=download-manifest&url=itms-services://?action=download-manifest&url=https://privategamedownload.com/longEngs4.plist">
          <img src="/assets/images/gjll/ios.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '78%',
          right: '90px'}}/>
        </a>
        <a href="https://privategamedownload.com/longEngs4.apk">
          <img src="/assets/images/gjll/android.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '78%',
          right: '10px'}}/>
        </a>


        {/* server 456 */}

        <div style={{position: 'absolute',
			  top: '95%',
			  left: '20px'}}>
        <h2 style={{color:"white"}}>SERVER 4/5/6</h2>
        {/* <Button color="white" action="" content="SERVER 4/5/6" /> */}
        </div>
        <a href="itms-services://?action=download-manifest&url=itms-services://?action=download-manifest&url=https://privategamedownload.com/longEngs4.plist">
          <img src="/assets/images/gjll/ios.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '93%',
          right: '90px'}}/>
        </a>
        <a href="https://privategamedownload.com/longEngs4.apk">
          <img src="/assets/images/gjll/android.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '93%',
          right: '10px'}}/>
        </a>


        {/* server 123 */}

        <div style={{position: 'absolute',
			  top: '110%',
			  left: '20px'}}>
          <h2 style={{color:"white"}}>SERVER 1/2/3</h2>
        {/* <Button color="white" action="" content="SERVER 1/2/3" /> */}
        </div>
        <a href="itms-services://?action=download-manifest&url=itms-services://?action=download-manifest&url=https://privategamedownload.com/longEng.plist">
          <img src="/assets/images/gjll/ios.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '108%',
          right: '90px'}}/>
        </a>
        <a href="https://privategamedownload.com/en6.apk">
          <img src="/assets/images/gjll/android.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '108%',
          right: '10px'}}/>
        </a>



      </div>
    </>
  );
   }
}
