import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const data = [
    {
      type: 'Ações',
      value: 27,
    },
    {
      type: 'Fundos Imobiliarios',
      value: 40,
    },
    {
      type: 'Renda Fixa',
      value: 18,
    },
    {
      type: 'Internacional',
      value: 15,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    theme: 'dark',
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v) => `${v}%`,
      },
    },
    label: {
      type: 'inner',
      offset: '-50%',
      autoRotate: false,
      style: {
        textAlign: 'center',
        fill: '#fff',
      },
      formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    },
    statistic: {
      title: {
        offsetY: -8,
        style: {
          color: '#fff',
        },
      },
      content: {
        style: {
          color: '#fff',
        },
        offsetY: -4,
      },
    },
    pieStyle: {
      lineWidth: 0,
    },
  };
  return <Pie {...config} />;
};

ReactDOM.render(<DemoPie />, document.getElementById('container'));
