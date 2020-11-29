import { useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";

import { Breadcrumb, BreadcrumbItem } from "../components/Other/Breadcrumb";
import { getProductBySort } from "../common/productSelect";
import LayoutFour from "../components/Layout/LayoutFour";
import productDataMei from "../data/productsMei.json";
import ShopProducts from "../components/Shop/ShopProducts";
import ShopHeader from "../components/Shop/ShopHeader";
import InstagramTwo from "../components/Sections/Instagram/InstagramTwo";
import { PayPalButton } from "react-paypal-button-v2";
// import { area } from "../common/variables";
// import Select from "../components/Control/Select";
import Select from 'react-select';

const options = [
  { label: '台币350', value: 50 },
  { label: '台币700', value: 100 },
  { label: '台币1400', value: 200 },
  { label: '台币2100', value: 300 },
  { label: '台币3500', value: 500 },
  { label: '台币7000', value: 1000 },
];

export default class paypal extends React.Component {

  constructor(props) {
    
    super(props)
    this.state = {
        priceRM: 0,
    }
    this.myRef = React.createRef();
  }


//   handleChange ((e)=>{
//     setPrice(e)

//     alert(price)
//     // console.log(this.state.areacode)
// })
handleChange = (e)=>{

  this.setState({priceRM: e})
  console.log(this.state.priceRM)
}

render(){
  const { priceRM } = this.state;
  return (
    <LayoutFour title="三国2017 储值" container="wide">
      <Breadcrumb title="三国2017 储值(paypal)">
        {/* <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="Shop" current /> */}
      </Breadcrumb>
      <div className="shop -five-col">
        <div className="container-full-half">
          <ShopHeader
            // view={currentView}
            // getCurrentSort={setCurrentSort}
            // getCurrentView={(view) => setCurrentView(view)}
          />
       <Select
        value={priceRM}
        onChange={this.handleChange}
        options={options}
      />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>



        <div className="row">
                          <div className="col-md-12 mt-3 text-center">
                          {this.state.priceRM.value !== 0 && 
                        <div>
                            {/* paypal button */}
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                            <PayPalButton
                            style={{size: 'small'}}
                                amount={this.state.priceRM.value}
                                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                onSuccess={(details, data) => {
                                alert(details.payer.name.given_name+"儲值已完成，請前往郵箱截圖收據給客服");
                        
                                }}
                                options={{
                                    clientId: "AW2hTj135fXXtVHxiuOj4_ozIk4Twen2SzKFpNxMm3_iXkciuu0J0Cftli_D5mj54HH_GlzoDo7dcJNR",
                                    currency: "MYR"
                                }}
                            />
                            </div>
                   
                        </div>
                        }
                          </div>
                        </div>
          
          {/* <ShopProducts
            fiveCol
            listColClass="col-12 col-lg-6"
            view={currentView}
            data={currentData}
          /> */}

          {/* <Paginator
            pageContainerClass="paginator"
            totalRecords={productData.length}
            pageLimit={pageLimit}
            pageNeighbours={2}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> */}
        </div>
      </div>
      {/* <InstagramTwo /> */}
    </LayoutFour>
  );
}
}
