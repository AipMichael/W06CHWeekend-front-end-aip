import { userLogoutAction } from "../../redux/actions/actionCreators";

const Logout=()=>{
  const navigate = useNavigate();
  const dispatch=useDispatch();
  dispatch(userLogoutAction())
  localStorage.removeItem("karenBot");



  return(

  )
}