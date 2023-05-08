
import React from 'react';
import { PieChart, Pie } from 'recharts';



const Piechart = (amap) => {

  
    const data = amap.amap
    const datain= amap.amap
    


    return (
        <PieChart width={700} height={700} className='pie'>

            <Pie
                data={data} dataKey="ttime" nameKey="key" label outerRadius={120} fill="black" />
            <Pie
                data={datain} dataKey="ttime" nameKey="key"  outerRadius={120} fill="rgb(140, 241, 32)" />
        </PieChart>
    );
}

export default Piechart;