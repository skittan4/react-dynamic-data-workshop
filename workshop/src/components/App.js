import React from "react";
import { getUserData } from "../utils/getUserData";
import UserHeader from "./UserHeader"
import RepoList from "./RepoList"
function App() {
  
const[userData,setUserData]=React.useState(null); 
const[repoArr,setRepoArr]=React.useState([]);
 const arr = [{name:"repo1",desc:"rep1 desc",favorite:true },{name:"repo2",desc:"rep2 desc",favorite:true },{name:"repo3",desc:"rep3 desc",favorite:false },{name:"repo4",desc:"rep4 desc",favorite:true }]

React.useEffect(()=> { 
const username ="skittan4";

getUserData(`https://api.github.com/users/${username}`).then(Data=>
  {
   
    getUserData(Data.repos_url).then(d=>{setRepoArr(d)}) 
    setUserData(Data)
})

},[])
if(userData!=null){
  const { avatar_url, html_url, login, followers, repos_url } = userData;
  return <div>
    <UserHeader imgSrc={userData!=null?avatar_url:""} userName={userData!=null?login:""} followersCount={followers} userUrl={html_url}></UserHeader>
    <RepoList repoArr={repoArr}></RepoList>
    </div>
}else{
  return <h3>...Loading</h3>;
}
}

export default App;
