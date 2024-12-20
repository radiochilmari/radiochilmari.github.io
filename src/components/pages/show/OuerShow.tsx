import RadioChilmariFacebookPage from '@/components/ui/FacebookPage';
import HoursCard from '@/components/ui/HoursCard';
import RdrsProgram from '@/components/ui/RdrsProgram';
import React from 'react';

const OuerShow = () => {
  return (
    <div className="mt-20">
      {/* Header Section */}
      <div className=" mt-30 py-10">
  
        <RadioChilmariFacebookPage pageHref="https://www.facebook.com/radiochilmari" />
      </div>
      
      {/* Main Content Section */}
      <main>
        <HoursCard />
        <RdrsProgram />
      </main>
    </div>
  );
};

export default OuerShow;
