import React from 'react'
// or import {Audio} from 'react-loader-spinner';
import * as Loader from "react-loader-spinner";
export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Loader.Audio color="green" height={400} width={80} />
  </div>
);


