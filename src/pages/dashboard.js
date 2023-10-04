import * as React from 'react';
import Dashboard from '@/components/dashboard/Dashboard';
import Head from 'next/head';


export default function Page() {
  return (    
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Dashboard />
      </div>    
  );
}