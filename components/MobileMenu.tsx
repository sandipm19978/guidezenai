"use client";
import {useState} from "react";
import Link from "next/link";
import {Menu,X} from "lucide-react";
export default function MobileMenu(){const[open,setOpen]=useState(false);return <div className="mobile-menu"><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>{open&&<div className="mobile-panel"><a href="#features" onClick={()=>setOpen(false)}>Features</a><a href="#app" onClick={()=>setOpen(false)}>App</a><a href="#how" onClick={()=>setOpen(false)}>How it works</a><a href="#technology" onClick={()=>setOpen(false)}>Technology</a><Link href="/login">Sign in</Link></div>}</div>}