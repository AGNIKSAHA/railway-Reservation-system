// import Form from "./component/Form";

const MidPart = () => {
  // const [contact,setContact]=userState({
  //   from_station:"",
  //   to_station:"",
  //   journey_date:"",
  //   classes:""
  // });
  
  // const handleInput=(e)=>{
  //   const name=e.target.name;
  //   const value=e.target.value;

  //   setContact((prev)=>({
  //     ...prev,
  //     [name]:value,
  //   }));
  // };

  return (
    
  
  <div class="background">
    
    
    <div class="center-div">
      <h2>Railway Ticket Booking</h2>
      <form action="#" method="post">

        
        <div class="form-group">
          <label for="from-station">From:</label>
          <input type="text" id="from-station"  name="from-station" placeholder="Starting station" required/>
        </div>

        <div class="form-group">
          <label for="to-station">To:</label>
          <input type="text" id="to-station" name="to-station"  placeholder="Destination station" required/>
        </div>

        <div class="form-group">
          <label for="journey-date">Journey Date:</label>
          <input type="date" id="journey-date"   name="journey-date" required/>
        </div>

        <div class="form-group">
          <label for="class">Class:</label>
          <select id="class" name="class"  >
            <option value="sleeper">Sleeper</option>
            <option value="3AC">3rd AC</option>
            <option value="2AC">2nd AC</option>
            <option value="1AC">1st AC</option>
          </select>
        </div>

        {/* \
        <div class="form-group">
          <label for="passenger-name">Passenger Name:</label>
          <input type="text" id="passenger-name" name="passenger-name" placeholder="Full name" required/>
        </div>

        <div class="form-group">
          <label for="age">Age:</label>
          <input type="number" id="age" name="age" min="1" max="100" required/>
        </div>

        <div class="form-group">
          <label>Gender:</label>
          <label><input type="radio" name="gender" value="male" required/> Male</label>
          <label><input type="radio" name="gender" value="female" required/> Female</label>
          <label><input type="radio" name="gender" value="other" required/> Other</label>
        </div>

        
        <div class="form-group">
          <label for="contact">Contact Number:</label>
          <input type="tel" id="contact" name="contact" placeholder="Contact number" required/>
        </div>

        <div class="form-group">
          <label for="email">Email Address:</label>
          <input type="email" id="email" name="email" placeholder="Email address" required/>
        </div> */}

        
        {/* <div class="form-group">
          <label for="payment">Payment Method:</label>
          <select id="payment" name="payment">
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="net-banking">Net Banking</option>
            <option value="upi">UPI</option>
          </select>
        </div> */}

        
        <button type="submit" class="submit-button">Book Ticket</button>
      </form>
    </div>
    
  </div>
  );
};
export default MidPart;
