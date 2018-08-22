import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './contactpage.css';

class ContactPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            city: '',
            date: '',
            colors: '',
            additional: ''
        }
    }

    handleSubmit = () => {
        if (!this.state.name && !this.state.email) {
            alert('Name and Email fields are required.')
        }
        else if (!this.state.name && this.state.email) {
            alert('Name field is required.')
        }
        else if (this.state.name && !this.state.email) {
            alert('Email field is required')
        } else {
            axios.post('/api/sendMail', {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                city: this.state.city,
                date: this.state.date,
                colors: this.state.colors,
                additional: this.state.additional
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className='contact-page'>
                <Header />
                <h2>Contact</h2>
                <div className='contact-flex-box'>
                    <h4>Name*:</h4>
                    <input className='contact-input' onChange={e => this.setState({ name: e.target.value })} />
                    <h4>Email*:</h4>
                    <input className='contact-input' onChange={e => this.setState({ email: e.target.value })} />
                    <h4>Phone:</h4>
                    <input className='contact-input' onChange={e => this.setState({ phone: e.target.value })} />
                    <h4>City of Event:</h4>
                    <input className='contact-input' onChange={e => this.setState({ city: e.target.value })} />
                    <h4>Date of Event:</h4>
                    <input className='contact-input' onChange={e => this.setState({ date: e.target.value })} type='date' />
                    <h4>Event Colors:</h4>
                    <input className='contact-input' onChange={e => this.setState({ colors: e.target.value })} />
                </div>
                <h4>Additional Info/Questions:</h4>
                <textarea className='contact-textarea' rows={8} onChange={e => this.setState({ additional: e.target.value })} />
                <br />
                <br />
                <button type='' className='' onClick={() => this.handleSubmit()}>Submit</button>
                <br />
                <br />
                <div style={{ height: '88px', background: '#C0FDFB' }} />
                <Footer />
            </div>
        )
    }
}

export default ContactPage;