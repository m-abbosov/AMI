import React from 'react'
import { useState } from 'react'

const useShowComponent = () => {

 const [showComponent, setShowComponent] = useState(false)

 // Return the state and its setter function
 return [showComponent, setShowComponent]

}

export default useShowComponent
