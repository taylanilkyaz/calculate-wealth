
import { createContext } from "react";

export default createContext(null);


// //Provider, Consumer

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "DELETE_USER":
//             return {
//                 ...state,
//                 users: state.users.filter(user => action.payload !== user._id)
//             }

//         case "ADD_USER":
//             return {
//                 ...state,
//                 users: [...state.users, action.payload]
//             }

//         case "UPDATE_USER":
//             return {
//                 ...state,
//                 users: state.users.map(user => action.payload._id === user._id ? action.payload : user)
//             }
//         default:
//             return state
//     }
// }

// export class UserProvider extends Component {

//     state = {
//         users: [],
//         dispatch: action => {
//             this.setState(state => reducer(state, action))
//         }
//     }
//     componentDidMount = async () => {
//         const response = await axios.get("http://localhost:3001/api/v1/users");
//         this.setState({
//             users: response.data
//         })
//     }


//     render() {
//         return (
//             <UserContext.Provider value={this.state}>
//                 {this.props.children}
//             </UserContext.Provider>
//         )
//     }
// }

// const UserConsumer = UserContext.Consumer;