import { Navigate } from "react-router";

const LoginForm =()=>{
  const initialUser={
    username:"",
    password:"",
  }

  const [userData, setUserData] = useState(initialUser);

  const changeUserData =(event) =>{
    setUserData({
      ...userData,
      [event.terget.id]: event.target.value,
    })
  }

  const onSubit =(event) =>{
    event.preventDefault;
    Navigate(/list);

  }

  return(
        <form>
            <div class="form-group">
              <label class="text-muted" for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/> 
            <small id="emailHelp" class="form-text text-muted">We don't share email with anyone</small>
            </div>
            <div class="form-group"><label class="text-muted" for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/> 
            <small id="passwordHelp" class="form-text text-muted">your password is saved in encrypted form</small>
            </div>
            <div class="form-group">
            <div class="form-check">
              <input type="checkbox" class="form-check-input"/>
              <label class="form-check-label">Check me out</label>
              </div>
            </div> 
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
  )
}