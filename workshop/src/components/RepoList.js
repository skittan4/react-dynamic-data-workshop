import React from "react"

function RepoList(props){


    return(<div>

{props.repoArr.map(x=>
 <div>
    <a href="#">{x.name} </a>
    <p>{x.full_name}</p>
    <img src=""></img>
 </div>)
}
</div>)

    






}

export default RepoList
