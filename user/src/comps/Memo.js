import React from 'react'
import moment from 'moment'
import {useDispatch} from 'react-redux'

import {deleteMemo} from '../action/memoAct'

export const Memo =({memo, setCurrentId})=>{
	const dispatch = useDispatch()
  return(
     <div className="memo">
       <h1>{memo.title}</h1>
       <p>{memo.message}</p>
       <p>{memo.creator}</p>
       <p>{moment(memo.createdAt).fromNow()}</p>
    <button onClick={()=>dispatch(deleteMemo(memo._id))}>delete</button>
    <button onClick={()=> setCurrentId(memo._id)}>edit</button>
     </div>

  	)
}