import React from "react";
import "./Page404.scss";

import { Button, Col, Row, Space, Typography } from "antd";
import Logo from "../../assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { Link } from "react-router-dom";

const Page404 = () => {
  const { Text } = Typography;
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center fullscreen-background bg-slate-900 p-2 relative">
        <div className="absolute top-6 left-6">
          <img src={Logo} className="w-[150px] h-auto" alt="IPBaseT" />
        </div>
        <Row>
          <Col span={24} className="text-center">
            <div className="mb-5">
              <Space className="sm:flex block justify-center items-center">
                <Text className="md:text-5xl text-3xl font-extrabold">
                  Oops!
                </Text>
                <div className="text-primary md:text-5xl text-3xl font-extrabold">
                  Page Not Found
                </div>
              </Space>
            </div>
            <Row className="flex justify-center items-center">
              <Col xs={{ span: 24 }} md={{ span: 17 }}>
                <div className="mx-auto mb-3">
                  <Text className="text-lg font-normal">
                    {`Sorry! It seems like you've taken a wrong turn. The page you're looking for is playing hide and seek.`}
                  </Text>
                </div>

                <Row
                  gutter={[0, 20]}
                  justify={"center"}
                  align={"middle"}
                  className="my-10"
                >
                  <Col span={8}>
                    <Button
                      type="primary capitalize"
                      size="large"
                      block
                      onClick={() => navigate(-1)}
                    >
                      Go Back
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* <div className="absolute bottom-10 left-0 right-0">
          <div className="flex justify-center items-center">
            <Space>
              <Link
                to="/"
                className="underline underline-offset-4 hover:text-blue-700"
              >
                Term and Conditions
              </Link>
              <div>|</div>
              <Link
                to="/"
                className="underline underline-offset-4 hover:text-blue-700"
              >
                Privacy Policy
              </Link>
            </Space>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Page404;
