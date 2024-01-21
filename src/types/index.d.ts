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
  } & Required<Omit<TCommonProps, "name">>;

  export type TTechnology = Required<Omit<TCommonProps, "title">>;
