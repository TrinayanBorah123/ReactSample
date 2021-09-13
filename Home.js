import React, { Component } from 'react';
import { MDBInput } from "mdbreact";
import { Card, Row, Col, button ,Modal,Button} from 'reactstrap';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            gender: '',
            age: '',
            password: '',
            password2: '',
            isCSharp: false,
            isC: false,
            isCPlusPlus: false,
            showPassword: false,
            show: false,

        }
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        });

    }
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });

    }
    handlePhoneChange = event => {
        this.setState({
            phone: event.target.value
        });

    }
    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });

    }
    handlePssword2Change = event => {
        this.setState({
            password2: event.target.value
        });

    }
    handleGenderChange = event => {
        this.setState({
            gender: event.target.value
        });

    }
    handleCsharpChange = () => {
        this.setState({
            isCSharp: !this.state.isCSharp,
        });

    }
    handleCChange = () => {
        this.setState({
            isC: !this.state.isC,
        });

    }
    handleCPlusPlusChange = () => {
        this.setState({
            isCPlusPlus: !this.state.isCPlusPlus,
        });

    }
    handleAgeChange = event => {
        this.setState({
            age: event.target.value
        })
    }
    handlePasswordShow = event => {
        this.setState({
            showPassword: !this.state.showPassword,
        })
    }

    handleModalShow=event=>{
        this.setState({
            show: true,
        })
    }
    handleModalClose = event => {
        this.setState({
            show:false,
        })
    }
    NameValid() {
        if (this.state.name.length > 3) {
            return true;
        } else {
            return false;
        }
    }
    EmailValid() {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.email.match(mailformat)) {
            return true;
        }
        else {
            return false;
        }
    }
    PhoneValid() {
        var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (this.state.phone.match(phoneNum)) {
            return true;
        }
        else {
            return false;
        }
    }
    AgeValid() {
        if ((this.state.age >= 1 && this.state.age <= 100)) {
            return true;
        } else {
            return false;
        }
    }
    GenderValid() {
        if (this.state.gender == '') {
            return false;
        } else {
            return true;
        }
    }
    SkillValid() {
        if (!(this.state.isC && this.state.isCSharp && this.state.isCPlusPlus)) {
            return false;
        } else {
            return true;
        }
    }
    PasswordValid() {
        if (this.state.password.length >= 6 && this.state.password == this.state.password2) {
            return true;
        }
        else {
            return false;
        }
    }
    GenderValid() {
        if (this.state.gender != '') {
            return true;
        } else {
            return false;
        }
    }
    SkillValid() {
        console.log(this.state.isCSharp);
        console.log(this.state.isC);
        console.log(this.state.isCPlusPlus);
        if ((this.state.isC || this.state.isCSharp || this.state.isCPlusPlus)) {
            return true;
        } else {
            return false;
        }
    }
    AllCheck() {
        if (this.NameValid() && this.EmailValid() && this.AgeValid() && this.PhoneValid() && this.GenderValid && this.SkillValid && this.PasswordValid() && this.GenderValid() && this.SkillValid()) {
            return true;
        } else {
            return false;
        }
    }
    submit() {
        if (this.AllCheck()) {
           //this.handleModalShow()
           alert('All fields are valid')
        }
    }

    handleReset = () => {
        this.setState({
            name: '',
            email: '',
            phone: '',
            gender: '',
            age: '',
            password: '',
            password2: '',
            isCSharp: false,
            isC: false,
            isCPlusPlus: false,
            showPassword: false,
        });

    }
   

    render() {

        return (
            <div>
            <Card className="mb-4">
               
                <Col>
                    <div className="ml-2">

                        <h1 className="ml-2 mr-2 mt-4 mb-2">Basic Details Form</h1>
                        
                        <hr className="ml-2 mr-2" />
                        
                        <form className="form mb-3 mt-4">
                            <div
                                style={
                                    {
                                        border: '0.4px solid #C9CCD5',
                                        borderRadius: '5px',

                                    }
                                }
                                className="ml-3 mr-3 mb-3"
                            >
                                <Row className="ml-1">
                                    <label className="textsize">Enter Fullname*:</label>
                                </Row>

                                <Row className="ml-0 mb-0">
                                    <Col xs="11">
                                        <div className="form-group">
                                            <input
                                                className="no-border"
                                                type="text"
                                                hint="Full Name*"
                                                name="name"
                                                value={this.state.name}
                                                onChange={this.handleNameChange}
                                            />
                                        </div>
                                    </Col>
                                    {
                                        this.state.name == '' ?
                                            <Col xs="1"></Col>
                                            : this.state.name.length > 3 ? < Col xs="1"><i class="fas fa-check blackiconcolor"></i></Col>
                                                : <Col xs="1"><i class="fas fa-times rediconcolor"></i></Col>
                                    }
                                </Row>


                            </div>
                            <div
                                style={
                                    {
                                        border: '0.4px solid #C9CCD5',
                                        borderRadius: '5px',

                                    }
                                }
                                className="ml-3 mr-3 mb-3"
                            >
                                <Row className="ml-1">
                                    <label className="textsize"> Enter Email Address*:</label>
                                </Row>

                                <Row className="ml-0 mb-0">
                                    <Col xs="11">
                                        <div className="form-group">
                                            <input
                                                className="no-border"
                                                type="email"
                                                hint="Email Address*"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleEmailChange}
                                            />
                                        </div>
                                    </Col>
                                    {
                                        this.state.email == '' ?
                                            <Col xs="1"></Col>
                                            :
                                            this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ?
                                                <Col xs="1"><i class="fas fa-check blackiconcolor" ></i></Col>
                                                : <Col xs="1"><i class="fas fa-times rediconcolor"></i></Col>

                                    }
                                </Row>


                            </div>
                            <div
                                style={
                                    {
                                        border: '0.4px solid #C9CCD5',
                                        borderRadius: '5px',

                                    }
                                }
                                className="ml-3 mr-3 mb-3"
                            >
                                <Row className="ml-1">
                                    <label className="textsize"> Enter Phone number*:</label>
                                </Row>

                                <Row className="ml-0 mb-0">
                                    <Col xs="11">
                                        <div className="form-group">
                                            <input
                                                className="no-border"
                                                type="number"
                                              
                                                name="phone"
                                                value={this.state.phone}
                                                onChange={this.handlePhoneChange}
                                            />
                                        </div>
                                    </Col>
                                    {
                                        this.state.phone == '' ?
                                            <Col xs="1"></Col>
                                            :
                                            this.state.phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) ?
                                                <Col xs="1"><i class="fas fa-check blackiconcolor" ></i></Col>
                                                : <Col xs="1"><i class="fas fa-times rediconcolor"></i></Col>

                                    }
                                </Row>


                            </div>
                            
                            <div
                                style={
                                    {
                                        border: '0.4px solid #C9CCD5',
                                        borderRadius: '5px',

                                    }
                                }
                                className="ml-3 mr-3 mb-3"
                            >
                                <Row className="ml-1">
                                    <label className="textsize"> Enter age*:</label>
                                </Row>

                                <Row className="ml-0 mb-0">
                                    <Col xs="11">
                                        <div className="form-group">
                                            <input
                                                className="no-border"
                                                type="number"
                                                max="100"
                                                min="0"
                                                hint="Enter age*"
                                                name="age"
                                                value={this.state.age}
                                                onChange={this.handleAgeChange}
                                            />
                                        </div>
                                    </Col>
                                    {
                                        this.state.age == '' ?
                                            <Col xs="1"></Col>
                                            :
                                            (this.state.age >= 1 && this.state.age <= 100) ?
                                                <Col xs="1"><i class="fas fa-check blackiconcolor" ></i></Col>
                                                : <Col xs="1"><i class="fas fa-times rediconcolor"></i></Col>
                                    }
                                </Row>


                            </div>
                            <div
                                style={
                                    {
                                        border: '0.4px solid #C9CCD5',
                                        borderRadius: '5px',

                                    }
                                }
                                className="ml-3 mr-3 mb-3"
                            >
                                <Row className="ml-1">
                                    <label className="textsize"> Enter Password*:</label>
                                </Row>

                                <Row className="ml-0 mb-0">
                                    <Col xs="10">
                                        <div className="form-group">
                                            <input
                                                className="no-border"
                                                type={this.state.showPassword ? "text" : "password"}
                                                hint="Password*"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.handlePasswordChange}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs="1">
                                        {this.state.showPassword ?
                                            <i class="fas fa-eye" style={{ cursor: "pointer" }} onClick={this.handlePasswordShow}></i>
                                            : < i class="fas fa-eye-slash" style={{ cursor: "pointer" }} onClick={this.handlePasswordShow}></i>}
                                    </Col>
                                    {
                                        this.state.password == '' ?
                                            <Col xs="1"></Col>
                                            :
                                            (this.state.password.length >= 6) ?
                                                <Col xs="1"><i class="fas fa-check blackiconcolor" ></i></Col>
                                                : <Col xs="1"><i class="fas fa-times rediconcolor"></i></Col>
                                    }
                                </Row>


                            </div>
                            
                            <div
                                style={
                                    {
                                        border: '0.4px solid #C9CCD5',
                                        borderRadius: '5px',

                                    }
                                }
                                className="ml-3 mr-3 mb-3"
                            >
                                <Row className="ml-1">
                                    <label className="textsize"> Confirm Password*:</label>
                                </Row>

                                <Row className="ml-0 mb-0">
                                    <Col xs="11">
                                        <div className="form-group">
                                            <input
                                                className="no-border"
                                                type={this.state.showPassword ? "text" : "password"}
                                                hint="Confirm Password*"
                                                name="password2"
                                                value={this.state.password2}
                                                onChange={this.handlePssword2Change}
                                            />
                                        </div>
                                    </Col>
                                    
                                    {
                                        this.state.password2 == '' ?
                                            <Col xs="1"></Col>
                                            :
                                            (this.state.password2.length >= 6 && this.state.password == this.state.password2) ?
                                                <Col xs="1"><i class="fas fa-check blackiconcolor" ></i></Col>
                                                : <Col xs="1"><i class="fas fa-times rediconcolor"></i></Col>
                                    }
                                </Row>


                            </div>
                            <div
                                style={
                                    {
                                        border: '0.4px solid #C9CCD5',
                                        borderRadius: '5px',

                                    }
                                }
                                className="ml-3 mr-3 mb-3"
                                >
                                <Row className="ml-1">
                                    <label className="textsize"> Select Gender*:</label>
                                </Row>

                                <Row className="ml-0 mb-0">
                                    <Col xs="11">
                                        <div className="form-group">
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="Male"
                                                    checked={this.state.gender === "Male"}
                                                    onChange={this.handleGenderChange} />
                                                <label className="ml-2">Male</label>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    value="Female"
                                                    checked={this.state.gender === "Female"}
                                                    onChange={this.handleGenderChange} />
                                                <span className="ml-2">Female</span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    value="Others"
                                                    checked={this.state.gender === "Others"}
                                                    onChange={this.handleGenderChange} />
                                                <span className="ml-2">Others</span>
                                            </label>
                                        </div>
                                    </Col>
                                    {
                                        this.state.gender == '' ?
                                            <Col xs="1"></Col>
                                            :
                                            
                                            <Col xs="1"><i class="fas fa-check blackiconcolor" ></i></Col>
                                                
                                    }
                                </Row>


                            </div>

                            <div
                                style={
                                    {
                                        border: '0.4px solid #C9CCD5',
                                        borderRadius: '5px',

                                    }
                                }
                                className="ml-3 mr-3 mb-3"
                            >
                                <Row className="ml-1">
                                    <label className="textsize"> Select your skills*:</label>
                                </Row>

                                <Row className="ml-0 mb-0">
                                    <Col xs="11">
                                        <div className="form-group">
                                            <label>
                                                    <input type="checkbox"
                                                        checked={this.state.isCSharp}
                                                        defaultChecked={this.state.isCSharp}
                                                        onChange={this.handleCsharpChange}
                                                       
                                                />
                                                <span className="ml-2">C# language</span>
                                            </label>
                                            <label>
                                                <input type="checkbox"
                                                    defaultChecked={this.state.isC}
                                                    onChange={this.handleCChange}
                                                    checked={this.state.isC}
                                                />
                                                <span className="ml-2">C language</span>
                                            </label>
                                            <label>
                                                <input type="checkbox"
                                                    defaultChecked={this.state.isCPlusPlus}
                                                    onChange={this.handleCPlusPlusChange}
                                                        checked={this.state.isCPlusPlus}
                                                />
                                                <span className="ml-2">C++ language</span>
                                            </label>
                                        </div>
                                    </Col>
                                    {
                                        !this.SkillValid() ?
                                            <Col xs="1"></Col>
                                            :

                                            <Col xs="1"><i class="fas fa-check blackiconcolor" ></i></Col>

                                    }
                                </Row>


                            </div>
                            <Row className="ml-2 mr-2">
                                <Col xs="8">
                                        <div style={{
                                            textAlign: "center"
                                        }} className={this.AllCheck() ? "button1 mt-3 mr-2" : "button2 mt-3"} disabled={this.AllCheck() ? false : true} onClick={() => this.submit()}>
                                            <div className="p-3">Register</div>
                                    </div>
                                </Col>
                                <Col xs="4" className="mt-3">
                                   
                                        <div 
                                            style={{
                                                textAlign: "center"
                                            }} 
                                            className="resetbutton" onClick={this.handleReset}>
                                            <div className="p-3"> Reset All</div>
                                    </div>
                                    
                                </Col>
                               
                                
                            </Row>
                            


                        </form>

                    </div>
                </Col>
                </Card>
                </div>
        );
    }
}
