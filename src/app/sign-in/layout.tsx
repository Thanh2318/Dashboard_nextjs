"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import { Box, Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const { Content, Sider } = Layout;
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>jflerkj</nav>
 
      {children}
    </>
  )
}
