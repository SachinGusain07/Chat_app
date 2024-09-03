import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className ='flex'>
        <div clasName='form-control'>
            <label for='gender' className ={'label gap-2 cursor-pointer'}>
                <span className ='label-text'>Male</span>
                <input name ='gender' type ='checkbox' className ='checkbox border-slate-'/>
            </label>
        </div>
        <div clasName='form-control'>
            <label className ={'label gap-2 cursor-pointer'}>
                <span className ='label-text'>Female</span>
                <input  name ='gender'type ='checkbox' className ='checkbox border-slate-'/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox
