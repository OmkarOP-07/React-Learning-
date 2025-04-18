import { motion } from "framer-motion";
import { useState } from "react";
import "./FlipCard.css"
export default function FlipCard(props) {

  return (
   <div className="card">
    <h1>Hello {props.header}, </h1>
    <div className="desc">{props.desc}</div>
   </div>
  );
}
