import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import Main from '../../components/Main/Main';

function ProfilPage() {
  const [userId, setUserId] = useState(12);
  const [mockedData, setMockedData] = useState(true);
  return (
    <div className="profilPage">
      <Header
        userId={userId}
        setUserId={setUserId}
        mockedData={mockedData}
        setMockedData={setMockedData}
      />
      <Aside />
      <Main userId={userId} mockedData={mockedData} />
    </div>
  );
}

export default ProfilPage;
