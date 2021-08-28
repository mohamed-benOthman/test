import * as React from 'react';
import './App.scss';
import doctorImage from "./assets/doctors.png";
import logo from "./assets/logo.png";
import Input from "./components/input/input";
import SubTitle from "./components/subTitle/subTitle";
import Title from "./components/title/title";
import ProgressBar from "./components/progressBar/progressBar";
import Checkbox from "./components/checkbox/checkbox";
import HorizentalLine from "./components/horizentalLine/horizentalLine";
import Button from "./components/button/button";
import SubtitleFooter from "./components/subtitle-footer/subtitle-footer";

class App extends React.Component {
  public render() {
    return (
      <div className="App">

            <div className="row w-100 ">
                <div className="col-12 col-md-6 doctor-container">
                        <img className="doctor-image" src={doctorImage} />
                </div>
                <div className="col-12 col-md-6 pl-5 pl-md-5 pr-md-5 pb-md-4 bigContainer ">
                    <img   src={logo} />

                    <Title className="title" title="Register Now" />
                    <SubTitle title="Lorem ipsum dolor sit amet, consectetur adipiscing." />
                    <br />
                    <Input className="input-position" title="Full Name"  />
                    <br />
                    <Input className="mb-2" title="Email"  />
                    <br />
                    <Input className="mb-2" title="Mobile Number" type="number"  />
                    <br />
                    <Input className="mb-2" title="Password" type="password"  />
                    <br />
                    <ProgressBar />
                    <SubTitle title="Verify your account" />
                    <div className="checkbox-container ">
                    <Checkbox   checked="true" title="Phone number" />
                     <Checkbox checked={false} title={"Email"} />
                    </div>
                    <div className="agreement-container">
                    <HorizentalLine />
                     <Checkbox   checked="true" title="I accept the terms and conditions, consectetur adipiscing elit. Integer eu velit est. Maecenas nulla justo, feugiat eget congue in, auctor tellus." type={1} />
                     <br />
                     <Button title="Continue" />
                        <br />
                        <SubtitleFooter title="Already registered? Login here"/>
                    </div>
                </div>
            </div>

      </div>
    );
  }
}

export default App;
