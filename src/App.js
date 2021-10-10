import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import Planelogo from './images/svg/plane.svg';
import Shiplogo from './images/svg/ship.svg';
import Trucklogo from './images/svg/truck.svg';
import Customerlogo from './images/svg/customer.svg';

import classes from './App.module.css';
import Contentbox from './components/Contentbox/Contentbox';
import Servicebox from './components/Servicebox/Servicebox';
import Forms from './components/Forms/Forms';
import Togglebtn from './components/Togglebtn/Togglebtn';
import Tab from './components/Tab/Tab';
import Input from './components/Input/Input';
import AddServices from './components/AddServices/AddServices';
const App = () => {
  return (
    <div style={{ background: '#F0F2F5' }}>
      <Navbar />
      <div className={classes.Main_wrapper}>
        <FaArrowLeft className={classes.Back_Icon} />
        <div>
          <Header />
          <Contentbox>
            <h2 style={{ marginBottom: '1.5rem' }}>Select a service</h2>
            <div className={classes.Wrapper}>
              <Servicebox logo={Planelogo} text='Air Freight' active />
              <Servicebox logo={Shiplogo} text='Sea Freight' />
              <Servicebox logo={Trucklogo} text='Inland (Truck & Badge)' breakText />
              <Servicebox logo={Customerlogo} text='Custom Clearance' breakText />
            </div>
          </Contentbox>
          <Contentbox>
            <BsInfoCircle />
            <Forms />
          </Contentbox>
          <Contentbox>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
              <h2>Cargo Details</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Togglebtn />
                <h3>Dangerous Cargo (ex. Chemicals, Battery)</h3>
              </div>
            </div>
            <Tab />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Input unit='Volume' measure='cbm' />
              <Input unit='Weight' measure='kg' />
            </div>
          </Contentbox>
          <Contentbox>
            <h2 style={{ marginBottom: '5rem' }}>Additional Services</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <AddServices head='Export Forwarding' text='We handle customs clearance and documentation.' />
                <AddServices head='Cargo Insurance' text='Protect your cargo from logistics risks up to its full value' />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <AddServices head='Import Customs Clearance' text='We handle customs and regulatory requirements' />
                <AddServices head='Transport/Delivery' text='We deliver the cargo to your door step from ports.' />
              </div>
            </div>
          </Contentbox>
        </div>
      </div>
    </div>
  );
};

export default App;
