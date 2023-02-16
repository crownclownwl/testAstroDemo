/**
 * @Description 
 * @Author 王猛龙（王磊）
 * @Date 2023-02-12 14:04:01
 * @LastEditors 王猛龙（王磊）
 * @LastEditTime 2023-02-12 17:20:27
 * @Email xljhs1015617751@163.com
 * @Phone 166 4357 5302
 */ 
import { memo } from 'react';
import { Image, Steps } from 'antd';

import honorImg1 from '@assets/honorWall/honor1.jpg';
import honorImg2 from '@assets/honorWall/honor2.jpg';
import honorImg3 from '@assets/honorWall/honor3.jpg';
import honorImg4 from '@assets/honorWall/honor4.jpg';
import honorImg5 from '@assets/honorWall/honor5.jpg';

const myHonors = [
  {
    title: '“吉大正元杯”三等奖证书',
    description: <div>
      <Image src={honorImg1}></Image>
    </div>,
  },
  {
    title: '第五届“蓝桥杯”全部软件大赛3等奖',
    description: <div>
      <Image src={honorImg2}></Image>
    </div>,
  },
  {
    title: '第五届“蓝桥杯”全部软件大赛3等奖（英文）',
    description: <div>
      <Image src={honorImg3}></Image>
    </div>,
  },
  {
    title: 'UCA桌面工程师',
    description: <div>
      <Image src={honorImg5}></Image>
    </div>,
  },
  {
    title: '信创应用人才',
    description: <div>
      <Image src={honorImg4}></Image>
    </div>,
  },
];

const HonorWall = () => {
  return (
    <div className='honorwall-contianer'>
      <Steps
        direction="vertical"
        items={myHonors}
      />
    </div>
  );
};

export default memo(HonorWall);