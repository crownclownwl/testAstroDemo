/**
 * @Description 
 * @Author 王猛龙（王磊）
 * @Date 2023-02-12 10:14:25
 * @LastEditors 王猛龙（王磊）
 * @LastEditTime 2023-02-14 15:59:08
 * @Email xljhs1015617751@163.com
 * @Phone 166 4357 5302
 */ 
import { memo, useEffect, useState } from "react";
import { Image, Col, Row, Spin, Typography, Popover} from 'antd';
import './index.less';
import myWechat from '@assets/myWechat.png';

const { Paragraph, Link } = Typography;

const SelfIntroduction = () => {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="selfIntroductionContianer">
      <Spin spinning={isLoading}>
        <Row className="selfIntroductionContianer-userInfo">
          <Col span={10} className="selfIntroductionContianer-userInfo__left"><Image src="/assets/my.jpg" /></Col>
          <Col span={14}>
            <div className="selfIntroductionContianer-userInfo-right">
              <Typography>
                <Paragraph>
                  <ul className="selfIntroductionContianer-userInfo-right__ul">
                    <li>
                      <span>工作方向：Web前端工程师</span>
                    </li>
                    <li>
                      <span>学　　历：大专</span>
                    </li>
                    <li>
                      <span>联系电话：+86 166 4357 5302</span>
                    </li>
                    <li>
                      <Popover content={<Image width={200} src={myWechat}/>} 
                        title="wechat">
                        <span>wechat：wl1015617751</span>
                      </Popover>
                    </li>
                    <li>
                      邮　　箱：
                      <Link href="mailto:xljhs101561751@163.com">xljhs101561751@163.com</Link>
                    </li>
                    <li>
                      工作年限：8年
                    </li>
                    <li>
                      <Link href="/assets/docs/resume.pdf">{'>>>'} resume PDF Download</Link>
                    </li>
                  </ul>
                </Paragraph>
              </Typography>
            </div>
          </Col>
        </Row>
      </Spin>
    </div>
  );
}

export default memo(SelfIntroduction);