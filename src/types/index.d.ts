import { NextImage } from 'next/image';


export type TCommonProps = {
    title?: string;
    name?: string;
    icon?:NextImage;
  };
  
  export type TExperience = {
    companyName: string;
    date: string;
    points: string[];
    inView:boolean=false;
  } & Required<Omit<TCommonProps, "name">>;