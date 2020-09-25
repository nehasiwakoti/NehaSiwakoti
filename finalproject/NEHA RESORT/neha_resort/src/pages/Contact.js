
/*import React from 'react';
import axios from 'axios';


class Contact extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3000", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }
  resetForm(){
    
    this.setState({name: '', email: '', message: ''})
 }
 
 render() {
   return(
     <div className="container">
       
       
     <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
     <div className="form-group">
         <label htmlFor="name">Name</label>
         <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
     </div>
     <div className="form-group">
         <label htmlFor="exampleInputEmail1">Email address</label>
         <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
     </div>
     <div className="form-group">
         <label htmlFor="message">Message</label>
         <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
     </div>
     <button type="submit" className=" btn-primary">Submit</button>
     </form>
     </div>
      
       
    
    
     
     
   );
 }

 onNameChange(event) {
   this.setState({name: event.target.value})
 }

 onEmailChange(event) {
   this.setState({email: event.target.value})
 }

 onMessageChange(event) {
   this.setState({message: event.target.value})
 }
}

export default Contact;
*/



import React,{Component} from 'react';
import axios from 'axios';
import iziToast from 'izitoast';


class Contact extends Component {
  constructor(props) {
      super(props);
      this.state = {
          formData: {
              firstName: "",
              lastName:"",
              email: "",
              phoneNumber: "",
              message: "",
          },
        }
        
      };
      fetchData = () => {
        axios({
          method: "POST",
          url: "http://localhost:1234/customers",
          data: {
            firstName: this.state.formData.firstName,
            lastName: this.state.formData.lastName,
            phoneNumber: this.state.formData.phoneNumber,
            email: this.state.formData.email,
            message: this.state.formData.message,
          },
        })
        .then((res) => {
            console.log(res);
        }).catch((err) => {
        console.log(err);
        });
      
    }
    

    handleChange = (event) => {
      this.setState({
          formData : {
              ...this.state.formData,
              [event.target.name]:event.target.value
          }
      })
      console.log(this.state.formData)
  }


  
handleSubmit = (event) => {
  event.preventDefault();
  const { firstName, lastName, email,phoneNumber,message } = this.state.formData;
  if(!firstName ||!lastName|| !email || !phoneNumber || !message){
      let fieldName;
      if (!firstName) {
          fieldName = "Name";
      
    }    else if (!lastName) {
       fieldName = "lastName}";
     } else if (!email) {
          fieldName = "Email";
      } else if (!phoneNumber) {
          fieldName = "Phonenumber";
      } else {
          fieldName = "Message"
      }
      
      iziToast.show({
          title: 'Form wasnot submitted',
          message: ` please fill up the ${fieldName} field`,
      });
  } else {
      this.setState({
          isLoading: true
      })
      setTimeout(()=> {
          this.setState({
              isLoading: false
          })
          iziToast.show({
              message: ` Thank you for the enquiry`,
          });
        
          this.props.history.push('/customers');
      }, 4000)
  }  
}

  
  render(){
    //const { firstName,lastName, email,phoneNumber,message } = this.state.formData;
    console.log(this.state.formData)
    return(
<div className="container contact">
    <div className="row">
        <div className="col-md-8 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4">
                <h1 className="text-center bg-dark text-white display-4 d-inline-block">Contact us</h1>
                <div className="form-group my-5" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg"  name="firstName"value={this.state.formData.firstName}  onChange={this.handleChange} placeholder="firstName" required />
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg" name="lastName" value={this.state.formData.lastName} onChange={this.handleChange} placeholder="lastName" required />
                        </div>
                    </div>
                </div>
                <div className="form-group mb-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="email" className="form-control-lg"  name="email" onChange={this.handleChange} value={this.state.formData.email} placeholder="email" required />
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="tel" className="form-control-lg"  name="phoneNumber" onChange={this.handleChange} value={this.state.formData.phoneNumber} placeholder="phoneNumber" required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <textarea className="form-control" row="20" name="message" onChange={this.handleChange} value={this.state.formData.message} placeholder=" message" required></textarea>
                    </div>
                </div>
                <div className="mt-5 col-md-6 col-12 mx-auto">
                    <button className="btn btn-outline-dark btn-lg btn-block"  onClick={this.fetchData}>Send Message</button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
  }
export default Contact;
