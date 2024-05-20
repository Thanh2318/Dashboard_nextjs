import Image from "next/image";
import React from "react";

import { Flex, Typography } from "antd";

const { Title } = Typography;

type LogoProps = {
    isExpand?: boolean;
  };

const Logo = (props: LogoProps) => {
  return (
    <Flex align="center" gap={10}>
      <Image
        src="/image/logo/logo.svg"
        width={56}
        height={56}
        alt="Picture of the author"
      />
      {props.isExpand && (
      <Title style={{ margin: 0, color: "#2D3748" }} level={3}>
        Dashboard
      </Title>)}
      
    </Flex>
  );
};

export default Logo;
