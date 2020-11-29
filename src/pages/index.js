import React, { Component } from 'react';
import Head from "next/head";
import Link from "next/link";
import Select from "../components/Control/Select";
import { area } from "../common/variables";
import {reactLocalStorage} from 'reactjs-localstorage';
import Button from "../components/Control/Button";


export default class Home extends Component {

 
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
    <div style={{backgroundColor: "black", height: window.innerHeight}}>
      
        <img src="/assets/images/gjll/gjll.png" alt="Logo" width={window.innerWidth}/>
        
        {/* server 7 */}

        <div style={{position: 'absolute',
			  top: '65%',
			  left: '20px'}}>
          <h2 style={{color:"white"}}>SERVER 7(NEW)</h2>
        {/* <Button color="red" action="" content="SERVER 7(new)" /> */}
        </div>
        <a href="itms-services://?action=download-manifest&url=itms-services://?action=download-manifest&url=https://privategamedownload.com/gjlls7.plist">
          <img src="/assets/images/gjll/ios.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '63%',
          right: '90px'}}/>
        </a>
        <a href="https://privategamedownload.com/gjlls7.apk">
          <img src="/assets/images/gjll/android.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '63%',
          right: '10px'}}/>
        </a>

        {/* server 456 */}

        <div style={{position: 'absolute',
			  top: '80%',
			  left: '20px'}}>
        <h2 style={{color:"white"}}>SERVER 4/5/6</h2>
        {/* <Button color="white" action="" content="SERVER 4/5/6" /> */}
        </div>
        <a href="itms-services://?action=download-manifest&url=itms-services://?action=download-manifest&url=https://privategamedownload.com/longEngS4.plist">
          <img src="/assets/images/gjll/ios.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '78%',
          right: '90px'}}/>
        </a>
        <a href="http://privatelongwu.com/longEngs4.apk">
          <img src="/assets/images/gjll/android.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '78%',
          right: '10px'}}/>
        </a>


        {/* server 123 */}

        <div style={{position: 'absolute',
			  top: '95%',
			  left: '20px'}}>
          <h2 style={{color:"white"}}>SERVER 1/2/3</h2>
        {/* <Button color="white" action="" content="SERVER 1/2/3" /> */}
        </div>
        <a href="itms-services://?action=download-manifest&url=itms-services://?action=download-manifest&url=https://privategamedownload.com/longEng.plist">
          <img src="/assets/images/gjll/ios.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '93%',
          right: '90px'}}/>
        </a>
        <a href="http://privatelongwu.com/en6.apk">
          <img src="/assets/images/gjll/android.png" alt="Logo" height="65px" style={{position: 'absolute',
          top: '93%',
          right: '10px'}}/>
        </a>



      </div>
    </>
  );
   }
}
