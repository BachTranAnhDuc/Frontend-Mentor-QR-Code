import React, { FC } from 'react';

import qrImage from './asset/images/image-qr-code.png';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <section className="bg-gray-light h-screen grid justify-items-center items-center">
      <div className="bg-white h-[30rem] w-80 rounded-xl shadow-md shadow-grayish-blue p-4 grid justify-items-center">
        <img src={qrImage} alt="qr-code" className="rounded-xl" />
        <div className="grid justify-items-center items-center">
          <h1 className="font-bold text-lg text-center text-blue-dark">
            Improve your front-end skills by building projects
          </h1>
          <p className="font-normal text-base text-grayish-blue text-center">
            Scan the QR code to visit Fronted Mentor and take your coding
            skillss to the next level
          </p>
        </div>
      </div>
    </section>
  );
};

export default App;
