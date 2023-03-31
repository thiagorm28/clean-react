import { SignUp } from '@/presentation/pages'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={makeLogin}></Route>
        <Route path="/signup" Component={SignUp}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
