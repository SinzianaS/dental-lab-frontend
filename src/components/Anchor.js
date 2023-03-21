import React from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

export default function MyAnchor() {
  return (
    <Anchor mode="horizontal">
      <Link href="#dentists" title="Dentists" />
      <Link href="#dental-technicians" title="Dental Technicians" />
      <Link href="#patients" title="Patients" />
      <Link href="#dental-works" title="Dental Works" />
      <Link href="#authenticate" title="Authenticate" />
    </Anchor>
  );
}
